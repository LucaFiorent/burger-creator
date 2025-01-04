import "@testing-library/jest-dom";
import LateralIngredientList from "./LateralIngredientList";
import { screen, render, fireEvent } from "@testing-library/react";

const url = "https://react-interview.xm.com/img/";

describe("LateralIngredientList Component", () => {
  const mockedSelectedIngredients = [
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
      <LateralIngredientList
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={() => {}}
      />
    );

    const kokoretsi = screen.getByAltText(/ingredient: kokoretsi/i);
    const seftalia = screen.getByAltText(/ingredient: seftalia/i);

    expect(kokoretsi).toBeInTheDocument();
    expect(kokoretsi).toHaveAttribute(
      "src",
      url + mockedSelectedIngredients[0].src
    );
    expect(seftalia).toBeInTheDocument();
    expect(seftalia).toHaveAttribute(
      "src",
      url + mockedSelectedIngredients[1].src
    );
  });

  it("fires an event correctly on clicking on an ingredient box", () => {
    const onDelete = jest.fn();
    render(
      <LateralIngredientList
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={onDelete}
      />
    );

    const kokoretsi = screen.getByAltText(/ingredient: kokoretsi/i);
    const seftalia = screen.getByAltText(/ingredient: seftalia/i);

    fireEvent.click(kokoretsi);
    fireEvent.click(seftalia);

    expect(onDelete).toHaveBeenCalledTimes(2);
  });
});
