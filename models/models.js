const  mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required : [true, 'Please enter book ID'],
    unique : true
  },
  title: {
    type : String,
    required : [true, 'Please enter the title of the book']
  },
  author : {
    type : String,
    required : [true, 'Please enter Authors name']
  },
  publishedDate: Date,
});

module.exports = mongoose.model('book', BookSchema);
