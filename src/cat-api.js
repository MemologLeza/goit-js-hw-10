const api_key = "live_wOpaNNQrDC5ZrroVXLVzIuPZjk6o8qleMWaRuOW92MZE3s1b3JrLfRWTh4wTqGPk";

function fetchBreeds() {
    const url = `https://api.thecatapi.com/v1/breeds?api_key=${api_key}`;
    return fetch(url).then((res) => res.json());
}
export { fetchBreeds };
function fetchCatByBreed(breedId){
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}&breed_ids=${breedId}&limit=1`;
    return fetch(url).then((res)=>res.json());
}
export {fetchCatByBreed};