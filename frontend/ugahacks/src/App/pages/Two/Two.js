import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BackgroundIMG from '../../components/background.jpg';
import Where from './components/Where';
import What from './components/What';
import Price from './components/Price';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'black',
      main: '#E91E63',
      dark: 'black',
      contrastText: '#FFF',
    },
  },
});

const styles = ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: 10,
  },
  instructions: {
    marginTop: 10,
    marginBottom: 10,
  },
  avatar:{
    margin: 10,
    padding: 50,
    backgroundColor: 'white'
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
});

function getSteps() {
  return ['Where?', 'What?', 'How Much?'];
}

class HorizontalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
      price: '',
      type: '',
      activeStep: 0,
      skipped: new Set(),
    };
    this.handleChange = (name, value) => {
      console.log(name);
      if(name!=null){
      this.setState({
        [name]: value,
      }, () => console.log(this.state));
      }
    };
    this.handleNext = () => {
      console.log('next')
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep + 1,
      });
    };
    this.handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
        activeStep: activeStep - 1,
      });
    };
    this.getStepContent = step => {
      switch (step) {
        case 0:
          return( 
            <Where
              city={this.state.city}
              state={this.state.state}
              handleChange={this.handleChange}
            />
          );
        case 1:
          return(
            <What
              type={this.state.type}
              handleChange={this.handleChange}
            />
          );
        case 2:
          return(
            <Price
              type={this.state.price}
              handleChange={this.handleChange}
            />
          );
        default:
          return 'Unknown step';
      }
    }
    //api call functions
    this.handleSubmit = () => {
      //do call for the restaurant data
    };
  }
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
      <div style={styles.loginWrapperStyle}>
      <img src={BackgroundIMG} style={styles.bgImageStyle} />
      <Paper style={styles.loginPaperStyle} elevation={4}>
      <div style={{backgroundColor:'#fff8f9', padding:10}}>

      <div>
        <Stepper style ={{backgroundColor: '#fff8f9'}} activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <p>{this.state.city}</p>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="raised"
                  color="secondary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      </div>
      </Paper>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(HorizontalLinearStepper);