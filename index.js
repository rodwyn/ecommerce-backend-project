require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
const dbRoute = process.env.MONGO_URI;

mongoose.connect(
	dbRoute,
	{
		useNewUrlParser: true,
		useCreateIndex: true
	}
);

let db = mongoose.connection;

db.once('open', () => console.log('Conneted to the database'));
db.on('error', console.error.bind('Mongo connection error:'));


app.listen(port, () => console.log(`App listening on port ${port}`))
