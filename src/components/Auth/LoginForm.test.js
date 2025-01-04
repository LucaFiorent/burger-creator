import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import { screen, render, fireEvent } from "@testing-library/react";

describe("LoginForm Component", () => {
  it("fire onClick on Sign in correctly", () => {
    const errMss = { title: "", errText: "" };
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} errMss={errMss} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("if an error is passed with the prop errMss, render error correctly", () => {
    const errMss = { title: "Test err titlte", errText: "Test err text" };
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} errMss={errMss} />);

    const errTitle = screen.getByText("Test err titlte");
    const errText = screen.getByText("Test err text");

    expect(errTitle).toBeInTheDocument();
    expect(errText).toBeInTheDocument();
  });
});
