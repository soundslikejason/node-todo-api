var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: process.env.MONGODB_URI
};
mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {mongoose};