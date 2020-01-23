const port = 5000;

const server = require("./server.js");

server.listen(port, () =>
  console.log(`LIVE AT ${port}`)
);