import styled from 'styled-components';
import StyledButton, {colorSelector} from '../index.styles';

export default styled(StyledButton)`
  color: ${colorSelector};
  background: linear-gradient(to left, white 50%, ${colorSelector} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 400ms ease-in-out;

  &:hover {
    background-position: left bottom;
    color: white;
    opacity: 1;
  }
`;