
const util = require("util");
const fs = require("fs")

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)
var uuidv1 = require("uuidv1")
class Storage {
readNotes() {
  return readFileAsync("db/db.json", "utf8")

}

 writeNotes(note) {
   console.log(note)
  return writeFileAsync("db/db.json",JSON.stringify(note))
}

 getNotes() {
  return this.readNotes().then(notes => {
    let saveNotes;
    try {
      saveNotes = [].concat(JSON.parse(notes))
    } catch (err) {
      saveNotes = []
    }
    return saveNotes
  })
}

addNotes(note) {
  const {
    title,
    text
  } = note
  const newNote = {
    title,
    text,
    id: uuidv1()
  }
  return this.getNotes().this(notes => [...notes, newNote]).then(updateNotes => this.write(updateNotes)).then(()=> newNote)
}

removeNotes(id) {


  return this.getNotes().then(notes => notes.fiter(note => note.id)).then(filterNotes => this.wrtie(filterNotes))
}
}

module.exports = new Storage();