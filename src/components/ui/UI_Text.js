import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import { Colours } from "../../styles";

export function UI_Text({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    color: Colours.NEUTRAL_100,
  },
});

UI_Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};
