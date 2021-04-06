import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Poster } from "../components";
import { UI_Text } from "../components/ui";

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
    <View>
      <Poster title={title} poster_path={poster_path} />
      <UI_Text>{release_date}</UI_Text>
      <UI_Text>
        {vote_average} from {vote_count} votes
      </UI_Text>
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
