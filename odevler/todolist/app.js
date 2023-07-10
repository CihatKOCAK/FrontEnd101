const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');
    console.log("Başarıyla bağlandı.")
}

main().catch(err => console.log(err));

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Welcome to your todolist!"
});

const item2 = new Item({
    name: "Hit the + button to add a new item."
});

const item3 = new Item({
    name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems).then(function () {
//     console.log("Successfully saved all the items to todolistDB.");
// }).catch(function (err) {
//     console.log(err);
// });

// async function findItems() {
//     try {
//      console.log(await Item.find().exec())
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
// findItems();

app.get("/", function (req, res) {
    async function findItems() {
        try {
            const foundItems = await Item.find().exec();
            if (foundItems.length === 0) {
                Item.insertMany(defaultItems).then(function () {
                    console.log("Successfully saved all the items to todolistDB.");
                }).catch(function (err) {
                    console.log(err);
                });
                res.redirect("/")
            } else {
                res.render("list", { listTitle: "Today", newListItems: foundItems });
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    findItems();
});

app.post("/", function (req, res) {
    const itemName = req.body.newItem;
    const item=new Item({
        name:itemName
    })
    item.save();
    res.redirect("/");
});

app.post("/delete",function(req,res){
    const checkedItemId=req.body.checkbox;
    async function deleteItem(){
        try{
            Item.deleteOne({_id:checkedItemId}).then(function(){
                console.log("Deleted successfully.")
            }).catch(function(err){
                console.log(err);
            })  
        }
        catch(err){
            console.error(err);
        }
    }
    deleteItem();
    res.redirect("/");
})

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
})
app.get("/about", function (req, res) {
    res.render("about");
});
app.listen(3000, function () {
    console.log("Server started on port 3000")
});
