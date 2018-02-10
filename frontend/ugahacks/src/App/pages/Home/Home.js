import React, { Component } from 'react';
import logo from './food.svg';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
    avatar:{
        margin: 10,
        padding: 50,
        backgroundColor: 'white'
    },
    root:{
      margin:10
    }
}

class App extends Component {
  render() {
    return (
    <div>
      <Paper style={styles.root} elevation={4}>
        <div style={{backgroundColor: '#f69b77'}}>
          <br/>
          <Typography variant="headline" component="h1" style={{ display: 'flex', justifyContent: 'center'}}>
            <Avatar style={styles.avatar}>
              <img src={logo} alt="Kiwi standing on oval"/>
            </Avatar>
          </Typography>
          <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center'}}>
            Where To Eat!
          </h1>
          <br/>
        </div>
        <div>
          <Typography component="p">
            <b>Where to Eat!</b> provides blah blah blah, we use blah blah 
          </Typography>
        </div>
        <Button size="large" color="primary">
            Let's Go!
        </Button>
      </Paper>
    </div>
    );
  }
}

export default App;