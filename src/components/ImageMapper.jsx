import React from "react";
import styled from "styled-components";

import { StandbyContainer } from "../containers/StandbyContainer.jsx";
import { CanvasContainer } from "../containers/CanvasContainer.jsx";
import { MenuContainer } from "../containers/MenuContainer.jsx";
import { RectContentEditorContainer } from "../containers/RectContentEditorContainer.jsx";
import { FileInputContainer } from "../containers/FileInputContainer.jsx";

import color from "../utils/color.js";

const ImageMapperWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.lightBlueGrey};
  border: 1px solid ${color.blueGrey}
  border-radius: .5rem;
`;

const ImageMapperStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export class ImageMapper extends React.Component {
  constructor (props) {
    super(props);
    this.box = React.createRef();
  }

  componentDidMount () {
    this.props.onRegisterImageMapper(this.box.current);
  }

  render () {
    return (
      <ImageMapperWrapperStyled>
        <ImageMapperStyled ref={this.box}>

          { this.props.imageMapper.isStandby ? (
            <StandbyContainer/>
          ) : (
            <React.Fragment>
              <CanvasContainer/>
              <MenuContainer/>
            </React.Fragment>
          )}

          { this.props.imageMapper.isEditRectContent && this.props.targetRectId && (
            <RectContentEditorContainer/>
          )}

          <FileInputContainer/>

        </ImageMapperStyled>
      </ImageMapperWrapperStyled>
    );
  }
}
