require("dotenv").config();

const express = require("express");
const Note = require("./models/note");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
