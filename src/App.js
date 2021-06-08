import React, { useState, useEffect } from 'react';
import './App.css';
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';
import { css } from 'glamor'

let container = css({
  display: 'flex'
})

function NavBar(props) {
   return (
     <Box {...container} >
        <Box >
          {props.title}
        </Box>
     </Box>
   )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

class JButton extends React.Component {
  render() {
    return (
      <Button {...this.props}>
        {this.props.label}
      </Button>
    )
  }
}

function JPaper(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper {...props}>
        {props.children}
      </Paper>
    </div>
  )
}

function JBox(props) {
  return (
    <Box>
      {props.children}
    </Box>
  )
}

function Elem(objs) {
  console.log(typeof objs);

  if (typeof objs === "string" || typeof objs === "number") {
    return objs
  }
  if (objs == null) {
    return (<p>loading...</p>)
  }

  if (objs) {
    return objs.map((obj, index) => <MyComponent {...obj} key={index} />);
  }
  return (<p>loading...</p>)
}

class MyComponent extends React.Component {

  components = {
    jdev: Box,
    jbox: JBox,
    jbutton: JButton,
    jgrid: Grid,
    jpaper: JPaper,
    navbar: NavBar
  };

  render() {
    const TagName = this.components[this.props.tag || 'jbutton'];
    return (<TagName  {...this.props.attr} >{this.props.children ? Elem(this.props.children) : ''}</TagName>)
  }
}


function App() {

  const [data, setData] = useState(null);
  const [header, setHeader] = useState(null);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data);
      setData(data);
    });
    fetch('/ui/header').then(res => res.json()).then(header => {
      console.log(header);
      setHeader(header);
    });
  }, []);

  return (
    <>
      {Elem(header)}
      {Elem(data)}
    </>
  );
}

export default App;
