const express = require("express");
const { get, unset } = require("./utils/cmds");
const app = express();
const port = 8081;

app.use(express.static("public"));

app.get("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;

  try {
    const result = await get(key);
    response.end(result);
  } catch (error) {
    response.status(400).end("Cannot read secret");
  }
});

app.post("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;
  const { value } = request.body;
  console.log(key, value);
  response.end();
});

app.delete("/api/secrets/:key", async (request, response) => {
  const { key } = request.params;
  await unset(key);
  response.end(`${key} wurde gelöscht`);
});

app.listen(port, () => {
  console.log(`Server ist running on http:localhost:${port}`);
});
