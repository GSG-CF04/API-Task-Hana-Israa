const api ="https://www.breakingbadapi.com/api/characters";
const select= document.querySelector(".custom-select");


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
getData()

/* Get data from list to show to card*/
async function getSelectValue(character){
// go here Israa
}
