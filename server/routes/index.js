//index.js Money Raheja 301276615 19/02/2023
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

// /* GET home page. */
 router.get('/', indexController.displayHomePage);

// /* GET home page. */
 router.get('/dashboard', indexController.displayHomePage);

 router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contacts page. */
router.get('/contact', indexController.displaycontactPage);

/* GET route for the displaying the login Page */
router.get('/login', indexController.displayLoginPage);

/* POST route for processing the Add Page - Create Operation */
router.post('/login', indexController.processLoginPage);

/* GET route for the displaying the login Page */
router.get('/register', indexController.displayRegisterPage);

/* POST route for processing the Regitser page - Create Operation */
router.post('/register', indexController.processRegisterPage);

/* GET to perdom UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
