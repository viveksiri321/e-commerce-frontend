document.addEventListener('DOMContentLoaded', () => {
  console.log("🛒 Menu page loaded.");
  updateCartCount();
});

// Listen for all Add to Cart button clicks
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const menuItem = button.closest('.menu-item');
    const title = menuItem.querySelector('h3').textContent;
    const price = menuItem.querySelector('p').textContent;
    const image = menuItem.querySelector('img').getAttribute('src');

    const item = { title, price, image };

    // Get existing cart from localStorage or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Push new item to cart
    cart.push(item);

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update UI cart count
    updateCartCount();

    // Show alert and console log
    alert(`${title} added to cart!`);
    console.log(`✅ ${title} added to cart. Total items now: ${cart.length}`);
  });
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.querySelector('.cart-count').textContent = cart.length;
  console.log(`🔄 Cart count updated: ${cart.length}`);
}
