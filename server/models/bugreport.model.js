const mongoose = require('mongoose');

const BugreportSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "Application must have a name"],
        minlength: [3, "Application name must be at least 3 characters"]
    },
    bugtitle: {
        type: String,
        required: [true, "Application bug must have a name"],
        minlength: [3, "Name of bug must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Bug must have a description"],
        minlength: [5, "Description must be at least 5 characters"]
    },
    resolved: {
        type: Boolean,
        required: [true, "Resolved must have a value"],
    },
    resdescription: {
        type: String
    }
},
{timestamps: true});

const Bugreport = mongoose.model("Bugreport", BugreportSchema);

module.exports = Bugreport;