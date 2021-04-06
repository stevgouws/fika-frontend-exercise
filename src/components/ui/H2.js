import React from "react";
import PropTypes from "prop-types";
import { Spacing } from "../../styles";
import { UI_Text } from "../ui";

export function H2({ children }) {
  return (
    <UI_Text style={{ marginBottom: Spacing.MD, fontSize: 18 }}>
      {children}
    </UI_Text>
  );
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};
