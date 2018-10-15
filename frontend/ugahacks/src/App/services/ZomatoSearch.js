import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import zomato from 'zomato';

const APIKey = '';
const url = "https://developers.zomato.com/api/v2.1/";

//I will be phasing out this api key soon

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
  //       headers.append('user-key', '');
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
  headers.append('user-key', '');
  let options = {
    method: 'GET',
    headers: headers
  };
  let ourUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=" + entity_ID + "&entity_type=" + entity_Type + "&count=" + count + "&cuisines=" + cuisine_ID;
  console.log(ourUrl);
  let fetchSpecificRestaurant = fetch(ourUrl, options)
  .then(response => response.json())
  .then(data => {
    console.log("=================================")
    for (var i = 0 ; i < 5 ; i++){
    let restaurantName = data.restaurants[i].restaurant.name;
    console.log("Name : " + restaurantName);
    let address = data.restaurants[i].restaurant.location.address;
    console.log("Address : " + address);
    let price = data.restaurants[i].restaurant.average_cost_for_two;
    console.log("Price : "+ price);
    console.log("EntityID : " + entity_ID);
    console.log("=================================")
  }



    

    //this.setState({cityID:cityID},() => console.log(this.state.cityID));
  });
}
export default ZomatoSearch;
