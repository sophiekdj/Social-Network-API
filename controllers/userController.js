const { User, Thought } = require("../models");

// get all users
// get one user by id - populated friend and thought data ****
// post a new user
// put - update a user by its id
// delete - remove user by id - bonus: remove users associated thoughts when deleted

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
              friends: await friends(req.params.userId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update user by its id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // unsure about this part... ******
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(
        (user) =>
          !user
            ? res.status(404).json({ message: "No user with that ID" })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        // Delete corresponding thoughts!! ^^^
      )
      .then(() => res.json({ message: "Course and students deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
