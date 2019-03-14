import express from 'express';
import path from 'path';
import DB from './config/db';
import CORS from './middleware/cors';
import notFound from './middleware/notFound';
import error from './middleware/error';

const app = express();
const PORT = 3000;

DB.connect();

app.use(express.json());
app.use(CORS.handleCors);
app.use(notFound);
app.use(error);

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
