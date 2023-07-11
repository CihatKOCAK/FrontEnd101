const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
    console.log("Başarıyla bağlandı.")
}

main().catch(err => console.log(err));

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);
// REQUEST TARGETING ALL ARTICLES
app.route("/articles")

    .get(function (req, res) {
        Article.find({}).then(function (foundArticles) {
            res.send(foundArticles);
        }).catch(function (err) { console.error(err); });
    })

    .post(function (req, res) {
        console.log(req.body.title);
        console.log(req.body.content);
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save().then(function (err) {
            if (!err) {
                res.send("Success")
            } else {
                res.send(err);
            }
        }).catch(function (err) {
            console.log(err);
        })
    })

    .delete(function (req, res) {
        Article.deleteMany().then(function (err) {
            if (!err) {
                res.send("Deleted");
            } else {
                res.send(err);
            }
        }).catch(function (err) {
            console.log(err);
        })
    });

// REQUEST TARGETING A SPECIFIC ARTICLE

app.route("/articles/:articleTitle")

    .get(
        function (req, res) {
            Article.findOne({ title: req.params.articleTitle }).then(function (foundArticle) {
                if (foundArticle) {
                    res.send(foundArticle);
                } else {
                    res.send("No articles matching that title was found.")
                }
            }).catch(function (err) { console.error(err); });
        }
    )

    .put(function (req, res) {
        Article.findOneAndUpdate(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }
        )
        .then(function () {
            res.send("Successfully updated article");
        })
        .catch(function (err) {
            console.error(err);
            res.send("An error occurred while updating the article");
        });
    })

    .patch(function(req,res){
        Article.findOneAndUpdate(
            {title:req.params.articleTitle},
            {$set:req.body}
        )
        .then(function () {
            res.send("Successfully patched the article");
        })
        .catch(function (err) {
            console.error(err);
            res.send("An error occurred while patching the article");
        });
    })
    .delete(function(req,res){
        Article.findOneAndDelete(
            {title:req.params.articleTitle}
        )
        .then(function () {
            res.send("Successfully deleted the article");
        })
        .catch(function (err) {
            console.error(err);
            res.send("An error occurred while deleting the article");
        });
    });
app.listen(3000, function () {
    console.log("Server started on port 3000");
});