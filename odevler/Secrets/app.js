require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption")
const app = express();
const CryptoJS = require("crypto-js");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
    console.log("Başarıyla bağlandı.")
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// userSchema.plugin(encrypt, { secret: process.env.SECRET_KEY, encryptedFields: ["password"] });



const User = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })
    .post(function (req, res) {
        const username = req.body.username;
        const passwordHash = CryptoJS.SHA256(req.body.password).toString(CryptoJS.enc.Hex);
        User.findOne({ email: username }).then(function (foundUser) {
            if (foundUser.password === passwordHash) {
                console.log("Giriş başarılı.");
                res.render("secrets");
            } else {
                console.log("Şifre yanlış");
                res.redirect("login");
            }
        }).catch(function () {
            console.log("Kullanıcı bulunamadı");
            res.redirect("login");
        })
    });

app.route("/register")

    .get(function (req, res) {
        res.render("register");
    })

    .post(function (req, res) {
        User.findOne({ email: req.body.username }).then(function (foundUserName) {
            if (!foundUserName) {
                const passwordHash = CryptoJS.SHA256(req.body.password).toString(CryptoJS.enc.Hex);
                const newUser = new User({
                    email: req.body.username,
                    password: passwordHash
                });
                newUser.save().then(function () {
                    res.render("secrets");
                    console.log("New user added to the db.")
                }).catch(function (err) {
                    console.log(err);
                })
            } else {
                console.log("Already taken.");
                res.redirect("/");
            }
        })
    });





app.listen(3000, function () {
    console.log("Server started on port 3000")
});