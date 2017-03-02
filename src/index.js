$(document).ready(function() {  


var userStartDate, userEndDate;

$("#startDate").datepicker({ 
  dateFormat: "mm-dd-yy",
  appendText: " Start",  
  showOtherMonths: true, 
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,
  onSelect: function() {
        userStartDate = $(this).val();        
        }
});

$("#endDate").datepicker({ 
  dateFormat: "mm-dd-yy",
  appendText: " End",
  maxDate: "+1m",
  showOtherMonths: true, 
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,
  onSelect: function() {
        userEndDate = $(this).val();        
        }
});

$("#searchButton").on("click", function() {
  
  console.log(userStartDate + " " + userEndDate);
});

/* DEPRECATED DATE GETTER

// get current local date
  var dateObj = new Date();
  var month = dateObj.getMonth() + 1;
  var day = dateObj.getDate();  
  var year = dateObj.getFullYear();  

// make sure all dates are at least 2 digits long in order to plug into api
 if (day.length != 2) {
    if (day.length = 1) {
      day = "0" + day;
    }
  } else {
    month = month;
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

  var url = "https://cors-anywhere.herokuapp.com/http://api.jambase.com/events?zipCode=60601&radius=25&startDate=" + month + "%2F" + day + "%2F" + year + "&endDate=" + month + "%2F" + endDay + "%2F" + year + "&page=0&api_key=mduggk46nj2xrdn3x4hz3eqd&o=json"

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

*/   

});
