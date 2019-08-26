import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import Button from "./button";

afterEach(cleanup);

describe("button test", () => {
  test("the button is rendered correctly", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("button called function on click", () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(<Button onClick={handleClick}></Button>);

    expect(getByTestId("button")).toBeTruthy();
    expect(getByTestId("button")).toHaveProperty("click");
    fireEvent.click(getByTestId("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("loading element is rendered and have progress props", () => {
    const { getByTestId, rerender } = render(
      <Button loading={true} progress={100} />
    );

    const loadingElement = getByTestId("loading");

    expect(loadingElement).toBeInTheDocument();

    expect(loadingElement).toHaveAttribute("progress");
    rerender(<Button loading={false} />);
    expect(loadingElement).not.toBeInTheDocument();
  });

  test("background color of the button is correct", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toHaveStyle(`
  background-color: "#504de5"`);
  });

  test("color of the button is correct", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toHaveStyle(`color: "white"`);
  });

  test("button have disabled attribute", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toHaveProperty("disabled");
  });

  test("button have type attribute", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toHaveProperty("type");
  });

  test("button have style attribute", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toHaveProperty("style");
  });

  test("children for button", () => {
    const { container } = render(<Button />);

    expect(container.children.length).toBe(1);
  });
});
