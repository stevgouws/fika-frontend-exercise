import React from "react";
import PropTypes from "prop-types";
import { GenreCard, Search } from "../components";
import { useGenres } from "../services/movieService";
import { CardList, UI_Text } from "../components/ui";

export function DiscoverScreen({ navigation }) {
  const { genres, loading, error } = useGenres();
  if (loading) return <UI_Text>Loading...</UI_Text>;
  if (!genres) {
    return <UI_Text>No Genres available, try searching for a movie...</UI_Text>;
  }
  if (error) throw error;
  return (
    <>
      <Search navigate={navigation.navigate} />
      <CardList>
        {genres.map(genre => {
          return (
            <GenreCard
              key={genre.id}
              {...genre}
              navigate={navigation?.navigate}
            />
          );
        })}
      </CardList>
    </>
  );
}

DiscoverScreen.propTypes = {
  navigation: PropTypes.object,
};
