import React from "react";
import _ from "lodash"

import { FileInput } from "../components/FileInput.jsx";

import { Context } from "../context.js";
import { AppStatus } from "../constants.js";

export class FileInputContainer extends React.Component {
  static contextType = Context;

  constructor (props) {
    super(props);
    this.fileInput = React.createRef();
  }

  componentDidMount () {
    this.context.onRegisterFileInput(this.fileInput.current);
  }

  onChange = (e) => {
    const imageFile = e.target.files[0];
    this.context.onSetImageFile(imageFile);
  }

  render () {
    return (
      <FileInput
        ref={this.fileInput}
        onChange={this.onChange}
      />
    );
  }
}
