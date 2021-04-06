import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { App } from "./App";
import { useGenres, useDiscover, useMovie } from "./services/movieService";
import { useFonts } from "expo-font";

jest.mock("./services/movieService");
jest.mock("expo-font");

describe("App", () => {
  beforeAll(() => {
    useFonts.mockReturnValue([true]);
    useGenres.mockReturnValue({
      genres: [{ id: 1, name: "Action" }],
    });
    useDiscover.mockReturnValue({
      movies: [{ id: 1, title: "Godzilla" }],
    });
    useMovie.mockReturnValue({
      details: {
        id: 1,
        title: "Godzilla",
        overview: "A really interesting movie synopsis",
      },
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

  describe("Routing", () => {
    it("routes to the genre page and the detail page", async () => {
      const { findByText, getByText } = render(<App />);
      fireEvent.press(getByText("Action"));
      fireEvent.press(getByText("Godzilla"));
      await findByText("A really interesting movie synopsis");
    });
  });
});
