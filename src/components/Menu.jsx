import React from "react";
import styled from "styled-components";
import ShapeSquarePlusIcon from "mdi-react/ShapeSquarePlusIcon";
import SquareEditOutlineIcon from "mdi-react/SquareEditOutlineIcon";
import CursorMoveIcon from "mdi-react/CursorMoveIcon";

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

  &:hover {
    opacity: .8;
  }

  & + & {
    margin-top: .4rem;
  }
`;

export const Menu = ({
  onClickCreateRect,
  onClickEditRect,
  onClickEditRectContent,
}) => {
  return (
    <MenuWrapperStyled>
      <MenuStyled>

        <MenuButtonStyled onClick={onClickCreateRect}>
          <ShapeSquarePlusIcon/>
        </MenuButtonStyled>

        <MenuButtonStyled onClick={onClickEditRect}>
          <CursorMoveIcon/>
        </MenuButtonStyled>

        <MenuButtonStyled onClick={onClickEditRectContent}>
          <SquareEditOutlineIcon/>
        </MenuButtonStyled>

      </MenuStyled>
    </MenuWrapperStyled>
  );
}
