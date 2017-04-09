# trustfact
Application to collect statements of politicians, sources, and ratings of validity

## Project status
Just a first start, not much more than a skeleton to set up the tool chain.

## Installation
Pre-requisites are Node.js and Docker. Just clone the repository, then

    docker-compose up -d
    npm install
    npm start
    
The first one creates and runs Docker containers for the MySQL database and the backend.
Then, the frontend dependencies are installed and the WebPack development server is started.

## Frontend
The frontend can be accessed at http://localhost:8080

## Backend
To start the backend, call 'npm start' in /src/server. I provide a backend with a database in https://trustfact.dilab.co/api/v2/

## I need you to contribute!
If you feel like you want to help with the project, please get in contact!
