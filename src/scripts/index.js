/* Desenvolva sua lógica aqui ... */
import { products } from "./productsData.js";
import { categories } from "./productsData.js";
import { inputRange} from "./range.js";
import { darkMode } from "./theme.js";


function createAlbumMusic(products) {
  const album = document.createElement("li");
  const img = document.createElement("img");
  const info = document.createElement("p");
  const name = document.createElement("h2");
  const textContainer = document.createElement("div");
  const containerHero = document.createElement("span");
  const price = document.createElement("p");
  const btnPay = document.createElement("button");

  img.setAttribute('src', products.img);
  img.setAttribute('class', 'card__img')
  album.setAttribute('class','card__content')
  containerHero.setAttribute('class','card__hero')
  textContainer.setAttribute('class','card__text')
  info.setAttribute('class','card__info')
  btnPay.setAttribute('class','button-default')
  info.innerText = `${products.band} ${products.year}`;
  name.innerText = products.title;
  price.innerText = `R$ ${products.price}`;
  btnPay.innerText = "Comprar";

  textContainer.append(info, name)
  containerHero.append(price, btnPay);
  album.append(img, textContainer, containerHero);

  return album;
}

function rederBtnFilter(filters) {
  const container = document.querySelector("#filter");

  filters.forEach((filter) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
            <li>
            <button class="btnFilter font-text">
            ${filter}
            </button>
            </li>
            `
    );
  });
}

function renderizaAlbum(products) {
  const containerAlbum = document.querySelector("#containerAlbum");

  products.forEach((product) => {
    const album = createAlbumMusic(product);
    containerAlbum.append(album);
  });
}

function filterAlbumCategory(product,category){
    const btnFilter = document.querySelectorAll('.btnFilter')
    const containerAlbum = document.querySelector("#containerAlbum");
    
    btnFilter.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            if(btn.innerText === 'Todos'){
            containerAlbum.innerHTML = ""
            renderizaAlbum(product)
            }else{
                const indiceCategory = category.findIndex((element) => element === btn.innerText)
                const filtered = product.filter((element) => element.category === indiceCategory)
                
                containerAlbum.innerHTML = ""
                renderizaAlbum(filtered)
            }
        })
    })
}

export function filterAlbumPrice(product,price){
  let album = product
  let value = price
  const filterPrice = album.filter((element)=> element.price <= value)
 
    containerAlbum.innerHTML = ""
    renderizaAlbum(filterPrice)
}
rederBtnFilter(categories);
filterAlbumCategory(products,categories)
renderizaAlbum(products);
inputRange(products)
darkMode()
