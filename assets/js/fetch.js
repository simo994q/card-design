function getProducts() {
    return fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
};

const containerElement = document.getElementById('container')

function addProductToDom(product) {
    const productElement = document.createElement('div')

    productElement.classList.add('productContainer')

    productElement.innerHTML = `
    <img src="${product.images[0]}" alt="" class="productImg">
    <h1 class="productTitle">${product.title}</h1>
    <p class="productDesc">${product.description}</p>
    <h2 class="productPrice">$${product.price}</h2>
    <p class="productRating">${product.rating} / 5</p>
    <button class="productButton" onclick="addToCart(${product.id}, '${product.title}')">Add to cart</button>
    `
    containerElement.appendChild(productElement)
};

getProducts().then((data) => {
    console.log(data);
    data.products.map((product) => {
        addProductToDom(product)
    })
})


function addToCart(id, title) {
    let cart = { id: id, title: title }
    localStorage.setItem('cart', JSON.stringify(cart))
}


function createCart() {
    const shoppingCart = JSON.parse(localStorage.getItem('myCart')) || { cartItems: [] }

    function saveCart() {
        localStorage.setItem('myCart', JSON.stringify(shoppingCart))
    };

    return {
        getCartItems: function () {
            return cart.cartItems
        },

        increaseCartQuantity: function (id, price, title) {
             let existingItem = cart.cartItems.find(function(item) {
                return item.id === id
             })
             if (existingItem) {
                existingItem.amount += 1
             } else {
                cart.cartItems.push({id: id, price: price, amount: 1, title: title})
             }
        },
    }

};