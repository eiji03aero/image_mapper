import React from "react";
import styled from "styled-components";
import CloudUploadOutlineIcon from "mdi-react/CloudUploadOutlineIcon";

import color from "../utils/color.js";

const StandbyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  color: ${color.darkGrey};
  svg {
    fill: ${color.darkGrey};
  }
`;

export const Standby = ({
  onUploadPicture
}) => {
  return (
    <StandbyStyled
      onClick={onUploadPicture}
    >
      <CloudUploadOutlineIcon size={120}/>
      <p>Click here to upload picture</p>
    </StandbyStyled>
  );
}
