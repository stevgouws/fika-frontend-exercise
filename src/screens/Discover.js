import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { CardList, GenreCard, Search } from "../components";
import { useGenres } from "../services/movieService";

export function Discover({ navigation }) {
  const { genres, loading, error } = useGenres();
  if (loading) return <Text>Loading...</Text>;
  if (!genres) {
    return <Text>No Genres available, try searching for a movie...</Text>;
  }
  if (error) throw error;
  return (
    <>
      <Search navigate={navigation.navigate} />
      <CardList>
        <GenreCard
          key={0}
          data={{ id: 0, name: "All" }}
          navigate={navigation?.navigate}
        />
        {genres.map(genre => {
          return (
            <GenreCard
              key={genre.id}
              data={genre}
              navigate={navigation?.navigate}
            />
          );
        })}
      </CardList>
    </>
  );
}

Discover.propTypes = {
  navigation: PropTypes.object,
};
