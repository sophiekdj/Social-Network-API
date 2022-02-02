// get all thoughts
// get single thought by id
// post to create new thought - push thought id to creators user id, thoughts array field
// put - update thought by id
// delete - delete thought by id

const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// /api/users
router.route("/").get(getThoughts).post(createThought);

// /api/users/:userId
router.route("/:userId").get(getSingleThought);

// /api/users/:userId
router.route("/:userId").put(updateThought);

// /api/users/:userId
router.route("/:userId").delete(deleteThought);

module.exports = router;
