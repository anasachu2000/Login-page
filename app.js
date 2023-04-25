const express = require('express');
const app = express()
const session = require('express-session')
const nocache = require('nocache');  

 app.use(express.static('public')) 

app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: "key123",
      saveUninitialized: true,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 24 * 10,  
      },
    })
  );

app.set('view engine',"ejs"); 
app.set('views','./views')  

const userRoute = require("./Routes/userRoute");
app.use("/", userRoute);



app.listen('3005',() => {
    console.log("server connected");
})