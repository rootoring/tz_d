import { defineStore } from 'pinia'
import {ref, inject,watch } from 'vue'


const useStore = defineStore('search-filters', () => {
  const api = inject('api')
  let cars = ref([])
  let perPage = ref(9)
  let current_page = ref(null)
  let last_page = ref(null)
  let totalCars = ref(0)
  let showCars = ref(0)
  let search = ref('')
 

  const searchCars =  async () =>{   
    let data, meta
    if(search.value.trim() != ''){
      ({data, meta} = await api.searchCars(search.value, perPage.value, current_page.value))
    }else{
      ({data, meta} = await api.fetchCars(perPage.value, current_page.value))
    }
    totalCars.value = meta.total
    current_page.value = meta.current_page
    last_page.value = meta.last_page
    showCars.value = meta.to
    cars.value = data
  }



  return {
    cars,
    search,
    perPage,
    current_page,
    last_page,
    totalCars,
    showCars,
    searchCars
  }
})

export default useStore