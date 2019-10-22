import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomSection from '../RandomSection/RandomSection';
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";

import './App.css';

export default class extends Component {
  state = {
    location: null
  };

  onLocation = (id) => {
    this.setState({
      location: id
    })
  };


  render() {
    const {location} = this.state;
    return (
        <div>
          <Header/>
          <RandomSection/>
          <div className="flex">
            <ItemList onLocationSelected={this.onLocation}/>
            <PersonDetails personId={location}/>
          </div>
        </div>
    )
  }
}