document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Switch to login form
    loginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    // Switch to signup form
    signupBtn.addEventListener('click', () => {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    // Handle login form submission (simulation)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        window.location.href = "https://rocksaad-studio.github.io/home/"; // Redirect to your website
    });

    // Handle signup form submission (simulation)
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signed up successfully!');
        window.location.href = "https://rocksaad-studio.github.io/home/"; // Redirect to your website
    });
});
