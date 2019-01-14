import React from "react";
import _ from "lodash"

import { ImageMapper } from "../components/ImageMapper.jsx";
import { ImageMapper as ImageMapperDomain } from "../domain/ImageMapper.js";

import { Context } from "../context.js";

function updateState ({ descriptor }) {
  const decorated = descriptor.value;
  descriptor.value = function (...args) {
    const result = decorated.apply(this, args);
    this.setState((pre) => ({ imageMapper: pre.imageMapper }));
  };
};

export class ImageMapperContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      imageMapper: new ImageMapperDomain(),
      targetRectId: null,
    };

    this.doms = {
      imageMapper: null,
      canvas: null,
      fileInput: null,
    };

    this.isCanvasDragging = false;
    this.isRectDragging = false;

    _.bindAll(this, [
      'updateAppStatus', 'setImageFile', 'setBackdropImageDimention',
      'addNewRect', 'updateNewRectStyle', 'commitNewRect',
      'setTargetRect', 'unsetTargetRect',
      'startDraggingRect', 'draggingRect', 'finishDraggingRect',
      'removeRect',
      'updateRectContent',
    ]);
  }

  render () {
    return (
      <Context.Provider value={this.contextData}>
        <ImageMapper { ...this.contextData } />
      </Context.Provider>
    );
  }

  registerCanvas      = (element) => { this.doms.canvas      = element; }
  registerFileInput   = (element) => { this.doms.fileInput   = element; }

  /* -------------------- Menu -------------------- */
  @updateState
  updateAppStatus (status) { this.state.imageMapper.updateAppStatus(status); }

  /* -------------------- Standby -------------------- */
  @updateState
  setImageFile (file) { this.state.imageMapper.setImageFile(file); }

  @updateState
  setBackdropImageDimention (params) { this.state.imageMapper.setBackdropImageDimention(params); }

  /* -------------------- Canvas -------------------- */
  @updateState
  addNewRect (e) {
    const point = this.getCurrentPoint(e);
    this.state.imageMapper.addNewRect({
      x1: point.x, x2: point.x,
      y1: point.y, y2: point.y,
    });
    this.isCanvasDragging = true;
  }

  @updateState
  updateNewRectStyle (e) {
    if (this.isCanvasDragging) {
      const point = this.getCurrentPoint(e);
      this.state.imageMapper.updateNewRectStyle({
        x: point.x,
        y: point.y,
      });
    }
  }

  @updateState
  commitNewRect (e) {
    this.state.imageMapper.commitNewRect();
    this.isCanvasDragging = false;
  }

  @updateState
  setTargetRect (e, id) {
    this.setState({ targetRectId: id })
  }

  @updateState
  unsetTargetRect (e) {
    this.setState({ targetRectId: null });
  }

  @updateState
  startDraggingRect (e, id) {
    const point = this.getCurrentPoint(e);
    this.state.imageMapper.startDraggingRect({ id, x: point.x, y: point.y });
    this.isRectDragging = true;
  }

  @updateState
  draggingRect (e, id) {
    if (this.isRectDragging) {
      const point = this.getCurrentPoint(e);
      this.state.imageMapper.draggingRect({ id, x: point.x, y: point.y });
    }
  }

  @updateState
  finishDraggingRect (e, id) {
    this.state.imageMapper.finishDraggingRect();
    this.isRectDragging = false;
  }

  @updateState
  removeRect (id) {
    this.state.imageMapper.removeRect(id);
  }

  /* -------------------- RectContentEditor -------------------- */
  @updateState
  updateRectContent (id, data) {
    this.state.imageMapper.updateRectContent(id, data);
    this.unsetTargetRect();
  }

  /* -------------------- Private methods -------------------- */
  get contextData () {
    return {
      ...this.state,
      doms: this.doms,
      onRegisterCanvas: this.registerCanvas,
      onRegisterFileInput: this.registerFileInput,

      // Menu
      onUpdateAppStatus: this.updateAppStatus,

      // BackdropImage
      onSetImageFile: this.setImageFile,
      onSetBackdropImageDimention: this.setBackdropImageDimention,

      // Canvas
      onCanvasMouseDown: this.onCanvasMouseDown,
      onCanvasMouseMove: this.onCanvasMouseMove,
      onCanvasMouseUp: this.onCanvasMouseUp,
      onClickRect: this.onClickRect,
      onStartDraggingRect: this.startDraggingRect,
      onDraggingRect: this.draggingRect,
      onFinishDraggingRect: this.finishDraggingRect,
      onRemoveRect: this.removeRect,

      // RectContentEditor
      onUpdateRectContent: this.updateRectContent,
      onCancelEditRectContent: this.unsetTargetRect,
    };
  }

  get onCanvasMouseDown () {
    return (
      this.state.imageMapper.isCreateRect ? this.addNewRect : f => f
    );
  }

  get onCanvasMouseMove () {
    return (
      this.state.imageMapper.isCreateRect ? this.updateNewRectStyle : f => f
    );
  }

  get onCanvasMouseUp () {
    return (
      this.state.imageMapper.isCreateRect ? this.commitNewRect :
      ( this.state.imageMapper.isEditRect ||
        this.state.imageMapper.isEditRectContent ) ?  this.unsetTargetRect :
      f => f
    );
  }

  get onClickRect () {
    return (
      ( this.state.imageMapper.isEditRect ||
        this.state.imageMapper.isEditRectContent ) ? this.setTargetRect : f => f
    );
  }

  getCurrentPoint (e) {
    const canvasStyle = this.doms.canvas.getBoundingClientRect();
    return {
      x: ( e.clientX - canvasStyle.x ) / canvasStyle.width,
      y: ( e.clientY - canvasStyle.y ) / canvasStyle.height,
    };
  }
}
