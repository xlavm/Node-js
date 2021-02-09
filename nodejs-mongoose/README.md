# Node with Mongoose

## Initial Configuration [Local]

1. Execute command `mongod`
2. Execute command `mongo`
3. Execute in the command line of mongo: `use api_db`
4. Create the `.env` file in the equal route of package.json with this:
```
PORT = 3000
PATH_MONGO = mongodb://localhost:27017/api_db
PATH_API_WORK = /api/v1/work
```
-----------------------
## Executing the API [Local]
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
|/api/v1/work/|GET|

Sample Response
```json
[
    {
        "_id": "5ffd12fb70931c35c0921fd3",
        "client": "Luis Vanegas",
        "comment": "he is the best",
        "__v": 0
    },
    {
        "_id": "5ffd134b70931c35c0921fd4",
        "client": "Andrea Bermudez",
        "comment": "she is wonderful",
        "__v": 0
    }
]
```

---


### Find
|Endpoint|Method|
|:--|:--|
|/api/v1/work/:id|GET|

Sample Response
```json
{
    "_id": "5ffd12fb70931c35c0921fd3",
    "client": "Luis Vanegas",
    "comment": "he is the best",
    "__v": 0
}
```

---


### Create
|Endpoint|Method|
|:--|:--|
|/api/v1/work/|POST|

Sample Response
```json
{
    "Work Created Successfully!"
}
```

---


### Update
|Endpoint|Method|
|:--|:--|
|/api/v1/work/:id|PUT|

Sample Response
```json
{
    "Work Update Successfully!"
}
```

---


### Delete
|Endpoint|Method|
|:--|:--|
|/api/v1/work/:id|DELETE|

Sample Response
```json
{
    "Work Remove Successfully!"
}
```


