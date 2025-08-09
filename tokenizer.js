module.exports = function tokenizer(jikiscript) {
  const tokens = [];
  for (const char of jikiscript) {
    if (char === "/") {
      // Handle comments
    } else if (char === '"') {
      // Handle strings
    } else if (/[a-z]/.test(char)) {
      // Handle names and keywords
    } else if (/[A-Z]/.test(char)) {
      // Handle classes
    } else if (/[0-9]/.test(char)) {
      // Handle numbers 
    } 
    // Handle other characters
  }
  return tokens;
};
