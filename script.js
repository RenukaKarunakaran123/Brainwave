document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    // Add to cart button event listener
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const productElement = e.target.closest(".product");
            const productId = productElement.dataset.id;
            const productPrice = parseFloat(productElement.dataset.price);
            const productName = productElement.querySelector("h3").textContent;

            // Add product to cart
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });

    // Update cart UI
    function updateCart() {
        const cartItemsElement = document.getElementById("cart-items");
        cartItemsElement.innerHTML = ""; // Clear previous items
        let total = 0;

        // Add items to cart
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });

        // Update total price and cart count
        document.getElementById("total-price").textContent = `Total: $${total.toFixed(2)}`;
        document.getElementById("cart-count").textContent = cart.length;
    }

    // Checkout button
    document.getElementById("checkout").addEventListener("click", () => {
        alert("Thank you for your purchase!");
        cart = []; // Clear the cart
        updateCart();
    });
});
