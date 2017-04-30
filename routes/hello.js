var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //.render('index', { title: 'hello there' });
  res.send('respond with a resource');
  
});

module.exports = router;
