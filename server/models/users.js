const mongoose = require('mongoose');
const role = require('./roles');

const userSchema = new mongoose.Schema({
    FullName: String,
    UserName: String,
    Email: String,
    Role: {
        type: mongoose.Types.ObjectId,
        ref: 'role'
    }
});

module.exports = mongoose.model('Users',userSchema);