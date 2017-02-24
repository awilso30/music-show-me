console.log("hello!");

function date() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  $(".date-container").append(month);
  $(".date-container").append(" / ");
  $(".date-container").append(day);
}

function getShowData() {
  $.ajax({
    url: "http://api.jambase.com/events?zipCode=60601&radius=25&startDate=02%2F18%2F2017&endDate=02%2F24%2F2017&page=0&api_key=mduggk46nj2xrdn3x4hz3eqd&o=json",
    
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

$(document).ready(function() {
  date();
  getShowData();
});