const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.info('Connection OK');
      }
    }
  );
};

module.exports = connectDB;
