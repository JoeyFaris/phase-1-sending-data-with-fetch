// Add your code here


function submitData(name, email) {
    fetch('http://localhost:3000/users,', {
    method: 'POST',
    headers: {
        'Content-Type': 'applications/json',
        'Accept': 'applications/json',
    },

    body: JSON.stringify( {
        name,
        email
    })
})
    .then(response => response.json)
    }



submitData('Joey Faris', 'joeyfaris1@yahoo.com');

  