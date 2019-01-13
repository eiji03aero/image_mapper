import React from "react";
import styled from "styled-components";

import { BackdropImageContainer } from "../containers/BackdropImageContainer.jsx";

const CanvasStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export class Canvas extends React.Component {
  constructor (props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount () {
    this.props.onRegisterCanvas(this.canvas.current);
  }

  render () {
    return (
      <CanvasStyled
        ref={this.canvas}
        style={{ height: this.height }}
      >
        <BackdropImageContainer />
      </CanvasStyled>
    );
  }

  /* -------------------- Private methods -------------------- */
  get height () {
    return this.props.height
      ? this.props.height
      : 'auto';
  }
};
