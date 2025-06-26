
console.log("✅ Welcome to Foodie's Hub - Home Page Loaded Successfully!");

// Product Modal Functions
function showProductInfo(title, description, imageSrc) {
    console.log(`ℹ️ Product Clicked: ${title}`);
    document.getElementById('productTitle').textContent = title;
    document.getElementById('productDescription').textContent = description;
    document.getElementById('productImage').src = imageSrc;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    console.log("❌ Modal closed");
    document.getElementById('productModal').style.display = 'none';
}



