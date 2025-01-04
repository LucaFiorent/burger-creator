import "@testing-library/jest-dom";
import Burger from "./Burger";
import { screen, render, fireEvent } from "@testing-library/react";

const url = "https://react-interview.xm.com/img/";
describe("Burger Component", () => {
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

  // 7 selected ingredients
  const mockedSelectedIngredientsx7 = [
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
    {
      id: 0,
      name: "burger patty",
      src: "burger-patty.png",
    },
  ];
  it("renders the 2 selected ingredients image and alt text correctly", () => {
    render(
      <Burger
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={""}
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

  it("renders a error message if the prop errMss is not empty", () => {
    render(
      <Burger
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={"Test error"}
      />
    );

    const errMss = screen.getByText(/Test error/i);
    expect(errMss).toBeInTheDocument();
  });

  it("renders a sub title if there is no error, that prompts to add ingredients", () => {
    const { container } = render(
      <Burger
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={""}
      />
    );

    const addMss = screen.getByText(
      "Add Ingredients to your Burger! (Max. 9 Ingredients)"
    );
    const errMss = container.querySelector(".maxIngredientsMss");

    expect(addMss).toBeInTheDocument();
    expect(errMss).not.toBeInTheDocument();
  });

  it("renders an error massage, and not the add ingredients prompt if the prop errMss is not empty", () => {
    render(
      <Burger
        selectedIngredients={mockedSelectedIngredients}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={"Error"}
      />
    );

    const addMss = screen.queryByText(
      "Add Ingredients to your Burger! (Max. 9 Ingredients)"
    );
    const errMss = screen.getByText("Error");

    expect(addMss).not.toBeInTheDocument();
    expect(errMss).toBeInTheDocument();
  });

  it("the burger image should be, when the selected ingredients is smaller or like 3 80px", () => {
    const selectedPaddy = [
      {
        id: 0,
        name: "burger patty",
        src: "burger-patty.png",
      },
    ];
    const { container } = render(
      <Burger
        selectedIngredients={selectedPaddy}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={""}
      />
    );

    const burgerPatty = container.querySelector(".burgerIngredients");
    expect(burgerPatty.style.height).toBe("80px");
  });

  it("the burger image should be, when the selected ingredients is smaller or like 6, 50px", () => {
    const { container } = render(
      <Burger
        selectedIngredients={mockedSelectedIngredientsx7}
        deleteIngredienHandler={() => {}}
        maxIngredientsMss={""}
      />
    );

    const burgerPatty = container.querySelector(".burgerIngredients");
    expect(burgerPatty.style.height).toBe("50px");
  });

  it("on click on delete ingredient, fire delete handler", () => {
    const selectedPaddy = [
      {
        id: 0,
        name: "burger patty",
        src: "burger-patty.png",
      },
    ];
    const onDelete = jest.fn();

    render(
      <Burger
        selectedIngredients={selectedPaddy}
        deleteIngredienHandler={onDelete}
        maxIngredientsMss={""}
      />
    );

    fireEvent.click(screen.getByAltText("ingredient: burger patty"));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
