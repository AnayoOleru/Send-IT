# Send-IT
[![Build Status](https://travis-ci.org/AnayoOleru/Send-IT.svg?branch=161846100-integrate-travis-ci)](https://travis-ci.org/AnayoOleru/Send-IT)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![Packagist](https://img.shields.io/packagist/v/symfony/symfony.svg)


[![Coverage Status](https://coveralls.io/repos/github/AnayoOleru/Send-IT/badge.svg?branch=master)](https://coveralls.io/github/AnayoOleru/Send-IT?branch=master)



SendIT is a courier service that helps users deliver parcels to different destinations

Template on github:
```  
https://anayooleru.github.io/Send-IT/
``` 

## Introduction
Welcome to version 1 of Send-IT (ST) API. Below you will find a current list of available methods on different endpoints.

### Features
## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
To work with this project you need to have the following installed on your local machine

1. NodeJS
2. Git

## Install and run locally
```

$ git clone 
``` https://github.com/AnayoOleru/Send-IT.git```
$ cd Send-IT


$ npm install
$ npm start
```

## Test
```
$ npm run test
```
## API Usage
API BASE URL  
```
https://senditservice.herokuapp.com/api/v1/ 
```  

## Endpoints ``` /api/v1/```
| method |	route	                | description                    |
|--------|--------------------------|--------------------------------|
| GET 	 | /parcels	                | Get all parcel delivery orders |
| GET	 | /parcels/:parcelId       | Get a specific order           |
| GET	 | /users/:userID/parcels	| Get all user orders            |
| PUT    | /parcels/:parcelId/cancel      | Cancel a delivery order        |
| POST   | /parcels                 | Create a new delivery order    |

