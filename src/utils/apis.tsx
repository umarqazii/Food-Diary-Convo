import { RecipeResponse } from "./interfaces";
import { Recipe } from "./interfaces";

// fetching all the recipes from dummyjson
export const fetchRecipes = async (): Promise<RecipeResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data: RecipeResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

// fetching a single recipe from dummyjson using id
export const fetchRecipeById = async (id: string | undefined): Promise<Recipe | null> => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipe");
      }
      const data: Recipe = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      return null;
    }
  };