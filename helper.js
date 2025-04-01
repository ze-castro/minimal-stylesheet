document.addEventListener('DOMContentLoaded', function () {
  // Check for cookies consent
  const cookies = localStorage.getItem('cookies');
  if (!cookies) {
    // Create a cookie consent element
    const cookiesElement = `<div class="cookies">
        <p>We use cookies to improve your experience.</p>
        <button>Accept</button>
      </div>`;

    // Place the cookie consent element at the top of the body
    document.body.insertAdjacentHTML('beforeend', cookiesElement);

    // Wait for click on the button to close the cookie consent
    const cookiesButton = document.querySelector('.cookies button');
    cookiesButton.addEventListener('click', function () {
      localStorage.setItem('cookies', true);
      const cookiesElement = document.querySelector('.cookies');
      cookiesElement.classList.add('close');
      setTimeout(() => {
        cookiesElement.remove();
      }, 300);
    });
  }
});
