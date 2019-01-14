import React from "react";
import styled from "styled-components";

const BackdropImageStyled = styled.img`
  width: 100%;
  user-select: none;
  pointer-events: none;
`;

export class BackdropImage extends React.Component {
  constructor (props) {
    super(props);
    this.image = React.createRef();
  }

  componentDidMount () {
    this.props.onSetBackdropImageDimention({
      width: this.image.current.offsetWidth,
      height: this.image.current.offsetHeight,
    });
  }

  render () {
    return (
      <BackdropImageStyled
        ref={this.image}
        src={this.props.imageUrl}
      />
    );
  }
};
