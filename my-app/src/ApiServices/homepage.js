
const URL = "http://localhost:3000"


function GetProperties(){
    return fetch(`${URL}/propertylistings`)
    .then(response=>response.json())
    .catch(error =>console.error(error))
}

async function AddNewProperty(property){
    try {
        const data = await fetch(`${URL}/addProperty`,{
            method:'Post',
            headers:{
                "Content-Type":"application/JSON"
            },
            body:JSON.stringify(property)
        });        
        const response = await data.json();
        if(data.ok){           
            return{status:201, data:response};
        }else{
            return{status:400, error:response};
        }}
        catch (error){           
            console.log(error)
        }      
    }


module.exports = {GetProperties,AddNewProperty}