const { get, set, unset } = require("./utils/cmds");

const [cmd, key, value] = process.argv.slice(2);

switch (cmd) {
  case "get":
    {
      const result = get(key);
      console.log(result);
    }
    break;

  case "set":
    set(key, value);
    break;

  case "unset":
    unset(key);
    break;

  default:
    console.log("command not found");
}
