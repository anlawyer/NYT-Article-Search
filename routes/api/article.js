const axios = require('axios');
const router = require('express').Router();
// const articlesController = require('../../controllers/articlesController');

var authKey = 'cb420c56e5254a31b30b0392e175d867';

var queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  authKey + '&q=';

router.get('/call', (req, res) => {
  console.log('request:', req.query.q);
  axios
    .get(queryURLBase + req.query.q)
    .then(results => res.json(results.data.response.docs[0].web_url))
    .catch(err => console.log('catch err:', err));
});

// Matches with '/api/books'
// router.route('/')
//   .get(articlesController.findAll);
  // .post(articlesController.create);

// Matches with '/api/books/:id'
// router
//   .route('/:id')
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
