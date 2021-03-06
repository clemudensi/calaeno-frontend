import {
  container,
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto
} from "assets/jss/material-kit-pro-react.jsx";

const blogsSection = {
  container,
  title,
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    padding: "50px 0"
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "8px",
      lineHeight: "0"
    }
  },
  floatRight: {
    float: "right"
  },
  description1: {
    ...description,
    lineHeight: "1.313rem"
  },
  author: {
    "& a": {
      color: "#3C4858",
      textDecoration: "none"
    }
  },
  card: {
    marginBottom: "10px"
  },
  card4: {
    marginBottom: "60px",
    textAlign: "center"
  }
};

export default blogsSection;
