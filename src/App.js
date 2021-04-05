import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ErrorBoundary } from "./ErrorBoundary";
import { Discover } from "./screens";
import { BaseLayout } from "./components/BaseLayout";

const Stack = createStackNavigator();

export function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Discover">
            {() => (
              <BaseLayout>
                <Discover />
              </BaseLayout>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

registerRootComponent(App);
