import Ingredients from "../components/ingredients";
import Instructions from "../components/instructions";
import Equipments from "../components/equipments";
// import { useState } from "react";

const viewRecipeDetails = () => {
  // const [equipments,setEquipments] = useState([]);
  const equipments=[];
  return (
    <div>
      <Ingredients />

      <Equipments equipments={equipments} />
      <Instructions />
    </div>
  )
}

export default viewRecipeDetails;