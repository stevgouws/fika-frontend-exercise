import React from "react";
import PropTypes from "prop-types";
import { Searchbar } from "react-native-paper";
import { useSearch } from "../services/movieService";
import { View, StyleSheet } from "react-native";
import { UI_Text, UI_TouchableHighlight } from "../components/ui";
import { Colours, Spacing } from "../styles";

export function Search({ navigate }) {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setQuery}
        value={query}
        iconColor={Colours.PRIMARY_300}
        style={styles.searchBar}
      />
      {!!query && <SearchResults query={query} navigate={navigate} />}
    </>
  );
}

Search.propTypes = {
  navigate: PropTypes.func,
};

export function SearchResults({ query, navigate }) {
  const { results, loading, error } = useSearch({ query });

  if (loading) return <UI_Text>Loading...</UI_Text>;
  if (error) throw error;

  return results.map(({ id, title }) => {
    return (
      <UI_TouchableHighlight
        key={id}
        onPress={() => {
          navigate("DetailScreen", { id, title });
        }}
        underlayColor={Colours.PRIMARY_250}
        style={styles.touchContainer}
      >
        <View style={styles.container}>
          <UI_Text>{title}</UI_Text>
        </View>
      </UI_TouchableHighlight>
    );
  });
}

const styles = StyleSheet.create({
  searchBar: { alignSelf: "stretch", borderRadius: 0 },
  touchContainer: { alignSelf: "stretch" },
  container: { padding: Spacing.MD },
});
