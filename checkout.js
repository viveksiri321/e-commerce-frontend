    document.getElementById('checkout-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert("🎉 Order placed successfully!");
      localStorage.removeItem('cart'); // clear cart
      window.location.href = 'index.html';
    });