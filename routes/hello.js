var express = require('express');
var router = express.Router();
 //var path = require('path');
//var appDir = path.dirname(require.main.filename);

var appDir = '/home/tim/dev/expressweb1/myapp'
//path = '../views/';
var path =  appDir + '/views/';

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("dirname" + __dirname);
  //console.log('Path : ' + path);
  //console.log('AppDir: ' + appDir);

  //.render('index', { title: 'hello there' });
  //res.send('Hello world');
  //res.sendFile(path + "helloview.html");

  res.render('hello', { title: 'Hello pugg', welc: 'This is the welcome page' });

});

module.exports = router;
