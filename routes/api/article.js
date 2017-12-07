const axios = require("axios");
const router = require("express").Router();
// const articlesController = require("../../controllers/articlesController");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

router.get('/call', (req, res) => {
  console.log('request:', req);
  axios
    .get(queryURLBase, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
// router.route("/")
//   .get(articlesController.findAll);
  // .post(articlesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
