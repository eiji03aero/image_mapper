import _ from "lodash";

import { AreaRect } from "./AreaRect.js";
import { AreaRectStatus } from "../constants.js";

export class AreaRectCollection {
  constructor () {
    this.areaRects = [];
    this.createStartPoint = { x: 0, y: 0 };
  }

  get all () { return this.areaRects; }

  addNew (params) {
    this.createStartPoint = { x: params.x1, y: params.y1 };
    this.areaRects = _.concat(this.areaRects, AreaRect.create(params));
  }

  updateNewRectStyle (params) {
    this.areaRects = _.map(this.areaRects, (rect) => {
      if (rect.isCreating) {
        rect.updatePoint({
          x1: this.createStartPoint.x > params.x ? params.x : this.createStartPoint.x,
          x2: this.createStartPoint.x < params.x ? params.x : this.createStartPoint.x,
          y1: this.createStartPoint.y > params.y ? params.y : this.createStartPoint.y,
          y2: this.createStartPoint.y < params.y ? params.y : this.createStartPoint.y,
        });
      }
      return rect;
    });
  }

  commitNewRect () {
    this.areaRects = this.validateRects();
  }

  /* -------------------- Private methods -------------------- */
  validateRects () {
    return _.map(this.areaRects, (rect) => {
      rect.validate();
      return rect;
    });
  }
}
