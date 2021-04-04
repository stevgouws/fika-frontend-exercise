import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { Colours } from "./styles";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <View style={styles.container}>
          <Text>Sorry, something went wrong.</Text>
          <Text>{error && error.toString()}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
