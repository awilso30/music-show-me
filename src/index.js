$(document).ready(function() {  

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();  

  if (day.length < 2) {    
    day = "0" + day;    
  } else {
    day = day;
  }

  if (month.length != 2) {
    if (month.length = 1) {
      month = "0" + month;
    }
  } else {
    month = month;
  }

  var todaysDate = month + " / " + day + " / " + year;  

  $(".date-container").append(todaysDate);

function getShowData() {  

  var url = "https://cors-anywhere.herokuapp.com/http://api.jambase.com/events?zipCode=60601&radius=25&startDate=" + month + "%2F" + day + "%2F" + year + "&endDate=" + month + "%2F" + day + "%2F" + year + "&page=0&api_key=mduggk46nj2xrdn3x4hz3eqd&o=json"

  $.ajax({
    url: url,
    dataType: "json",
    data: {
      format: "json"
    },
    success: function (data) {      
      var events = data.Events; 
      var artists = [];
      
      // get all the artists playing that day
      for (var i = 0; i < events.length; i++) {
        artists.push(events[i].Artists[0].Name);        
      }
      
      // create a list of all artists playing that day
      artists.map(function(artist) {
        $("#rainbowList").append("<li>" + artist + "</li>");
      });

    },
    error: function () {
      console.log("unable to access json");
    }
  });
}  

  getShowData();

});