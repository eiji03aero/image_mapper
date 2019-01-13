import React from "react";
import styled from "styled-components";

const BackdropImageStyled = styled.img`
  width: 100%;
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
    const {
      width,
      imageUrl,
    } = this.props;

    return (
      <BackdropImageStyled
        ref={this.image}
        src={imageUrl}
      />
    );
  }
};
