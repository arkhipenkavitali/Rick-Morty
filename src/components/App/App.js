import React, {Component} from 'react';
import Header from '../Header/Header';
import RandomSection from '../RandomSection/RandomSection';
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";

import './App.css';


export default class extends Component {
    render() {
        return (
            <div>
                <Header />
                <RandomSection />
                <div className="flex">
                    <ItemList />
                    <PersonDetails />
                </div>
            </div>
        )
    }
}