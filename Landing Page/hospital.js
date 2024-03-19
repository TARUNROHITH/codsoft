const data = {
    Bangalore: {
        Cardiology: {
            ApolloHospital: ["Dr. John Doe", "Dr. Jane Smith"],
            SomeOtherHospital: ["Dr. Mark Johnson"]
        },
        Neurology: {
            AnotherHospital: ["Dr. Emily Brown"]
        }
        // need to add specialities and hospitals 
    },
    // need to add cities as needed
};

function updateSpecialities() {
    const citySelect = document.getElementById("citySelect");
    const specialitySelect = document.getElementById("specialitySelect");
    const hospitalSelect = document.getElementById("hospitalSelect");

    const selectedCity = citySelect.value;

    specialitySelect.innerHTML = "<option selected disabled>Choose a speciality</option>";
    hospitalSelect.innerHTML = "<option selected disabled>Choose a hospital</option>";

    for (const speciality in data[selectedCity]) {
        const option = document.createElement("option");
        option.value = speciality;
        option.textContent = speciality;
        specialitySelect.appendChild(option);
    }
}

function updateHospitals() {
    const citySelect = document.getElementById("citySelect");
    const specialitySelect = document.getElementById("specialitySelect");
    const hospitalSelect = document.getElementById("hospitalSelect");

    const selectedCity = citySelect.value;
    const selectedSpeciality = specialitySelect.value;

    hospitalSelect.innerHTML = "<option selected disabled>Choose a hospital</option>";

    for (const hospital in data[selectedCity][selectedSpeciality]) {
        const option = document.createElement("option");
        option.value = hospital;
        option.textContent = hospital;
        hospitalSelect.appendChild(option);
    }
}

function updateDoctors() {
    const citySelect = document.getElementById("citySelect");
    const specialitySelect = document.getElementById("specialitySelect");
    const hospitalSelect = document.getElementById("hospitalSelect");
    const doctorSelect = document.getElementById("doctorSelect");

    const selectedCity = citySelect.value;
    const selectedSpeciality = specialitySelect.value;
    const selectedHospital = hospitalSelect.value;

    doctorSelect.innerHTML = "<option selected disabled>Choose a doctor</option>";

    const doctors = data[selectedCity][selectedSpeciality][selectedHospital];
    for (const doctor of doctors) {
        const option = document.createElement("option");
        option.value = doctor;
        option.textContent = doctor;
        doctorSelect.appendChild(option);
    }
}
