import React from "react";
import t from "prop-types";
import StyledOutlinedButton from "./index.styles";
import defaultTheme from "../../../theme/default";
const OutlinedButton = props => <StyledOutlinedButton {...props} />;

OutlinedButton.propTypes = {
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

OutlinedButton.defaultProps = {
  type: "primary",
  theme: defaultTheme
};

export default OutlinedButton;
