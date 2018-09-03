/**
 * Mocking client-server processing
 */

const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export default {
  getProducts: () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(_products), TIMEOUT)
    })
  },

  buyProducts: (cart) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Object.keys(cart.quantityById).length <= MAX_CHECKOUT) resolve(cart)
        else reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`)
      }, TIMEOUT),
    )
  },
}
