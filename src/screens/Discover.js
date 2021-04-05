import React from "react";
import { Text } from "react-native";
import { CardList, GenreCard } from "../components";
import { useGenres } from "../services/movieService";

export function Discover() {
  const { genres, loading, error } = useGenres();
  if (loading) return <Text>Loading...</Text>;
  if (!genres) {
    return <Text>No Genres available, try searching for a movie...</Text>;
  }
  if (error) throw error;
  return (
    <CardList>
      {genres.map(({ id, name }) => {
        return <GenreCard key={id} name={name} />;
      })}
    </CardList>
  );
}
