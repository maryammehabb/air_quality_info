## Setps to run
    1- Update .env file
    2- `docker-compose up`
    3- `./setup.sh`
    4- `npm run serve`

## Important comandas load the first data to database
Create database specified by conf: `npm run db:create`
Drop database specified by conf: `npm run db:drop`
Add tables, indexes and constraints: `npm run db:migrate`
Remove all tables and its dependencies: `npm run db:undo`
Development : `npm run serve`
Unit Test:  `npm run test`
Build: `npm run build`
