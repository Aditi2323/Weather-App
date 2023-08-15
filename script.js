const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc5da6384bmsh9e701b1fc090456p16143bjsne335a30b57fb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
   .then(response => response.json())
   .then((response) =>{
	 console.log(response)

	  cloud_pct.innerHTML= response.cloud_pct
     feels_like.innerHTML = response.feels_like
     humidity.innerHTML = response.humidity
	  humidity2.innerHTML = response.humidity
     max_temp.innerHTML = response.max_temp
     min_temp.innerHTML = response.min_temp
     sunrise.innerHTML = response.sunrise
     sunset.innerHTML = response.sunset
     temp.innerHTML = response.temp
	  temp2.innerHTML = response.temp
     wind_speed2.innerHTML =response.wind_speed
     wind_speed.innerHTML=response.wind_speed
   })
   .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai',options)
.then(response=> response.json())
.then((response)=>{
   tcnai.innerHTML=response.temp
   cldpctcnai.innerHTML=response.cloud_pct
   flcnai.innerHTML=response.feels_like
   hcnai.innerHTML=response.humidity
   mtcnai.innerHTML=response.max_temp
   mitcnai.innerHTML=response.min_temp
   secnai.innerHTML=response.sunrise
   stcnai.innerHTML=response.sunset
   wdcnai.innerHTML=response.wind_degrees
   wscnai.innerHTML=response.wind_speed
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna',options)
.then(response=> response.json())
.then((response)=>{
   tp.innerHTML=response.temp
   cldpctp.innerHTML=response.cloud_pct
   flp.innerHTML=response.feels_like
   hp.innerHTML=response.humidity
   mtp.innerHTML=response.max_temp
   mitp.innerHTML=response.min_temp
   sep.innerHTML=response.sunrise
   stp.innerHTML=response.sunset
   wdp.innerHTML=response.wind_degrees
   wsp.innerHTML=response.wind_speed
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',options)
.then(response=> response.json())
.then((response)=>{
   tk.innerHTML=response.temp
   cldpctk.innerHTML=response.cloud_pct
   flk.innerHTML=response.feels_like
   hk.innerHTML=response.humidity
   mtk.innerHTML=response.max_temp
   mitk.innerHTML=response.min_temp
   sek.innerHTML=response.sunrise
   stk.innerHTML=response.sunset
   wdk.innerHTML=response.wind_degrees
   wsk.innerHTML=response.wind_speed
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad',options)
.then(response=> response.json())
.then((response)=>{
   tka.innerHTML=response.temp
   cldpctka.innerHTML=response.cloud_pct
   flka.innerHTML=response.feels_like
   hka.innerHTML=response.humidity
   mtka.innerHTML=response.max_temp
   mitka.innerHTML=response.min_temp
   seka.innerHTML=response.sunrise
   stka.innerHTML=response.sunset
   wdka.innerHTML=response.wind_degrees
   wska.innerHTML=response.wind_speed
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=surat',options)
.then(response=> response.json())
.then((response)=>{
   ts.innerHTML=response.temp
   cldpcts.innerHTML=response.cloud_pct
   fls.innerHTML=response.feels_like
   hs.innerHTML=response.humidity
   mts.innerHTML=response.max_temp
   mits.innerHTML=response.min_temp
   ses.innerHTML=response.sunrise
   sts.innerHTML=response.sunset
   wds.innerHTML=response.wind_degrees
   wss.innerHTML=response.wind_speed
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow',options)
.then(response=> response.json())
.then((response)=>{
   tl.innerHTML=response.temp
   cldpctl.innerHTML=response.cloud_pct
   fll.innerHTML=response.feels_like
   hl.innerHTML=response.humidity
   mtl.innerHTML=response.max_temp
   mitl.innerHTML=response.min_temp
   sel.innerHTML=response.sunrise
   stl.innerHTML=response.sunset
   wdl.innerHTML=response.wind_degrees
   wsl.innerHTML=response.wind_speed
})