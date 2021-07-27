var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '添加了一个产品页面' });
});

router.get('/list', function(req, res, next) {
    res.jsonp({
        msg:"hello",
        name:"dudu"
    });
});

module.exports = router;
