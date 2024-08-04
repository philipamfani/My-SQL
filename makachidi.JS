// Initialize cart from sessionStorage
function getCart() {
    return JSON.parse(sessionStorage.getItem('cart')) || [];
}

// Save cart to sessionStorage
function saveCart(cart) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productName, price) {
    const cart = getCart();
    
    // Ensure price is a valid number
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
        console.error('Invalid price value');
        return;
    }

    // Check for duplicate items
    const existingItemIndex = cart.findIndex(item => item.name === productName);
    
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].price += parsedPrice; // Update price if item already exists
    } else {
        cart.push({ name: productName, price: parsedPrice });
    }

    saveCart(cart);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    // Clear current cart items
    cartItems.innerHTML = '';

    // Add items to cart list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = ${item.name} - $${item.price.toFixed(2)};
        cartItems.appendChild(listItem);
    });

    // Update total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElem.textContent = $${totalPrice.toFixed(2)};
}

// Clear cart
function clearCart() {
    sessionStorage.removeItem('cart');
    updateCartUI();
}

// Initialize cart UI on page load
window.onload = function() {
    updateCartUI();
};

// Export functions if needed elsewhere
export { addToCart, clearCart };
