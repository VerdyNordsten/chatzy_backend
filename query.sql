CREATE DATABASE chatzy;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    bio TEXT,
    photo TEXT,
    date DATE NOT NULL,
    email_token VARCHAR(255),
    is_verified BOOLEAN DEFAULT false
);

CREATE TABLE chats (
    id VARCHAR PRIMARY KEY,
    sender VARCHAR(255) NOT NULL,
    receiver VARCHAR(255) NOT NULL,
    chat_type VARCHAR(255) NOT NULL,
    chat TEXT NOT NULL,
    date DATE NOT NULL,
    is_deleted BOOLEAN DEFAULT false
);