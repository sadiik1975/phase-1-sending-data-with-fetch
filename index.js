// Add your code here
function submitData(name, email) {
    // Prepare the data to be sent
    const formData = {
      name: name,
      email: email
    };
  
    // Configure the fetch request
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Return the fetch request
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(object => {
        // Append the new id to the DOM
        const idElement = document.createElement('div');
        idElement.textContent = `New ID: ${object.id}`;
        document.body.appendChild(idElement);
        return object; // Return the object for further chaining if needed
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        const errorElement = document.createElement('div');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
  // Export the function for testing
  if (typeof module !== 'undefined') {
    module.exports = { submitData };
  }
  