import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbRoute = process.env.MONGO_URI;

mongoose.Promise = global.Promise;

export default {
	connect() {
		mongoose.connect(
			dbRoute,
			{
				useNewUrlParser: true,
				useCreateIndex: true
			}
		);

		const db = mongoose.connection;

		db.once('open', () => console.log('Conneted to the database'));
		db.on('error', console.error.bind('Mongo connection error:'));
	}
}
