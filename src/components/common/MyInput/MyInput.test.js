import "@testing-library/jest-dom";
import MyInput from "./MyInput";
import { screen, render, fireEvent } from "@testing-library/react";

describe("MyButton Component", () => {
  it("renders the correct label and the correct placeholder", () => {
    render(
      <MyInput
        label="test label"
        value=""
        placeholder="test placeholder"
        setInputValue={() => {}}
      />
    );

    const label = screen.getByText(/test label/i);
    expect(label).toBeInTheDocument();
    const placeholder = screen.getByPlaceholderText(/test placeholder/i);
    expect(placeholder).toBeInTheDocument();
  });

  it("fire event on typing correctly", () => {
    const onChange = jest.fn();
    render(
      <MyInput
        label="test label"
        value=""
        placeholder="test placeholder"
        setInputValue={onChange}
      />
    );
    const input = screen.getByPlaceholderText(/test placeholder/i);
    fireEvent.change(input, {
      target: { value: "are9chars" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
