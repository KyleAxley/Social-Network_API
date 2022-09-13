const { thought, user } = require("../models");

const thoughtController = {
  // get all thoughts
  getThought(req, res) {
    thought
      .find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },

  //get single thought
  getThoughtById({ params }, res) {
    thought
      .findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: "There is no thought found with that id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  //create thought
  createThought({ body }, res) {
    thought.create(body).then((dbThoughtData) => {
      return user.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: thoughtData._id } },
        { new: true }
      );
    })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res
            .status(404)
            .json({ message: "There is no thought found with that id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },

  //update thought
  updateThought({ params, body}, res) {
    thought.findOneAndUpdate({_id: params.id}, body, {new: true})
    .then((dbThoughtData) => {
        if(!dbThoughtData) {
            res.status(404).json({ message: 'There is no thought found with that id!'})
            return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(400).json(err));
  },

  //delete thought
  deleteThought({params}, res) {
    thought.findByIdAndDelete({ _id: params.id})
    .then((dbThoughtData) => {
        if(!dbThoughtData) {
            res.status(404).json({message: 'There is no thought found with that id!'})
            return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(400).json(err));
  },
};

module.exports = thoughtController;
