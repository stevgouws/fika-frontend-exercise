import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Movie } from "../components";
import { useMovie } from "../services/movieService";

export function Detail({ route }) {
  const { id } = route.params;
  const { details, loading, error } = useMovie({ id });
  if (loading) return <Text>Loading...</Text>;
  if (!details) {
    return (
      <Text>
        No details available for this movie, try searching for a movie...
      </Text>
    );
  }
  if (error) throw error;

  return <Movie data={details} />;
}

Detail.propTypes = {
  route: PropTypes.object.isRequired,
};
