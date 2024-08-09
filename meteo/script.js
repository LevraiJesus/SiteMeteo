document.getElementById('temps').addEventListener('click', function() {
    const ville = document.getElementById('ville').value;
    const apiKey = '992b5fff7bcaee1df0afbf22caf02686'; // CLE API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(apiUrl)
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data);
            if (data.cod === 200) {
                const resultatmeteo = `
                    <h2>${data.name}</h2>
                    <p>Température: ${data.main.temp} °C</p>
                    <p>Météo: ${data.weather[0].description}</p>
                `;
                document.getElementById('resultatmeteo').innerHTML = resultatmeteo;
            } else {
                document.getElementById('resultatmeteo').innerHTML = '<p>Ville introuvable</p>';
            }
        })
});
