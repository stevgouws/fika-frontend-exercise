import React from "react";
import { render } from "@testing-library/react-native";
import { App } from "./App";

describe("Testing Setup", () => {
  it("should throw an error if text is not on the page ", () => {
    const { getByText } = render(<App />);
    expect(() => getByText("This is not on the page")).toThrow();
  });
});

describe("App", () => {
  it("renders the Discover screen initially", () => {
    const { getByText } = render(<App />);
    getByText("Discover");
  });
});
