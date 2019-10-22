import React, {Component} from 'react';

import './PersonDetails.css';
import Api from "../../services/Api";

export default class PersonDetails extends Component {
    api = new Api();
    
    state = {
        person: null
    };
    
    componentDidMount() {
        this.updatePerson();
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }
    
    updatePerson(){
        const {personId} = this.props;
        
        if (!personId) {
            return;
        }
        
        this.api.getLocation(personId).then((person) => {
            this.setState({person});
        })
    };
    
    render() {
        
        if(!this.state.person){
            return <div className="details">Please select from a left list</div>
        }
        
        const {name, type, dimension, residents, created} = this.state.person;
        
        return (
            <div className="details">
                <div className="details_row">
                    <p>Name: {name}</p>
                    <p>Type: {type}</p>
                    <p>Dimension: {dimension}</p>
                    <p>Residents: {residents}</p>
                    <p>Created: {created}</p>
                </div>
            </div>
        );
    }
};