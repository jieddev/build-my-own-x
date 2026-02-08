const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startTerminal() {
  rl.question("$ ", (command) => {
    if (command.startsWith("echo ")){
      let string = command.slice(4, command.length);
      let trimmedString = string.trimStart();
      console.log(trimmedString);
      startTerminal();
    } 
    else if(command == "exit") {
      rl.close();
    } 
    else {
      console.log(`${command}: command not found`);
      startTerminal();
    }
  
  });

}

function removeStartingWhiteSpaces(command) {
  return command.trimStart();
  
}

startTerminal();
