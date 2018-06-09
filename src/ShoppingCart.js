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
  }

  clone() {
    return {...this}

  }

}





module.exports = ShoppingCart
