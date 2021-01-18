# Node with Sequelize

## Initial Configuration [Local]
1. Create database executing the file `database/db-script.sql` into MySQL Server
2. Create the `.env` file in the equal route of package.json with this:
```
PORT = 3000
PATH_USER = /api/v1/user
PATH_CITIES = /api/v1/cities
DB_HOST = localhost
DB_DIALECT = mysql
DB_NAME = api_db
DB_USER = root
DB_PASS = 
```
-----------------------
## API Execution [Local]
1. Execute into the API
    ```
    npm install
    ```
2. Next, execute
    ```
    npm start
    ```
3. Open [http://localhost:3000](http://localhost:3000) in you browser.


------------------------
## Test the API in Postman

Import the script [test/test.postman.json](test/test.postman.json) into Postman


------------------------
## API Reference

### Find-All
|Endpoint|Method|
|:--|:--|
|/api/v1/user/|GET|

Sample Response
```json
[
    {
        "id": 1,
        "name": "Luis Angel Vanegas",
        "user": "xlavm",
        "pass": "xlavm"
    },
    {
        "id": 2,
        "name": "Andrea bermudez",
        "user": "anbe",
        "pass": "anbe"
    }
]
```

---


### Find
|Endpoint|Method|
|:--|:--|
|/api/v1/user/:id|GET|

Sample Response
```json
{
    "id": 1,
    "name": "Luis Angel Vanegas",
    "user": "xlavm",
    "pass": "xlavm"
}
```

---


### Create
|Endpoint|Method|
|:--|:--|
|/api/v1/user/|POST|

Sample Response
```json
{
    "User created Successfully!"
}
```

---


### Update
|Endpoint|Method|
|:--|:--|
|/api/v1/user/:id|PUT|

Sample Response
```json
{
    "User updated successfully!"
}
```

---


### Delete
|Endpoint|Method|
|:--|:--|
|/api/v1/user/:id|DELETE|

Sample Response
```json
{
    "User removed successfully!"
}
```

---


### Username
|Endpoint|Method|
|:--|:--|
|/api/v1/user/username/:username|GET|

Sample Response
```json
{
    "id": 1,
    "name": "Luis Angel Vanegas Martinez",
    "user": "xlavm",
    "pass": "xlavm"
}
```

### Login
|Endpoint|Method|
|:--|:--|
|/api/v1/user/login/|POST|

Sample Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXMgVmFuZWdhcyBNIiwidXNlciI6InhsYXZtIiwicGFzcyI6InhsYXZtIiwiaWF0IjoxNjEwMzk3ODc1LCJleHAiOjE2MTAzOTkzMTV9.3AtlPFxQhwiKpWhVEI8YJzYr39hke0GFHb56W7X2_o4"
}
```


