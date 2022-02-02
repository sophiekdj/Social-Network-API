const { Schema, model } = require("mongoose");
// const thoughtSchema = require("./Thought");
// const reactionSchema = require("./Thought");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // trimmed ****?
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // array of _id values referencing Thought model
    thoughts: [thoughtSchema],
    // friends: array of _id values self-referencing user model
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `friendCount` that gets the amount of friends per user??
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
