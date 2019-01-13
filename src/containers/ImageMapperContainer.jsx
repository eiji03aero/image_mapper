import React from "react";
import _ from "lodash"

import { ImageMapper } from "../components/ImageMapper.jsx";
import { ImageMapper as ImageMapperDomain } from "../domain/ImageMapper.js";

import { Context } from "../context.js";

function updateState ({ descriptor }) {
  const decorated = descriptor.value;
  descriptor.value = function (...args) {
    const result = decorated.apply(this, args);
    this.setState({ imageMapper: this.state.imageMapper });
  }
}

export class ImageMapperContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imageMapper: new ImageMapperDomain(),
    };

    this.doms = {
      imageMapper: null,
      canvas: null,
      fileInput: null,
    };

    _.bindAll(this, [
      'updateAppStatus', 'setImageFile', 'setBackdropImageDimention',
      'registerImageMapper', 'registerCanvas', 'registerFileInput'
    ]);
  }

  registerImageMapper (element) { this.doms.imageMapper = element; }
  registerCanvas (element) { this.doms.canvas = element; }
  registerFileInput (element) { this.doms.fileInput = element; }

  @updateState
  updateAppStatus (status) { this.state.imageMapper.updateAppStatus(status); }

  @updateState
  setImageFile (file) { this.state.imageMapper.setImageFile(file); }

  @updateState
  setBackdropImageDimention (params) { this.state.imageMapper.setBackdropImageDimention(params); }

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
      doms: this.doms,
      onRegisterImageMapper: this.registerImageMapper,
      onRegisterCanvas: this.registerCanvas,
      onRegisterFileInput: this.registerFileInput,
      onUpdateAppStatus: this.updateAppStatus,
      onSetImageFile: this.setImageFile,
      onSetBackdropImageDimention: this.setBackdropImageDimention,
    };
  }
}
