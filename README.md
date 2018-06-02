# Veratrak interview task

This is a really simple node/mongo api.

### Running the API

This project uses [Docker](http://docker.com/).

1. Clone the repository.

```
git clone https://github.com/benjaminhadfield/veratrak-interview.git
```

2. Navigate to the project root

```
cd veratrak-interview
```

3. Start the containers

```
docker-compose up
```

4. The API is available at `http://localhost:8000`

### Usage

There exist two models:
 - `manufacturer`
 - `medicine`

The manufacturer endpoints are:

#### Get

Request
```json
GET /manufacturer
```

Response
```json
HTTP 200
[
  {
    "__v": 0,
    "_id": "5b12bb594ef6ff0010cefe17",
    "createdAt": "2018-06-02T15:44:25.710Z",
    "name": "Vitacorp",
    "updatedAt": "2018-06-02T15:44:25.710Z"
  }
]
```
#### Create

Request
```json
POST /manufacturer
{
  "name": "Pharmacorp"
}
```

Response
```json
HTTP 201
{
  "__v": 0,
  "_id": "5b12bb594ef6ff0010cefe17",
  "createdAt": "2018-06-02T15:44:25.710Z",
  "name": "Pharmacorp",
  "updatedAt": "2018-06-02T15:44:25.710Z"
}
```

The medicine endpoints are

#### Get

Request
```
GET /medicine
```

Response
```json
HTTP 200
[
  {
    "__v": 0,
    "_id": "5b12bdb94ef6ff0010cefe18",
    "createdAt": "2018-06-02T15:54:33.932Z",
    "manufacturer": "5b12bb594ef6ff0010cefe17",
    "name": "jellybean",
    "stockLevel": 42,
    "updatedAt": "2018-06-02T15:54:33.932Z"
  }
]
```
#### Create

Request
```json
POST /medicine
{
  "manufacturer": "5b12bb594ef6ff0010cefe17",
  "name": "jellybean",
  "stockLevel": 42
}
```

Response
```json
HTTP 201
{
  "__v": 0,
  "_id": "5b12bdb94ef6ff0010cefe18",
  "createdAt": "2018-06-02T15:54:33.932Z",
  "manufacturer": "5b12bb594ef6ff0010cefe17",
  "name": "jellybean",
  "stockLevel": 42,
  "updatedAt": "2018-06-02T15:54:33.932Z"
}
```
