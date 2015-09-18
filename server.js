var Hapi = require('hapi');
var Path = require('path');
var http = require('http');
var request = require('request');
var Handlebars = require("handlebars");

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8888)
});

server.views({
		path: 'templates',
		engines: {
			html: require('handlebars')
		},
		relativeTo:__dirname
});

server.route([
	{
	method: "GET",
	path: "/",
	handler: function(request, reply) {
		reply.file("./templates/homepage.html");
		}
	},
	{
	method: "GET",
	path: "/dynamic.js",
	handler: function(request, reply) {
		// data: JSON.stringify(request.payload),
		//console.log(JSON.stringify(request.payload));
		//console.log(request);
		reply.file("./templates/dynamic.js")

		}
	},
	{
	method: "GET",
	path: "/style.css",
	handler: function(request, reply) {
		reply.file("./templates/style.css");
		}
	},
	{
	method:"GET",
	path: "/[insert/picture/file/here]",
	handler: function(request, reply) {
		reply.file("./[insert/picture/file/here]");
	}	
	}
]);

server.start();
console.log("Mr. Ross, your server is currently running on port 8888.");
