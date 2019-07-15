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

router.get("/new", (req, res) => {
    res.render("./blog/new", {errorMessage: ""})
});

router.post("/", (req, res) => {
    if (req.body.blog.head && req.body.blog.description && req.body.blog.text) {
        let newBlog = req.body.blog;
        newBlog.date = "December 12";
        Blog.create(newBlog, (err, blog) => {
            if(err){
                console.log(err);
            } else {
                res.redirect("/");
            }
        });
    } else {
        res.render("./blog/new", {errorMessage: "Please, fill all the fields"});
    }
});

router.delete("/:id", (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;


