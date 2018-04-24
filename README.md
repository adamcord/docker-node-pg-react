# docker-node-pg-react

## Commands
#### Docker
Start ```docker-compose up```

#### DB
Create migration ```docker-compose exec api knex migrate:make ${migration name}```
Run migrations ```docker-compose exec api yarn run migrate```
Run seeds ```docker-compose exec api yarn run seed```
Connect to db with psql ```docker-compose exec db psql -U postgres -d my_db```