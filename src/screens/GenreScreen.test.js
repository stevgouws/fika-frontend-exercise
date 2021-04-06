import React from "react";
import { render } from "@testing-library/react-native";
import { GenreScreen } from ".";
import { useDiscover } from "../services/movieService";

jest.mock("../services/movieService");

describe("GenreScreen", () => {
  describe("given that there are movies for a genre", () => {
    it("renders the genre name and movie list", async () => {
      useDiscover.mockReturnValue({
        movies: [
          { id: 1, title: "Godzilla" },
          { id: 2, title: "King Kong" },
        ],
      });
      const { getByText } = render(
        <GenreScreen route={{ params: { name: "Action" } }} />
      );

      useDiscover.mockReturnValue({
        movies: [
          { id: 1, title: "Godzilla" },
          { id: 2, title: "King Kong" },
        ],
      });
      getByText("Godzilla");
      getByText("King Kong");
    });
  });

  it("renders loading text whilst loading", () => {
    useDiscover.mockReturnValue({
      movies: [{ id: 1, title: "Godzilla" }],
      loading: true,
    });
    const { getByText } = render(
      <GenreScreen route={{ params: { name: "Action" } }} />
    );
    getByText("Loading...");
    expect(() => getByText("Godzilla")).toThrow();
  });

  it("displays an error message if there are no movies", () => {
    useDiscover.mockReturnValue({
      movies: null,
    });
    const { getByText } = render(
      <GenreScreen route={{ params: { name: "Action" } }} />
    );
    getByText(/no movies available/i);
  });

  describe("Error boundary", () => {
    beforeAll(() => {
      jest.spyOn(console, "error").mockReturnValue();
    });
    afterAll(() => {
      console.error.mockRestore();
    });
    it("displays the error if there is one", () => {
      useDiscover.mockReturnValue({
        movies: [{ id: 1, title: "Godzilla" }],
        error: new Error("Kaboom"),
      });
      expect(() =>
        render(<GenreScreen route={{ params: { name: "Action" } }} />)
      ).toThrow("Kaboom");
    });
  });
});
