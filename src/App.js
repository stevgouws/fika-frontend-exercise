import { registerRootComponent } from "expo";
import React from "react";
import { Text } from "react-native";
import { ErrorBoundary } from "./ErrorBoundary";
import { BaseLayout } from "./components";

export function App() {
  return (
    <ErrorBoundary>
      <BaseLayout>
        <Text>Open up App.js to start working on your app!</Text>
      </BaseLayout>
    </ErrorBoundary>
  );
}

registerRootComponent(App);
