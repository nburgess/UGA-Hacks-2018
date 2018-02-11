import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import zomato from 'zomato';

const APIKey = 'ce84c151c3bbfe25dd4c8a29f9da5365';
const url = "https://developers.zomato.com/api/v2.1/";

class ZomatoFetch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       url: 'https://developers.zomato.com/api/v2.1/',
//       location: 'Athens',
//       lat: '33.9519',
//       lon: '-83.3576',
//       apiResponse: '',
//       fetchNearbyRestaurants: '',
//       cityID: '',
//     };
//     this.getCityID = this.getCityID.bind(this);
//   }
   
//    getCityID(){
//         let latitude = this.state.lat;
//         let longitude = this.state.lon;
//         let loc = this.state.location;

//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         headers.append('user-key', 'ce84c151c3bbfe25dd4c8a29f9da5365');
//         let options = {
//           method: 'GET',
//           headers: headers
//         };
//         let ourUrl = "https://developers.zomato.com/api/v2.1/locations?query=" + loc + "&lat=" + latitude + "&lon=" + longitude + "&count=20";
//         console.log(ourUrl);
//         let fetchNearbyRestaurants = fetch(ourUrl, options)
//         .then(response => response.json())
//         .then(data => {
//           let cityID = data.location_suggestions[0].city_id;
//           this.setState({cityID:cityID},() => console.log(this.state.cityID));
//         });
//       //}
//    }      
    
//     // this.setState({
//     //   response: apiResponse
//     // })
//     // console.log('Response: ')
//     // console.log(zomatoResponse);
//     // console.log(fetchNearbyRestaurants);
//   render() {
//     return(
//       <Button color="primary" onClick={this.getCityID}>
//         Test
//       </Button>
//     )
//   }
// }


/// ZomatoFetch.propTypes = {
//   location: PropTypes.any.isRequired,
//   lat: PropTypes.any.isRequired,
//   long: PropTypes.any.isRequireds
// };
}

export function getCityID(lat,long,location){
  let latitude = lat;
  let longitude = long;
  let loc = location;

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('user-key', 'ce84c151c3bbfe25dd4c8a29f9da5365');
  let options = {
    method: 'GET',
    headers: headers
  };
  let ourUrl = "https://developers.zomato.com/api/v2.1/locations?query=" + loc + "&lat=" + latitude + "&lon=" + longitude;
  console.log(ourUrl);
  let fetchNearbyRestaurants = fetch(ourUrl, options)
  .then(response => response.json())
  .then(data => {
    let cityID = data.location_suggestions[0].city_id;
    console.log(cityID);
    let entityID = data.location_suggestions[0].entity_id;
    console.log(entityID);
    let entityType = data.location_suggestions[0].entity_type;
    console.log(entityType);

    //this.setState({cityID:cityID},() => console.log(this.state.cityID));
  });
};

export default ZomatoFetch;