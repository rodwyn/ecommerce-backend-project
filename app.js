import express from 'express';
import path from 'path';
import DB from './config/db';
import CORS from './middleware/cors';
import notFound from './middleware/notFound';
import error from './middleware/error';
import { restRouter } from './api';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

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

app.get('/edit/:id', (req, res) => {
	async function getProduct() {
		const response = await fetch(`http://localhost:3000/api/product/?id=${req.params.id}`);
		const data = await response.json();
		return data;
	}

	const product = getProduct();
	product.then(data => {
		console.log(typeof(data.data[0]));
		console.log(typeof(data.data));
		console.log(typeof(data.message));
		res.render('edit', {
			title: 'Edit product',
			product: data.data[0]
		});
	});
});

app.get('/product', (req, res) => {
	async function getProducts() {
		const response = await fetch('http://localhost:3000/api/product/');
		const data = await response.json();
		return data;
	}

	const product = getProducts();
	product.then(data => {
		res.render('product', {
	    title: 'Product list',
	    product: data.data
	  });
	});
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
