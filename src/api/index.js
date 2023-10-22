export default () =>({
  async	fetchCars( ) {
    const data = await fetch(`data.json`)
    return await data.json()
  },
  async	searchCars(search, perPage, page) {
    const data = await fetch(`https://api.caiman-app.de/api/cars-test?search=${search}&per_page=${perPage}&page=${page}`)
    return await data.json()
  }  
});