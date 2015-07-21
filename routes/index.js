var express = require('express');
var router = express.Router();
var scrape = require("../app/model/scrape");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.append(scrape()+"");
  scrape.checkComment(function(rs){
    res.send(rs+"");
  });
});

module.exports = router;
