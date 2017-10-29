const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.post("/tes", (req, res) => {
  return res.json(req.body.Hai);
});

app.get("/hello/:id/:apa", (req, res) => {
  return res.json({
    param: req.params.id,
    a: req.params.apa
  })
});

app.get("/hello", (req, res) => {
  return res.json({
    query: req.query.id
  })
});

app.listen(3000, () => {
  console.log("Server started");
});