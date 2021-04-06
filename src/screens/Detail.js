import React from "react";
import PropTypes from "prop-types";
import { UI_Text } from "../components/ui";
import { Movie } from "../components";
import { useMovie } from "../services/movieService";

export function Detail({ route }) {
  const { id } = route.params;
  const { details, loading, error } = useMovie({ id });
  if (loading) return <UI_Text>Loading...</UI_Text>;
  if (!details) {
    return (
      <UI_Text>
        No details available for this movie, try searching for a movie...
      </UI_Text>
    );
  }
  if (error) throw error;

  return <Movie data={details} />;
}

Detail.propTypes = {
  route: PropTypes.object.isRequired,
};
