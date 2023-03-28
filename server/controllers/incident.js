//book.js Money Raheja 301276615 19/02/2023
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Book = require('../models/incident');

//to display the book list
module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', 
            {title: 'IncidentModel list',
            BookList: bookList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

//to display the add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''})          
}

//to process the add page
module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "incidentID": req.body.incidentID,
        "incidentNo": req.body.incidentNo,
        "title": req.body.title,
        "category": req.body.category,
        "createdBy": req.body.createdBy,
        "assignedtTo": req.body.assignedtTo,
        "status" : req.body.status,
        "priority" : req.body.priority
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/incident');
        }
    });

}
//to display edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

//to process the edit page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "incidentID": req.body.incidentID,
        "incidentNo": req.body.incidentNo,
        "title": req.body.title,
        "category": req.body.category,
        "createdBy": req.body.createdBy,
        "assignedtTo": req.body.assignedtTo,
        "status" : req.body.status,
        "priority" : req.body.priority
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/incident');
        }
    });
}

//to perform the deletion
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/incident');
        }
    });
}