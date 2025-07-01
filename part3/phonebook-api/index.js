const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" },
];

app.get("/api/person", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const now = new Date();
  response.send(
    `<p>Phonebook has info for ${persons.length} people <br> ${now}</p>`
  );
});

app.get("/api/person/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/person/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((p) => p.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((p) => Number(p.id))) : 0;
  return String(maxId + 1);
};

app.post("/api/person", (request, response) => {
  const body = request.body;

  try {
    if (!body.name || !body.number) {
      throw new Error("The name or number is missing");
    }

    const nameExists = persons.some((p) => p.name === body.name);
    if (nameExists) {
      throw new Error("The name already exists in the phonebook");
    }

    const person = {
      id: generateId(),
      name: body.name,
      number: body.number,
    };

    persons = persons.concat(person);
    response.status(201).json(person);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
