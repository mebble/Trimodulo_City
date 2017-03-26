$(document).ready(function() {
	$("#searchButton").click(function() {
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#cityInput").val() + "&units=metric" + "&APPID=eafee988fc52e5c66f5e6c22e3cd3bc1",
			type: "GET",
			dataType: "jsonp",
			success: function(data) {
				var info = weatherData(data);
				$("#info-box").html(info);
				$("cityInput").val("");
			},
			failure: function() {
				
			}
		});
	});
});

function weatherData(data) {
	return "<h1 class=\"text-center\">" + data.name + "</h1>" +
		   "<ul>" +  
		   "<li>" + "<h3><strong>" + Temperature + ":</strong> " + data.main.temp + " &deg;C</h3>" + "</li>" + 
		   "<li>" + "<h3><strong>" + Pressure + ":</strong> " + data.main.pressure + " hPa</h3>" + "</li>" + 
		   "<li>" + "<h3><strong>" + Humidity + ":</strong> " + data.main.humidity + "%</h3>" + "</li>" + 
		   "</ul>";
}