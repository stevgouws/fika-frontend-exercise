import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

export function Movie({
  data: { title, overview, release_date, vote_average, vote_count },
}) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{release_date}</Text>
      <Text>
        {vote_average} from {vote_count} votes
      </Text>
      <Text>{overview}</Text>
    </View>
  );
}

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};
