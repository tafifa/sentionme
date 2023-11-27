/* eslint-disable object-curly-spacing */
const postInputHandler = (req, res) => {
  // Assuming you expect a JSON payload like { "input": "some_input" }
  const { input } = req.body;

  // Perform some processing on the input
  const result = input.toUpperCase();

  res.json({ result });
};

const getResultHandler = (req, res) => {
  // Assuming you want to retrieve a hardcoded result for testing
  const result = 'HardcodedResult';

  res.json({ result });
};

module.exports = { postInputHandler, getResultHandler };
