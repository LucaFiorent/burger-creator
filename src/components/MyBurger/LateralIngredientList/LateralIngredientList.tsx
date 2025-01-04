import Title from "components/common/Title/Title";
import { FC } from "react";
import { SelectedIngredientType } from "../MyBurgerType";
import "./LateralIngredientList.css";
import IngredientBox from "../../common/IngredientBox/IngredientBox";

interface LateralIngredientListProps {
  selectedIngredients: SelectedIngredientType[];
  deleteIngredienHandler: (ingredientIndex: string) => void;
}

const LateralIngredientList: FC<LateralIngredientListProps> = ({
  selectedIngredients,
  deleteIngredienHandler,
}) => {
  // Reverse the selected ingredients list for display purposes
  const reversedselectedIngredients = [...selectedIngredients].reverse();
  // Map over the reversed ingredients to create a list of IngredientBox components
  const IngredientsList = reversedselectedIngredients.map(
    (ingredient, index) => {
      const zIndex = selectedIngredients.length - index;
      return (
        <div
          className="lateralngredientWrapper"
          key={`${Date.now()}-${Math.random().toString(36)}`}
          style={{ zIndex }}
          onClick={() => deleteIngredienHandler(ingredient.index)}
        >
          <IngredientBox
            ingredient={ingredient}
            button="remove"
            nameActive={false}
          />
        </div>
      );
    }
  );

  return (
    <div className="lateralIngredientListWrapper">
      <Title title="Added Ingredients:" />
      <div className="lateralIngredientList">{IngredientsList}</div>
    </div>
  );
};

export default LateralIngredientList;
