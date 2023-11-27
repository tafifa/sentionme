/* eslint-disable object-curly-spacing */
const { exec } = require('child_process');

const script = 'python ./src/models/save.py';

const pythonProcess = exec(script, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error calling Python script: ${error}`);
    return 'success';
  }
  // console.log(`Python script output: ${stdout}`);
  // console.error(`Python script error: ${stderr}`);
});

module.exports = { pythonProcess };
