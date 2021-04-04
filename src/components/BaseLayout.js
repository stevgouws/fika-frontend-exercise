import React from "react";
import PropTypes from "prop-types";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Colours } from "../styles";

export function BaseLayout({ children }) {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
