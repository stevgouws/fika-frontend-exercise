import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Spacing } from "../styles";
import { UI_Text, UI_TouchableHighlight } from "../components/ui";

export function GenreCard({ data: { id, name }, navigate }) {
  return (
    <UI_TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigate("Genre", { id, name });
      }}
    >
      <UI_Text>{name}</UI_Text>
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
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  navigate: PropTypes.func,
};
