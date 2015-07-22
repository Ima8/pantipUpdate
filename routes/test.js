var express = require('express');
var router = express.Router();
var scrape = require("../app/model/scrape");
var Pantip = require("../app/model/pantip");
var config = require("../config");
var mongoose = require("mongoose");
var secretKey = config.secretKey;
var pantip = new Pantip({
    weburl: "this web",
    lineid: 123456,
    email: "this email"
});
pantip.save(function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log({message: 'User has been created'});
});

