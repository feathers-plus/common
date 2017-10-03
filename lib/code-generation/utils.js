
module.exports = {
  indent,
  onlyStrings
};

function indent (str, count, indentFirstLine = true) {
  if (!str) return str;

  const leader = ' '.repeat(count || 2);
  return str.split('\n').map((line, i) => `${i === 0 && !indentFirstLine ? '' : leader}${line}`).join('\n');
}

// Removes array elements such as null and undefined. Supports conditionally generated lines.
function onlyStrings (array) {
  return array.filter(str => typeof str === 'string');
}
