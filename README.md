# Send-IT
[![Build Status](https://travis-ci.org/AnayoOleru/Send-IT.svg?branch=161846100-integrate-travis-ci)](https://travis-ci.org/AnayoOleru/Send-IT)
![GitHub](https://img.shields.io/github/license/AnayoOleru/Send-IT/apistatus.svg)
![Packagist](https://img.shields.io/packagist/v/AnayoOleru/Send-IT.svg)
![Code Climate coverage](https://img.shields.io/codeclimate/coverage/AnayoOleru/Send-IT.svg)



SendIT is a courier service that helps users deliver parcels to different destinations

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
$ cd fast-food-fast


$ npm install
$ npm start
```

## Test
```
$ npm run test
```
## API Usage
API BASE URL     

## Endpoints ``` /api/v1/parcels```
| method |	route	                | description                    |
|--------|--------------------------|--------------------------------|
| GET 	 | /parcels	                | Get all parcel delivery orders |
| GET	 | /parcels/:parcelId       | Get a specific order           |
| GET	 | /parcels/:userID/parcels	| Get all user orders            |
| PUT    | /parcels/:parcelId/      | Cancel a delivery order        |
| POST   | /parcels                 | Create a new delivery order    |

