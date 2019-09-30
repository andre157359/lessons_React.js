import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoader = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) =>{
        this.setState({
            error: true,
            loading: false
        })

    }


    updateChar() {
        // const id = Math.floor(Math.random()*256 + 25);
        const id = 30000000;
        this.gotService.getCharacterc(id)
            .then (this.onCharLoader)
            .catch(this.onError);
    }

    render() {
        const {char, loading, error } = this.state;
        const spinner = loading ? <Spinner/>: null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <View char = {char}/> : null;



        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const{name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name} </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}