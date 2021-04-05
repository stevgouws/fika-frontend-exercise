import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { Colours, Spacing } from "../styles";

export function GenreCard({ data: { id, name }, navigate }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigate("Genre", { id, name });
      }}
    >
      <Text>{name}</Text>
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

GenreCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  navigate: PropTypes.func,
};
