import styled from "styled-components";

const StyledTile = styled.button`
  transition: 200ms ease;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background: ${props =>
    props.i === props.total - 1 ? "none" : 'url("./img/puzzle_img.jpeg") grey'};
  background-position: ${props => -props.completedLeft}px
    ${props => -props.completedTop}px;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  &:disabled {
    cursor: no-drop;
  }
  &:focus {
    outline: none;
  }
`;

export default StyledTile;
