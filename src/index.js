import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
const cat_info = document.querySelector(".cat-info");
const breed_select = document.querySelector(".breed-select");
const error_txt = document.querySelector(".error");
const loader_txt = document.querySelector(".loader");
let storedBreeds = [];
error_txt.classList.add("isHidden");
loader_txt.classList.add("isHidden");
function GetFetchBreeds() {
    loader_txt.classList.remove("isHidden");

  fetchBreeds().then((data) => {
    storedBreeds = data;
    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');
      option.value = breed.id;
      option.innerHTML = `${breed.name}`;
      breed_select.appendChild(option);
    };
    loader_txt.classList.add("isHidden");

  }).catch(onError);
};
GetFetchBreeds();
breed_select.addEventListener("change", GetfetchCatByBreed);
function GetfetchCatByBreed() {
   UpdateCat("");
    const selectedValue = breed_select.value;
  let selectedCat;
  loader_txt.classList.remove("isHidden");
  error_txt.classList.add("isHidden");
  fetchCatByBreed(selectedValue).then((data) => {
    selectedCat = data[0];
    UpdateCat(CreateMarkup(selectedCat.breeds[0], selectedCat));
    loader_txt.classList.add("isHidden");

    }).catch(onError);
}
function CreateMarkup({ name, description, temperament }, {url}) {
  return `<img src="${url}" alt="" class="img" />
      <div class"text">
      <h2>${name}</h2>
      <p>${description}</p>
      <p><b>Temperament:</b> ${temperament}.</p>
      </div>`

};
function UpdateCat(markup) {
  cat_info.innerHTML = markup;
}
function onError(err) {
  console.log(err);
  loader_txt.classList.add("isHidden");
  error_txt.classList.remove("isHidden");
}