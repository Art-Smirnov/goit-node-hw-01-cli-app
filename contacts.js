const fs = require('fs');
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) console.log(error);

    const parsedData = JSON.parse(data, null, ' ');
    console.table(parsedData);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) console.log(error);

    const parsedData = JSON.parse(data);
    const contact = parsedData.find(({ id }) => id === +contactId);
    console.log(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) console.log(error);

    const parsedData = JSON.parse(data);
    const dataToUpdate = parsedData.filter(({ id }) => id !== +contactId);
    const stringifiedData = JSON.stringify(dataToUpdate, null, ' ');

    fs.writeFile(contactsPath, stringifiedData, function (error) {
      if (error) console.log(error);
    });

    const parsedUpdatedData = JSON.parse(stringifiedData, null, ' ');
    console.table(parsedUpdatedData);
  });
}

function addContact(name, email, phone) {
  const newContact = {
    id: Date.now(),
    name,
    email,
    phone,
  };

  fs.readFile(contactsPath, 'utf8', function (error, data) {
    if (error) console.log(error);

    const parsedData = JSON.parse(data);
    parsedData.push(newContact);
    const stringifiedData = JSON.stringify(parsedData, null, ' ');

    fs.writeFile(contactsPath, stringifiedData, function (error) {
      if (error) console.log(error);
    });

    const parsedUpdatedData = JSON.parse(stringifiedData, null, ' ');
    console.table(parsedUpdatedData);
  });
}
module.exports = { listContacts, getContactById, removeContact, addContact };
