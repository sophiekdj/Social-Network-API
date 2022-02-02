const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// get all thoughts
// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// get single thought by id
// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// post to create new thought - push thought id to creators user id, thoughts array field
// /api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought);

// delete - delete thought by id
// /api/thoughts/:thoughtId
router.route("/:thoughtId").delete(deleteThought);

// create reaction stored in single thoughts reactions array field
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// delete to pull and remove reaction by reactionId value
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").delete(deleteReaction);

module.exports = router;
