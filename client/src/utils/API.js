import axios from 'axios';

export default {
  callNYT: function (query) {
    console.log('query', query);
    return axios.get('/api/article/call', { params: { q: query } });
  }
  // Gets all books
  // getArticles: function () {
  //   return axios.get('/api/articles');
  // },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get('/api/books/' + id);
  // },
  // Deletes the book with the given id
  // removeArticle: function(id) {
  //   return axios.delete('/api/articles/' + id);
  // },
  // Saves a book to the database
  // saveBook: function(id) {
  //   return axios.post('/api/articles', id);
  // }
};
