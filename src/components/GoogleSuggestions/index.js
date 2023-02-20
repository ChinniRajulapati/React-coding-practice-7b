import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updatedSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-container">
        <div className="image-container">
          <img
            alt="google logo"
            className="google-image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          />

          <div className="suggestions-container">
            <div className="search-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                placeholder="Search Google"
                className="input-box"
                onChange={this.onChangeSearchInput}
                type="search"
                value={searchInput}
              />
            </div>
            <ul className="suggest-container">
              {searchResults.map(eachObj => (
                <SuggestionItem
                  key={eachObj.id}
                  suggestionDetails={eachObj}
                  updatedSearchInput={this.updatedSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
