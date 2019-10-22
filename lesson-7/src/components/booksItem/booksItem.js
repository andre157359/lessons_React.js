import React, {Component} from 'react';
import './booksItem.css';
import gotService from '../../services/gotService';
import BookDetails, {Field} from '../bookDetails';


export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <BookDetails bookId = {this.props.bookId}>
                <Field field = 'numberOfPages' lable = 'NumberOfPages' />
                <Field field = 'publister' lable = 'Publister' />
                <Field field = 'released' lable = 'Released' />
            </BookDetails>
        )
    }
}