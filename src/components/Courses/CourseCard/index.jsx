import { Paper, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 25,
    width: 315,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px !important',
  },
  text: {
    marginBottom: '5px !important',
  },
}));

const CourseCard = ({ text, link }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.text} variant="body1">
        {text}
      </Typography>
      <Link to={link}>Перейти →</Link>
    </Paper>
  );
};

export default CourseCard;
