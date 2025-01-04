import "@testing-library/jest-dom";
import IngredientBox from "./IngredientBox";
import { screen, render } from "@testing-library/react";

const url = "https://react-interview.xm.com/img/";
describe("IngredientBox Component", () => {
  const mockIngredient = { id: 0, name: "banana", src: "banana.png" };
  it("renders the ingredient image and name when nameActive is true", () => {
    render(
      <IngredientBox
        ingredient={mockIngredient}
        button="remove"
        nameActive={true}
      />
    );

    const ingredientImage = screen.getByAltText(/ingredient: banana/i);
    expect(ingredientImage).toHaveAttribute("src", url + mockIngredient.src);

    const ingredientName = screen.getByText(/banana/i);
    expect(ingredientName).toBeInTheDocument();

    expect(screen.getByText(/remove/i)).toBeInTheDocument();
  });

  it("renders the ingredient image, alt text and name when nameActive is false", () => {
    render(
      <IngredientBox
        ingredient={mockIngredient}
        button="remove"
        nameActive={false}
      />
    );

    const ingredientImage = screen.getByAltText(/ingredient: banana/i);
    expect(ingredientImage).toHaveAttribute("src", url + mockIngredient.src);

    const ingredientName = screen.queryByText(/banana/i);
    expect(ingredientName).not.toBeInTheDocument();

    expect(screen.getByText(/remove/i)).toBeInTheDocument();
  });

  it(`renders the remove button when the prop button is "remove"`, () => {
    render(
      <IngredientBox
        ingredient={mockIngredient}
        button="remove"
        nameActive={false}
      />
    );
    const removeButton = screen.getByText(/Remove/i);
    expect(removeButton).toBeInTheDocument();
  });

  it(`renders the correct class when the prop button is "remove"`, () => {
    const { container } = render(
      <IngredientBox
        ingredient={mockIngredient}
        button="remove"
        nameActive={false}
      />
    );
    const rmvButton = container.querySelector(".rmvBtn");
    expect(rmvButton).toBeInTheDocument();
  });

  it(`renders the add button when the prop button is "add"`, () => {
    render(
      <IngredientBox
        ingredient={mockIngredient}
        button="add"
        nameActive={false}
      />
    );
    const addButton = screen.getByText(/add/i);
    expect(addButton).toBeInTheDocument();
  });

  it(`renders the correct class when the prop button is "add"`, () => {
    const { container } = render(
      <IngredientBox
        ingredient={mockIngredient}
        button="add"
        nameActive={false}
      />
    );
    const addButton = container.querySelector(".addBtn");
    expect(addButton).toBeInTheDocument();
  });
});
