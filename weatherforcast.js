const  citydiv=document.getElementById("city")
const  cityname2div=document.getElementById("cityname-2")
const  weatherdiv=document.getElementById("weather")
const  tempdiv=document.getElementById("temp-here")
const  countrydiv=document.getElementById("country-here")
const  localtimediv=document.getElementById("local-time-here")

const city= async (cityname)=>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6b3dbf6af7msh3fe05a74957939bp1e109ajsn4d3bae4f645b',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	
	fetch(https://weatherapi-com.p.rapidapi.com/current.json?q=${cityname}, options)
		.then(response => response.json())
		.then(response => {
			cityname2div.innerText=(response.location.name)
			weatherdiv.innerText=(response.current.condition.text)
			tempdiv.innerHTML=` <span>${(response.current.temp_c)}</span> `
			countrydiv.innerHTML=<span id="country-here">${response.location.country}</span>
			localtimediv.innerHTML=`  <span id="country-here">${response.location.localtime}</span>`
		}
			)
}

const  searchcity=()=> {
		const cityname=citydiv.value
		city(cityname);
	}
