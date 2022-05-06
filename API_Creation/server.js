const app = require("./index.js");

const connect = require("./configs/db.js");

app.listen(8080, async () => {
  try {
    await connect();
    console.log("listening on port 8080");
  } catch (err) {
    console.log(err);
  }
  // console.log("listening on port 5100");
});
