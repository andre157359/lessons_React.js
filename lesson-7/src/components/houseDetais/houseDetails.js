import React, {Component} from 'react';
import './houseDetails.css';
import gotService from '../../services/gotService';

const Field = ({house, field, lable}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{lable}</span>
            <span>{house[field]}</span>
        </li>
    )

}

export {
    Field
}
export default class HouseDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.houseId !== prevProps.houseId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {houseId} = this.props;
        if (!houseId) {
            return;
        }

        this.gotService.getHouse(houseId)
            .then((house) => {
                this.setState({house})
            })
    }

    render() {

        if (!this.state.house) {
            return <span className = 'select-error'>Please select a house</span>
        }

        const {house} = this.state;
        const {name} = house;



        return (
            <div className="house-details rounded">
                <h4> {name} </h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {house})
                        })
                    }
                </ul>
            </div>
        );
    }
}