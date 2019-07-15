const express    = require("express"),
      bodyParser = require("body-parser"),
      app        = express(),
      mongoose   = require("mongoose"),
      methodOverride = require("method-override");
let Blog = require("./models/blogs"),
    blogRoutes = require("./routes/blog"),
    indexRoutes = require("./routes/index");

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/ayer_blog", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/blog/", blogRoutes);
app.use(indexRoutes);



app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has been started!");
});