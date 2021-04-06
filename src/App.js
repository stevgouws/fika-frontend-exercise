import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { ErrorBoundary } from "./ErrorBoundary";
import { DiscoverScreen, GenreScreen, DetailScreen } from "./screens";
import { BaseLayout } from "./components/BaseLayout";
import { Typography } from "./styles";

const Stack = createStackNavigator();
const headerTitleStyle = {
  fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
};

export function App() {
  let [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen
            name="DiscoverScreen"
            options={{
              title: "Discover",
              headerTitleStyle,
            }}
          >
            {props => (
              <BaseLayout>
                <DiscoverScreen {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="GenreScreen"
            options={({ route }) => ({
              title: route.params.name,
              headerTitleStyle,
            })}
          >
            {props => (
              <BaseLayout>
                <GenreScreen {...props} />
              </BaseLayout>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="DetailScreen"
            options={({ route }) => ({
              title: route.params.title,
              headerTitleStyle,
            })}
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
