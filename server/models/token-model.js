const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  isActivated: { type: Boolean, defa: true },
});
module.exports = model("Token", UserSchema);
