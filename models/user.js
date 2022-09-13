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
    thoughts: {
        type: Schema.Types.ObjectId, 
        ref: 'thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }

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
