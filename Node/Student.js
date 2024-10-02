const mongoose = require('mongoose');
const schema = mongoose.Schema({
    Name: String,
    RollNo: Number,
    Semester: Number,
    Subject: String,
    City: String,
    CPI: Number
});s
module.exports = mongoose.model("Student",schema);