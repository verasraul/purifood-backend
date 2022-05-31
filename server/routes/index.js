const Router = require("express");
const controllers = require("../controllers/index");
const router = Router();

router.get("/recipes", controllers.getAllMyRecipes);
router.post("/recipes/create-recipe", controllers.createRecipe);
router.get("/recipes/:id", controllers.getRecipeById);
router.put("/recipes/:id/update-recipe", controllers.updateRecipe);
router.delete("/recipes/:id", controllers.deleteRecipe);

module.exports = router;
