const patients = [
    { id: 1, name: 'Alen', age: 39 },
    { id: 2, name: 'Deena', age: 47 },
    { id: 3, name: 'Diana', age: 21 },
    { id: 4, name: 'Jack', age: 54 },
    { id: 5, name: 'Jain', age: 23 },
    { id: 6, name: 'Kelvin', age: 61 },
    { id: 7, name: 'Louis', age: 69 },
    { id: 8, name: 'Rex', age: 49 }
];

function displayPatients(patients) {
    const tbody = document.querySelector("#patientTable tbody");
    tbody.innerHTML = "";

    patients.forEach(patient => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = patient.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = patient.name;
        row.appendChild(nameCell);

        const ageCell = document.createElement("td");
        ageCell.textContent = patient.age;
        row.appendChild(ageCell);

        tbody.appendChild(row);
    });
}

function sortPatients() {
    const sortedPatients = patients.slice().sort((a, b) => b.age - a.age);
    displayPatients(sortedPatients);
}

function checkPatientId() {
    const patientId = parseInt(document.getElementById("patientId").value);
    const isPresent = patients.some(patient => patient.id === patientId);
    alert(`Is P-Id ${patientId} present? ${isPresent}`);
}

function filterPatients() {
    const minAge = parseInt(document.getElementById("minAge").value);
    const maxAge = parseInt(document.getElementById("maxAge").value);
    const filteredPatients = patients.filter(patient => patient.age >= minAge && patient.age <= maxAge);
    displayPatients(filteredPatients);
}

displayPatients(patients);
