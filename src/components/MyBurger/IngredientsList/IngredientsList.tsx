import React, { FC } from "react";
import { IngredientType } from "../MyBurgerType";
import "./IngredientsList.css";
import Title from "components/common/Title/Title";
import IngredientBox from "../../common/IngredientBox/IngredientBox";

interface IngredientsListProps {
  ingredientList: IngredientType[];
  selectedIngredientHandler: (props: IngredientType) => void;
}

const IngredientsList: FC<IngredientsListProps> = ({
  ingredientList,
  selectedIngredientHandler,
}) => {
  // Map over the ingredient list to create a list of IngredientBox components
  const ingredients = ingredientList.map((ingredient: IngredientType) => {
    return (
      <div
        className="ingredientWrapper"
        key={ingredient.id}
        onClick={() => selectedIngredientHandler(ingredient)}
      >
        <IngredientBox ingredient={ingredient} button="add" nameActive={true} />
      </div>
    );
  });

  return (
    <div className="ingredientsContentWrapper">
      <Title title="Ingredients:" />
      <div className="ingredientsWrapper">{ingredients}</div>
    </div>
  );
};

export default IngredientsList;
