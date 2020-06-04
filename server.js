var express = require("express");
var path = require("path");
const db = require("./db/storage");
// var router = require("express").Router();
var app = express();
var PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/api/notes", function (req, res) {

  db.getNotes().then(notes => res.json(notes))
  .catch(err => res.statusCode(500).json(err))
})

// calls the var save note funtion
app.post("/test/notes", function (req, res) {
  // target the res.body if not use req.body to pull all info
  console.log(req.body)
  db.writeNotes(req.body).then((note) => res.json(note)).catch(err => res.statusCode(500).json(err))

})

app.delete("/notes/:id", function (req, res) {

  db.deleteNotes(req.params.id).then(note => res.json({
    ok: true
  })).catch(err => res.statusCode(500).json(err))
  db.deleteNote(req.id).then(() => res.json(db.json)).catch(err => res.statusCode(500).json(err))
})

app.get("/notes", function (req, res) {
  console.log("something")
  res.sendFile(path.join(__dirname, "./public/notes.html"));
})
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(PORT, function () {
  console.log(db.writeNotes)
  console.log("Server on 3000")
})