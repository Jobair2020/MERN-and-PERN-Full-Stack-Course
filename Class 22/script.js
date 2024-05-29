// 'use strict';
const products = [
  {
    id: 1,
    name: "Gaming laptop",
    price: 15000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 700,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 6000,
    image: "https://via.placeholder.com/150",
  },
]

let cart = []


function getProductImage(image, name) {
  const productImage = document.createElement("img")
  productImage.alt = name
  productImage.src = image
  productImage.classList.add("w-full", "mb-4")

  return productImage
}

function getProductName(productName) {
  const producElementName = document.createElement("h3")
  producElementName.innerText = productName
  producElementName.classList.add("text-lg", "font-semibold")
  return producElementName
}

function getProductPrice(productPrice) {
  const productElementPrice = document.createElement("h4")
  //   productElementPrice.innerText = "$" + productPrice
  productElementPrice.textContent = `$${productPrice}`
  productElementPrice.classList.add("text-gray-700")
  return productElementPrice
}

function getAddtoCartButton(product) {
  const addToCartButton = document.createElement("button")
  addToCartButton.innerText = "Add to Cart"
  addToCartButton.classList.add(
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "mt-2"
  )

  addToCartButton.addEventListener('click',function (){
    
  })

  return addToCartButton
}

function getProductCard(product) {
  const card = document.createElement("div")
  // card.className
  card.classList.add("bg-red", "p-4", "rounded", "shadow")
  const productImage = getProductImage(product.image, product.name)
  card.appendChild(productImage)

  const productName = getProductName(product.name)
  card.appendChild(productName)

  const productPrice = getProductPrice(product.price)
  card.appendChild(productPrice)
  // card.innerText = product.toUpperCase(

  const addToCartButton = getAddtoCartButton(product)
  card.appendChild(addToCartButton)
  return card
}

function renderProducts() {
  const productListContainer = document.getElementById("product-list")
  productListContainer.innerHTML = ""

  products.forEach(function (product) {
    const productCard = getProductCard(product)
    productListContainer.appendChild(productCard)
    //tod
    //render each product
  })
}

renderProducts()
