/**
 * ViewRecipeDetails Component
 *
 * The ViewRecipeDetails component displays detailed information about a recipe, including its image, title, health labels, cautions, ingredients, and instructions. It retrieves recipe details based on the provided recipeID from the URL parameter.
 *
 * @component
 */

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import RecipeImageAndTitle from "../components/viewRecipeDetails/recipeImageAndTitle";
import Tags from "../components/viewRecipeDetails/tags";
import Ingredients from "../components/viewRecipeDetails/ingredients";
import Instructions from "../components/viewRecipeDetails/instructions";
import BackendAPI from "../helper/BackendApi";
import Loader from "../components/Loader";

const ViewRecipeDetails = () => {
  const { recipeID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recipeDetail, setRecipeDetail] = useState({});

  useEffect(() => {
    async function getRecipeInfo() {
      const recipe = await  BackendAPI.getRecipeDetail(recipeID);
      setRecipeDetail(recipe);
      setIsLoading(false);
    }
    getRecipeInfo();
  }, [recipeID]);


  const recipeImage = recipeDetail.images && recipeDetail.images.REGULAR.url;
  const recipeTitle = recipeDetail.label;
  const healthLabels = recipeDetail.healthLabels;
  const cautions = recipeDetail.cautions;
  const ingredients = recipeDetail.ingredientLines;
  const instructions = recipeDetail.url;

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="flex flex-col gap-4 flex-nowrap bg-white max-w-lg mx-auto mb-12">
      <RecipeImageAndTitle recipeImage={recipeImage} recipeTitle={recipeTitle} />
      <Tags healthLabels={healthLabels} cautions={cautions} />
      <Ingredients ingredients={ingredients} />
      <Instructions instructions={instructions} />
    </div>
  );
}

export default ViewRecipeDetails;

//In future if we get Equipments use this:
// import Equipments from "../components/equipments";
//<Equipments equipments={equipments} /> 