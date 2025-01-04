import "@testing-library/jest-dom";
import IngredientsList from "./IngredientsList";
import { screen, render, fireEvent } from "@testing-library/react";

const url = "https://react-interview.xm.com/img/";

describe("IngredientsList Component", () => {
  const mockedIngredients = [
    {
      id: 0,
      name: "kokoretsi",
      src: "kokoretsi.png",
    },
    {
      id: 0,
      name: "seftalia",
      src: "seftalia.png",
    },
  ];

  it("renders ingredients correctly", () => {
    render(
      <IngredientsList
        ingredientList={mockedIngredients}
        selectedIngredientHandler={() => {}}
      />
    );

    const kokoretsi = screen.getByAltText(/ingredient: kokoretsi/i);
    const seftalia = screen.getByAltText(/ingredient: seftalia/i);

    expect(kokoretsi).toBeInTheDocument();
    expect(kokoretsi).toHaveAttribute("src", url + mockedIngredients[0].src);
    expect(seftalia).toBeInTheDocument();
    expect(seftalia).toHaveAttribute("src", url + mockedIngredients[1].src);
  });

  it("fires an event correctly when clicking on an ingredient", () => {
    const onSelect = jest.fn();
    render(
      <IngredientsList
        ingredientList={mockedIngredients}
        selectedIngredientHandler={onSelect}
      />
    );

    const kokoretsi = screen.getByAltText(/ingredient: kokoretsi/i);
    const seftalia = screen.getByAltText(/ingredient: seftalia/i);

    fireEvent.click(kokoretsi);
    fireEvent.click(seftalia);

    expect(onSelect).toHaveBeenCalledTimes(2);
  });
});
