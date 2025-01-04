import React, { FC } from "react";
import "../../../styles/index.css";
import "./Burger.css";
import { SelectedIngredientType } from "../MyBurgerType";
import ClickableIngredient from "../ClickableIngredient/ClickableIngredient";
import Title from "../../common/Title/Title";

interface BurgerProps {
  selectedIngredients: SelectedIngredientType[];
  deleteIngredienHandler: (ingredientIndex: string) => void;
  maxIngredientsMss: string;
}

const Burger: FC<BurgerProps> = ({
  selectedIngredients,
  deleteIngredienHandler,
  maxIngredientsMss,
}) => {
  // Reverse the array of selected ingredients for rendering
  const reversedselectedIngredients = [...selectedIngredients].reverse();
  // Map over the reversed ingredients array to create a list of rendered ingredient elements
  const IngredientsList = reversedselectedIngredients.map(
    (ingredient, index) => {
      const zIndex = selectedIngredients.length - index;
      const height =
        selectedIngredients.length <= 3
          ? 80
          : selectedIngredients.length >= 6
          ? 50
          : 60;
      // Render each ingredient as a clickable element with its corresponding style and behavior
      return (
        <div
          key={`${Date.now()}-${Math.random().toString(36)}`}
          className={`burgerIngredients`}
          style={{ zIndex, height }}
          onClick={() => deleteIngredienHandler(ingredient.index)}
        >
          <ClickableIngredient key={ingredient.id} ingredient={ingredient} />
        </div>
      );
    }
  );
  // Error message when the maximum number of ingredients is reached
  const errMss = !!maxIngredientsMss && (
    <div className="maxIngredientsMss">
      <p>{maxIngredientsMss}</p>
    </div>
  );

  // Message prompting the user to add ingredients when below the limit
  const addMss = !maxIngredientsMss && (
    <div className="ingredientsTitleMss">
      <h2>Add Ingredients to your Burger! (Max. 9 Ingredients)</h2>
    </div>
  );

  return (
    <div className="burgerViewWrapper">
      <Title title="My Favorite Burger" type="h1" />
      <div className="burgerWrapper">
        <div className="burgerContainer">
          <div className="burgerStyle">
            {/* Top bun */}
            <div className="burgerPatty burgerPattyTop">
              <img src="https://react-interview.xm.com/img/bun_top.png" />
            </div>
            {/* Render selected ingredients if present */}
            {!!selectedIngredients && (
              <div className="ingredients">{IngredientsList}</div>
            )}
            {/* Bottom bun */}
            <div className="burgerPatty burgerPattyBottom">
              <img src="https://react-interview.xm.com/img/bun_bottom.png" />
            </div>
          </div>
        </div>
        {/* Background shadow effects */}
        <div className="burgerBackgroundShadowColor" />
        <div className="burgerBackgroundShadowColorWhite" />
        {errMss /* Error message if the limit is exceeded */}
        {addMss /* Prompt to add ingredients */}
      </div>
    </div>
  );
};

export default Burger;
