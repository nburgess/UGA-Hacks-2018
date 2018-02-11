import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import zomato from 'zomato';

const APIKey = 'ce84c151c3bbfe25dd4c8a29f9da5365';
const url = "https://developers.zomato.com/api/v2.1/";

class ZomatoSearch extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     url: 'https://developers.zomato.com/api/v2.1/',
  //     cuisine: '1',
  //     entity_ID: '634',
  //     entity_Type: 'city',
  //     count: '5',
  //     fetchSpecificRestaurant: '',
  //   };
  //   this.getRestaurant = this.getRestaurant.bind(this);
  // }
   
  //  getRestaurant(){
  //       let cuisine_ID = this.state.cuisineID;
  //       let entity_ID = this.state.entityID;
  //       let entity_Type = this.state.entityType;
  //       let count = this.state.count;

  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  //       headers.append('user-key', 'ce84c151c3bbfe25dd4c8a29f9da5365');
  //       let options = {
  //         method: 'GET',
  //         headers: headers
  //       };
  //       let ourUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_ID + "&entity_type=" + entity_Type + "&count=" + count + "&cuisines=" + cuisine_ID;
  //       console.log(ourUrl);
  //       let fetchSpecificRestaurant = fetch(ourUrl, options)
  //       .then(response => response.json())
  //       .then(data => {
  //         let restaurantName = data.restuaurants[0].name;
  //         console.log(restaurantName);
          
      
  //         //this.setState({cityID:cityID},() => console.log(this.state.cityID));
  //       });
  //     //}
  //  }      
    
  //   // this.setState({
  //   //   response: apiResponse
  //   // })
  //   // console.log('Response: ')
  //   // console.log(zomatoResponse);
  //   // console.log(fetchNearbyRestaurants);
  // render() {
  //   return(
  //     <Button color="primary" onClick={this.getRestaurant}>
  //       Test
  //     </Button>
  //   )
  // }
}


/// ZomatoFetch.propTypes = {
//   location: PropTypes.any.isRequired,
//   lat: PropTypes.any.isRequired,
//   long: PropTypes.any.isRequireds
// };

export function getRestaurant(cuisineID, entityID, entityType, count = 5){
  let cuisine_ID = cuisineID;
  let entity_ID = entityID;
  let entity_Type = entityType;

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('user-key', 'ce84c151c3bbfe25dd4c8a29f9da5365');
  let options = {
    method: 'GET',
    headers: headers
  };
  let ourUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_ID + "&entity_type=" + entity_Type + "&count=" + count + "&cuisines=" + cuisine_ID;
  console.log(ourUrl);
  let fetchSpecificRestaurant = fetch(ourUrl, options)
  .then(response => response.json())
  .then(data => {
    let restaurantName = data.restaurants[0].restaurant.name;
    console.log(restaurantName);
    

    //this.setState({cityID:cityID},() => console.log(this.state.cityID));
  });
}
export default ZomatoSearch;
