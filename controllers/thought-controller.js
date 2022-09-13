const { thought } = require('../models'); 

const thoughtController = {
    
    // get all thoughts
    getThought(req, res){
        thought.find({})
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err);
            res.status(404).json(err);
        })
    },
    
    //get single thought
    getThoughtById(){},

    //create thought
    createThought(){},

    //update thought
    updateThought(){},

    //delete thought
    deleteThought(){},
};


module.exports = thoughtController; 
