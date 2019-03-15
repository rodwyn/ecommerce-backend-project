import express from 'express';
import path from 'path';
import DB from './config/db';
import CORS from './middleware/cors';
import notFound from './middleware/notFound';
import error from './middleware/error';
import { restRouter } from './api';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

DB.connect();

app.use(express.json());
app.use(CORS.handleCors);
app.use(bodyParser.json());
app.use('/api', restRouter);
// app.use(notFound);
// app.use(error);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Hello World',
		content: 'How are you?'
	});
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
