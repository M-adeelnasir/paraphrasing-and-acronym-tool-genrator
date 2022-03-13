import React, { useState, } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import SubmitButton from './Submit/SubmitButton';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  gridRoot: {
    flexGrow: 1,
  },
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  primary: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '200px',
    color: theme.palette.text.secondary,
  }
}));

export default function ParaphrasingTool() {
  const classes = useStyles();

  const [inputText, setInputText] = useState('')
  const [apiResponseText, setApiResponseText] = useState('Nothing here yet, enter some text in the box above')
  const [name, setName] = useState(false);




  function setResponseText(apiResponse) {
    setApiResponseText(apiResponse)
  }


  function setAcronym(data) {
    let arr = []
    data.split(" ").forEach(function (item) {
      arr.push(item.charAt(0))
    })
    let line = arr.join("")
    return line;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom>
          Paraphrasing Tool
        </Typography>
        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>

                <form className={classes.formRoot} noValidate autoComplete="off">
                  <TextField id="standard-basic"
                    label="Insert the text you would like to rewrite here"
                    placeholder="I love it when AI does all the work for me"
                    multiline
                    rows={1}
                    rowsMax={10}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.primary}>
                <SubmitButton inputText={inputText} responseText={setResponseText} setName={setName} />
              </div>
              <div className={classes.primary}>
              </div>

            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>

                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> {' '} </Typography>
                <Divider variant="middle" />
                <br />
                <Typography variant="h6" style={{}}> {apiResponseText} </Typography>
              </Paper>
            </Grid>

            <Typography variant="h6" component="h6" gutterBottom>
              Acronym
            </Typography>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> {' '} </Typography>
                <Divider variant="middle" />
                <br />
                {name ? <Typography variant="h6" style={{}}> {setAcronym(apiResponseText)} </Typography> : null}
              </Paper>
            </Grid>
          </Grid>

          <img src={require('./pic.png')} className="img-thumbnail w-50 mt-5" alt="" />
        </div>
      </Container>


    </div>
  );
}