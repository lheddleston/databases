CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  room_id INT AUTO_INCREMENT PRIMARY Key,
  room_name VARCHAR(30)
);
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(30)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT AUTO_INCREMENT PRIMARY KEY,
  message_body VARCHAR(255),
  user_id INT,
  room_id INT,
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

