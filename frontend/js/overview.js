//map
const map = L.map('map').setView([31.5, 34.8], 8); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([31.5, 34.8]).addTo(map);
marker.bindPopup('Example Marker').openPopup();


//age chart
var xValues = ["0-18", "19-35", "36-50", "51-65", "65+"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
"#a74c65",
"#2f71a3",
"#a58c4d",
"#3c8489",
"#9B59B6"
];

new Chart("age-chart", {
type: "pie",
data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    title: {
    display: true,
    text: "Age Distribution"
    }
}
});


//gender chart
xValues = ["Male", "Female"];
yValues = [65, 35];
barColors = [
"#2f71a3",
"#a74c65"
];

new Chart("gender-chart", {
type: "pie",
data: {
    labels: xValues,
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    title: {
    display: true,
    text: "Gender Ratios"
    }
}
});


//population chart
xValues = ["Jabalia", "Beit Lahia", "Quds", "Shejaiya", "Hebron", "Nablus", "Ramallah", "Beit Jala"];
yValues = [50000, 30000, 20000, 40000, 250000, 150000, 100000, 25000];
barColors = "rgba(128, 255, 212, 0.5)";

new Chart("population", {
type: "bar",
data: {
    labels: xValues,
    datasets: [{
    label: "Population",
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    legend: {display: true},
    title: {
    display: false,
    text: "Population"
    }
}
});