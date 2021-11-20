const api ="https://www.breakingbadapi.com/api/characters";

/* Get data from API */
async function getData(){
    const response = await fetch(api)
    const data = await response.json();   
}
getData()