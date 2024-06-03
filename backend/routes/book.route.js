const express = require("express");
const getBook = require("../controllers/book.contoller");

const router = express.Router();
router.get("/", getBook);

module.exports = router;
