const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  email: { type: String, unique: true, rquired: true },
  password: { type: String, rquired: true },
  isActivated: { type: Boolean, defa: true },
  activationLink: { type: String },
});
module.exports = model("User", UserSchema);
