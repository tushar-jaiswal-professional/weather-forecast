//Complete the Weather API Backend part using openweathermap api

document.querySelector(".search-box").addEventListener("input", async (e) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const date_today = new Date()
    const city = e.target.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=01525b1923322486597bf9c18edb85a3`
    axios.get(url)
    .then(weather_details=>{
      console.log(weather_details);
      document.querySelector(".city").innerHTML = weather_details.data.name + " , " + weather_details.data.sys.country
      document.querySelector(".date").innerHTML = days[date_today.getDay()] + " " + date_today.getDate() + " " + months[date_today.getMonth()] + " " + date_today.getFullYear()
      document.querySelector(".temp").innerHTML = weather_details.data.main.temp + "°C"
      document.querySelector(".weather").innerHTML = weather_details.data.weather[0].main
      document.querySelector(".hi-low").innerHTML = weather_details.data.main.temp_min + "°C / " + weather_details.data.main.temp_max + "°C"
    })
    .catch(err=>{
      console.log(err)
    })
  })