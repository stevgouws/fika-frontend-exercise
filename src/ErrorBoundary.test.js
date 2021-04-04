import React from "react";
import { render } from "@testing-library/react-native";
import { ErrorBoundary } from "./ErrorBoundary";
import { Text } from "react-native";

describe("ErrorBoundary", () => {
  it("renders the content if there is no error ", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Text>Some legit text</Text>
      </ErrorBoundary>
    );
    getByText("Some legit text");
  });

  it("shows the error boundary with error message if there is an error ", async () => {
    jest.spyOn(console, "error").mockReturnValue();

    const ThrowError = () => {
      throw new Error("Kaboom");
    };
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    getByText("Sorry, something went wrong.");
    getByText("Error: Kaboom");

    console.error.mockRestore();
  });
});
