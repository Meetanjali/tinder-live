import express from 'express';
import mongoose from 'mongoose';
import dbCards from './dbCards.js';
import cors from 'cors';
//app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	'mongodb+srv://meetu:3WLu3pmUs1IO72gM@cluster0.p03az.mongodb.net/tinderdb?retryWrites=true&w=majority';
//middleware
app.use(express.json());
app.use(cors());
//db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//Api config
app.get('/', (req, res) => {
	res.status(200).send('hello programmer');
});
app.post('/tinder/card', (req, res) => {
	console.log('test');
	const dbcard = req.body;
	console.log(dbcard);
	dbCards.create(dbcard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});
app.get('/tinder/card', (req, res) => {
	dbCards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

//listner
app.listen(port, () => {
	console.log(`lisning to local port): ${port}`);
});
