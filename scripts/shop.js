import products from './products.json' assert { type: 'json' }

const cardsContainer = document.querySelector('#product-cards-container')

for (const product of products) {
  const cardTemplate = document.querySelector('#product-card-template').content

  cardTemplate.querySelector('img').src = product.productImages[0]
  cardTemplate.querySelector('.product-name').textContent = product.name
  cardTemplate.querySelector('.product-price').textContent = product.price

  cardsContainer.appendChild(document.importNode(cardTemplate, true))
}
