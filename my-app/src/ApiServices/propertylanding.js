const URL = "http://localhost:3000"

function GetPropertysummary(id){
    return fetch(`${URL}/summary/${id}`)    
    .then(response=>response.json())
    .catch(error =>console.error(error))
}

export { GetPropertysummary }