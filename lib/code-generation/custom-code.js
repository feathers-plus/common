
const { EOL } = require('os');

const newLine = EOL;
const code = {};

module.exports = {
  extractCustomCode,
  insertCustomCode
};

function extractCustomCode (src) {
  const len = src.length;

  let doingCustomCode = false;
  let codeLocation;
  let i = 0;

  while (i < len) {
    const line = src[i].trim();

    if (!doingCustomCode) {
      if (line.substr(0, 10) === '//!custom:') {
        codeLocation = line.substr(10).trim();
        code[codeLocation] = [];
        doingCustomCode = true;
      }
    } else {
      if (line.substr(0, 6) === '//!end') {
        doingCustomCode = false;
      } else {
        code[codeLocation].push(line);
      }
    }

    i += 1;
  }

  return code;
}

function insertCustomCode (codeLocation, defaultCode) {
  codeLocation = codeLocation.trim();

  if (codeLocation in code && code[codeLocation].length) {
    return [`//!custom: ${codeLocation}`].concat(code[codeLocation], '//!end').join(newLine);
  }
  if (defaultCode) {
    return [`//!location: ${codeLocation}`].concat('//!default', defaultCode, '//!end').join(newLine);
  }

  return `//!location: ${codeLocation}`;
}
