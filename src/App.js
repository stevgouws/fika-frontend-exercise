import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ErrorBoundary } from "./ErrorBoundary";
import { Discover, Genre, Detail } from "./screens";
import { BaseLayout } from "./components/BaseLayout";

const Stack = createStackNavigator();

export function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="Discover">
            {props => (
              <BaseLayout>
                <Discover {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Genre"
            options={({ route }) => ({ title: route.params.name })}
          >
            {props => (
              <BaseLayout>
                <Genre {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Detail"
            options={({ route }) => ({ title: route.params.title })}
          >
            {props => (
              <BaseLayout>
                <Detail {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

registerRootComponent(App);
