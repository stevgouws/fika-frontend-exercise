import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Search } from "../components";
import { useSearch } from "../services/movieService";

jest.mock("../services/movieService");

describe("Search", () => {
  it("shows search results", () => {
    useSearch.mockReturnValue({
      results: [{ id: 1, title: "Lord of the rings" }],
    });
    const { getByText, getByRole } = render(<Search />);
    expect(() => getByText("Lord of the rings")).toThrow();
    fireEvent.changeText(getByRole("search"), "Lord");
    getByText("Lord of the rings");
  });

  it("renders loading text whilst loading", () => {
    useSearch.mockReturnValue({
      results: [{ results: [{ id: 1, title: "Lord of the rings" }] }],
      loading: true,
    });
    const { getByText, getByRole } = render(<Search />);
    fireEvent.changeText(getByRole("search"), "Lord");
    getByText("Loading...");
    expect(() => getByText("Lord of the rings")).toThrow();
  });

  describe("Error boundary", () => {
    beforeAll(() => {
      jest.spyOn(console, "error").mockReturnValue();
    });

    afterAll(() => {
      console.error.mockRestore();
    });

    it("displays the error if there is one", () => {
      useSearch.mockReturnValue({
        results: [{ id: 1, title: "Lord of the rings" }],
        error: new Error("Kaboom"),
      });

      expect(() => {
        const { getByRole } = render(<Search />);
        fireEvent.changeText(getByRole("search"), "Lord");
      }).toThrow("Kaboom");
    });
  });
});
