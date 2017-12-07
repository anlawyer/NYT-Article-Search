var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  articleDate: {
    type: Date
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;