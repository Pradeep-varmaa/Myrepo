const btn = document.getElementById('btn');
const div = document.querySelector(".log");
const status = btn.addEventListener("click",()=>
    setInterval( (status) => {
    navigator.geolocation.watchPosition(position => {
        let coord = [position.coords]
        console.log(coord[0].latitude)
        document.getElementById('map').style.display= "block";
        

            const map = L.map("map").setView([coord[0].latitude, coord[0].longitude], 7); // Andhra Pradesh coords
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                Zoom: 3,
                attribution: "© OpenStreetMap",
            }).addTo(map);


            L.marker([coord[0].latitude, coord[0].longitude]).addTo(map)
                .bindPopup("Live location")
                .openPopup();
        })
    }, 5000));


