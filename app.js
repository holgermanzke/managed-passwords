const { get, set, unset } = require("./utils/cmds");
const { verifyHash, readMasterPassword } = require("./utils/crypto");
const userArgs = process.argv.slice(2);
const [cmd, key, value] = userArgs;
const readline = require("readline");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
readlineInterface._writeToOutput = function() {
  readlineInterface.output.write("");
};
readlineInterface.question("Please enter new master password:", password => {
  execute(password);
  readlineInterface.close();
});

async function execute(password) {
  const hash = readMasterPassword();

  if (!verifyHash(password, hash)) {
    throw new Error("Invalid master Password");
  }
  switch (cmd) {
    case "get":
      {
        const result = await get(key);
        console.log(result);
      }
      break;

    case "set":
      await set(key, value);
      break;

    case "unset":
      await unset(key);
      break;

    default:
      console.log("command not found");
  }
}
// execute();
