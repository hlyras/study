const express = require('express');
const app = express();
const request = require("request-promise");
// const request = require('request');
// var routes = require('./routes/index');

const options = {
    uri: "https://pokeapi.co/api/v2/",
    method: "GET",
    json: true
}

app.get('/', async (req, res) => {
	let body = await request.get(options);
	res.send(body);
});

// app.use('/', routes);

module.exports = app;