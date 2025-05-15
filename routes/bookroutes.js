const { fetchbooks, addbooks, deletebooks, updatebooks } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/book").get(fetchbooks).post(addbooks)

router.route("/book/id").delete(deletebooks).patch(updatebooks)