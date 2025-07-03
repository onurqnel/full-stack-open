require("dotenv").config();
const mongoose = require("mongoose");

const username = process.env.MONGODB_USERNAME;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

const url = `mongodb+srv://${username}:${password}@cluster0.4smbkro.mongodb.net/noteApp?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is easy",
  important: true,
});

note.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
});
