import React from "react";

import { MenuContainer } from "../containers/MenuContainer.jsx";

export class ImageMapper extends React.Component {
  render () {
    return (
      <div>
        <h1>image mapper</h1>
        <h3>{this.props.imageMapper.appStatus}</h3>
        <hr />
        <MenuContainer/>
      </div>
    );
  }
}
