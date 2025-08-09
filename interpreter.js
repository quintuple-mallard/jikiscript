// An interpreter for JikiScript
const tokenizer = require('./tokenizer')
function interpreter(jikiscript) {
  // const tokens = tokenizer(jikiscript);
  console.log( jikiscript )
}

module.exports = interpreter
// Testing it
interpreter(
  "log 'Hello, World'"
)
