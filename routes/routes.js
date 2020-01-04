const express = require("express");
const router = express.Router();
const {getBooks, addBook, updateBook, deleteBook } = require('../contollers/controller')

router
.route('/')
.get(getBooks)
.post(addBook);

router
.route('/:id')
.delete(deleteBook)
.put(updateBook);






module.exports = router;
