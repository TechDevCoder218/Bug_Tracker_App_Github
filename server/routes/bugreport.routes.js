const BugreportController = require("../controllers/bugreport.controller");

module.exports = app => {

    //CREATE
    app.post("/api/bugreports/create", BugreportController.createBugreport);
    //READ ALL
    app.get("/api/bugreports", BugreportController.findAllBugreports);
    //READ ONE
    app.get("/api/bugreports/:_id", BugreportController.findOneBugreport);
    //UPDATE ONE
    app.put("/api/bugreports/update/:_id", BugreportController.updateOneBugreport);
    //DELETE ONE
    app.delete("/api/bugreports/delete/:_id", BugreportController.deleteOneBugreport);
}