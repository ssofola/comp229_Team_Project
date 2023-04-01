//book.js Money Raheja 301276615 19/02/2023
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
let incidentController = require('../controllers/incident');

/* GET route for the Book List Page - READ operation */
router.get('/', incidentController.displayBookList);

/* GET route for the displaying Add Page - Create Operation */
router.get('/add',requireAuth, incidentController.displayAddPage);

/* POST route for processing the Add Page - Create Operation */
router.post('/add',requireAuth, incidentController.processAddPage);

/* GET route for the displaying Edit Page - Update Operation */
router.get('/edit/:id',requireAuth, incidentController.displayEditPage);

/* Post route for processing the Edit page- Update Operation */
router.post('/edit/:id',requireAuth, incidentController.processEditPage);

/* GET to perdom the DELETION - Update Operation */
router.get('/delete/:id',requireAuth, incidentController.performDelete );


module.exports = router;