import { AreaRect } from "./AreaRect.js";
import { AreaRectCollection } from "./AreaRectCollection.js";
import { Canvas } from "./Canvas.js";
import { Image } from "./Image.js";
import { Menu } from "./Menu.js";
import { RectContentEditor } from "./RectContentEditor.js";

import { AppStatus } from "./constants.js";

export class ImageMapper {
  constructor () {
    this.status = AppStatus.Standby;
    this.canvas = new Canvas();
    this.rects = new AreaRectCollection();
    this.image = new Image();
    this.menu = new Menu();
    this.contentEditor = new RectContentEditor();
  }
}
