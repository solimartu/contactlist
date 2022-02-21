# contactlist

A contact list where you can add and delete contacts.

## Used Technologies

- Database: MySQL and Sequelize
- Backend: Node/Express
- Frontend: React

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal
- Create a new database called allergens: `create database contactlist`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=allergens
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create 1 table in your database called Contacts.

## Seeds

In order to have restaurants, types of food, delivery services and all the data related, by running `npx sequelize-cli db:seed:all` you will have a seed with some contacts.

## Folders related to the migration

- `config`, containing config file, which tells CLI how to connect with database

- `models`, containing all models for this project

- `migrations`, contains all migration files

- `seeders`, contains all seed files

### Development

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000

- ## API endpoints

  GET - /contacts - to get all the contacts
  GET - /contacts/:id - to get one contact by ID
  DELETE - /contacts/:id - to delete a contact
  POST - /contacts - to create a new contact
