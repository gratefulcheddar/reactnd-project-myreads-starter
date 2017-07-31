import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className="open-search">
          <Link to="/search" className='open-search'>Add a book</Link>
        </div>
        <Bookshelf 
          title="Currently Reading" 
          filteredBooks={ this.props.books.filter((book) => book.shelf === 'currentlyReading')}
          onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)}}
        />
        <Bookshelf 
          title="Want To Read"
          filteredBooks={ this.props.books.filter((book) => book.shelf === 'wantToRead')}
          onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)}} 
        />
        <Bookshelf 
          title="Read"
          filteredBooks={ this.props.books.filter((book) => book.shelf === 'read')}
          onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)}}
        />
      </div>
    )
  }
}

export default ListBooks