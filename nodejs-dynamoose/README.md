# Node with Dynamoose

## Initial Configuration [Local]

1. Create collection in DynamoDB in AWS, o deploy an local server con DynamoDB
4. Create the `.env` file in the equal route of package.json with this:
```
PORT = 3000
PATH_DYNAMOLOCAL = http://localhost:8000
PATH_USER = /api/v1/user
AWS_REGION = us-east-1
AWS_KEY_ID = AKID
AWS_SECRET_KEY = SECRET
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
|/api/v1/user/|GET|

Sample Response
```json
{
    "user": [
        {
            "pass": "xlavm",
            "user": "xlavm",
            "id": "1",
            "name": "Luis Angel Vanegas Martinez"
        },
        {
            "pass": "xlavm",
            "user": "xlavm",
            "id": "10",
            "name": "Luis Angel Vanegas Martinez 10"
        }
    ]
}
```

---


### Find
|Endpoint|Method|
|:--|:--|
|/api/v1/user/:id|GET|

Sample Response
```json
{
    "pass": "xlavm",
    "user": "xlavm",
    "id": "1",
    "name": "Luis Angel Vanegas Martinez"
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
