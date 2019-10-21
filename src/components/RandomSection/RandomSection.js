import React, {Component} from 'react';
import Api from '../../services/Api';

import './RandomSection.css';
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

export default class RandomSection extends Component {
    
    api = new Api();
    
    state = {
        randomItem: {},
        loading: true,
        error: false
    };
    
    constructor(props) {
        super(props);
        this.getInfo();
    }
    
    onError = () => {
        return this.setState({
            error: true,
            loading: false
        })
    };
    
    getInfo() {
        this.api.getCharactersLength().then((data)=>{
            const random = Math.floor(Math.random() * data + 1);
    
            return this.api.getCharacter(random).then((randomItem) => {
                this.setState({
                    randomItem,
                    loading: false
                })
            }).catch(this.onError);
        });
    }
    
    render() {
        const {randomItem, loading, error} = this.state;
        
        const hasData = !(loading || error);
        
        const errorMessage = error ? <Error /> : null;
        const loader = loading ? <Spinner /> : null;
        const content = hasData ? <RandomView item={randomItem} /> : null;
        
        return (
            <div className="random">
                {errorMessage} {loader} {content}
            </div>
        )
    }
};

const RandomView = ({item}) => {
    
    const {image, name, gender, species, status, created} = item;
    
    return (
        <React.Fragment>
            <div className="random__image">
                <p>{name}</p>
                <img src={image} alt={name} />
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
                <img src={image} alt={name} />
            </div>
        </React.Fragment>
    )
};