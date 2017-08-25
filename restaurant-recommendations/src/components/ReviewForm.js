import React from 'react'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      content: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    let payload = {
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    this.addItem(payload)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleRatingChange(event) {
    this.setState({rating: event.target.value})
  }
  handleReviewChange(event) {
    this.setState({review: event.target.value})
  }

  render() {

    return (
      <div>
        <form>
          <h2>Please leave a review</h2>
          <label>Name:</label>
          <input onChange={this.handleNameChange} value={this.state.name}/>

          <label>Rating:</label>
          <input onChange={this.handleRatingChange} value={this.state.rating}/>

          <label>Review:</label>
          <input onChange={this.handleReviewsChange} value={this.state.content}/>

          <input onClick={this.}
        </form>
      </div>
    );
  }
}

export default ReviewForm;
