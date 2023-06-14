import {filterAlbumPrice} from "./index.js";


export function inputRange(product) {
    const price = document.getElementById('price');
    const valueRealTime = document.getElementById('temp');


price.addEventListener('input', () => {
  let priceValue = price.value;
  valueRealTime.textContent = parseFloat(priceValue).toFixed(2)
  filterAlbumPrice(product,priceValue)
    
});
}
