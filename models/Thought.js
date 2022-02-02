const { Schema, model } = require("mongoose");
// const thoughtSchema = require("./Thought");
const reactionSchema = require("./Reaction");

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: "?? is this needed for this one?",
    },
    createdAt: {
      type: Date,
      // default to CURRENT TIMESTAMP; use getter method to format timestamp on query****
      default: Date.now,
    },
    // user that CREATED THIS THOUGHT *****
    username: {},
    // array of nested documents created with the reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `friendCount` that gets the amount of friends per user??
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
