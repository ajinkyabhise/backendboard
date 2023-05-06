let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
require("dotenv").config();

app.get("/", function(req, res){
    res.send("<h1>Welcome to express app<h1>")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch(err =>{
    console.log("Error connecting to MongoDB",err)
});

enableCORS(app);
app.use(cors());

function enableCORS(expressInstance) {
    expressInstance.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, timeZone"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
      );
      next();
    });
  }

  // enableStaticFileServer(app, process.env.uploadUrl, "/api/static");

  // function enableStaticFileServer(expressInstance, folderName, route) {
  //   app.use(route, express.static(path.join(__dirname, folderName)));
  // }

let blogRoute = require("./src/routes/blog.route")
let testimonialRoute = require("./src/routes/testimonial.route")
let contactRoute = require("./src/routes/contact.route")
let logoRoute = require("./src/routes/logo.route")
let profileRoute = require("./src/routes/profile.route")
let userRoute = require("./src/routes/user.route")
// let uploadRoute = require("./upload.routes")
let seminarRoute = require("./src/routes/seminar.route")
let eventRoute = require("./src/routes/event.route")
let workshopRoute = require("./src/routes/workshop.route")
let holidayRoute = require("./src/routes/holiday.route")
let examTableRoute = require("./src/routes/examTable.route")

app.use("/api/v1/user", userRoute)
app.use("/api/v1/blog", blogRoute)
app.use("/api/v1/testimonial", testimonialRoute)
// app.use("/api/v1/upload", uploadRoute)
app.use("/api/v1/contact", contactRoute)
app.use("/api/v1/logo", logoRoute)
app.use("/api/v1/profile", profileRoute)
app.use("/api/v1/seminar", seminarRoute)
app.use("/api/v1/event", eventRoute)
app.use("/api/v1/workshop", workshopRoute)
app.use("/api/v1/holiday", holidayRoute)
app.use("/api/v1/examTable", examTableRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
})