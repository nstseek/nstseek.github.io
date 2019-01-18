const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require('cors');

const server = express();
const port = 3001;

const database = {
	users: [
		{
			id: 123,
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
		{
			id: 124,
			name: 'Sally',
			email: 'sally@gmail.com',
			password: 'bananas',
			entries: 0,
			joined: new Date()
		}
	],
	login: [
		{
			id: 123,
			email: 'john@gmail.com'
		}
	]
}

bcrypt.hash(database.users[0].password, null, null, (err, hash) => {
	database.login[0].hash = hash;
});

bcrypt.hash(database.users[1].password, null, null, (err, hash) => {
	database.login.push({
		id: database.users[1].id,
		email: 'sally@gmail.com',
		hash: hash
	})
});

server.use(bodyParser.json());

server.use(cors());

server.listen(port, () => console.log(`listening on port ${port}`));

server.get("/login", (req, res) => {
	res.json(database.login);
});

server.post('/signin', (req, res) => {
	let found = 0;
	console.log(req.body);
	database.login.forEach(login => {
		if (login.email === req.body.email && (bcrypt.compareSync(req.body.password, login.hash))){
			res.json({
				message: `logged in`,
				id: login.id
			});
			found = 1;
		}
	});
	if (!found) {
		res.status(400).json(`user ${req.body.email} could not be logged in`);
	}
});

server.get("/", (req, res) => {
	res.json(database.users);
})

server.get('/profile/:id', (req, res) => {
	let found = 0;
	req.params.id = Number(req.params.id);
	database.users.forEach(user => {
		if (user.id === req.params.id){
			res.json(user.entries);
			found = 1;
		}
	});
	if (!found) {
		res.status(400).json(`id=${req.params.id} does not exist`);
	}
});

server.put("/image", (req, res) => {
	let found = 0;
	req.body.id = Number(req.body.id);
	database.users.forEach(user => {
		if (user.id === req.body.id){
			user.entries++;
			res.json(user);
			found = 1;
		}
	});
	if (!found) {
		res.status(400).json(`id=${req.body.id} does not exist`);
	}
});

server.post('/register', (req, res) => {
	database.users.push({
		id: database.users[(database.users.length-1)].id+1,
		name: req.body.name,
		email: req.body.email,
		password: '',
		entries: 0,
		joined: new Date()
	});
	database.login.push({
		id: database.users[(database.users.length-1)].id,
		email: req.body.email,
		hash: bcrypt.hashSync(req.body.password, null)
	});
	res.json("user registered");
});


