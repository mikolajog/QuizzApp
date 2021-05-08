import React from 'react'
import Header from "./framework/Header"
import Footer from "./framework/Footer"
import { Redirect } from 'react-router-dom'
import axiosInstance from '../axios';

// MaterialUI
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[700],
    },
    cardPricing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
      marginBottom: theme.spacing(2),
    },
  }));


export const QuizSelect = () => {
  const classes = useStyles();
    if (!localStorage.getItem('access_token')) {
      return <Redirect to={'/login'} />;
  }

  axiosInstance
  .get(`user/whoami/`, {})
  .then((res) => {
    // console.log(res);
    // console.log(res.data.user_name);
    localStorage.setItem('user_name', res.data.user_name);
  });


    return(
        <React.Fragment>
        <Header></Header>
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Hi {localStorage.getItem('user_name')}, 
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          welcome to QuizApp - the best quizzing app in the world. Feel free to edit your account, create a new quizz, join a quizz made by other users, join a quizz by code and more! 
        </Typography>
      </Container>

        <Footer></Footer>
        </React.Fragment>
    )
}

export default QuizSelect
