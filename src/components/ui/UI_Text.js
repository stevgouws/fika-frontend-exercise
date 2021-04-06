import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { Colours, Typography } from "../../styles";

export function UI_Text({ children, style }) {
  const styles = {
    color: Colours.NEUTRAL_100,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    ...style,
  };
  return <Text style={styles}>{children}</Text>;
}

UI_Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
  style: PropTypes.object,
};
