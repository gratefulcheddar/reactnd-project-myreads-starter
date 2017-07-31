import React, { Component } from 'react';

class ShelfSwitcher extends Component {

  state = {
    value: this.props.currentShelf
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    this.props.onChangeShelf(event.target.value)
  }

  render() {
    return (
      <form>
        <div className="book-shelf-changer">
          <select defaultValue={this.state.value} onChange={this.handleChange}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </form>
    )
  }
}

export default ShelfSwitcher