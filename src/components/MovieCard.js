import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Colours, Spacing } from "../styles";

export function MovieCard({ data: { id, title }, navigate }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigate("Detail", { id, title });
      }}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
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

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  navigate: PropTypes.func,
};
