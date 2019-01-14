import React from "react";
import _ from "lodash"

import { Menu } from "../components/Menu.jsx";

import { Context } from "../context.js";
import { AppStatus } from "../constants.js";

export class MenuContainer extends React.Component {
  static contextType = Context;

  render () {
    return (
      <Menu
        appStatus={this.context.imageMapper.appStatus}
        onClickCreateRect={e => this.context.onUpdateAppStatus(AppStatus.CreateRect)}
        onClickEditRect={e => this.context.onUpdateAppStatus(AppStatus.EditRect)}
        onClickEditRectContent={e => this.context.onUpdateAppStatus(AppStatus.EditRectContent)}
      />
    );
  }
}
