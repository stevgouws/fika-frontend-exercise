import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ErrorBoundary } from "./ErrorBoundary";
import { DiscoverScreen, GenreScreen, DetailScreen } from "./screens";
import { BaseLayout } from "./components/BaseLayout";

const Stack = createStackNavigator();

export function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="DiscoverScreen" options={{ title: "Discover" }}>
            {props => (
              <BaseLayout>
                <DiscoverScreen {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="GenreScreen"
            options={({ route }) => ({ title: route.params.name })}
          >
            {props => (
              <BaseLayout>
                <GenreScreen {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="DetailScreen"
            options={({ route }) => ({ title: route.params.title })}
          >
            {props => (
              <BaseLayout>
                <DetailScreen {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

registerRootComponent(App);
