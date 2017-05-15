/**
 * SERVICES
 */
// fetch data from server
function fetchUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users', false);
    xhr.send();

    return JSON.parse(xhr.response);
}

//render user list to UI
function renderUsers() {
    // get data
    var users = fetchUsers();

    for (var i = users.length - 1; i > 0; i--) {
        var user = users[i];

        // create DOM for each row
            var tableRow = document.createElement('tr');

            var tableCellId = document.createElement('td');
            var userId = document.createTextNode(user.id);
            tableCellId.appendChild(userId);

            var tableCellName = document.createElement('td');
            var userName = document.createTextNode(user.name);
            tableCellName.appendChild(userName);

            var tableCellAddress = document.createElement('td');
            var userAddress = document.createTextNode(user.address);
            tableCellAddress.appendChild(userAddress);

            var tableCellMail = document.createElement('td');
            var userEmail = document.createTextNode(user.email);
            tableCellMail.appendChild(userEmail);

            tableRow.appendChild(tableCellId);
            tableRow.appendChild(tableCellName);
            tableRow.appendChild(tableCellAddress);
            tableRow.appendChild(tableCellMail);

            document.getElementById('view-all-user').appendChild(tableRow);
    }
}

renderUsers();