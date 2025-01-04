import "@testing-library/jest-dom";
import ClickableIngredient from "./ClickableIngredient";
import { screen, render } from "@testing-library/react";

const url = "https://react-interview.xm.com/img/";

describe("ClickableIngredient Component", () => {
  it("image and alt text are rendered correctly", () => {
    render(
      <ClickableIngredient ingredient={{ src: "bacon.png", name: "bacon" }} />
    );

    const image = screen.getByAltText("ingredient: bacon");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", url + "bacon.png");
  });
});
