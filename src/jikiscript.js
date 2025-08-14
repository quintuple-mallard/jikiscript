class JikiScript {
  static runFile(filepath) {
    // Do something with the file
  }
  static runLine(line) {
    console.log(line)
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
}
JikiScript.cli();