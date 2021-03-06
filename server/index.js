'use strict';

let db = require('./data/contacts');
let bodyParser = require('body-parser');
let express = require('express');
let cors = require('cors');

let multipleResponse = (items) => { return { items: items } };
let singleResponse = (item) => { return { item: item } };
let getNextId = () => db.length;

let isContact = (contact) => contact.name !== undefined;

let emailIsAvailable = (email) => {
  if (email === '') {
    return true;
  }
  let contact = db.find(contact => contact.email == email);
  return contact ? false : true;
}

let unorderedResponse = process.argv.includes('--unordered-response');

if (unorderedResponse) {
  console.log('Serving search results unordered')
}

let app = express();

app.use(cors());
app.use(bodyParser.json()); 

app.get('/api/contacts', function (req, res) {
  res.json(multipleResponse(db));
});

app.post('/api/contacts', function (req, res) {
  if (isContact(req.body)) {
    req.body.id = getNextId();
    req.body.image = '/assets/images/placeholder.png';
    db.push(req.body);
    res.json(singleResponse(req.body));
  }
  else {
    res.status(404).json({ error: 'invalid structure' });
  }
});

let delayedRequest = false;
app.get('/api/search', function (req, res) {
  let text = req.query.text;
  let matches = db.filter(contact => contact.name
    .toLowerCase().indexOf(text.toLowerCase()) > -1);
  
  if (unorderedResponse && delayedRequest) {
    console.log(`Serving delayed for: ${text}`);
    setTimeout(() => res.json(multipleResponse(matches)), 2000)
  } else {
    console.log(`Serving instantly for: ${text}`);
    res.json(multipleResponse(matches));
  }
  delayedRequest = !delayedRequest;
});

app.get('/api/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found' });
});

app.put('/api/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    Object.assign(contact, req.body);
    res.json(singleResponse(contact));
  } else {
    res.status(404).json({ error: 'contact not found' });
  }
});

app.get('/api/check-email', function (req, res) {
  if (emailIsAvailable(req.query.email)) {
    res.json({ msg: 'AVAILABLE' });
  } else {
    res.json({ error: 'NOT_AVAILABLE' });
  }
});

app.listen(4201, () => console.log('REST API running on port 4201'));
