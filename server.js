
/**
 * Module dependencies.
 */

;// the console of awesome 

var express = require('express'),
  logger = require('node-codein'),
  http = require('http'),
  path = require('path'),
  url = require('url'),
  ejs = require('ejs');

var app = express();

//remember mongoJs is different from mongoose

app.configure(function(){
	app.set('port', process.env.PORT || 3001);
	app.set('views', __dirname);
	
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	
	app.use(express.static(__dirname));
	app.engine('html', ejs.renderFile);
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/rebuses/:dbId', function(req, res){
	res.send('the rebus with id of: '+ dbId);
});

app.get('/rebuses', function(req, res){
	var rebus1= [{'imgSrc':'img/easy/7seas.png', 'id':1}];
	

	res.send(JSON.stringify(rebus1));
});

app.post('/games', function(req, res){
	//check answer
	if(req.body.guese == "seven seas"){
		res.send(JSON.stringify({'correct':true, 'score':60}));
	}
	else{
		res.send( JSON.stringify({'correct':false, 'score':49}));
	}
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server now listening on port " + app.get('port'));
});

