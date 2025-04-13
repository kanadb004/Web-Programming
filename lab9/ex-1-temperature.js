const temperatures = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];

let hotDays = 0;
let pleasantDays = 0;
let coldDays = 0;

const temperatureTable = document.getElementById("temperatureTable");

temperatures.forEach((temp, index) => {
    let category;

    if (temp >= 85) {
        category = "HOT";
        hotDays++;
    } else if (temp >= 60 && temp < 85) {
        category = "PLEASANT";
        pleasantDays++;
    } else {
        category = "COLD";
        coldDays++;
    }

    const row = document.createElement("tr");

    const dayCell = document.createElement("td");
    dayCell.textContent = index + 1;
    row.appendChild(dayCell);

    const tempCell = document.createElement("td");
    tempCell.textContent = temp;
    row.appendChild(tempCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    row.appendChild(categoryCell);

    temperatureTable.appendChild(row);
});

document.getElementById("summary").innerHTML = `
    <strong>Summary:</strong><br>
    HOT days: ${hotDays}<br>
    PLEASANT days: ${pleasantDays}<br>
    COLD days: ${coldDays}
`;
