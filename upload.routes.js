let router = require("express").Router();
let multer = require("multer");


let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./public/uploads");
    },
    filename: (req, file, callback) => {
      req.originalName = Date.now() + "-" + file.originalname;
      callback(null, req.originalName);
    },
  }),
}).any(); // for multiple upload

router.post("/", (req, res) => {
  console.log(req.files)
  upload(req, res, (err) => {
    var files = [];
    req.files.forEach((ele) => {
      files.push(process.env.staticFilesUrl + ele.filename);
    });
    const response = {
      status: true,
      data: {
        path: files[0],
      },
      message: "Fields can not be empty!",
    };

    res.send(response);
  });
});

module.exports = router;
