const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  ingredients: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  recipeImage: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
});

const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;
