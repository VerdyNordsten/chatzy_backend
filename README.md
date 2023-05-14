<br />
<p align="center">
<div align="center">
<img height="150" src="./documentation/logo.png" alt="Chatzy"/>
</div>
  <h3 align="center">Chatzy Backend</h3>
  <p align="center">
    <a href="https://github.com/VerdyNordsten/chatzy_backend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://chatzy.up.railway.app/">View Demo</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Setup .env](#setup-env)
- [Related Project](#related-project)
<!-- ABOUT THE PROJECT -->

## About The Project

Chatzy is an application designed for chat purposes, allowing users to engage in conversations and connect with others online. The platform provides a user-friendly interface and various features to enhance the chatting experience.

One of the standout features of Chatzy is its versatility in creating chat rooms. Users can easily create their own personalized chat rooms or join existing ones based on their interests or specific topics. This allows users to find like-minded individuals and engage in meaningful discussions.

Chatzy also offers privacy and security features to ensure a safe chatting environment. Users can set passwords for their chat rooms, control access, and moderate conversations. This ensures that users have control over who can join their chats and helps maintain a respectful and inclusive atmosphere.

To use Chatzy, users can simply create an account or join as a guest. The application is accessible from various devices, including smartphones, tablets, and computers, making it convenient for users to chat on the go.

With Chatzy, connecting with others and having engaging conversations has never been easier. Whether for casual chats, group discussions, or collaborative work, Chatzy provides a seamless and enjoyable chatting experience for users.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- and other


<!-- GETTING STARTED -->


## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [nodejs](https://nodejs.org/en/download/)

| Third Party          | npm install                    |
| -------------------- | ------------------------------ |
| [bcrypt]             | npm i bcrypt@5.0.1             |
| [cors]               | npm i cors@2.8.5               |
| [crypto]             | npm i crypto@1.0.1             |
| [dotenv]             | npm i dotenv@16.0.1             |
| [express]            | npm i express@4.18.1            |
| [express-validator]  | npm i express-validator@6.14.1  |
| [googleapis]         | npm i googleapis@100.0.0        |
| [helmet]             | npm i helmet@5.1.0              |
| [jsonwebtoken]       | npm i jsonwebtoken@8.5.1        |
| [lodash]             | npm i lodash@4.17.21            |
| [multer]             | npm i multer@1.4.5-lts.1         |
| [nodemailer]         | npm i nodemailer@6.7.5          |
| [nodemon]            | npm i nodemon@2.0.22            |
| [pg]                 | npm i pg@8.7.3                  |
| [socket.io]          | npm i socket.io@4.5.1            |
| [uuid]               | npm i uuid@8.3.2                |
| [xss-clean]          | npm i xss-clean@0.1.1           |

[bcrypt]: https://www.npmjs.com/package/bcrypt
[cors]: https://www.npmjs.com/package/cors
[crypto]: https://www.npmjs.com/package/crypto
[dotenv]: https://www.npmjs.com/package/dotenv
[express]: http://expressjs.com
[express-validator]: https://www.npmjs.com/package/express-validator
[googleapis]: https://www.npmjs.com/package/googleapis
[helmet]: https://www.npmjs.com/package/helmet
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[lodash]: https://www.npmjs.com/package/lodash
[multer]: https://www.npmjs.com/package/multer
[nodemailer]: https://www.npmjs.com/package/nodemailer
[nodemon]: https://www.npmjs.com/package/nodemon
[pg]: https://node-postgres.com
[socket.io]: https://www.npmjs.com/package/socket.io
[uuid]: https://www.npmjs.com/package/uuid
[xss-clean]: https://www.npmjs.com/package/xss-clean

### Requirements

Documentation files are provided in the [documentation](./documentation) folder

- [PostgreSQL database query](./query.sql)

API endpoint list are also available as published postman documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/26188678/2s93ecxB2n)

- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.getpostman.com/) for testing

### Installation

- Clone This Back End Repo

```
git clone https://github.com/VerdyNordsten/chatzy_backend.git
```

- Go To Folder Repo

```
cd chatzy_backend
```

- Install Module

```
npm install
```

- <a href="#setup-env">Setup .env</a>
- Starting application

```
  <!-- Run App -->
  npm run dev
```

```
  <!-- Run Linter -->
  npm run lint
```

### Setup .env

Create .env file in your root project folder.

```
PORT=
API_URL=
CLIENT_URL=

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
JWT_SECRET=

EMAIL_FROM=
EMAIL_USER=
EMAIL_PASS=
GOOGLE_DRIVE_TYPE=
GOOGLE_DRIVE_PROJECT_ID=
GOOGLE_DRIVE_PRIVATE_KEY_ID=
GOOGLE_DRIVE_PRIVATE_KEY=
GOOGLE_DRIVE_CLIENT_EMAIL=
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_AUTH_URI=
GOOGLE_DRIVE_TOKEN_URI=
GOOGLE_DRIVE_AUTH_PROVIDER=
GOOGLE_DRIVE_CLIENT_URL=
GOOGLE_DRIVE_PARENT_FOLDER=
GOOGLE_DRIVE_PHOTO_PATH=
```

## Related Project

:rocket: [`Backend Chatzy`](https://github.com/VerdyNordsten/chatzy_backend)

:rocket: [`Frontend Chatzy`](https://github.com/VerdyNordsten/chatzy_frontend)

:rocket: [`Demo Chatzy`](https://chatzy.digty.co.id/)

Project Link: [https://github.com/VerdyNordsten/chatzy_backend](https://github.com/VerdyNordsten/chatzy_backend)
