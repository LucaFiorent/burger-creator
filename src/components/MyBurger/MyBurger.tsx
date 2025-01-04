import { FC, useState, useEffect, useContext } from "react";
import "./MyBurger.css";
import databaseService from "../../services/database";
import AuthContext from "../../services/AuthContext";
import {
  IngredientType,
  SelectedIngredientType,
} from "../../types/MyBurgerType.ts";
import Burger from "./Burger/Burger";
import IngredientsList from "./IngredientsList/IngredientsList";
import LateralIngredientList from "./LateralIngredientList/LateralIngredientList";

const MyBurger: FC = () => {
  const { token } = useContext(AuthContext);
  const [ingredientList, setIngredientList] = useState<IngredientType[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    SelectedIngredientType[]
  >([]);
  const [maxIngredientsMss, setMaxIngredientsMss] = useState<string>("");

  // useEffect to fetch the ingredients list when the component mounts or the token changes
  useEffect(() => {
    async function fetchIngerdients() {
      const ingredients = await databaseService.getIngredients(token);
      setIngredientList(ingredients);
    }
    fetchIngerdients();
  }, [token]);

  // Handler for selecting an ingredient
  function selectedIngredientHandler(selectedIngredient: IngredientType) {
    if (selectedIngredients.length > 8) {
      setMaxIngredientsMss("Maximum Ingredients Limit Reached");
      return;
    }
    setSelectedIngredients((currState: SelectedIngredientType) => {
      return [
        ...currState,
        {
          index: `${Date.now()}-${Math.random().toString(36)}`,
          ...selectedIngredient,
        },
      ];
    });
  }
  // Handler for deleting an ingredient
  function deleteIngredienHandler(ingredientIndex: string) {
    setMaxIngredientsMss("");
    setSelectedIngredients((currState: SelectedIngredientType) => {
      return currState.filter(
        (ingredient: IngredientType) => ingredient.index !== ingredientIndex
      );
    });
  }

  return (
    <div className="wrapper">
      <div className="wrappBurgerElements">
        <Burger
          selectedIngredients={selectedIngredients}
          deleteIngredienHandler={deleteIngredienHandler}
          maxIngredientsMss={maxIngredientsMss}
        />
        <LateralIngredientList
          selectedIngredients={selectedIngredients}
          deleteIngredienHandler={deleteIngredienHandler}
        />
      </div>
      <IngredientsList
        ingredientList={ingredientList}
        selectedIngredientHandler={selectedIngredientHandler}
      />
    </div>
  );
};

export default MyBurger;
