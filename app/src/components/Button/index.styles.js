import styled from "styled-components";

export const colorSelector = props => props.theme.colors[props.type || "primary"];

export default styled.button`
  height: 40px;
  width: 100px;
  background: ${colorSelector};
  border: 2px solid ${colorSelector};
  color: white;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;

  &:hover {
    opacity: 0.85;
  }
`;
