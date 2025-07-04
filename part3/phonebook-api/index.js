require("dotenv").config();
const Contact = require("./models/phonebook.js");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/person", (request, response) => {
  Contact.find({}).then((contacts) => {
    response.json(contacts);
  });
});

app.get("/info", (request, response) => {
  const now = new Date();
  Contact.countDocuments().then((count) => {
    response.send(`<p>Phonebook has info for ${count} people <br> ${now}</p>`);
  });
});

app.get("/api/person/:id", (request, response) => {
  Contact.findById(request.params.id).then((contact) => {
    response.json(contact);
  });
});

app.post("/api/person", (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number missing" });
  }

  const contact = new Contact({
    name: body.name,
    number: body.number,
  });

  contact.save().then((savedContact) => {
    response.json(savedContact);
  });
});

app.delete("/api/person/:id", (request, response) => {
  Contact.findByIdAndDelete(request.params.id).then((contact) => {
    response.status(204).end();
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
