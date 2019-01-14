import _ from "lodash";

import { AreaRect } from "./AreaRect.js";
import { AreaRectStatus } from "../constants.js";

export class AreaRectCollection {
  constructor () {
    this.areaRects = [];
    this.createStartPoint = { x: 0, y: 0 };
    this.draggingPoint = { x: 0, y: 0 };
  }

  get all () { return this.areaRects; }

  find (id) {
    return _.find(this.areaRects, rect => rect.id === id);
  }

  remove (id) {
    this.areaRects = _.filter(this.areaRects, rect => rect.id !== id);
  }

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

  startDraggingRect ({ id, x, y }) {
    this.draggingPoint = { x: x, y: y };
  }

  draggingRect ({ id, x, y }) {
    this.areaRects = _.map(this.areaRects, (rect) => {
      if (rect.id === id) {
        const diffX = x - this.draggingPoint.x;
        const diffY = y - this.draggingPoint.y;
        rect.updatePoint({
          x1: rect.x1 + diffX,
          x2: rect.x2 + diffX,
          y1: rect.y1 + diffY,
          y2: rect.y2 + diffY,
        });
        this.draggingPoint = { x: x, y: y };
      }
      return rect;
    });
  }

  finishDraggingRect () {
    this.areaRects = this.validateRects();
  }

  updateRectContent (id, data) {
    this.areaRects = _.map(this.areaRects, (rect) => {
      if (rect.id === id) {
        rect.updateContent(data);
      }
      return rect;
    });
  }

  /* -------------------- Private methods -------------------- */
  validateRects () {
    return _.reduce(this.areaRects, (accum, rect) => {
      rect.validate();
      return rect.hasValidSize
        ? _.concat(accum, rect)
        : accum;
    }, []);
  }
}
