function makeEnum(...args) {}
function runFile(filepath) {
  console.log(`path: ${filepath}`);
}
function runLine(line) {
  console.log(`line: ${line}`);
}
if (process.argv[3] === "file") {
  runFile(process.argv[2]);
} else {
  runLine(process.argv[2]);
}