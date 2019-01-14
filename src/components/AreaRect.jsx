import React from "react";
import styled from "styled-components";
import cn from "classnames";

import { AreaRectStatus } from "../constants.js";
import color from "../utils/color.js";

const AreaRectStyled = styled.div`
  position: absolute;
  background-color: grey;
  border: 1px solid black;
  opacity: .4;

  &.${AreaRectStatus.Creating} {
    background-color: ${color.red};
    border-color: ${color.darkRed};
    opacity: .6;
  }

  &.${AreaRectStatus.Valid} {
    background-color: ${color.blue};
    border-color: ${color.darkBlue};
  }

  &.${AreaRectStatus.Invalid} {
    background-color: ${color.red};
    border-color: ${color.darkRed};
  }
`;

export const AreaRect = ({
  x1, x2, y1, y2,
  status,
}) => {
  const style = {
    top:    y1  * 100 + '%',
    bottom: 100 - (y2 * 100) + '%',
    left:   x1  * 100 + '%',
    right:  100 - (x2 * 100) + '%',
  };
  const rectClassName = cn({
    [`${status}`]: true
  });

  return (
    <AreaRectStyled className={rectClassName}
      style={style}
    />
  );
}
