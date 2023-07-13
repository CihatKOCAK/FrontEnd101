require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// const encrypt = require("mongoose-encryption")
const app = express();
const CryptoJS = require("crypto-js");
const salt = CryptoJS.lib.WordArray.random(128 / 8);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
    console.log("Başarıyla bağlandı.")
};

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);

// userSchema.plugin(encrypt, { secret: process.env.SECRET_KEY, encryptedFields: ["password"] });



const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home");
});

app.route("/register")

    .get(function (req, res) {
        res.render("register");
    })

    .post(function (req, res) {
        User.register({ username: req.body.username }, req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/secrets");
                })
            }
        });
        // User.findOne({ email: req.body.username }).then(function (foundUserName) {
        //     if (!foundUserName) {
        //         const saltPw = (req.body.password).toString + salt.toString();
        //         const passwordHash = CryptoJS.SHA256(saltPw).toString(CryptoJS.enc.Hex);
        //         const newUser = new User({
        //             email: req.body.username,
        //             password: passwordHash
        //         });
        //         newUser.save().then(function () {
        //             res.render("secrets");
        //             console.log("New user added to the db.")
        //         }).catch(function (err) {
        //             console.log(err);
        //         })
        //     } else {
        //         console.log("Already taken.");
        //         res.redirect("/");
        //     }
        // })
    });
app.route("/login")
    .get(function (req, res) {
        res.render("login");
    })
    .post(function (req, res) {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })
        req.login(user, function (err) {
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("local", { failureRedirect: "/login", failureMessage: true })(req, res, function () {
                    console.log("doğru");
                    res.redirect("/secrets");
                })
            }
        })
    });
// const username = req.body.username;
// const saltPw = (req.body.password).toString + salt.toString();
// const passwordHash = CryptoJS.SHA256(saltPw).toString(CryptoJS.enc.Hex);
// User.findOne({ email: username }).then(function (foundUser) {
//     if (foundUser.password === passwordHash) {
//         console.log("Giriş başarılı.");
//         res.render("secrets");
//     } else {
//         console.log("Şifre yanlış");
//         res.redirect("login");
//     }
// }).catch(function () {
//     console.log("Kullanıcı bulunamadı");
//     res.redirect("login");
// })


app.route("/submit")
    .get(function (req, res) {
        if (req.isAuthenticated()) {
            res.render("submit");
        } else {
            res.redirect("/login");
        }
    })
    .post(function (req, res) {
        const submittedSecret = req.body.secret;
        User.findById(req.user.id).then(function (foundUser) {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save();
                res.redirect("/secrets");
            }
        }).catch(function (err) { });
    });

app.get("/secrets", function (req, res) {
    User.find({ "secret": { $ne: null } }).then(function (foundUser) {
        if (foundUser){
            res.render("secrets",{usersWithSecrets:foundUser})
        }
    }).catch(function(err){})
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    })
});





app.listen(3000, function () {
    console.log("Server started on port 3000")
});