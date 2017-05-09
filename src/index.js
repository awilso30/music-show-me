$(document).ready(function() {

// setup and get user input for start of date range
$("#startdate").datepicker({
  dateFormat: "mm-dd-yy",
  showOtherMonths: true,
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,
});

// setup and get user input for end of date range
$("#enddate").datepicker({
  dateFormat: "mm-dd-yy",
  maxDate: "+1m",
  showOtherMonths: true,
  selectOtherMonths: true,
  showAnim: "slideDown",
  autoSize: true,
});

// when user clicks search
$("#searchbutton").on("click", function() {
  // set start and end values
  startDate = $("#startdate").val();
  endDate = $("#enddate").val();
  // append for visual representation
  $(".currentdate").append("<br>" + startDate + " - " + endDate);
  // pass data along to api call
  getShowData(startDate, endDate);
});

// get artists
function getShowData() {
  // format data for url
  var formatStartDate = startDate.split("-")
  var formatEndDate = endDate.split("-")

  // final url
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
      // clear previous artist list
      $(".artist-container").html("");
      // add filter option
      // $(".artist-container").append("<div class='filter-container'>Filter</div>");
      // create a list of all artists playing that day
      artists.map(function(artist) {
        $(".artist-container").append("<div class='artist-panel'><div class='artist-left'><img class='list-button' id='arrow' src='arrow.svg'>" + artist + "</div><div class='artist-right'>05/24/2017 <img class='list-button' id='heart' src='heart.svg'><img class='list-button' id='remove' src='remove.svg'><img class='list-button' id='minus' src='minus.svg'></div></div>");
      });

    },
    error: function () {
      console.log("unable to access json");
    }
  });

};

});
