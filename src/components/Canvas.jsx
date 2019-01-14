import React from "react";
import styled from "styled-components";
import _ from "lodash";

import { AreaRect } from "./AreaRect.jsx";
import { BackdropImageContainer } from "../containers/BackdropImageContainer.jsx";

const CanvasStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
`;

export class Canvas extends React.Component {
  constructor (props) {
    super(props);
    this.canvas = React.createRef();
    this.isDragging = false;
  }

  componentDidMount () {
    this.props.onRegisterCanvas(this.canvas.current);
  }

  render () {
    return (
      <CanvasStyled
        ref={this.canvas}
        style={{ height: this.height }}
        onMouseDown={this.props.onMouseDown}
        onMouseMove={this.props.onMouseMove}
        onMouseUp={this.props.onMouseUp}
      >

        <BackdropImageContainer />

        { _.map(this.props.areaRects, (rect, i) => (
          <AreaRect
            key={i}
            id={rect.id}
            active={this.props.targetRectId === rect.id}
            appStatus={this.props.appStatus}
            status={rect.status}
            x1={rect.x1}
            x2={rect.x2}
            y1={rect.y1}
            y2={rect.y2}
            onClickRect={this.props.onClickRect}
            onStartDraggingRect={this.props.onStartDraggingRect}
            onDraggingRect={this.props.onDraggingRect}
            onFinishDraggingRect={this.props.onFinishDraggingRect}
            onRemoveRect={this.props.onRemoveRect}
          />
        ))}

      </CanvasStyled>
    );
  }

  /* -------------------- Private methods -------------------- */
  get height () {
    return this.props.height
      ? this.props.height
      : 'auto';
  }
};
