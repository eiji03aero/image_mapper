import { AreaRect } from "./AreaRect.js";
import { AreaRectCollection } from "./AreaRectCollection.js";
import { BackdropImage } from "./BackdropImage.js";

import { AppStatus } from "../constants.js";

export class ImageMapper {
  constructor () {
    this.appStatus          = AppStatus.Standby;
    this.areaRectCollection = new AreaRectCollection();
    this.backdropImage      = new BackdropImage();
  }

  get isStandby () { return this.appStatus === AppStatus.Standby; }
  get isCreateRect () { return this.appStatus === AppStatus.CreateRect; }
  get isEditRect () { return this.appStatus === AppStatus.EditRect; }
  get isEditRectContent () { return this.appStatus === AppStatus.EditRectContent; }

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

  addNewRect (params) {
    this.areaRectCollection.addNew(params);
  }

  updateNewRectStyle (params) {
    this.areaRectCollection.updateNewRectStyle(params);
  }

  commitNewRect () {
    this.areaRectCollection.commitNewRect();
  }

  startDraggingRect (params) {
    this.areaRectCollection.startDraggingRect(params);
  }

  draggingRect (params) {
    this.areaRectCollection.draggingRect(params);
  }

  finishDraggingRect () {
    this.areaRectCollection.finishDraggingRect();
  }

  findRect (id) {
    return this.areaRectCollection.find(id);
  }

  removeRect (id) {
    this.areaRectCollection.remove(id);
  }

  updateRectContent (id, data) {
    this.areaRectCollection.updateRectContent(id, data);
  }
}
