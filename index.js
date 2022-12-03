const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.post("/webhook", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send(JSON.stringify({ status: "OK" }));
});
app.listen(port, () => console.log(`start: port ${port}!`));
