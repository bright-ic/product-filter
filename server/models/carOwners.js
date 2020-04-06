const mongoose = require('mongoose');
const {Schema} = mongoose;

const carOwners = new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    country: String,
    car_model: String,
    car_model_year: Number,
    car_color: String,
    gender: String,
    job_title: String,
    bio: String,
})

mongoose.model('carOwners', carOwners);