

var tbody = d3.select("tbody");



  var filterbtn = d3.select("#filter-btn");

    // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(UFOsighting) {
    // console.log(UFOsighting);
     var row = tbody.append("tr");
     Object.entries(UFOsighting).forEach(function([key, value]) {
      // console.log(key, value);
       // Append a cell to the row for each value
       // in the weather report object
       var cell = row.append("td");
       cell.text(value);
     });
   });



  //Event Handlers
  filterbtn.on("click", datefilter);
  tbody.on("submit",datefilter);

  function datefilter() {

    d3.event.preventDefault();

    var inputteddatetime = d3.select("#datetime");
    var inputteddatetimevalue = inputteddatetime.property("value");

    var filtered = data.filter(data => data.datetime === inputteddatetimevalue);

    console.log(filtered);

  }

  filtered.forEach(function(UFOsightingfiltered) {
    // console.log(UFOsighting);
     var row = tbody.append("tr");
     Object.entries(UFOsightingfiltered).forEach(function([key, value]) {
      // console.log(key, value);
       // Append a cell to the row for each value
       // in the weather report object
       var cell = row.append("td");
       cell.text(value);
     });
   });