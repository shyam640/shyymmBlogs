const mongoose = require('mongoose');

const testimonialModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/ratnesh035/image/upload/v1690034415/user_logo.png"
    }
});


testimonialModel.pre('save', async function (next) {
    next();
});

const Testimonial = mongoose.model('Testimonial', testimonialModel);

module.exports = Testimonial;