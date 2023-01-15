let span=document.querySelectorAll("span");
console.log(span[0].innerHTML);


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6830dfa42emsh44a75930593d07ap195fd3jsnbe9d8173afd4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		span[0].innerHTML=response.feels_like;
		span[1].innerHTML=response.humidity;
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		span[2].innerHTML=response.feels_like;
		span[3].innerHTML=response.humidity;
	})
	.catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		span[4].innerHTML=response.feels_like;
		span[5].innerHTML=response.humidity;
	})
	.catch(err => console.error(err));