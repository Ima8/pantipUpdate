var request = require("request"),
    cheerio = require("cheerio"),
    //$ = cheerio,
    page = "33939941";
    url = "http://pantip.com/forum/topic_mode/render_comments?tid="+page+"&type=1&page=1&param=story";

checkComment = function(callback) {
    request(url, function (error, response, body) {
        if (!error) {
            var $ = cheerio.load(body);
            //    temperature = $("[data-variable='temperature'] .wx-value").html();
            //var data = $.load(body).html();
            //var commentZone = $("#comments-jsrender", $.html());
            //var firstComment = $("display-post-wrapper with-top-border section-comment altcolor05  first", commentZone);
            var bodyJson = JSON.parse(body);
            numberOfcomment = bodyJson.comments.length;

            //console.log(bodyJson.comments[0].comment_no);
            //console.log(bodyJson.comments[0].comment_no);
            callback(numberOfcomment);
        } else {
            console.log("We've encountered an error: " + error);
        }


    });

};
test = function(){
    return 0;
};
module.exports.checkComment  = checkComment;
module.exports.test  = test;