import React, { Component } from "react";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToMarkdown from "draftjs-to-markdown";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Chc from "../components/CheckLogin";

export default class CreatePost extends Component {
  state = {
    editorState: undefined,
    data: "",
  };

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { data } = this.state;
    const { editorState } = this.state;
    return (
      <div>
        <Chc />
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={
            editorState &&
            draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
          }
        />
      </div>
    );
  }
}
