import React, { Component } from 'react';
import ShelfSwitcher from './ShelfSwitcher'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  updateShelf(shelf) {
    console.log(`book to shelf: ${shelf}`)
    BooksAPI.update(this.props.book, shelf)
  }

  render() {

    return (
      <li>
        <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{
            backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
            width: 128, height:192
          }}><ShelfSwitcher
            currentShelf={this.props.book.shelf}
            onChangeShelf={(shelf) => {
              this.props.onChangeShelf(this.props.book, shelf)
            }}
            />
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        <div className='book-authors'>{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book