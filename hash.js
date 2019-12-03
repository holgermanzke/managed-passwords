const fs = require("fs");
const readline = require("readline");
const { hashPassword } = require("./utils/crypto");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInterface.question("Please enter new master password:", password => {
  // Add line break
  readlineInterface.output.write("\n");

  const hashedPassword = hashPassword(password);
  fs.writeFileSync(".password", hashedPassword);

  console.log("New password saved");
  readlineInterface.close();
});

// Override default output to hide password
readlineInterface._writeToOutput = function() {
  readlineInterface.output.write("");
};
