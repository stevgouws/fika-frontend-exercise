import React from "react";
import PropTypes from "prop-types";
import { Searchbar } from "react-native-paper";
import { useSearch } from "../services/movieService";
import { Text, TouchableHighlight } from "react-native";

export function Search({ navigate }) {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <Searchbar placeholder="Search" onChangeText={setQuery} value={query} />
      {!!query && <SearchResults query={query} navigate={navigate} />}
    </>
  );
}

Search.propTypes = {
  navigate: PropTypes.func,
};

export function SearchResults({ query, navigate }) {
  const { results, loading, error } = useSearch({ query });

  if (loading) return <Text>Loading...</Text>;
  if (error) throw error;

  return results.map(({ id, title }) => {
    return (
      <TouchableHighlight
        // style={styles.container}
        key={id}
        onPress={() => {
          navigate("Detail", { id, title });
        }}
      >
        <Text>{title}</Text>
      </TouchableHighlight>
    );
  });
}
