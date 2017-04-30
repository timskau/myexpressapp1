var express = require('express');
var router = express.Router();

var path = __dirname + '/views/';

/* GET home page. */
router.get('/', function(req, res, next) {

  //.render('index', { title: 'hello there' });
  //res.send('Hello world');
  res.sendFile(path + "hello.html");
  
});

module.exports = router;
