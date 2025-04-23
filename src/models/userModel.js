import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const { Schema } = mongoose;

const UserSchema = new Schema({
  usuario: { type: String, required: true },
  email: { type: String, required: true }
});

UserSchema.plugin(AutoIncrement(mongoose), { inc_field: 'id' });

export default mongoose.model("User", UserSchema);
