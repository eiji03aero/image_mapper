import React from "react";

import { RectContentEditor } from "../components/RectContentEditor.jsx";
import { Context } from "../context.js";

export class RectContentEditorContainer extends React.Component {
  static contextType = Context;

  constructor (props) {
    super(props);
    this.state = {
      draft: {
        type: '',
        text: '',
      },
    };
  }

  componentDidMount () {
    const rect = this.context.imageMapper.findRect(this.context.targetRectId);
    this.setState({
      draft: {
        type: rect.content.type,
        text: rect.content.text,
      },
    });
  }

  onUpdateDraftContent = (data) => {
    this.setState(pre => ({
      draft: {
        ...pre.draft,
        ...data,
      },
    }));
  }

  onSubmit = () => {
    this.context.onUpdateRectContent(
      this.context.targetRectId,
      this.state.draft
    );
  }

  render () {
    return (
      <RectContentEditor
        id={this.context.targetRectId}
        type={this.state.draft.type}
        text={this.state.draft.text}
        onUpdateDraftContent={this.onUpdateDraftContent}
        onSubmit={this.onSubmit}
        onCancelEditRectContent={this.context.onCancelEditRectContent}
      />
    );
  }
}
