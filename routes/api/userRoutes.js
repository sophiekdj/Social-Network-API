// get all users
// get one user by id - populated friend and thought data
// post a new user
// put - update a user by its id
// delete - remove user by id - bonus: remove users associated thoughts when deleted

const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// /api/users/:userId
router.route("/:userId").put(updateUser);

// /api/users/:userId
router.route("/:userId").delete(deleteUser);

module.exports = router;
