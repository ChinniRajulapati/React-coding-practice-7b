import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updatedSearchInput} = props
  const {suggestion} = suggestionDetails

  const updatedSuggestions = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="suggestion-paragraph">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={updatedSuggestions}
      >
        <img
          alt="arrow"
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
