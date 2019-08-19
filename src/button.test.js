import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./button";

afterEach(cleanup);

test("right render for button", () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});

test("button have right text", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("button")).toHaveTextContent("Login");
});

test("button click and called the right prop function", () => {
  const handleClick = jest.fn();

  const { getByText } = render(<Button onClick={handleClick}></Button>);

  expect(getByText("Login")).toBeTruthy();

  fireEvent.click(getByText(/Login/i));
  expect(handleClick).toHaveBeenCalled();
});

test("right class name", () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("container")).toHaveClass("css-1gafw97");
});

test("check if there is loading after click", async () => {
  const { getByTestId, getByText } = render(<Button />);

  fireEvent.click(getByText("Login"));

  const loadingElement = await waitForElement(() => getByTestId("loading"));

  expect(loadingElement).toBeInTheDocument();
});

test("get text of button element", () => {
  const { container } = render(<Button />);
  expect(container.querySelector("button").innerHTML).toBe("Login");
});

test("check specific style for the button", () => {
  const { container } = render(<Button />);
  expect(container.querySelector("button")).toHaveStyle(`
    background-color: #5737cb;
`);
});

test("check if button is enable", () => {
  const { container } = render(<Button />);
  expect(container.querySelector("button")).toBeEnabled();
});
