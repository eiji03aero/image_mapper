import React from "react";
import _ from "lodash"

import { ImageMapper } from "../components/ImageMapper.jsx";
import { ImageMapper as ImageMapperDomain } from "../domain/ImageMapper.js";

import { Context } from "../context.js";

export class ImageMapperContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imageMapper: new ImageMapperDomain(),
    };

    _.bindAll(this, [
      'updateAppStatus',
    ]);
  }

  @updateState
  updateAppStatus (status) {
    this.state.imageMapper.updateAppStatus(status);
  }

  render () {
    return (
      <Context.Provider value={this.contextData}>
        <ImageMapper { ...this.contextData } />
      </Context.Provider>
    );
  }

  /* -------------------- Private methods -------------------- */
  get contextData () {
    return {
      ...this.state,
      onUpdateAppStatus: this.updateAppStatus,
    };
  }
}

function updateState ({ descriptor }) {
  const decorated = descriptor.value;
  descriptor.value = function (...args) {
    const result = decorated.apply(this, args);
    this.setState({ imageMapper: this.state.imageMapper });
  }
}
