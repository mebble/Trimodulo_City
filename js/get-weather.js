$("#searchButton").click(function() {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#cityInput").val() + "," + "&APPID=eafee988fc52e5c66f5e6c22e3cd3bc1",
		method: GET,
		success: function(data) {
			console.log({
				temperature: data.main.temp,
				pressure: data.main.pressure,
				humidity: data.main.humidity
			});
		},
		failure: function() {
			
		}
	});
});