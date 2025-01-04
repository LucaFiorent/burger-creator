import React, { FC } from "react";
import { IngredientType } from "../MyBurgerType";
import "./ClickableIngredient.css";
import RemoveIcon from "../../common/RemoveIcon/RemoveIcon";

interface IngredientProps {
  ingredient: IngredientType;
}

const ClickableIngredient: FC<IngredientProps> = ({ ingredient }) => {
  // Prepare the URL for the ingredient image
  const prepUrl = `https://react-interview.xm.com/img/${ingredient.src}`;
  // Remove button component with a remove icon
  const removeButton = (
    <div className="removeIcon">
      <RemoveIcon size={22} color="#EB7E40" />
    </div>
  );

  return (
    <div className="imageWrapper">
      <img src={prepUrl} alt={`ingredient: ${ingredient.name}`} />
      {removeButton /* Render the remove button */}
    </div>
  );
};
export default ClickableIngredient;
