import React from "react";
import PropTypes from "prop-types";
import { Spacing, Typography } from "../../styles";
import { UI_Text } from "../ui";

export function H3({ children, noMargin }) {
  return (
    <UI_Text
      style={{
        marginBottom: noMargin ? 0 : Spacing.MD,
        fontSize: 16,
        fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
      }}
    >
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
  noMargin: PropTypes.bool,
};
