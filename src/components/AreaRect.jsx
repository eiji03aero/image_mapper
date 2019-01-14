import React from "react";
import styled from "styled-components";
import cn from "classnames";
import CursorMoveIcon from "mdi-react/CursorMoveIcon";
import DeleteIcon from "mdi-react/DeleteIcon";

import { AppStatus, AreaRectStatus } from "../constants.js";
import color from "../utils/color.js";

const AreaRectStyled = styled.div`
  position: absolute;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;

    &__box {
      width: 100%;
      height: 100%;
      background-color: grey;
      border: 1px solid black;
      opacity: .4;
    }
    &__button {
      display: none;
    }
  }

  &.active {
    .inner__box {
      opacity: .6;
    }
  }

  &.${AreaRectStatus.Creating} {
    .inner__box {
      background-color: ${color.red};
      border-color: ${color.darkRed};
      opacity: .6;
    }
  }

  &.${AreaRectStatus.Valid} {
    .inner__box {
      background-color: ${color.blue};
      border-color: ${color.darkBlue};
    }
  }

  &.${AreaRectStatus.Invalid} {
    .inner__box {
      background-color: ${color.red};
      border-color: ${color.darkRed};
    }
  }

  &.active {
    &.${AppStatus.EditRect} {
      .inner {
        &__button {
          display: flex;
          position: absolute;
          justify-content: center;
          align-items: center;
          padding: .4rem;
          border: 1px solid ${color.darkGrey};
          border-radius: .4rem;
          cursor: pointer;

          svg {
            fill: white;
          }

          &:hover {
            opacity: .9;
          }

          &.move {
            background-color: ${color.blue};
            top: -1rem;
            left: -1rem;
            cursor: move;
          }
          &.delete {
            background-color: ${color.red};
            top: -1rem;
            right: -1rem;
          }
        }
      }
    }
  }
`;

export const AreaRect = ({
  id,
  active,
  appStatus,
  status,
  x1, x2, y1, y2,
  onClickRect,
  onStartDraggingRect,
  onDraggingRect,
  onFinishDraggingRect,
  onRemoveRect,
}) => {
  const style = {
    top:    y1  * 100 + '%',
    bottom: 100 - (y2 * 100) + '%',
    left:   x1  * 100 + '%',
    right:  100 - (x2 * 100) + '%',
  };
  const rectClassName = cn({
    [`${status}`]: true,
    [`${appStatus}`]: true,
    active: active,
  });

  return (
    <AreaRectStyled className={rectClassName}
      style={style}
      onClick={e => onClickRect(e, id)}
    >
      <div className="inner">
        <div className="inner__box"></div>

        <div className="inner__button move"
          onMouseDown={e => onStartDraggingRect(e, id)}
          onMouseMove={e => onDraggingRect(e, id)}
          onMouseUp={e => onFinishDraggingRect(e, id)}
        >
          <CursorMoveIcon size={16}/>
        </div>

        <div className="inner__button delete"
          onClick={e => onRemoveRect(id)}
        >
          <DeleteIcon size={16}/>
        </div>
      </div>
    </AreaRectStyled>
  );
}
