import React from "react";
import _ from "lodash"

import { BackdropImage } from "../components/BackdropImage.jsx";

import { Context } from "../context.js";

export class BackdropImageContainer extends React.Component {
  static contextType = Context;

  render () {
    return (
      <BackdropImage
        { ...this.props }
        imageUrl={this.context.imageMapper.backdropImage.imageUrl}
        onSetBackdropImageDimention={this.context.onSetBackdropImageDimention}
      />
    );
  }
}
