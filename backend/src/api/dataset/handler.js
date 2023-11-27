/* eslint-disable object-curly-spacing */
const childProcess = require('./childProcess');

const postToDataset = async (req, res) => {
  try {
    // const { input } = req.body;
    // const result = await childProcess(input);
    const result = await childProcess;

    if (result === 'success') {
      res.status(200).json({
        message: 'Data saved to the dataset successfully',
      });
    } else {
      res.status(400).json({
        error: 'Failed to save data to the dataset',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { postToDataset };
