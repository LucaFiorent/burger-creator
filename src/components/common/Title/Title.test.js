import "@testing-library/jest-dom";
import Title from "./Title";
import { screen, render } from "@testing-library/react";

describe("MyButton Component", () => {
  it("renders the title correctly", () => {
    render(<Title title="test title" />);

    const titleRole = screen.getByRole("heading");
    expect(titleRole).toBeInTheDocument();
  });
});
