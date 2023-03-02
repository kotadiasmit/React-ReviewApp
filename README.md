In this project, let's build a **Reviews App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif" alt="reviews app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/reviews-app-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/reviews-app-lg-output.png)

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the left arrow is clicked, then the previous review details should be displayed
- When the right arrow is clicked, then the next review details should be displayed
- If the review that is being displayed is the first in the list of reviews
  - There should not be any state change when the left arrow is clicked
- If the review that is being displayed is the last in the list of reviews
  - There should not be any state change when the right arrow is clicked
- The `ReviewsCarousel` component receives the `reviewsList` as a prop. It consists of a list of review objects with the following properties in each review object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |   imgUrl    |  String   |
  |  username   |  String   |
  | companyName |  String   |
  | description |  String   |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/ReviewsCarousel/index.js`
- `src/components/ReviewsCarousel/index.css`
</details>
