import React, {Component} from 'react';
import ItemList from '../itemList';
import BookDetails, {Field} from '../bookDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock';


export default class BookPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 5,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id

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
                getDate = {this.gotService.getAllBooks}
                renderItem = {({name}) => `${name}` }/>
        )

        const bookDetails = (
            <BookDetails bookId = {this.state.selectedBook}>
                <Field field = 'numberOfPages' lable = 'NumberOfPages' />
                <Field field = 'publister' lable = 'Publister' />
                <Field field = 'released' lable = 'Released' />
            </BookDetails>
        )

        return (
            <RowBlock left = {itemList} right = {bookDetails}/>
        )
    }
}