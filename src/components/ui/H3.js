import React from "react";
import PropTypes from "prop-types";
import { Spacing } from "../../styles";
import { UI_Text } from "../ui";

export function H3({ children }) {
  return (
    <UI_Text style={{ marginBottom: Spacing.MD, fontSize: 16 }}>
      {children}
    </UI_Text>
  );
}

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};
