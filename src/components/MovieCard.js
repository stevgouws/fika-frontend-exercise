import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Poster } from "../components";
import { UI_TouchableHighlight } from "../components/ui";

export function MovieCard({ data: { id, title, poster_path }, navigate }) {
  return (
    <UI_TouchableHighlight
      style={styles.container}
      onPress={() => {
        navigate("Detail", { id, title });
      }}
    >
      <Poster id={id} title={title} poster_path={poster_path} />
    </UI_TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
  navigate: PropTypes.func,
};
