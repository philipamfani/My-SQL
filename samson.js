// Initialize cart and total price from localStorage or default to empty array and zero
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

// Function to add items to the cart
function addToCart(productName, price) {
    // Add item to cart array
    const existingItemIndex = cart.findIndex(item => item.name === productName);
    if (existingItemIndex >= 0) {
        // Update price if item already exists
        cart[existingItemIndex].price += price;
    } else {
        // Add new item
        cart.push({ name: productName, price: parseFloat(price) });
    }

    // Update total price
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // Save cart and total price to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    // Update cart UI
    updateCartUI();
}

// Function to update the cart UI
functi
item.namesam
