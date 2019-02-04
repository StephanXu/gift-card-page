var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('card', {
        p1_h1: '新年快乐',
        p1_h2: '2019年',
        p2_stong_header: '所有的',
        p2_header: '小朋友',
        p2_content: '今年，我们都将拥有更好的今年。一起努力！',
        p3_header: '来自',
        p3_strong_header: 'Stephan',
        p3_content: '我们总会相信美好的事情就发生在明天'
    });
});

module.exports = router;
