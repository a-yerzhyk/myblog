const express = require("express");
const router = express.Router();
let Blog = require("../models/blogs");

router.get("/", (req, res) => {
    Blog.find({}, (err, allPosts) => {
        if (err){
            console.log(err);
        } else {
            res.render("./blog/blog", {blog: allPosts});
        }
    })
});

router.get("*", (req, res) => {
    res.send("Sorry! Page not found 404! :(");
});

module.exports = router;