import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, Image } from "react-native";

export function Poster({ title, poster_path }) {
  if (!poster_path) return <Text>{title}</Text>;
  return (
    <Image
      source={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      style={styles.image}
      accessibilityLabel={title}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
  },
});

Poster.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
};
