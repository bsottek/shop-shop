const mongoose = require('mongoose');

const handleError = error => console.log(error);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).
  catch(error => handleError(error));

const logError = err => console.log(err);

mongoose.connection.on('error', err => {
  logError(err);
});

module.exports = mongoose.connection;
