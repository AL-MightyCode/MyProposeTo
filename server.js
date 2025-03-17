const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/no1.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "no1.html"));
});

app.get("/no2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "no2.html"));
});

app.get("/no3.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "no3.html"));
});

app.get("/no4.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "no4.html"));
});

app.get("/no5.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "no5.html"));
});

app.get("/yes.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "yes.html"));
});

app.listen(3000, () => {
    console.log("Proposal website running at http://localhost:3000/");
}); 