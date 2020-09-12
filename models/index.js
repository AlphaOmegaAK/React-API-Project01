const mongoose = require('mongoose');

const connectString = process.env.MONGODB_URI || "mongodb://localhost:27017/devConnector";

const configObj = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectString, configObj)
    .then(() => console.log(`MongoDB Successfully Connected to ${connectString}`))
    .catch(err => console.log(`MongoDB Connection Error : ${err}`));

module.exports = {
    //! Models Here
}