import React, { useState, useEffect } from 'react';
import './App.css';
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from  "@material-ui/core/Grid"

class JButton extends React.Component {
  render() {
    return (
      <Button {...this.props}>
        {this.props.label}
      </Button>
    )
  }
}

function Elem(objs) {
  if(objs){
    return objs.map((obj) => <MyComponent {...obj} />);    
  }
  return (<p>loading...</p>)
}

class MyComponent extends React.Component {

  components = {
    jbox: Box,
    jbutton: JButton,
    jgrid: Grid
  };

  render() {
    const TagName = this.components[this.props.tag || 'jbutton'];
    return (<TagName  {...this.props.attr} key={this.props.key}>{this.props.children ? Elem(this.props.children ) : ''}</TagName>)
  }
}


function App() {

  const [data, setData] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      {Elem(data)}
    </>
  );
}

export default App;
