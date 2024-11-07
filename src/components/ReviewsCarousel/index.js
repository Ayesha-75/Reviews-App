import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  getActiveReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReviewIndex]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }

  leftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    return (
      <div className="bg-container">
        <div className="carousel-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="btn"
            onClick={this.leftArrow}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getActiveReview(reviewsList)}
          <button
            type="button"
            data-testid="rightArrow"
            className="btn"
            onClick={this.rightArrow}
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
