    // document.addEventListener('DOMContentLoaded', () => {
    //   const cartItemsContainer = document.getElementById('cart-items');
    //   const totalPriceElement = document.getElementById('total-price');
    //   const cartCount = document.querySelector('.cart-count');

    //   let cart = JSON.parse(localStorage.getItem('cart')) || [];

    //   function updateCartUI() {
    //     cartItemsContainer.innerHTML = '';
    //     let total = 0;

    //     cart.forEach((item, index) => {
    //       const price = parseInt(item.price.replace(/[^\d]/g, ''));
    //       total += price;

    //       const itemDiv = document.createElement('div');
    //       itemDiv.className = 'cart-item';
    //       itemDiv.innerHTML = `
    //         <img src="${item.image}" alt="${item.title}" />
    //         <div>
    //           <p><strong>${item.title}</strong> — ${item.price}</p>
    //           <button onclick="removeItem(${index})">Remove</button>
    //         </div>
    //       `;
    //       cartItemsContainer.appendChild(itemDiv);
    //     });

    //     totalPriceElement.textContent = total;
    //     cartCount.textContent = cart.length;
    //   }

    //   window.removeItem = function(index) {
    //     cart.splice(index, 1);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     updateCartUI();
    //   }

    //   updateCartUI();
    // });
    document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const cartCount = document.querySelector('.cart-count');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  console.log("🛒 Cart page loaded. Items in cart:", cart.length);

  function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      total += price;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <p><strong>${item.title}</strong> — ${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.textContent = total;
    cartCount.textContent = cart.length;

    console.log(`🔄 Cart UI updated. Total items: ${cart.length}, Total Price: ₹${total}`);
  }

  window.removeItem = function(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    console.log(`❌ Removed item: ${removedItem.title}. Cart now has ${cart.length} items.`);
  }

  updateCartUI();
});
