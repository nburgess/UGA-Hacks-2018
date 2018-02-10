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

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // function for child 'Select.js'
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
                      id="price"
                      label="Price"
                      value={this.props.type}
                      onChange={this.handleChange('price')}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    );
  }
}

Price.propTypes = {
  type: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Price