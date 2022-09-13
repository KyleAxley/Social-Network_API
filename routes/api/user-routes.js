const router = require("express").Router();
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

//GET all and POST at /api/users
router.route("/")
  .get(getUser)
  .post(createUser);

//GET one, PUT, and DELETE at /api/users/:id
router.route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
