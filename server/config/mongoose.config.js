const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/bug_tracker_app_july_2022", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection to the database is successful!"))
    .catch(err => console.log("Connection to the database has failed!", err))