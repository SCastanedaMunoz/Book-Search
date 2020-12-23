const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/").get(booksController.readAll).post(booksController.create);

router
  .route("/:id")
  .get(booksController.readOne)
  .put(booksController.update)
  .delete(booksController.delete);

module.exports = router;