import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftArrowClicked = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  rightArrowClicked = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index !== reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {description, companyName, username, imgUrl} = reviewsList[index]

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-img" />
        <div className="scroll-container">
          <button
            className="btn"
            type="button"
            data-testid="leftArrow"
            onClick={this.leftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            className="btn"
            type="button"
            data-testid="rightArrow"
            onClick={this.rightArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
