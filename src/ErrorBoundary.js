import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Colours } from "./styles";
import { UI_Text } from "./components/ui";

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
          <UI_Text>Sorry, something went wrong.</UI_Text>
          <UI_Text>{error && error.toString()}</UI_Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.NEUTRAL_700,
    alignItems: "center",
    justifyContent: "center",
  },
});

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
