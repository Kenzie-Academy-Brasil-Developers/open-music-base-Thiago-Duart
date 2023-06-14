import {filterAlbumPrice} from "./index.js";


export function inputRange(product) {
    const price = document.getElementById('price');
    const temp = document.getElementById('temp');


price.addEventListener('input', () => {
  let priceValue = price.value;
  temp.textContent = parseFloat(priceValue).toFixed(2)
  filterAlbumPrice(product,priceValue)
    
});
}
