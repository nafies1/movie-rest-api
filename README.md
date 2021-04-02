# Stockbit Backend
1. [Simple Database Query](https://github.com/nafies1/movie-rest-api/blob/master/backend-test/1.%20Simple%20Database%20Query.sql)
2. [Small ExpressJS Server](https://github.com/nafies1/movie-rest-api)
3. [Refactor Code](https://github.com/nafies1/movie-rest-api/blob/master/backend-test/3.%20RefactorCode.js)
4. [Logic test](https://github.com/nafies1/movie-rest-api/blob/master/backend-test/4.%20LogicTest.js)

# movie-api

Base API url : **http://localhost:3000**

Environment variable used in this project :
- API_KEY (API key from OMDB)
- PORT

## **Home**
Route | Method | Description
---|----|---
`/` | GET | Show ` Welcome to movie searcher API. For further information, please contact Us at @nafies1`
----	

## **Detail & Search** :

Route | Method | Description | Params | Query Params
---|---|---|---|---
`/detail/:id` | GET | Show movie detail | id | apikey (required)
`/search` | GET | Get movie list by input keyword | | apikey (required), keyword (required)

--------------
### Undefined Route :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/*` | any | any | **Error**<br>`404` <br>Route not found | Show result if route not found