import {data} from '../data/data.js';

/* console.log(data); */
let container = document.getElementById("container");
let cardItem = document.getElementById("cardItem");
let fragment = document.createDocumentFragment();


let movies = data.map( movie => {
    const {id, title, image} = movie;
    let card = document.createElement('div');
    card.setAttribute('class', 'card__item');
    card.innerHTML += `
    <div class="card__container">
        <img src="${image}" class="img" id="img" alt="image of movie">
        <a href="#exampleModal" id="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <h3 class="title" id="${id}">${title}</h3>
        </a>
    </div>
`;

/* console.log(card); */
let cloneCard = card.cloneNode(true)
fragment.appendChild(cloneCard);
/* console.log(cloneCard) */
});
cardItem.appendChild(fragment);


cardItem.addEventListener('click', (e) => {
    
      /*   container.innerHTML = ''; */
    /*  container.style.display = 'inline-block';
    */
    
    if(e.target.classList.contains('title')) {
        let idInfo = e.target.id;
        console.log(idInfo);
        data.forEach(item => {
            const {id, title, info, gender, image} = item;
 
            if(idInfo === id) {
                container.innerHTML += `
                    <div class="px-3 mt-2 text-center bg">
                        <h1>${title}</h1>
                        <img src="${image}" alt="" class="img w-50 rounded mx-auto d-block">
                        <p>${info}</p>
                        <h6>${gender}</h6>
                    </div>
                </div>
            `;                 
            } 
           
        })
    }
})








