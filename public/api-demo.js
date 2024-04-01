document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayData(data) {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = ''; // Clear previous content

  const table = document.createElement('table');
  table.classList.add('data-table'); // Add a CSS class to the table

  const headerRow = document.createElement('tr');

  // Create table headers
  for (const key in data[0]) {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Create table rows for each car
  data.forEach(car => {
    const row = document.createElement('tr');
    for (const key in car) {
      const cell = document.createElement('td');
      cell.textContent = car[key];
      row.appendChild(cell);
    }
    table.appendChild(row);
  });

  dataContainer.appendChild(table);
}
