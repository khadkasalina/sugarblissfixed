// Function to generate random user reviews with ratings
function generateRandomReviews() {
    const userNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank']; // Sample user names
    const reviews = [
      'Great cafe! Loved the ambiance.',
      'Delicious coffee and friendly staff.',
      'Amazing pastries! Will come back for more.',
      'Cozy atmosphere and excellent service.',
      'Highly recommended for coffee lovers.',
      'Fantastic desserts and tasty drinks.'
    ]; // Sample reviews
    const rating = [3,4,5,2,3,2]; // Maximum rating
  
    const randomReviews = [];
    for (let i = 0; i < 6; i++) { // Generating more reviews to ensure looped display
      const randomName = userNames[i];
      const randomReview = reviews[i];
      const randomRating = rating[i];
      randomReviews.push({ name: randomName, review: randomReview, rating: randomRating });
    }
  
    return randomReviews;
  }
  
  // Function to create a single review card
  function createReviewCard(name, review, rating) {
    return `
      <div class="card">
        <h3>${name}</h3>
        <p>${review}</p>
        <div class="star-rating">
          ${getStarRating(rating)}
        </div>
      </div>
    `;
  }
  
  // Function to generate star ratings based on the provided rating value
  function getStarRating(rating) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starsHTML += '<span>★</span>';
      } else {
        starsHTML += '<span>☆</span>';
      }
    }
    return starsHTML;
  }
  
  // Function to display user reviews in the carousel
  function displayReviews() {
    const carousel = document.querySelector('.carousel');
    const reviews = generateRandomReviews();
  
    let reviewsHTML = '';
    reviews.forEach((review, index) => {
      reviewsHTML += createReviewCard(review.name, review.review, review.rating);
    });
  
    carousel.innerHTML = reviewsHTML;
  }
  
  // Slide the carousel left or right
  function slideCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const distanceToMove = cardWidth * 3;
  
    if (direction === 'prev') {
      carousel.style.transform = `translateX(${distanceToMove}px)`;
      setTimeout(() => {
        carousel.prepend(...Array.from(document.querySelectorAll('.card')).slice(-3));
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 500);
    } else if (direction === 'next') {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${distanceToMove}px)`;
      setTimeout(() => {
        carousel.append(...Array.from(document.querySelectorAll('.card')).slice(0, 3));
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
      }, 500);
    }
  }
  
  // Display user reviews on page load
  window.addEventListener('load', () => {
    displayReviews();
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
  
    leftArrow.addEventListener('click', () => slideCarousel('prev'));
    rightArrow.addEventListener('click', () => slideCarousel('next'));
  });

  window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 500) {
      scrollButton.style.opacity = '1';
      scrollButton.style.visibility = 'visible';
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.visibility = 'hidden';
    }
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    scrollToTop(1000); // Change the duration (in milliseconds) for slower or faster scrolling
  });
  
  // Function to scroll to the top with a specific duration
  function scrollToTop(duration) {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (duration / 15);
    const cosParameter = scrollHeight / 2;
  
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(function() {
      if (window.scrollY != 0) {
        scrollCount += 1;
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  
// JavaScript for Lightbox initialization
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
// JavaScript for handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  // You can handle form submission here, such as sending the data to a backend server
  
  // For this example, let's log the form data to the console
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);
  
  // Optionally, you can display a confirmation message or redirect to a thank you page
});
  