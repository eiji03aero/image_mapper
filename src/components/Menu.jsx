import React from "react";

export const Menu = ({
  onClickCreateRect,
  onClickEditRect,
  onClickEditRectContent,
}) => {
  return (
    <div>
      <button onClick={onClickCreateRect}>createRect</button>
      <button onClick={onClickEditRect}>editRect</button>
      <button onClick={onClickEditRectContent}>editRectContent</button>
    </div>
  );
}
