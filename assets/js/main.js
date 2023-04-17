const app = document.getElementById('container')

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    });
fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    });




































// function createProducts(data) {
//     for (let i = 0; i < 1; i++) {
//         let productContainer = document.createElement('article')
//         productContainer.classList.add('productContainer')

//         let productImg = document.createElement('img')
//         productImg.classList.add('productImg')

//         let productTitle = document.createElement('h1')
//         productTitle.classList.add('productTitle')

//         let productDesc = document.createElement('p')
//         productDesc.classList.add('productDesc')

//         let productPrice = document.createElement('h2')
//         productPrice.classList.add('productPrice')

//         let productRating = document.createElement('img')
//         productRating.classList.add('productRating')

//         let productButton = document.createElement('button')
//         productButton.classList.add('productButton')


//     }
// };