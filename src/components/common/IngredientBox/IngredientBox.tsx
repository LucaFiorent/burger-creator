import React, { FC } from "react";
import { IngredientType } from "../MyBurgerType";
import "./IngredientBox.css";
import RemoveIcon from "../../common/RemoveIcon/RemoveIcon";
import AddIcon from "../../common/AddIcon/AddIcon";

interface IngredientProps {
  ingredient: IngredientType;
  button: string;
  nameActive: boolean;
}

const IngredientBox: FC<IngredientProps> = ({
  ingredient,
  button,
  nameActive,
}) => {
  // Prepare the URL for the ingredient image
  const prepUrl = `https://react-interview.xm.com/img/${ingredient.src}`;

  // Conditionally render the button component based on the button type
  const buttonComp =
    button === "remove" ? (
      <div className="icn rmvIcn">
        <RemoveIcon size={22} color="#505059" />
      </div>
    ) : (
      <div className="icn addIcn">
        <AddIcon size={22} color="#505059" />
      </div>
    );

  return (
    <div className="ingredientWrapper">
      {/* Button section for add or remove functionality */}
      <div className={`btn ${button === "remove" ? "rmvBtn" : "addBtn"}`}>
        <p>{button}</p>
        {buttonComp}
      </div>
      {/* Ingredient display section */}
      <div
        className="ingredientContainer"
        data-ingname={nameActive && "active"}
      >
        <img src={prepUrl} alt={`ingredient: ${ingredient.name}`} />
        {nameActive && <p className="ingredientName">{ingredient.name}</p>}
      </div>
      {/* Background shadow effects */}
      <div className="backgroundShadowColor" />
      <div className="backgroundShadowColorWhite" />
    </div>
  );
};

export default IngredientBox;
