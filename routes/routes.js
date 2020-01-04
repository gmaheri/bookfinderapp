const express = require("express");
const router = express.Router();
const {getBooks, addBook} = require('../contollers/controller')

router
.route('/')
.get(getBooks)
.post(addBook);

router.post('/', (req, res) => {
  return res.status(200).json({
    success : true,
    data : req.body,
    msg : "POST"
  })
});



module.exports = router;
