import "@testing-library/jest-dom";
import MyButton from "./MyButton";
import { screen, render, fireEvent } from "@testing-library/react";

describe("MyButton Component", () => {
  it("renders with corect text", () => {
    render(<MyButton onClick={() => {}}>MyTest</MyButton>);

    const buttonText = screen.getByText(/MyTest/i);
    expect(buttonText).toBeInTheDocument();
  });

  it("fire click correctly", () => {
    const onClick = jest.fn();
    render(<MyButton onClick={onClick}>MyTest</MyButton>);

    fireEvent.click(screen.getByText("MyTest"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
