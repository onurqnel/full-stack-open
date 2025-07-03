require("dotenv").config();
const mongoose = require("mongoose");

const username = process.env.MONGODB_USERNAME;
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.4smbkro.mongodb.net/phoneBook?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const contactsSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = mongoose.model("Contact", contactsSchema);

if (process.argv.length < 3) {
  console.log("Please give name and number as arguments!");
  process.exit(1);
}

const contactName = process.argv[2];
const contactNumber = process.argv.slice(3).join(" ");

const contact = new Contact({
  name: contactName,
  number: contactNumber,
});

contact.save().then((result) => {
  console.log(
    `Contact: ${contactName} Number: ${contactNumber} saved to phonebook!`
  );
  mongoose.connection.close();
});
