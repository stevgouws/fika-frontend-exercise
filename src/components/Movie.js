import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Poster } from "../components";
import { UI_Text, H2, H3 } from "../components/ui";
import { Spacing } from "../styles";

export function Movie({
  data: {
    overview,
    release_date,
    vote_average,
    vote_count,
    poster_path,
    title,
  },
}) {
  return (
    <View style={{ padding: Spacing.MD }}>
      <Poster
        title={title}
        poster_path={poster_path}
        style={{ marginBottom: Spacing.MD }}
      />
      <H2>Release Date: {release_date}</H2>
      <H3>
        {vote_average} average from {vote_count} votes
      </H3>
      <UI_Text>{overview}</UI_Text>
    </View>
  );
}

Movie.propTypes = {
  data: PropTypes.shape({
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }),
};
