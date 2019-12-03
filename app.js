const { get, set, unset } = require("./utils/cmds");
const { verifyHash, readMasterPassword } = require("./utils/crypto");
const userArgs = process.argv.slice(2);
const [cmd, key, value] = userArgs;
const { askForPassword, waitFor } = require("./utils/input");

async function execute() {
  const hash = readMasterPassword();
  const password = await askForPassword();

  await waitFor(2000);

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
execute();
