import Ingredients from "../components/ingredients";
import Instructions from "../components/instructions";
import Equipments from "../components/equipments";
import RecipeImageAndTitle from "../components/recipeImageAndTitle";
import { useEffect } from "react";
import axios from 'axios';

const ViewRecipeDetails = () => {
  useEffect(()=>{
    getRecipeDetail();
  },[]);
  async function getRecipeDetail(){
    const recipeDetail=await axios.get('https://localhost:3000/recipeInfo/');
    console.log(recipeDetail);
  }
  const recipeImage="";
  const recipeTitle="";
  const ingredients=[];
  const equipments=[];
  const instructions=[];
  return (false && 
    <div className="flex-col gap-5 flex-nowrap">
      <RecipeImageAndTitle recipeImage={recipeImage} recipeTitle={recipeTitle}/>
      <Ingredients ingredients={ingredients}/>
      <Equipments equipments={equipments} />
      <Instructions instructions={instructions}/>
    </div>
  )
}

export default ViewRecipeDetails;