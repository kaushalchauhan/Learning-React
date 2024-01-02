import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("contact us component test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //   Assertion
    expect(heading).toBeInTheDocument();
  });
  test("should load submit button", () => {
    render(<Contact />);
    const submitBtn = screen.getByText("Submit");
    expect(submitBtn).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    // Quering
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
