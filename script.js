// Select form elements
const loginForm = document.querySelector('.form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const loginButton = document.querySelector('.button-confirm');

// Select the birthday card element
const birthdayCard = document.getElementById('birthdayCard');
const cardFront = birthdayCard.querySelector('.cardFront');
const cardInside = birthdayCard.querySelector('.cardInside');

// Login logic when the button is clicked
loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Simple validation for empty fields
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Simulate a login (this is just a mock, in a real-world app, you'd make an API call)
    if (username === 'Aira Francia Ola' && password === 'pakiss') {
        alert('Login successful!');

        // Hide the login form
        loginForm.style.display = 'none';

        // Show the birthday card
        birthdayCard.style.display = 'block';

    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Optional: Add enter key support to submit the form
loginForm.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        loginButton.click(); // Trigger the login button click if Enter is pressed
    }
});
