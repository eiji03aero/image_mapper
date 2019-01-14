import React from "react";
import styled from "styled-components";
import ShapeSquarePlusIcon from "mdi-react/ShapeSquarePlusIcon";
import SquareEditOutlineIcon from "mdi-react/SquareEditOutlineIcon";
import CursorMoveIcon from "mdi-react/CursorMoveIcon";

import { AppStatus } from "../constants.js";
import color from "../utils/color.js";

const MenuWrapperStyled = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuButtonStyled = styled.div`
  display flex;
  align-items: center;
  justify-content: center;
  padding: .4rem;
  background-color: ${color.lightGrey};
  border: 1px solid ${color.blueGrey};
  border-radius: .4rem;
  cursor: pointer;

  &.active {
    background-color: ${color.faintBlue};
  }

  &:hover {
    opacity: .8;
  }

  & + & {
    margin-top: .4rem;
  }
`;

export const Menu = ({
  appStatus,
  onClickCreateRect,
  onClickEditRect,
  onClickEditRectContent,
}) => {
  return (
    <MenuWrapperStyled>
      <MenuStyled>

        <MenuButtonStyled
          className={appStatus === AppStatus.CreateRect && 'active'}
          onClick={onClickCreateRect}
        >
          <ShapeSquarePlusIcon/>
        </MenuButtonStyled>

        <MenuButtonStyled
          className={appStatus === AppStatus.EditRect && 'active'}
          onClick={onClickEditRect}>
          <CursorMoveIcon/>
        </MenuButtonStyled>

        <MenuButtonStyled
          className={appStatus === AppStatus.EditRectContent && 'active'}
          onClick={onClickEditRectContent}
        >
          <SquareEditOutlineIcon/>
        </MenuButtonStyled>

      </MenuStyled>
    </MenuWrapperStyled>
  );
}
