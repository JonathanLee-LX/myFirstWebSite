var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('response will be sent by the next function...');
  next();
},function(req,res,next){
	res.send("hello world from b");
});

module.exports = router;
