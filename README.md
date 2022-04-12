<h1 align="center">⚡ Basic nodemailer application based on expressjs and jade ⚡</h1>

<p>This is a simple nodemailer app  built on nodejs</p>

<h2 align="center">🔥 Technologies 🔥</h2>

* Backend : NodeJs with express 
* Frontend : jade engine template 

## Installation

Clone the project to your local repository
```javascript
git clone https://github.com/mryesiller/nodemailer_with_express.git

```
Install the dependencies of the project

```
npm install
```
Change  .env file in the project's directory. Environment variables inside your .env file should look like this

```
PORT=<enter your port number here>
```

Change  .index.js file in the project's directory. These variables connection settings to Postgres on your computer.

 ```
   auth: {
      user: "yourmail@gmail.com",
      pass: "yourmailpassword",
    }
    
   var mailList = ["firstmail@email.com", "targetmail@email.com"]; 

```


