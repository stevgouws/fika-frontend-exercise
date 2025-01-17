import React from "react";
import { render } from "@testing-library/react-native";
import { DiscoverScreen } from ".";
import { useGenres } from "../services/movieService";

jest.mock("../services/movieService");

const navigationMock = { navigate: jest.fn() };

describe("DiscoverScreen", () => {
  it("renders the genre list", async () => {
    useGenres.mockReturnValue({
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
      ],
    });
    const { getByText } = render(
      <DiscoverScreen navigation={navigationMock} />
    );
    getByText(/Action/i);
    getByText("Adventure");
  });

  it("renders loading text whilst loading", () => {
    useGenres.mockReturnValue({
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Adventure" },
      ],
      loading: true,
    });
    const { getByText } = render(
      <DiscoverScreen navigation={navigationMock} />
    );
    getByText("Loading...");
    expect(() => getByText("Action")).toThrow();
  });

  it("displays an error message if there are no genres", () => {
    useGenres.mockReturnValue({
      genres: null,
    });
    const { getByText } = render(
      <DiscoverScreen navigation={navigationMock} />
    );
    getByText(/no genres available/i);
  });

  describe("Error boundary", () => {
    beforeAll(() => {
      jest.spyOn(console, "error").mockReturnValue();
    });

    afterAll(() => {
      console.error.mockRestore();
    });

    it("displays the error if there is one", () => {
      useGenres.mockReturnValue({
        genres: [
          { id: 1, name: "Action" },
          { id: 2, name: "Adventure" },
        ],
        error: new Error("Kaboom"),
      });
      expect(() =>
        render(<DiscoverScreen navigation={navigationMock} />)
      ).toThrow("Kaboom");
    });
  });
});
