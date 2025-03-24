const mongoose = require('mongoose');

const url = "mongodb+srv://prateekvaish449:Prateek449@cluster0.yneth.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function - returns Promise Object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;