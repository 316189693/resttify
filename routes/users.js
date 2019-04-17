var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [{'name':'lisi', 'age':12},{'name':'lisi', 'age':12},{'name':'zhangsan', 'age':20}];
  res.send(users);
});

module.exports = router;
