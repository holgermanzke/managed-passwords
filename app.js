const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: "meinNetz",
  facebook: "lassmichrein123",
  mac: "wordpass"
};

switch (cmd) {
  case "get":
    console.log(passwords[key]);
    break;

  case "set":
    console.log("set");
    passwords[key] = value;
    break;

  case "unset":
    console.log("unset");
    delete passwords[key];
    break;

  default:
    console.log("command not found");
}

console.log(passwords);
