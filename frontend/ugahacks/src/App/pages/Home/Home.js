import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import BackgroundIMG from './background.jpg';
import logo from './food.svg';
import fork from './fork1.svg';



const styles = {
    avatar:{
        margin: 10,
        padding: 50,
        backgroundColor: 'white'
    },
    root:{
      margin:50
    },
    bgImageStyle: {
      position: 'fixed',
      zIndex: '-1',
      minWidth: '100%',
      minHeight: '100%',
      overflow: 'hidden',
      filter: 'blur(7px) saturate(0.8)',
    },
    loginPaperStyle: {
      justifyContent: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: '80%',
      maxWidth: 800,
    },
    loginWrapperStyle: {
      flexDirection: 'column',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-around',
    },
    textField: {
      margin: 'auto',
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      price: '',
      type: ''
    };
    this.handleChange = name => event => {
      console.log('fdsaf');
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  render() {
    return (
    <div style={styles.loginWrapperStyle}>
      <img src={BackgroundIMG} style={styles.bgImageStyle} />
      <Paper style={styles.loginPaperStyle} elevation={4}>
        <div style={{backgroundColor:'#fff8f9', padding: 10}}>
          <br/>
          {/* <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Avatar style={styles.avatar}>
              <img src={logo} alt="Kiwi standing on oval"/>
            </Avatar>
          </div> */}
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img style={{height:50}}src={fork} alt="Kiwi standing on oval"/>
            <Typography variant="display2" style={{color:'black'}}>
              Eat With Us
            </Typography>
          </div>
          <br/>
          <div style={{marginLeft:20, marginRight:20, textAlign: 'center'}}>
            <Typography variant="headline">
              We offer a modern and streamline method to find the best restaurant near you. All it takes is a few seconds to have the dining experience of a lifetime. 
            </Typography>
          </div>
          <br/>

          <form>
            <hr style={{marginLeft:20, marginRight: 20}}/>
            {/*Where Are You?*/}
            <Grid container>
              <Grid item xs= {12}>
                <Grid container justify="center">
                  <Grid item>
                      <Typography variant="headline">
                        Where Are You?
                      </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                  <Grid container justify="center" spacing={24}>
                    <Grid item>
                      <TextField
                        style={styles.textField}
                        id="city"
                        label="City"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item>
                    <TextField
                      style={styles.textField}
                      id="state"
                      label="State"
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <Typography variant="subheader">
                      OR
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs= {12}>
                <Grid container justify="center">
                  <Grid item>
                    <Button color="secondary">
                      <Typography variant="subheader">
                        Get My Location
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr style={{marginLeft:20, marginRight: 20}}/>
            {/*What Are You Hungry For?*/}
            <Grid container>
              <Grid item xs= {12}>
                <Grid container justify="center">
                  <Grid item>
                      <Typography variant="headline">
                        What Are You Hungry For?
                      </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <TextField
                      style={styles.textField}
                      id="city"
                      label="City"
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr style={{marginLeft:20, marginRight: 20}}/>
            {/*What is Your Budget?*/}
            <Grid container>
              <Grid item xs= {12}>
                <Grid container justify="center">
                  <Grid item>
                      <Typography variant="headline">
                        What's Your Budget?
                      </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <TextField
                      style={styles.textField}
                      id="city"
                      label="City"
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
              <Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    style={styles.textField}
                    id="price"
                    label="Budget"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <TextField
                    style={styles.textField}
                    id="type"
                    label="Food Type"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                </Grid>
          </Grid>
         </form>

          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Link to="form" style={{ textDecoration: 'none' }}>
            <Button variant="raised" color="secondary">
              <Typography variant="subheader">
                Let's Go!
              </Typography>
            </Button>
          </Link>
          </div>
          <Link to="test" style={{ textDecoration: 'none' }}>
            <Button variant="raised" color="secondary">
              <Typography variant="subheader">
                Test Our Functions
              </Typography>
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
    );
  }
}

export default App;