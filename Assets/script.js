function getForcast() {
  var cityValue = document.querySelector("#searchValue").value;

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityValue +
    "&appid=6f9559e8bf23018e0ff8b5dccaa10b0c";
  fetch(url)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      return response.json();
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
    })
    .then(function (data) {
      console.log(data);
    });
  console.log(url);
}

document.querySelector("#searchButton").addEventListener("click", getForcast);
