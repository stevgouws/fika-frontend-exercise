import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";
import { Colours } from "../../styles";

export function UI_TouchableHighlight(props) {
  return (
    <TouchableHighlight {...props} underlayColor={Colours.PRIMARY_250}>
      {props.children}
    </TouchableHighlight>
  );
}

UI_TouchableHighlight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};
