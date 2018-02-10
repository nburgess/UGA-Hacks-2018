import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';


const styles = ({
  textField: {
    margin: 'auto',
  },
});

class Where extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = name => event => {
      console.log('loop');
      this.props.handleChange(name, event.target.value);
    };
  }
  render() {
    return (
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
                  value={this.props.city}
                  onChange={this.handleChange('city')}
                  margin="normal"
                />
              </Grid>
              <Grid item>
              <TextField
                style={styles.textField}
                id="state"
                label="State"
                value={this.props.state}
                onChange={this.handleChange('state')}
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
    );
  }
}

Where.propTypes = {
  city: PropTypes.any.isRequired,
  state: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Where