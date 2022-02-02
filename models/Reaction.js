const { Schema, Types } = require("mongoose");
// const thoughtSchema = require("./Thought");

// Schema to create Reaction model
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
    id: false,
  }
);

module.exports = reactionSchema;
