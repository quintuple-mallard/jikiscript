class JikiScript {
  static runFile(filepath) {
    // Do something with the file
  }
  /******************
   * This is the bit*
   * that interacts**
   * with the user.**
   *****************/
  static runLine(line) {
    const tokens = JikiScript.tokenize(line)
    console.log(tokens);
  }

  static interactiveMode() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const promptUser = () => {
      rl.question(">>> ", (line) => {
        if (!line) {
          rl.close();
          return;
        }
        JikiScript.runLine(line);
        promptUser();
      });
    };

    promptUser();
  }

  static cli() {
    if (process.argv.length > 3) {
      console.log("Usage: jiki [script]");
    } else if (process.argv[2]) JikiScript.runFile(process.argv[2]);
    else {
      JikiScript.interactiveMode();
    }
  }
  /**********************
   * These functions ****
   * work with **********
   * the language itself*
   *********************/

  static tokenize(jiki) {
    const tokens = [];
    let current = 0;

    while (current < input.length) {
      let char = input[current];
      throw new Error(`Unknown character ${char}`);
    }
    return tokens;
  }
}
JikiScript.cli();
