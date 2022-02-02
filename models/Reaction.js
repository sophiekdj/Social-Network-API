const { Schema, model } = require("mongoose");
// const thoughtSchema = require("./Thought");
const reactionSchema = require("./Reaction");

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: "does it need default???****",
    },
    // user that CREATED THIS REACTION *****
    username: {
      type: String,
      required: true,
    },
    // same as thought - current timestap, getter method ***
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
