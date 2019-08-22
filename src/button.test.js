import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import Button from "./button";

afterEach(cleanup);

test("the button is rendered correctly", () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});

test("button called function on click", () => {
  const handleClick = jest.fn();

  const { getByTestId } = render(<Button onClick={handleClick}></Button>);

  expect(getByTestId("button")).toBeTruthy();

  fireEvent.click(getByTestId("button"));
  expect(handleClick).toHaveBeenCalled();
});

test("loading element is rendered and have progress attribute", async () => {
  const { getByTestId } = render(<Button loading={true} progress={100} />);

  const loadingElement = await waitForElement(() => getByTestId("loading"));

  expect(loadingElement).toBeInTheDocument();

  expect(loadingElement).toHaveAttribute("progress");
});

test("background color of the button is correct", () => {
  const { container } = render(<Button />);
  expect(container.querySelector("button")).toHaveStyle(`
    background-color: #504de5;
`);
});

test("color of the button is correct", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("button")).toHaveStyle(`
  color: white`);
});

test("button have disabled attribute", () => {
  const { getByTestId } = render(<Button disabled="disabled" />);
  expect(getByTestId("button")).toHaveAttribute("disabled");
});

test("button have type attribute", () => {
  const { getByTestId } = render(<Button type="submit" />);
  expect(getByTestId("button")).toHaveAttribute("type");
});
