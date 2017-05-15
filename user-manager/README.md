##Source
`git clone git@github.com:gwenie-vo/javascript-training.git`
`git checkout user-manager`

##Server
1. Create data.json file
    ex: `users-data.json`
2. Install json-server
    `npm install -g json-server`
3. Run json-server
    `json-server --watch data.json`
4. Check result on browser
    `http://localhost:3000`

##Front-end
1. Fetch data -> show UI
    1. Service get data
        a. URL API
        b. method GET
        c. xmlHTTPRequest to call API 
    2. Render to view
2. Add/Edit/Delete user
3. Search
