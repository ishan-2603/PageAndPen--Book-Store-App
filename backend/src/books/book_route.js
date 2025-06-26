const express=require('express');
const Book = require('./book_model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book_controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router=express.Router();


//frontend => backend => controller => book schema => database => send to server => back to the frontend

//post a book
//post = when submit something frontend to db
//get = when get something back from db
// put/patch=when edit or update something
// delete= when delete something
router.post('/create-book', verifyAdminToken, postABook);

//get all books
router.get('/',getAllBooks);

//get a single book
router.get('/:id',getSingleBook);

//update a book
router.put('/edit/:id', verifyAdminToken, updateBook);

//delete a book
router.delete('/delete/:id', verifyAdminToken, deleteBook);

module.exports=router;