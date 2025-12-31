// Import Axios
const axios = require('axios');
// Make a GET request
// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         // Handle successful response
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         // Handle error
//         console.error('Error:', error);
//     });
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();