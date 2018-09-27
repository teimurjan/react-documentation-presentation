import React from "react";
import t from "prop-types";
import defaultTheme from "../../theme/default";
import StyledButton from "./index.styles";

const Button = props => <StyledButton {...props} />;

export const buttonPropTypes = {
  /**
   * Button type
   */
  type: t.oneOf(["info", "warning", "danger", "primary"]),
  /**
   * Styled-components theme
   */
  theme: t.shape({
    colors: t.shape({
      warning: t.string.isRequired,
      primary: t.string.isRequired,
      danger: t.string.isRequired,
      info: t.string.isRequired
    }).isRequired,
  })
};

Button.propTypes = buttonPropTypes;

Button.defaultProps = {
  type: "primary",
  theme: defaultTheme
};

export default Button;
