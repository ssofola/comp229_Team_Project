//index.js Money Raheja 301276615 19/02/2023
var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', (req, res, next)=>{
    res.render('dashboard', {title: 'Dashboard'});
});

/* GET home page. */
router.get('/home', (req, res, next)=>{
    res.render('dashboard', {title: 'Dashboard'});
});

module.exports = router;

