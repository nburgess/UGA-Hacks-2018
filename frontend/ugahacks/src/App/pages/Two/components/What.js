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
const types = [
  {
    label: 'American',
    value: 1
  },
  {
    label: 'Asian',
    value: 3
  },
  {
    label: 'Bar Food',
    value: 227
  },
  {
    label: 'Breakfast',
    value: 182
  },
  {
    label: 'Cafe',
    value: 30
  },
  {
    label: 'Desserts',
    value: 100
  },
  {
    label: 'Fast Food',
    value: 40
  },
  {
    label: 'Italian',
    value: 55
  },
  {
    label: 'Mexican',
    value: 73
  },
  {
    label: 'Pizza',
    value: 82
  },
  {
    label: 'Vegetarian',
    value: 308
  },
];
// const Moods = [
//   {
//     value: 'Bakery'
//   },
//   {
//     value: 'Bar'
//   },
//   {
//     value: 'Bistro'
//   },
//   {
//     value: 'Cafe'
//   },
//   {
//     value: 'Casual Dining'
//   },
//   {
//     value: 'Coffee Shop'
//   },
//   {
//     value: 'Deli'
//   },
//   {
//     value: 'Dessert Parlour'
//   },
//   {
//     value: 'Fast Food'
//   },
//   {
//     value: 'Food Truck'
//   },
//   {
//     value: 'Noodle Shop'
//   },
//   {
//     value: 'Pizzeria'
//   },
//   {
//     value: 'Quick Bites'
//   },
//   {
//     value: 'Sandwich Shop'
//   },
//   {
//     value: 'Wine Bar'
//   },
// ];

class What extends React.Component {
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
                        What Are You Hungry For?
                      </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                  <Grid item>
                    <TextField
                      id="CuisineID"
                      select
                      label="Cuisines"
                      style={styles.textField}
                      value={this.props.type}
                      onChange={this.handleChange('CuisineID')}
                      margin="normal"
                    >
                      {types.map(option => (
                        <MenuItem style={{width:300}} key={option.label} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {/* <Grid item>
                    <TextField
                      id="Mood"
                      select
                      label="EntityID"
                      style={styles.textField}
                      value={this.props.type}
                      onChange={this.handleChange('Mood')}
                      margin="normal"
                    >
                      {Moods.map(option => (
                        <MenuItem style={{width:300}} key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
    );
  }
}

What.propTypes = {
  type: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default What