document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayTable(response);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.open('GET', 'get_tables.php'); // Replace 'get_tables.php' with your server endpoint
    xhr.send();
});

function displayTable(tables) {
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var headerRow = table.insertRow(0);
    var tableNameHeader = document.createElement('th');
    tableNameHeader.textContent = 'Tables in SQL Commands';
    headerRow.appendChild(tableNameHeader);

    for (var i = 0; i < tables.length; i++) {
        var row = table.insertRow(i + 1);
        var cell = row.insertCell(0);
        cell.textContent = tables[i];
    }

    tableContainer.appendChild(table);
}
