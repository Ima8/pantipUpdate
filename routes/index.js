var express = require('express');
var router = express.Router();
var scrape = require("../app/model/scrape");
var Pantip = require("../app/model/pantip");
var config = require("../config");
var secretKey = config.secretKey;
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.append(scrape()+"");
    scrape.checkComment(function (rs) {
        res.send(rs + "");
    });
});


router.post('/signup', function (req, res, next) {
    var pantip = new Pantip({
        weburl: req.body.weburl,
        lineid: req.body.lineid,
        email: req.body.email
    });
    pantip.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.json({message: 'User has been created'});
    });
});


module.exports = router;
