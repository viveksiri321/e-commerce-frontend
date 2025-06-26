  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from refreshing the page

    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Save user to localStorage (not secure, just for demo)
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html"; // redirect to login
  });