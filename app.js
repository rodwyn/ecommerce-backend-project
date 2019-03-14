import express from 'express';
import path from 'path';
import DB from './config/db';

const app = express();
const PORT = 3000;

DB.connect();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
