import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

  static propTypes = {
    title: PropTypes.string,
    filteredBooks: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className='bookshelf'>
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.filteredBooks.map((book) =>
              <Book key={ book.id } book={ book }             
              onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)
            }}/>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
