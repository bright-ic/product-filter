const mongoose = require('mongoose');
const {Schema} = mongoose;

const carOwners = new Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    country: String,
    car_model: String,
    car_model_year: String,
    car_color: String,
    gender: String,
    job_title: String,
    bio: String,
})

mongoose.model('carOwners', carOwners);