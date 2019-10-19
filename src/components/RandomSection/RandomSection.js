import React, {Component} from 'react';
import Api from '../../services/Api';

import './RandomSection.css';

export default class RandomSection extends Component {

  api = new Api();

  state = {
    planet: {}
  };

  constructor(props){
    super(props);
    this.getInfo();
  }

  getInfo(){
    const random = Math.floor(Math.random() * 20 + 1);
    return this.api.getCharacter(random).then((planet)=>{
      this.setState({planet});
    });
  }

  render() {
    const {planet: {image, name, gender, species, status, created}} = this.state;

    return (
        <div className="random">
          <div className="random__image">
            <p>{name}</p>
            <img src={image} alt={name}/>
          </div>
          <div className="random__info">
            <p className="random__item">
              <span>Gender:</span>
              <span>{gender}</span>
            </p>
            <p className="random__item">
              <span>Species:</span>
              <span>{species}</span>
            </p>
            <p className="random__item">
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p className="random__item">
              <span>Created:</span>
              <span>{created}</span>
            </p>
          </div>
          <div className="random__image">
            <p>{name}</p>
            <img src={image} alt={name}/>
          </div>
        </div>
    )
  }
};