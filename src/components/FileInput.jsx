import React from "react";
import styled from "styled-components";

const FileInputStyled = styled.input`
  position: absolute;
  top: -10000px;
  width: 0;
  height: 0;
  visibility: none;
`;

export const FileInput = React.forwardRef(({
  onChange,
}, ref) => {
  return (
    <FileInputStyled
      ref={ref}
      type="file"
      accept="image/*"
      onChange={onChange}
    />
  );
});
