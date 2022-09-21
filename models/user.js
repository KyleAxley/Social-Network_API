const { Schema, model, Types, } = require("mongoose");

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
      match: [
        /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
        'Please enter a valid email address!',
      ],
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

//User virtual to return users friendCount. 
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model("User", UserSchema);
//export user model
module.exports = User;
