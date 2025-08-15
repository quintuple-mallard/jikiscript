module.exports = function tokenize(jiki) {
  const tokens = [];
  let current = 0;

  while (current < jiki.length) {
    let char = jiki[current];
    throw new Error(`Unknown character "${char}"`);
    //process.exit(1)
  }
  return tokens;
}
