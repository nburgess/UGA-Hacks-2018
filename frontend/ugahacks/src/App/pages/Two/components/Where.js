import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = ({
  textField: {
    margin: 'auto',
  },
});

const states = [
  {
    value: 'AL',
  },
  {
    value: 'AK',
  },
  {
    value: 'AZ',
  },
  {
    value: 'AR',
  },
  {
    value: 'CA',
  },
  {
    value: 'CO',
  },
  {
    value: 'CT',
  },
  {
    value: 'DE',
  },
  {
    value: 'FL',
  },
  {
    value: 'GA',
  },
  {
    value: 'HI',
  },
  {
    value: 'ID',
  },
  {
    value: 'IL',
  },
  {
    value: 'IN',
  },
  {
    value: 'IA',
  },
  {
    value: 'KS',
  },
  {
    value: 'KY',
  },
  {
    value: 'LA',
  },
  {
    value: 'ME',
  },
  {
    value: 'MD',
  },
  {
    value: 'MA',
  },
  {
    value: 'MI',
  },
  {
    value: 'MN',
  },
  {
    value: 'MS',
  },
  {
    value: 'MO',
  },
  {
    value: 'MT',
  },
  {
    value: 'NE',
  },
  {
    value: 'NV',
  },
  {
    value: 'NH',
  },
  {
    value: 'NJ',
  },
  {
    value: 'NM',
  },
  {
    value: 'NY',
  },
  {
    value: 'NC',
  },
  {
    value: 'ND',
  },
  {
    value: 'OK',
  },
  {
    value: 'OR',
  },
  {
    value: 'PA',
  },
  {
    value: 'RI',
  },
  {
    value: 'SC',
  },
  {
    value: 'SD',
  },
  {
    value: 'TN',
  },
  {
    value: 'TX',
  },
  {
    value: 'UT',
  },
  {
    value: 'VT',
  },
  {
    value: 'VA',
  },
  {
    value: 'WA',
  },
  {
    value: 'WV',
  },
  {
    value: 'WI',
  },
  {
    value: 'WY',
  }
];

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
                id="state"
                select
                label="State"
                style={styles.textField}
                value={this.props.state}
                onChange={this.handleChange('state')}
                margin="normal"
              >
                {states.map(option => (
                  <MenuItem style={{width:200}} key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
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