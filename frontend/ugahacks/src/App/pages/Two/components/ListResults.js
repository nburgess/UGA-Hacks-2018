import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import AddIcon from 'material-ui-icons/Home';

//this will need to be replaced with API DATA
const output = [
  {
    name: 'Subway',
    address: '414 E 9th st, Athens, GA',
    cost: '$25',
  },
  {
    name: 'Wing Zone',
    address: '414 E 9th st, Athens, GA',
    cost: '$20',
  },
  {
    name: 'Zaxbys',
    address: '414 E 9th st, Athens, GA',
    cost: '$25',
  },
  {
    name: 'Kroger',
    address: '414 E 9th st, Athens, GA',
    cost: '$20',
  },
  {
    name: 'Dawg',
    address: '414 E 9th st, Athens, GA',
    cost: '$25',
  },
  {
    name: 'Dawg2',
    address: '414 E 9th st, Athens, GA',
    cost: '$20',
  }
];

const styles = ({
  loginPaperStyle: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '80%',
    maxWidth: 800,
    marginBottom: 20,
    backgroundColor: '#fff8f9'
  },
  card: {
    minWidth: 275,
  },
});

class Price extends React.Component {
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
        <div style={{height:'90%'}}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20}}>
          <Link to="" style={{ textDecoration: 'none' }}>
            <Button variant="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
          </div>
          {output.map(option => (
            <Card style={styles.loginPaperStyle}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  {option.name}
                </Typography>
                <br/>
                <Typography variant="subheader">
                  Address: {option.address}
                </Typography>
                <br/>
                <Typography variant="subheader">
                  Average Price For 2: {option.cost}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
    );
  }
}

Price.propTypes = {
  type: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Price