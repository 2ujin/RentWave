const URL = "http://localhost:3001";

function GetPropertysummary(id: any) {
  return fetch(`${URL}/summary/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export { GetPropertysummary };
