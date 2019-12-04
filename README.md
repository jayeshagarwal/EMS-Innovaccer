# Innovaccer-SDE-Intern-Assignment
An Entry Management software

## Problem Statement

Given the visitors that we have in office and outside, there is a need to for an entry management
software.

## Technology Stack

### Front-end
* **CSS** -  Styling web pages, html files
* **Typescript** - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* **Angular 7** - Javascript Framework for building User Interfaces

### Back-end
* **NodeJS** -  Evented I/O for the backend
* **ExpressJS** - Fast node.js network app framework
* **Sequelize/MySQL** - Sequelize is a Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* **Nodemailer** - Mail Service 
* **Twilio API(free trial)** - For sending Programmable messages to users(In free trial, user needs to verify their phone numbers to get messages)

## Software Used
* **Xampp** - It create a local web server for testing and deployment purposes.

## Environment installation
You need to have [Node.js](https://nodejs.org/) v4+ to run and [Npm](https://www.npmjs.com/) and [Xampp](https://www.apachefriends.org/download.html)/[Mysql workbench](https://www.mysql.com/) for database handling installed on your PC/Mac.


Step 1: Fork the repository and clone it to your machine
```sh
$ git clone https://github.com/17uec059/entryManagement.git
```

Step 2: Change directory
```sh
$ cd entryManagement
```

Step 3: Navigate to frontend and install the dependencies
```sh
$ npm install
```

Step 4: Run ng serve to builds and serves frontend app which will navigate to http://localhost:4200/
```sh
$ ng serve -o
```

Step 4: Navigate to backend and install the dependencies
```sh
$ npm install
```

Step 5: To run the server 
```sh
$ npm start
```
> The Server will start at http://localhost:4002/


## Approach

To track the Visitors and Host of the office, we are storing the details of the person in the user table which has been implemented using the ORM tool Sequelize.

The project has two different tabs:
* Check In
* Check Out

### Check In
Before a visitor enters the building, they need to fill out the CheckIn form which contains various field like: -
```sh
- Visitor Name
- Visitor Email
- Visitor Phone no.
- Host Name
- Host Email
- Host Phone no.
- Address
```

When the form is submitted by the person, a POST request is sent to the API ```/api/checkIn``` which contains the logic to store the details in the user table using the ORM. The default value of CheckOut is set to **NULL**. This will request node-mailer to send an Email to host to inform about the person’s visit. Simultaneously an SMS will be sent using Twilio API to the host.

### Check Out
A visitor can checkout by providing their phone number here. When the form is submitted by the person, a POST request is sent to the API ```/api/checkOut``` which contains the logic to verify the phone number and updates the checkout time. 

## Database Design
Our database comprises of user table with the following fields:
* visitorName: ```String```
* visitorEmail: ```String```
* visitorMobileNumber: ```String```
* checkIn: ```DateTime```
* checkOut: ```DateTime```
* hostName: ```String```
* hostEmail: ```String```
* hostMobileNumber: ```String```
* address: ```String```

## Screenshots
The screenshots for different pages of the app are in screenshots folder

## Author
* Name: Jayesh Agarwal
* Email: jayeshagarwal58@gmail.com and 17uec059@lnmiit.ac.in
* Phone No.: +91 7339896336
* LinkedIn: https://www.linkedin.com/in/jayesh-agarwal/
