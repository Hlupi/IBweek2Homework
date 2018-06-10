class ShoppingCart {
  constructor(items) {
    this.items = []

  }

  getItems() {
    return this.items
  }

  addItem(item, quant, price) {
    return this.items.push({name: item, quantity: quant, pricePerUnit: price})
  }

  clear() {
    return this.items.length = 0
    // return this.items = []
  }

  clone() {
    const cart2 = new ShoppingCart()
    cart2.items = [...this.items]
    return cart2
  }

}





module.exports = ShoppingCart
