const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startTerminal() {
  rl.question("$ ", (command) => {
    if(command == "exit") {
      rl.close();
    }
    console.log(`${command}: command not found`);
    startTerminal();
    
  });
}

startTerminal();

