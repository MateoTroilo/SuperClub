const fetch = require('node-fetch')
let productosData = []
const baseUrl = 'https://dhfakestore.herokuapp.com/api/products/'

const fetchCompleto = async (url = '') => {
  const request = await fetch(baseUrl + url)
  const data = await request.json()
  return data
}

const Productos = {
  getData: async function () {
    if (productosData.length) return productosData
    try {
      productosData = await fetchCompleto()
    } catch (error) {
      console.error(error)
    }
    return productosData
  },

  findBy: async function (url) {
    try {
      const response = await fetchCompleto(url)
      return response || null
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = Productos
