import React from "react";

export class ImageMapper extends React.Component {
  render () {
    return (
      <div>
        <h1>domo</h1>
        <button onClick={e => this.props.test()}>click</button>
      </div>
    );
  }
}
