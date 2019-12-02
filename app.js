const { get, set, unset } = require("./utils/cmds");

const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: "meinNetz",
  facebook: "lassmichrein123",
  mac: "wordpass"
};

switch (cmd) {
  case "get":
    {
      const result = get(key);
      console.log(result);
    }
    break;

  case "set":
    console.log("set");
    set(key, value);
    break;

  case "unset":
    console.log("unset");
    unset(key);
    break;

  default:
    console.log("command not found");
}

console.log(passwords);
