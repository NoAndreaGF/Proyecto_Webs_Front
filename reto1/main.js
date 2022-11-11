//  main.js
const API_URL = 'http://localhost:2526';

window.addEventListener('load', 
  function() {
    getCustomers();
  }, false
  
);

function sendData() {
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastname').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  console.log(name, lastName, phone, address);

  // POST request using fetch()
  fetch(`${API_URL}/customers`, {
        
    // Adding method type
    method: "POST",
    
    // Adding body or contents to send
    body: JSON.stringify({
        name: name,
        lastName: lastName,
        phone: phone,
        address: address
    }),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  })

  // Converting to JSON
  .then(response => response.text())

  // Displaying results to console
  .then((json) => {
      console.log(json);
      alert("Se creo el cliente");
      getCustomers();
  });
  
};

function getCustomers() {
  //  GET request using fetch()
  fetch(`${API_URL}/customers`)
    
  // Converting received data to JSON
  .then(response => response.json())
  .then(json => {

      // Create a variable to store HTML
      let li = `<tr><th>Name</th><th>LastName</th></tr>`;
    
      // Loop through each data and add a table row
      json.forEach(customer => {
          li += `<tr>
              <td>${customer.name} </td>
              <td>${customer.lastName}</td>        
          </tr>`;
      });

  // Display result
  document.getElementById("customers").innerHTML = li;
  });
}