
// بيانات المحطات
const stations = {
    "محطة العليا": {
        metroLine: "الخط الأحمر",
        schedule: [
            { departure: "08:00 صباحًا", arrival: "08:15 صباحًا" },
            { departure: "10:00 صباحًا", arrival: "10:20 صباحًا" },
            { departure: "12:00 مساءً", arrival: "12:15 مساءً" }
        ]
    },
    "محطة قصر الحكم": {
        metroLine: "الخط الأزرق",
        schedule: [
            { departure: "09:00 صباحًا", arrival: "09:20 صباحًا" },
            { departure: "11:00 صباحًا", arrival: "11:20 صباحًا" },
            { departure: "01:00 مساءً", arrival: "01:20 مساءً" }
        ]
    },
    "محطة جامعة الملك سعود": {
        metroLine: "الخط الأخضر",
        schedule: [
            { departure: "07:30 صباحًا", arrival: "07:50 صباحًا" },
            { departure: "09:30 صباحًا", arrival: "09:50 صباحًا" },
            { departure: "11:30 صباحًا", arrival: "11:50 صباحًا" }
        ]
    }
};

// وظيفة البحث
function filterStationDetails() {
    const input = document.getElementById("searchInput").value.trim();
    const stationDetails = document.getElementById("stationDetails");
    const stationTableBody = document.getElementById("stationTableBody");

    if (stations[input]) {
        const station = stations[input];
        stationTableBody.innerHTML = ""; // تفريغ الجدول

        station.schedule.forEach(schedule => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = input;

            const lineCell = document.createElement("td");
            lineCell.textContent = station.metroLine;

            const departureCell = document.createElement("td");
            departureCell.textContent = schedule.departure;

            const arrivalCell = document.createElement("td");
            arrivalCell.textContent = schedule.arrival;

            row.appendChild(nameCell);
            row.appendChild(lineCell);
            row.appendChild(departureCell);
            row.appendChild(arrivalCell);

            stationTableBody.appendChild(row);
        });

        stationDetails.classList.remove("hidden");
    } else {
        stationDetails.classList.add("hidden");
    }
}