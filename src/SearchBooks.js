import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  render() {

    let showingBooks

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    }else {
      showingBooks = this.props.books
    }
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <input className='search-books-input' type='text' placeholder='Search by title or author' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
          <Link to='/' className='close-search'>Close</Link>
        </div>
        <div className='search-books-results'>
          <Bookshelf 
            filteredBooks={showingBooks}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooks