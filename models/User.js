const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: [true, "First Name is Required"],

    },
    lastName: {
        type: String,
        minlength: 4,
        maxlength: 30,
    },
    email: {
        type: String,
        minlength: 8,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: [true, "Email Already In Use"],
        required: [true, "Please Enter a Valid Email"],
    },
    username: {
        type: String,
        minlength: 6,
        maxlength: 25,
        unique: [true, "Username is Invalid"],
        required: [true, "Username Required To Be Able To Log In"]
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, "Please Secure Your Account Properly"],
    },
    location: {
        type: String,
        // TODO Use Geo-Location
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }]


}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;