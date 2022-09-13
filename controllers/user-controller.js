const { support } = require("benchmark");
const { user } = require("../models");

const userController = {
  
    //get all users
  getUser(req, res) {
    user.find({})
    .populate({
      path: 'thoughts',
      select: '-__v',
    })
    .select('-__v')
    .sort({ _id: -1})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(404).json(err);
    })
  },

  //get single user by id
  getUserById({ params }, res) {
    user.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
    .then((dbUserData) => {
        //if no user found send 404
        if(!dbUserData) {
            res.status(404).json({ message: 'There is no user found by this id!'})
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
  },

  //create a user
  createUser({body}, res) {
    user.create(body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(400).json(err)); 
  },

  //update user
  updateUser({ params, body }, res) {
    user.findOneAndUpdate({ _id: params.id}, body, { new: true })
    .then((dbUserData) => {
        if(!dbUserData) {
            res.status(404).json({ messae: 'There is no user found by this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(400).json(err));
  },

  //delete a user
  deleteUser({params}, res) {
    user.findOneAndDelete({ _id: params.id})
    .then((dbUserData) => {
        if(!dbUserData) {
            res.status(404).json({ messae: 'There is no user found by this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch((err) => res.json(400).json(err));
  },
};

module.exports = userController;
