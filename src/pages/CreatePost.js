import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToMarkdown from "draftjs-to-markdown";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Chc from "../components/CheckLogin";
import { convertFromRaw } from "draft-js";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import swal from "sweetalert";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const api = process.env.REACT_APP_API_POST;

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  paper: {
    
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "35%",
    height: "50px", 
    marginLeft: "350px",
  },
});

const currencies = [
  {
    value: "1",
    label: "Aljabar",
  },
  {
    value: "2",
    label: "Geometri dan Trigonometri",
  },
  {
    value: "3",
    label: "Statistika dan Peluang",
  },
  {
    value: "4",
    label: "Kalkulus",
  },
];

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btn: false,
      editorState: EditorState.createEmpty(),
      type: "1",
      title: "",
      date: "",
      thumbailPost: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
    //this.setState({ data: event.target.value });
    console.log(event.target.value);
  }

  handleChangeType(event) {
    this.setState({ type: event.target.value });
  }

  handleSubmit(event) {
    const posts =
      this.state.editorState &&
      draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));

    console.log(this.state);
    const body = {
      marginTop: "100px",
      type: this.state.type,
      title: this.state.title,
      date: this.state.date,
      thumbailPost: this.state.thumbailPost,
      post: posts,
    };
    this.setState({ btn: true });
    axios({
      method: "post",
      url: api,
      data: body,
    })
      .then((res) => {
        swal({
          title: "SAVED",
          text: "",
          icon: "success",
        });

        this.setState({ btn: false });
        console.log(res);
      })
      .catch((error) => {
        swal({
          title: "error",
          text: "",
          icon: "error",
        });
        this.setState({ btn: false });
        console.log(error);
      });

    event.preventDefault();
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    const { editorState } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <TextField
            id="standard-select-currency"
            select
            label="TYPE"
            value={this.state.type}
            onChange={(event) => this.handleChange(event, "type")}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="text"
            autoFocus
            onChange={(event) => this.handleChange(event, "title")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="date"
            label="date"
            name="date"
            autoComplete="text"
            autoFocus
            onChange={(event) => this.handleChange(event, "date")}
          />
          <TextField
            textarea
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="thumbailPost"
            label="thumbailPost"
            name="thumbailPost"
            autoComplete="text"
            autoFocus
            onChange={(event) => this.handleChange(event, "thumbailPost")}
          />
          <div>
            <Chc />
            <Editor
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
              onContentStateChange={this.onContentStateChange}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={this.state.btn}
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(CreatePost);
