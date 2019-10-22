import React, {Component} from 'react';
import ItemList from '../itemList';
import HouseDetails, {Field} from '../houseDetais';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock';


export default class HousePage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 22,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id

        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
        
    }


    render() {
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected = {this.onItemSelected}
                getDate = {this.gotService.getAllHouses}
                renderItem = {({name}) => `${name}` }/>
        )

        const houseDetails = (
            <HouseDetails houseId = {this.state.selectedHouse}>
                <Field field = 'region' lable = 'Region' />
                <Field field = 'words' lable = 'Words' />
                <Field field = 'titles' lable = 'Titles' />
                <Field field = 'overlord' lable = 'Overlord' />
                <Field field = 'ancestralWeapons' lable = 'AncestralWeapons' />
            </HouseDetails>
        )

        return (
            <RowBlock left = {itemList} right = {houseDetails}/>
        )
    }
}