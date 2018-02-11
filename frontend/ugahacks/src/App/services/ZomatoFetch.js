import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import zomato from 'zomato';

const APIKey = 'ce84c151c3bbfe25dd4c8a29f9da5365';
const url = "https://developers.zomato.com/api/v2.1/";

class ZomatoFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://developers.zomato.com/api/v2.1/',
      location: 'Athens',
      lat: '33.9519',
      lon: '83.3576',
      apiResponse: '',
      fetchNearbyRestaurants: '',
    };
    this.getCityID = this.getCityID.bind(this);
  }
   
   getCityID(){
      let latitude = this.state.lat;
      let longitude = this.state.lon;
      console.log('Lat: ');
      console.log(latitude);
      console.log('Lon: ');
      console.log(longitude);

      var fetchNearbyRestaurants = (latitude, longitude) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('user-key', 'ce84c151c3bbfe25dd4c8a29f9da5365');
        let options = {
          method: 'GET',
          headers: headers
        };
        let ourUrl = "https://developers.zomato.com/api/v2.1/geocode?lat=" + latitude + "&lon=" + longitude;
        fetch(ourUrl, options)
        .then(response => response.json())
        .then(data => {
          console.log('Test: ');
          console.log(ourUrl);
          console.log(data.nearby_restaurants);
        });
      }
   }      
    
    // this.setState({
    //   response: apiResponse
    // })
    // console.log('Response: ')
    // console.log(zomatoResponse);
    // console.log(fetchNearbyRestaurants);
  render() {
    return(
      <Button color="primary" onClick={this.getCityID}>
        Test
      </Button>
    )
  }
}


// ZomatoFetch.propTypes = {
//   location: PropTypes.any.isRequired,
//   lat: PropTypes.any.isRequired,
//   long: PropTypes.any.isRequired
// };

export default ZomatoFetch;

