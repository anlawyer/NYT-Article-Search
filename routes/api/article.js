const axios = require('axios');
const router = require('express').Router();

const authKey = 'cb420c56e5254a31b30b0392e175d867';

const queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  authKey + '&q=';

router.get('/call', (req, res) => {
  console.log('request query:', req.query.q);
  axios
    .get(queryURLBase + req.query.q)
    .then(({ data: { results } }) => console.log(results.data.response.docs))
    .then(({ data: { results } }) => res.json(results.data.response.docs))
    .catch(err => console.log(res.json(err)));
});

module.exports = router;
