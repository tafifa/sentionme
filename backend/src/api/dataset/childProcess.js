/* eslint-disable object-curly-spacing */
const { exec } = require('child_process');
const os = require('os');

const isWindows = os.platform() === 'win32';
const pythonCommand = isWindows ? 'python' : 'python3';

const script = `${pythonCommand} ./src/models/save.py`;

const pythonProcess = exec(script, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error calling Python script: ${error}`);
    return 'success';
  }
  // console.log(`Python script output: ${stdout}`);
  // console.error(`Python script error: ${stderr}`);
});

module.exports = { pythonProcess };
