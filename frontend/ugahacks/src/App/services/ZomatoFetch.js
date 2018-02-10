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
    };
    this.getCityID = this.getCityID.bind(this);
  }
  zomatoCall () {

  }

  getCityID () {
    //input parameters
    let location = this.state.location; //this.props.location
    let latitude = this.state.lat;
    let longitude = this.state.lon;
    let apiResponse = this.state.apiResponse;

    // var client = zomato.createClient({
    //   userKey: APIKey, //as obtained from [Zomato API](https://developers.zomato.com/apis) 
    // });

    // client.getCities({
    //   q:location, //query by city name 
    //   lat:latitude, //latitude 
    //   lon:longitude, //longitude 
    //   count:"1" // number of maximum result to display 
    // }, function(err, result){
    //     if(!err){
    //       console.log(result);
    //     }else {
    //       console.log(err);
    //     }
    // });
    
    //api call - fetch
    let ourUrl = this.state.url + 'locations?user-key=' + APIKey + '&query=' + location + '&lat=' + latitude + '&lon=' + longitude;
    //fetch url
    let zomatoResponse = fetch(ourUrl)
    //   ,{
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Origin': '',
    //     'user-key': APIKey,
    //     'Host': ourUrl
    //   },
    //   body: JSON.stringify({
    //     //'user-key': (APIKey),
    //     'lat': latitude,
    //     'lon': longitude,
    //     'query': location
    //   }),
    // });

      .then(response => {
        return response.json();
      })
      .then(data =>{
        //let apiResponse = response.json();
      })    
    //output
    this.setState({
      response: apiResponse
    })
    console.log('Test: ');
    console.log(ourUrl);
    console.log('Response: ')
    console.log(zomatoResponse);
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

