const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nunjucks = require("nunjucks");

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser());

app.get("/:name", (req, res) => {

    res.render("home.html", { name: req.params.name });
});

app.get("/number/:num", (req, res) => {
    const num = Number(req.params.num);

    res.send(num + " is my favorite number too!");
});

app.get("/add", (req, res) => {
   const a = Number(req.query.a);
   const b = Number(req.query.b);

   res.send(String(a + b));
});


app.listen(3000, () => {
    console.log("listening on port 3000")
});