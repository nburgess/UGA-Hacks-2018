import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader';

// scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyAYbtCPuL2LBozcTv1mc2fvKOmAPqy5aqM'])
class geoLocation extends Component {
	constructor(props){
		super(props)
		this.state = {
			adress: 'Athens, GA'
		}
		this.onChange = (address) => this.setState({address})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()

		geocodeByAddress(this.state.address)
			.then(results => getLatLng(results[0]))
      		.then(latLng => console.log('Success', latLng))
      		.catch(error => console.error('Error', error))
	}

	render(){
		const inputProps = {
			value: this.state.address,
			onChange: this.onChange,
		}

		return(
			<div>
			<form onSubmit={this.handleFormSubmit}>
        		<PlacesAutocomplete inputProps={inputProps} />
        		<button type="submit">Submit</button>
      		</form>
			  </div>

		)
	}
}
export default geoLocation;
