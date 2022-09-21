//import for mongoose package
const mongoose = require ('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(require('./routes'));

//connnection to mongoose route
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Social-Network_API', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

//use to log mongo queris being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));