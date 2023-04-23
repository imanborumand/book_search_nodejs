const mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost:27018/googlebooks', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
