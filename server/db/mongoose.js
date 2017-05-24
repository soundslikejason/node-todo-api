var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://puff:daddy@ds153400.mlab.com:53400/node-todo-api'
};
mongoose.connect(db.localhost || db.mlab);

module.exports = {mongoose};