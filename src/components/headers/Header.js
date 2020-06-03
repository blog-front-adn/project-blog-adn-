import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
// import Link as LinKM from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function Header() {
  const classes = useStyles();
  // const { sections, title } = props;
  const sections = [
    { title: "Aljabar", url: "aljabar" },
    { title: "Geometri dan Trigonometri", url: "geometridantrigonometri" },
    { title: "Statistika dan Peluang", url: "statistikadanpeluang" },
    { title: "Kalkulus", url: "kalkulus" },
  ];

  const title = "Learn its EZZ";

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          {<Button size="small">logo</Button>}
        </Link>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={section.url}
            key={section.title}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default withRouter(Header);
