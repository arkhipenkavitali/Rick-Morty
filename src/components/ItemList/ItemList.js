import React, {Component} from 'react';

import './ItemList.css';
import Api from "../../services/Api";
import Spinner from "../Spinner/Spinner";

export default class ItemList extends Component {
  api = new Api();

  state = {
    itemList: null
  };

  componentDidMount() {
    this.api.getAllLocations().then((itemList)=>{
      this.setState({
        itemList
      })
    });
  }

  renderItems = (arr) => {
    const {onLocationSelected} = this.props;
    return arr.map(({id, name}) => {
        return (
            <li className="item-list__item"
                key={name} onClick={()=>onLocationSelected(id)}>
              <span className="item-list__name">{name}</span>
            </li>
        )
    })
  };

  render() {
    const {itemList} = this.state;

    if(!itemList){
      return <Spinner/>
    }

    const items = this.renderItems(itemList);

    return (
        <ul className="item-list">
          {items}
        </ul>
    )
  }
};