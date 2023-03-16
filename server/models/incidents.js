const mongoose = require('mongoose');
const user = require('./users');

const incidentsSchema = new mongoose.Schema({
    IncidentNo: String,
    Title: String,
    Description: String,
    Category: String,
    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    AssignedTo: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
});

module.exports = mongoose.model('Incidents',incidentsSchema);