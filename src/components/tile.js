import React from "react";
import StyledTile from "./tile.style";

export default ({
  size,
  i,
  position,
  moveTile,
  gameInProgress,
  total,
  completedPosition
}) => (
  <StyledTile
    left={position.left}
    top={position.top}
    completedLeft={completedPosition.left}
    completedTop={completedPosition.top}
    i={i}
    size={size}
    onClick={moveTile.bind(null, i)}
    total={total}
  >
    {i+1}
  </StyledTile>
);
