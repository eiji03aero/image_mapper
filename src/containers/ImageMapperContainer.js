import React from "react";

import { ImageMapper } from "../components/ImageMapper.js";
import { ImageMapper as ImageMapperDomain } from "../domain/ImageMapper.js";

export const Context = React.createContext({
  imageMapper: null,
});

export class ImageMapperContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imageMapper: new ImageMapperDomain(),
    };
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        <ImageMapper { ...this.state } />
      </Context.Provider>
    );
  }
}
