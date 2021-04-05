import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { App } from "./App";
import { useGenres, useDiscover } from "./services/movieService";

jest.mock("./services/movieService");

describe("App", () => {
  beforeAll(() => {
    useGenres.mockReturnValue({
      genres: [{ id: 1, name: "Action" }],
    });
    useDiscover.mockReturnValue({
      movies: [{ id: 1, title: "Godzilla" }],
    });
  });

  describe("Testing Setup", () => {
    it("should throw an error if text is not on the page ", () => {
      const { getByText } = render(<App />);
      expect(() => getByText("This is not on the page")).toThrow();
    });
  });

  it("renders the Discover screen initially", () => {
    const { getByText } = render(<App />);
    getByText("Discover");
  });

  it("Routes to the genre page when an item is pressed", () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText("Action"));
    getByText("Genre");
  });
});
