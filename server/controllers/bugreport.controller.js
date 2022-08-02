const Bugreport = require("../models/bugreport.model");

//CREATE
module.exports.createBugreport = (req,res) => {
    Bugreport.create(req.body)
    .then(newBugreport => res.json(newBugreport))
    .catch(err => res.json({message: "Error adding a new bug report", error: err}))
}

//READ ALL
module.exports.findAllBugreports = (req, res) => {
    Bugreport.find()
    .then(allBugreports => res.json(allBugreports))
    .catch(err => res.json({message: "Error finding all bug reports", error: err}))
}

//READ ONE
module.exports.findOneBugreport = (req,res) => {
    Bugreport.find({_id: req.params._id})
    .then(singleBugreport => res.json(singleBugreport))
    .catch(err => res.json({message: "Error finding one Bugreport", error: err}))
}

//UPDATE ONE BUGREPORT
module.exports.updateOneBugreport = (req,res) => {
    Bugreport.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
    .then(updateBugreport => res.json(updateBugreport))
    .catch(err => res.json({message: "Error updating one Bugreport", error: err}))
}

//DELETE ONE BUGREPORT
module.exports.deleteOneBugreport = (req,res) => {
    Bugreport.deleteOne({_id: req.params._id})
    .then(deleteBugreport => res.json(deleteBugreport))
    .catch(err => res.json({message: "Error deleting one Bugreport", error: err}))
}