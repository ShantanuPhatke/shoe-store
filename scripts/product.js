import products from './products.json' assert { type: 'json' }

const params = new URLSearchParams(window.location.search)

const productId = params.get('productId')

if (productId) {
  const product = products.find((product) => product.id === productId)

  document.querySelector('.product-image').src = product.productImages[0]
  document.querySelector('.product-name').textContent = product.name
  document.querySelector('.product-price').textContent = product.price
  document.querySelector('.product-description').textContent =
    product.description
}
