import React from "react";
import styled from "styled-components";
import cn from "classnames";

import { AreaRectContentType } from "../constants.js";
import color from "../utils/color.js";

const RectContentEditorWrapperStyled = styled.div`
  position: absolute;
`;

const RectContentEditorStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 200px;
  background-color: ${color.white};
  border-radius: .4rem;
  overflow: hidden;

  .header {
    display: flex;
  }

  .body {
    flex: 1;
    padding: .4rem;
    textarea {
      display: inline-block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }

  .footer {
    display: flex;
  }

  .button {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem 1rem;
    background-color: ${color.blueGrey};
    cursor: pointer;
    &.active {
      background-color: ${color.darkBlue};
      color: ${color.white};
    }
    &.primary {
      background-color: ${color.blue};
      color: ${color.white};
    }
    &.secondary {
      background-color: ${color.lightGrey};
      color: ${color.black};
    }
  }
`;

export const RectContentEditor = ({
  id,
  type,
  text,
  onUpdateDraftContent,
  onSubmit,
  onCancelEditRectContent,
}) => {
  return (
    <RectContentEditorWrapperStyled>
      <RectContentEditorStyled>
        <div className="header">
          <div className={cn('button', {'active': type === AreaRectContentType.Url})}
            onClick={e => onUpdateDraftContent({type: AreaRectContentType.Url})}
          >
            URL
          </div>
          <div className={cn('button', {'active': type === AreaRectContentType.Message})}
            onClick={e => onUpdateDraftContent({type: AreaRectContentType.Message})}
          >
            Message
          </div>
        </div>

        <div className="body">
          <textarea
            value={text}
            onChange={e => onUpdateDraftContent({text: e.target.value})}
          />
        </div>

        <div className="footer">
          <div className="button secondary"
            onClick={onCancelEditRectContent}
          >
            Cancel
          </div>
          <div className="button primary"
            onClick={onSubmit}
          >
            Submit
          </div>
        </div>
      </RectContentEditorStyled>
    </RectContentEditorWrapperStyled>
  );
}
