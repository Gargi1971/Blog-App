const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mern-blog:CwgWHaIihPDul8q1@cluster0.dxpdq5b.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try{
     const userDoc = await User.create({username, password});
     res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }

});


app.listen(4000);

// CwgWHaIihPDul8q1
// mongodb+srv://mern-blog:CwgWHaIihPDul8q1@cluster0.dxpdq5b.mongodb.net/?retryWrites=true&w=majority