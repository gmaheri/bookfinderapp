const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    success : true,
    data : req.body,
    msg : 'GET'
  })
});

router.post('/', (req, res) => {
  return res.status(200).json({
    success : true,
    data : req.body,
    msg : "POST"
  })
});



module.exports = router;
