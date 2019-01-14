import React from "react";
import _ from "lodash"

import { Canvas } from "../components/Canvas.jsx";

import { Context } from "../context.js";
import { AppStatus } from "../constants.js";

export class CanvasContainer extends React.Component {
  static contextType = Context;

  render () {
    return (
      <Canvas
        targetRectId={this.context.targetRectId}
        appStatus={this.context.imageMapper.appStatus}
        areaRects={this.context.imageMapper.areaRectCollection.all}
        height={this.context.imageMapper.backdropImage.height}
        onRegisterCanvas={this.context.onRegisterCanvas}
        onMouseDown={this.context.onCanvasMouseDown}
        onMouseMove={this.context.onCanvasMouseMove}
        onMouseUp={this.context.onCanvasMouseUp}
        onClickRect={this.context.onClickRect}
        onStartDraggingRect={this.context.onStartDraggingRect}
        onDraggingRect={this.context.onDraggingRect}
        onFinishDraggingRect={this.context.onFinishDraggingRect}
        onRemoveRect={this.context.onRemoveRect}
      />
    );
  }
}
