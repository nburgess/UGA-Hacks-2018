import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';

class geoLocation extends Component {
	constructor(props){
		super(props)
		this.state = {
      address: 'Athens, GA',
      coord: '',
    }
		this.onChange = (address) => this.setState({address})
	}

  myCheck = () => {
    console.log('me' + this.state.coord);
    if(this.state.coord != null){
      this.props.handleChange('coord', this.state.coord)
      this.props.handleChange('confirmLoc', true)
    }
  }

	handleFormSubmit = (event) => {
		event.preventDefault()
		geocodeByAddress(this.state.address)
			.then(results => getLatLng(results[0]))
      		.then(
            latLng => this.setState({coord: latLng},
            () => this.myCheck())
          )
      		.catch(
            error => console.error('Error', error),
          )
          //unlocks the next button

	}

	render(){
		const inputProps = {
			value: this.state.address,
			onChange: this.onChange,
		}
    const defaultStyles = {
      root: {
        backgroundColor: '#fff8f9',
        position: 'relative',
        paddingBottom: '0px',
      },
      input: {
        border: '0px',
        borderBottom: '1px solid black',
        backgroundColor: '#fff8f9',
        display: 'inline-block',
        width: '100%',
        padding: '10px',
      },
      autocompleteContainer: {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#fff8f9',
        border: '1px solid #555555',
        width: '100%',
      },
      autocompleteItem: {
        backgroundColor: '#fff8f9',
        padding: '10px',
        color: '#555555',
        cursor: 'pointer',
      },
      autocompleteItemActive: {
        backgroundColor: '#fafafa'
      },
    }
		return(
			<div>
        <Grid container justify="center">
          <Grid item>
            <PlacesAutocomplete inputProps={inputProps} styles={defaultStyles}/>
          </Grid>
          <Grid item>
            <Button color="secondary" type="submit" onClick={this.handleFormSubmit}>Confirm Location</Button>
          </Grid>
        </Grid>
			</div>

		)
	}
}

geoLocation.propTypes = {
  confirmLoc: PropTypes.any.isRequred,
  handleChange: PropTypes.func.isRequired,
};

export default geoLocation;