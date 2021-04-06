import React from "react";
import PropTypes from "prop-types";
import { CardList, MovieCard } from "../components";
import { useDiscover } from "../services/movieService";
import { UI_Text } from "../components/ui";

export function Genre({ route, navigation }) {
  const { id } = route.params;
  const { movies, loading, error } = useDiscover({ genreId: id });
  if (loading) return <UI_Text>Loading...</UI_Text>;
  if (!movies) {
    return (
      <UI_Text>
        No movies available in this genre, try searching for a movie...
      </UI_Text>
    );
  }
  if (error) throw error;

  return (
    <CardList>
      {movies.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            data={movie}
            navigate={navigation?.navigate}
          />
        );
      })}
    </CardList>
  );
}

Genre.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object,
};
