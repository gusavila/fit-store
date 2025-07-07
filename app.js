import express from "express";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("pages/index.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});