$(document).ready(function() {

$("#startdate").datepicker({ 
  dateFormat: "mm-dd-yy",
  appendText: " Start",  
  showOtherMonths: true, 
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,  
});

$("#enddate").datepicker({ 
  dateFormat: "mm-dd-yy",
  appendText: " End",
  maxDate: "+1m",
  showOtherMonths: true, 
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,
});

$("#searchbutton").on("click", function() {
    
  startDate = $("#startdate").val();
  endDate = $("#enddate").val();

  $("#date-container").append("<br>" + startDate + " - " + endDate); 

  getShowData(startDate, endDate);   

});  

function getShowData() {  

  var formatStartDate = startDate.split("-")
  var formatEndDate = endDate.split("-")  

  var url = "https://cors-anywhere.herokuapp.com/http://api.jambase.com/events?zipCode=60601&radius=25&startDate=" + formatStartDate[0] + "%2F" + formatStartDate[1] + "%2F" + formatStartDate[2] + "&endDate=" + formatEndDate[0] + "%2F" + formatEndDate[1] + "%2F" + formatEndDate[2] + "&page=0&api_key=mduggk46nj2xrdn3x4hz3eqd&o=json"  

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
        $("#artistlist").append("<li>" + artist + "</li>");
      });

    },
    error: function () {
      console.log("unable to access json");
    }
  });

};

});
