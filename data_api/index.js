var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var router = express.Router();
var regression = require('regression');

var app = express();
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.post('/test',function(req,res){
        var body = req.body.test;

        var arr = [[],[]];

        for(var i=0;i<body.length;i++){

        	arr[i][0] = parseInt(body[i]["year"]);
        	arr[i][1] = parseFloat(body[i]["value"]);

        }
       console.log(arr);

    	const result = regression.linear(arr);
		const gradient = result.equation[0];
		const yIntercept = result.equation[1];
        var model = {
        	gradient : result.equation[0],
        	yIntercept :  result.equation[1]
        };
        res.json(model);
});

const port = '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running on port ' + port));