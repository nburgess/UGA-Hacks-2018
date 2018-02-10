import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const APIKey = "ce84c151c3bbfe25dd4c8a29f9da5365";
const url = "https://developers.zomato.com/api/v2.1/";

class ZomatoFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://developers.zomato.com/api/v2.1/',
      location: 'Athens',
      lat: '38',
      long: '42',
      apiResponse: '',
    };
    this.getCityID = this.getCityID.bind(this);
  }
  getCityID () {
    //input parameters
    let location = this.state.location; //this.props.location
    let lat = this.state.lat;
    let long = this.state.long;
    
    //api call - fetch
    let ourUrl = this.state.url + '/' + location;
    //fetch url
    let apiResponse = '';
    
    //output
    this.setState({
      response: apiResponse
    })
    console.log('Test: ');
    console.log(ourUrl);
    console.log(apiResponse);
  }
  render() {
    // function getCityID () {
    //   console.log(this.state.location);
    // }
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