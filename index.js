const express = require('express');
const path = require('path');
const productRouter = require('./product');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/product', productRouter);

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Hello, world!',
		content: 'How are you?'
	})
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`))
