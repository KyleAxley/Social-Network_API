const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    //TODO:⬇️ thoughts, array of _id values ref the thought model,

    //TODO:⬇️ friends, array of _id values, ref the user model(self-reference)

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//TODO:⬇️ create a virtual called friendCount that retrieves the length of user's friends array on field query


const user = model("user", UserSchema);
//export user model
module.exports = user;
