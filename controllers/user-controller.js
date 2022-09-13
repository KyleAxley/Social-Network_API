const { user } = require("../models");

const userController = {
  
    //get all users
  getUser(req, res) {
    User.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
        console.log(err);
        res.status(404).json(err);
    })
  },

  //get single user by id
  getUserById() {},

  //create a user
  createUser() {},

  //update user
  updateUser() {},

  //delete a user
  deleteUser() {},
};

module.exports = userController;
