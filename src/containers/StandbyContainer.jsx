import React from "react";
import _ from "lodash"

import { Standby } from "../components/Standby.jsx";

import { Context } from "../context.js";
import { AppStatus } from "../constants.js";

export class StandbyContainer extends React.Component {
  static contextType = Context;

  uploadPicture = (e) => {
    this.context.doms.fileInput.click();
  }

  render () {
    return (
      <Standby
        onUploadPicture={this.uploadPicture}
      />
    );
  }
}
