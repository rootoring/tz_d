import { defineStore } from 'pinia'
import {ref, inject } from 'vue'


const useStore = defineStore('cards', () => {
  const api = inject('api')
  let allCards = ref([])
  let showCards = ref([])
  let cart = ref([])
 

  const fetchCards =  async () =>{   
    let  data = await api.fetchCars()
    allCards.value = data
    showCards.value = allCards.value.slice(0, 4)
  }

  const addToCart = (card) =>{
    cart.value.push(card)
  }

  const removeFromCart = (index) =>{
    cart.value.splice(index,1)
  }

  const loadCards = (i) =>{
    showCards.value.push(...allCards.value.slice(i , i+4))
  }

  return {
    allCards,
    showCards,
    cart,
    fetchCards,
    addToCart,
    removeFromCart,
    loadCards
  }
})

export default useStore