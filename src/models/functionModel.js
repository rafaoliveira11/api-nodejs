import mongoose from "mongoose";

const { Schema } = mongoose;

const functionSchema = new Schema({
  email: {
    type: String,
    required: true,
    ref: 'User',
  },
  nome: {
    type: String,
    required: true,
  },
  nascimento: {
    type: Date,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  profissao: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Function', functionSchema);
