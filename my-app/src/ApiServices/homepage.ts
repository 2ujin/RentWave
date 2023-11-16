const url = "http://localhost:3001";

function GetProperties() {
  return fetch(`${url}/propertylistings`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

async function AddNewProperty(property: any) {
  try {
    const data = await fetch(`${url}/addProperty`, {
      method: "Post",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(property),
    });
    const response = await data.json();
    if (data.ok) {
      return { status: 201, data: response };
    } else {
      return { status: 400, error: response };
    }
  } catch (error) {
    console.log(error);
  }
}

export { GetProperties, AddNewProperty };
