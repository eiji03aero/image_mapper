import { AreaRect } from "./AreaRect.js";
import { AreaRectCollection } from "./AreaRectCollection.js";
import { Canvas } from "./Canvas.js";
import { BackdropImage } from "./BackdropImage.js";
import { Menu } from "./Menu.js";
import { RectContentEditor } from "./RectContentEditor.js";

import { AppStatus } from "../constants.js";

export class ImageMapper {
  constructor () {
    this.appStatus     = AppStatus.Standby;
    this.canvas        = new Canvas();
    this.rects         = new AreaRectCollection();
    this.backdropImage = new BackdropImage();
    this.menu          = new Menu();
    this.contentEditor = new RectContentEditor();
  }

  get isStandby () { return this.appStatus === AppStatus.Standby; }

  updateAppStatus (status) {
    this.appStatus = status;
  }

  setImageFile (file) {
    this.backdropImage.setImageFile(file);
    this.updateAppStatus(AppStatus.CreateRect);
  }

  setBackdropImageDimention (params) {
    this.backdropImage.setDimention(params);
  }
}
