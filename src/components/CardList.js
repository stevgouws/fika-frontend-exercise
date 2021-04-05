import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

export function CardList({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

CardList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
