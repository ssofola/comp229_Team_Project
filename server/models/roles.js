const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    Name: String,
    Description: String
});

module.exports = mongoose.model('Roles',roleSchema);