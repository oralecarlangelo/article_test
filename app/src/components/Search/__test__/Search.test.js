import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "..";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search />, div);
});

it("renders component correctly", () => {
  const { getByTestId } = render(<Search />);

  getByTestId("searchWrapper");
});

it("renders label inside search component correctly", () => {
  const { getByTestId } = render(<Search />);

  getByTestId("searchLabel");
});
