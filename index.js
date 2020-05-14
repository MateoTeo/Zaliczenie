
const express = require("express");
const path = require("path");


const app = express();
const port = process.env.PORT || "8000";


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));



app.get("/norwegia", (req, res) => {res.render("norwegia", { title: "Home" });});
app.get("/", (req, res) => {res.render("norwegia", { title: "Home" });});
app.get("/wlochy", (req, res) => {res.render("wlochy", { title: "wlochy"});});
app.get("/austria", (req, res) => {res.render("austria", { title: "austria"});});
app.get("/koniec", (req, res) => {res.render("koniec", { title: "koniec"});});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });


  //npm run dev