import React, {Component} from 'react';
import './bookDetails.css';
import gotService from '../../services/gotService';

const Field = ({book, field, lable}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{lable}</span>
            <span>{book[field]}</span>
        </li>
    )

}

export {
    Field
}
export default class BookDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.bookId !== prevProps.bookId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {bookId} = this.props;
        if (!bookId) {
            return;
        }

        this.gotService.getBook(bookId)
            .then((book) => {
                this.setState({book})
            })
    }

    render() {

        if (!this.state.book) {
            return <span className = 'select-error'>Please select a book</span>
        }

        const {book} = this.state;
        const {name} = book;



        return (
            <div className="book-details rounded">
                <h4> {name} </h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {book})
                        })
                    }
                </ul>
            </div>
        );
    }
}