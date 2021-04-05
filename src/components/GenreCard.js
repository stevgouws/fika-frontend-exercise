import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import { Colours, Spacing } from "../styles";

export function GenreCard({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colours.BLACK,
    borderWidth: 1,
    padding: Spacing.MD,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

GenreCard.propTypes = {
  name: PropTypes.string,
};
