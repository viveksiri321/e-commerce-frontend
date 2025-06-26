    document.getElementById('login-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.querySelector('input[type="email"]').value;
      const password = document.querySelector('input[type="password"]').value;

      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
        alert("🎉 Login successful!");
        window.location.href = "index.html";
      } else {
        alert("❌ Invalid credentials. Please try again.");
      }
    });