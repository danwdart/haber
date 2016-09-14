import express from 'express';

import contacts from './controllers/contacts';

const app = express();

app.get('/contacts', contacts.get);

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Listening'));
