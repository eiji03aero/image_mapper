import { AreaRectStatus, AreaRectContentType } from "../constants.js";
import uuid from "uuid/v4";

export class AreaRect {
  constructor ({
    status,
    x1, x2,
    y1, y2,
    content,
  }) {
    this.id = uuid();
    this.status = status;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.content = content;
  }

  static create (params) {
    return new this({
      ...params,
      status: AreaRectStatus.Creating,
      content: { type: AreaRectContentType.Url, text: '' },
    });
  }

  get isCreating () { return this.status === AreaRectStatus.Creating; }

  updatePoint (params) {
    this.x1 = params.x1 || this.x1;
    this.x2 = params.x2 || this.x2;
    this.y1 = params.y1 || this.y1;
    this.y2 = params.y2 || this.y2;
  }

  validate () {
    this.status = this.valid
      ? AreaRectStatus.Valid
      : AreaRectStatus.Invalid;
  }

  /* -------------------- Private methods -------------------- */
  get valid () {
    return false;
  }
}
