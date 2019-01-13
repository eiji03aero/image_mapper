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
        height={this.context.imageMapper.backdropImage.height}
        onRegisterCanvas={this.context.onRegisterCanvas}
      />
    );
  }
}
