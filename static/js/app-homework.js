// build html table from .js file

// import the data from data.js
const tableData = data;

// reference the HTML table using d3
let tbody = d3.select("tbody");

// Create a function to add the UFO data to a table
function buildTable(data) {
    //clear out existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row (tr)
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and fitler the data w/ that date
    if (date) {
        // apply the filter to only keep the rows that match the provided datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using filtered data
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// build the table with unfiltered, original data when the page loads
buildTable(tableData);

