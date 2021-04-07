import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Spacing } from "../styles";
import { H3, UI_TouchableHighlight } from "../components/ui";

export function GenreCard({ id, name, navigate }) {
  return (
    <UI_TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigate("GenreScreen", { id, name });
      }}
    >
      <H3 noMargin>{name}</H3>
    </UI_TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.MD,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

GenreCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func,
};
