const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// get all users +++ post a new user
// /api/users
router.route("/").get(getUsers).post(createUser);

// get one user by id - populated friend and thought data
// /api/users/:userId
router.route("/:userId").get(getSingleUser);

// put - update a user by its id
// /api/users/:userId
router.route("/:userId").put(updateUser);

// delete - remove user by id - bonus: remove users associated thoughts when deleted
// /api/users/:userId
router.route("/:userId").delete(deleteUser);

// post - add new friend to users friend list
// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend);

// delete - remove friend from users friend list
// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
