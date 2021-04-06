import React from "react";
import PropTypes from "prop-types";
import { Text, Image } from "react-native";

export function Poster({ title, poster_path, style }) {
  if (!poster_path) return <Text>{title}</Text>;

  const styles = {
    width: 100,
    height: 150,
    ...style,
  };

  return (
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      style={styles}
      accessibilityLabel={title}
    />
  );
}

Poster.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  style: PropTypes.object,
};
