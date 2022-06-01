const Recipe = require("../models/recipe");

const getAllMyRecipes = async (req, res) => {
  try {
    const MyRecipes = await Recipe.find();
    return res.status(200).json({ MyRecipes });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const createRecipe = async (req, res) => {
  try {
    const newRecipe = await new Recipe(req.body);
    await newRecipe.save();
    return res.status(200).json({ newRecipe });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedRecipe = await Recipe.findById(id);
    if (selectedRecipe) {
      return res.status(200).json({ selectedRecipe });
    }
    return res.status(404).send("A recipe with that ID does not exist");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateRecipe = (req, res) => {
  try {
    const { id } = req.params;
    Recipe.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!recipe) {
        return res.status(404).send("Recipe Not Found");
      }
      return res.status(200).json(recipe);
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (deletedRecipe) {
      return res.status(200).send("Recipe Deleted Successfully");
    }
    throw new Error("Recipe is Not Found");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllMyRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
