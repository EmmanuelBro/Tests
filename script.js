
/*Se utilizo Live Server extension para visual studio code, para ejecutar una ruta/endpoint local desde http://127.0.0.1:5500/*/

const urlFakeDataBase = '/contacts/fakedatabase.json';
const getID = "cf63ff0d-ecaa-448d-9456-a225a44c3159";
const deleteID = "6daf7db3-69f4-437b-94fa-eb40aff91977";

fetchMethodGet(urlFakeDataBase);

fetchMethodGetID(urlFakeDataBase, getID);

fetchMethodDelete(urlFakeDataBase, deleteID);

/*Metodo GET*/
function fetchMethodGet(url){
    fetch(url,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => {
        if(res.ok){
            console.log(res.status);
        }
        return res;
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}

/*Metodo GET por ID*/
function fetchMethodGetID(url, contactId){
    fetch(url + "/" + contactId,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => {
        if(res.ok){
            console.log(res.status);
        }else{
            console.log(res.status);
            console.log("404 Not Found");
        }
        return res;
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}



/*Metodo DELETE*/
function fetchMethodDelete(url, contactId){        
     fetch(url + "/" + contactId,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => {
        if(res.ok){
            console.log(res.status);
        }else{
            console.log(res.status);
            console.log("404 Not Found");
        }
    })
    .catch((error) => console.log(error))
}