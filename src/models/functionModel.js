const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define o schema do functionModel
const functionSchema = new Schema({
  email: {
    type: String,
    required: true,
    ref: 'User', // Referência ao campo "email" do userModel
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

// Cria o modelo com base no schema
const FunctionModel = mongoose.model('Function', functionSchema);

module.exports = FunctionModel;