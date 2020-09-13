const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        minlength: 10,
        unique: [
            true, 'There\'s already a post about this..',
        ],
        required: [
            true, 'Your Post needs a Title..'
        ],
    },
    genre: {
        type: String,
        maxlength: 50,
        minlength: 10,
        required: [
            true, 'Your post must specifiy what it is about',
        ],
    },
    body: {
        type: String,
        maxlength: 250,
        required: [
            true, 'Your post must have content..',
        ],
    },
    meta: {
        votes: Number,
        likes: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;