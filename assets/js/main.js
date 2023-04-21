function getProducts() {
    return fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
};

const containerElement = document.getElementById('productContainer')

function addProductToDom(product) {
    const productElement = document.createElement('div')

    productElement.classList.add('productContainer')

    productElement.innerHTML = `
    <img src="${product.images[0]}" alt="" class="productImg">
    <h1 class="productTitle">${product.title}</h1>
    <p class="productDesc">${product.description}</p>
    <h2 class="productPrice">$${product.price}</h2>
    <p class="productRating">${product.rating} / 5</p>
    <div>
    <button class="productButton" onclick="shoppingcart.increaseCartQuantity(${product.id}, ${product.price}, '${product.title}')">Add to cart</button>
    <button class="productButton" onclick="shoppingcart.setDeleteItem(${product.id})">Remove</button>
    <button class="productButton" onclick="shoppingcart.decreaseCartQuantity(${product.id})">Remove one</button>
    </div>
    `
    containerElement.appendChild(productElement)
};

getProducts().then((data) => {
    console.log(data);
    data.products.map((product) => {
        addProductToDom(product)
    })
})


// function addToCart(id, title) {
//     let cart = { id: id, title: title }
//     localStorage.setItem('cart', JSON.stringify(cart))
// }


function createCart() {
    const cart = JSON.parse(localStorage.getItem('myCart')) || { cartItems: [] }

    function saveCart() {
        localStorage.setItem('myCart', JSON.stringify(cart))
    };

    return {
        getCartItems: function () {
            return cart.cartItems
        },

        setDeleteItem: function (id) {
            cart.cartItems = cart.cartItems.filter(function (item) {
                return item.id !== id
            })
            saveCart()
        },

        increaseCartQuantity: function (id, price, title) {
            let existingItem = cart.cartItems.find(function (item) {
                return item.id === id
            })
            if (existingItem) {
                existingItem.amount += 1
            } else {
                cart.cartItems.push({ id: id, price: price, amount: 1, title: title })
            }
            saveCart()
        },

        decreaseCartQuantity: function (id) {
            let existingItem = cart.cartItems.find(function (item) {
                return item.id === id
            })
            if (existingItem) {
                if (existingItem.amount === 1) {
                    cart.cartItems = cart.cartItems.filter(function (item) {
                        return item.id !== id
                    })
                }
                else {
                    existingItem.amount -= 1
                }
                saveCart()

            }
        }
    }

};

const shoppingcart = createCart()

// console.log("cart items:", shoppingcart.getCartItems());



const shoppingCartContainer = document.getElementById('cartContainer')
const shoppingCartButton = document.getElementById('cartButton')

function openShoppingCart () {


};