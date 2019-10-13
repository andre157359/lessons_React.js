import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock';


export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 25,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id

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
                getDate = {this.gotService.getAllCharacterc}
                renderItem = {({name, gender}) => `${name} (${gender})` }/>
        )

        const charDetails = (
            <CharDetails charId = {this.state.selectedChar}>
                <Field field = 'gender' lable = 'Gender' />
                <Field field = 'born' lable = 'Born' />
                <Field field = 'died' lable = 'Died' />
                <Field field = 'culture' lable = 'Culture' />
            </CharDetails>
        )

        return (
            <RowBlock left = {itemList} right = {charDetails}/>
        )
    }
}