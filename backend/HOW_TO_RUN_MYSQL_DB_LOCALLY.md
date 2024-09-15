# How to run db locally

1. Install Mariadb on your machine
2. Start your db server [brew services start mariadb]
3. (Make sure your db server runs in port 3306)
4. Create database 'shareholder_dev' [CREATE DATABASE shareholder_dev;]
5. Use database [USE shareholder_dev;]
6. Create user 'admin' [CREATE USER 'admin'@'localhost' INDENTIFIED BY 'password';]
7. Grant privileges [GRANT ALL PRIVILEGES ON *.* TO admin@localhost;]

8. Add test data
  A. Copy paste 'person' table content your mysql client (found in database.sql file)
  B. Use Postman to insert 'shareholder' so JPA will keep its id integrity
    -url: localhost:8080/api/shareholder/add-many
    -remember to use post-method. In headers, there needs to be 'Content-Type': 'application/json'
    -Copy paste to the body field the 'sharoholder' table content in json format (found in database.sql file also)

