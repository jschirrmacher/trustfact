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

Currently, there is nothing in the database, you need to put it in there yourself. To connect to
the database, enter

    docker exec -it tf_database_1 mysql -p
    
When asked for the password, use 'test123' (yes, I know, that's a pretty obvious password, and you
should not even put passwords in a repository, but this is currently only a first start, not a
productive system, and not even online). Then you can insert some test data. I will provide such
soon as an initialization script.

## I need you!
If you feel like you want to help with the project, please get in contact!
