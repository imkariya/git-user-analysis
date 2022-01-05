# Git User Analysis

A Project to fetch details of any git user and to fetch the list of repos of git handle.

## Repository list page demo

![repo full page](https://user-images.githubusercontent.com/96728968/148411977-74dcd2e7-8be6-49f7-b081-cabc90e05ff0.png)

## User detail page demo

![userpage](https://user-images.githubusercontent.com/96728968/148411982-08f8c594-f7a8-4f26-b348-bdab09fa498f.png)

## Swagger ui page

![swagger](https://user-images.githubusercontent.com/96728968/148413629-a05f733c-4151-4f0e-a9e9-49ed70dc92ab.png)

## Project dependencies

## For Server

| Package                | Version |
| ---------------------- | ------- |
| node                   | 17.3.0  |
| express                | 4.17.2  |
| node-fetch             | 2.6.6   |
| cors                   | 2.8.5   |
| eslint-config-prettier | 8.3.0   |
| express-validator      | 6.14.0  |
| mongoose               | 6.1.5   |
| swagger-ui-express     | 4.3.0   |
| jest                   | 27.4.7  |
| supertest              | 6.1.6   |

## For Client

| Package                   | Version        |
| ------------------------- | -------------- |
| node                      | 17.3.0         |
| react                     | 17.0.2         |
| @material-ui/core         | 4.12.3         |
| @material-ui/icons        | 4.11.2         |
| @material-ui/lab          | 4.0.0-alpha.60 |
| react-hook-form           | 7.22.5         |
| react-redux               | 7.2.6          |
| @reduxjs/toolkit          | 1.7.1          |
| @testing-library/jest-dom | 5.16.1         |
| @testing-library/react    | 12.1.2         |
| msw                       | 0.36.3         |
| react-router-dom          | 6.2.1          |

## Project Setup

#### Clone the project

```bash

git clone https://github.com/imkariya/git-user-analysis.git

```

#### Go to the project directory

```bash

cd git-user-analysis

```

#### Install dependencies

```bash

npm install

```

## Install MongoDB

https://www.mongodb.com/try/download/community?tck=docs_server

### Run below command to create env file

```bash

cp server/.env.example server/.env

```

## Environment Variables

Add your `MONGO_DB_URL`

#### Start the server

```bash

npm start

```

#### project will start at `http://127.0.0.1:3000`

#### Run test cases

```bash

npm test
```

### For docker setup

```bash

docker-compose up
```

## Swagger API Reference

Swagger API can be accessed from `http://127.0.0.1:3003/swagger-api-docs`

## Postman collection Reference

File `Git User Analysis.postman_collection.json` is at root directory

#### Get user details

```http

GET /api/v1/user-detail/:user

```

| Parameter | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `user`    | `string` | **Required**. Github username |

#### Get user repositories

```http

GET /api/v1/repo-list/:user

```

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `user`    | `string` | **Required**. Github handle / username |

## Future enhancement

- We can do ui/ux improvements
- We can add more test cases
- We can implement typescript

## Author

### [@imkariya](https://www.github.com/imkariya)
