import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { CardList, MovieCard } from "../components";
import { useDiscover } from "../services/movieService";

export function Genre({ route, navigation }) {
  const { id } = route.params;
  const { movies, loading, error } = useDiscover({ genreId: id });
  if (loading) return <Text>Loading...</Text>;
  if (!movies) {
    return (
      <Text>
        No movies available in this genre, try searching for a movie...
      </Text>
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
