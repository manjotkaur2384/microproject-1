// Select the button and display area from the HTML page
const fetchButton = document.getElementById('fetchDataButton');
const displayArea = document.getElementById('displayArea');
const dataContainer = document.getElementById('dataContainer');

// Function to fetch data from the Express API using async/await
async function fetchData() {
    try {
        // Fetch data from the API (assuming it's hosted at /api/data)
        const response = await fetch('/api/data');
        
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Check if data is an array (or modify as needed depending on API structure)
        if (Array.isArray(data)) {
            // Display the data in a nicely formatted way
            displayArea.innerHTML = `<ul>${data.map(item => `<li><strong>${item.title}:</strong> ${item.location}</li>`).join('')}</ul>`;
        } else {
            displayArea.innerHTML = '<p>No data available or unexpected data format.</p>';
        }
    } catch (error) {
        // Handle errors (such as network issues or API errors)
        displayArea.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

// Attach an event listener to the button to trigger fetchData when clicked
fetchButton.addEventListener('click', fetchData);

// Event listener for button click
document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        // Clear existing content
        dataContainer.innerHTML = '';

        // Display JSON data
        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${item.title}</h3><p>${item.location}</p>`;
            dataContainer.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
