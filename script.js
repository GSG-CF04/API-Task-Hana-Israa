const api ="https://www.breakingbadapi.com/api/characters";
const select= document.querySelector(".custom-select");
const content =document.querySelector(".flip-card");

/* Get data from API */
async function getData(){
const response = await fetch(api)
const data = await response.json();  

printData(data); 
}
/* print data from API to list */
function printData(data){
select.innerHTML =`<select onchange="getSelectValue(this.value)"><option>Choose characters: </option>${data.map( character => `<option>${character.name}</option>`)}</select>`
}

getData();

/* Get data from list to show to card*/
async function getSelectValue(character){

    const response = await fetch(`${api}?name=${character}`)
    const data = await response.json()

    content.innerHTML= `<div class="flip-card-inner">
    <div class="flip-card-front">
        <img src="${data[0].img}" alt="char" class="card-img">
    </div>
    <div class="flip-card-back">
        <ul class="card-li">
            <li>Actor-name:  ${data[0].name}</li>
            <li>Nickname:  ${data[0].nickname}</li>
            <li>Birthday:  ${data[0].birthday}</li>
        </ul>
    </div>
    </div>`
}