import Ingredients from "../components/ingredients";
import Instructions from "../components/instructions";
import Equipments from "../components/equipments";
import RecipeImageAndTitle from "../components/recipeImageAndTitle";
// import { useEffect } from "react";
// import axios from 'axios';

const ViewRecipeDetails = () => {
  // useEffect(() => {
  //   getRecipeDetail();
  // }, []);
  // async function getRecipeDetail() {
  //   const recipeDetail = await axios.get('http://localhost:3000/recipeInfo/bbbe1e37c467a2209668fd0a778ae0db', { 'Origin': 'http://localhost:5173/' });
  //   console.log(recipeDetail);
  // }
  const recipeImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IVD9VMxAcKGNrP6TXisYyYL7tXCQn94l919hm_uJLK6Yy1xXuo0D1KHNi6dONLfKn_w&usqp=CAU";
  const recipeTitle = "Chicken Alfredo";
  const ingredients = [
    { "name": "8 oz fettuccine pasta", "calories": 800 },
    { "name": "2 chicken breasts (boneless, skinless)", "calories": 250 },
    { "name": "2 tbsp olive oil", "calories": 240 },
    { "name": "2 cloves garlic (minced)", "calories": 10 },
    { "name": "1 cup heavy cream", "calories": 820 },
    { "name": "1/2 cup grated Parmesan cheese", "calories": 210 },
    { "name": "Salt and pepper to taste", "calories": 0 },
  ];

  const equipments = [
    "Large pot for cooking pasta",
    "Skillet for cooking chicken and sauce",
    "Wooden spoon",
    "Tongs",
    "Colander for draining pasta"
  ]

  const instructions = [
    "Bring a large pot of salted water to a boil. Add the fettuccine pasta and cook until al dente, according to package instructions. Drain and set aside.",
    "Season the chicken breasts with salt and pepper. In a skillet, heat the olive oil over medium-high heat. Add the chicken breasts and cook until they are no longer pink in the center and the juices run clear, about 6-7 minutes per side. Remove the chicken from the skillet and let it rest for a few minutes. Then, slice it into thin strips.",
    "In the same skillet, add minced garlic and sauté for about 1 minute, or until fragrant.",
    "Pour in the heavy cream and grated Parmesan cheese. Stir the mixture continuously over medium heat until the sauce thickens and the cheese is fully melted. This should take about 3-5 minutes.",
    "Add the cooked fettuccine pasta to the skillet and toss it in the creamy Alfredo sauce until well coated.",
    "Add the sliced chicken on top of the pasta.",
    "Serve hot, garnished with extra Parmesan cheese and freshly ground black pepper."
  ]

  return (
    <div className="flex flex-col gap-4 flex-nowrap bg-white">
      <RecipeImageAndTitle recipeImage={recipeImage} recipeTitle={recipeTitle} />
      <Ingredients ingredients={ingredients} />
      <Equipments equipments={equipments} />
      <Instructions instructions={instructions} />
    </div>
  )
}

export default ViewRecipeDetails;