const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');
    console.log("Başarıyla bağlandı.")
}

main().catch(err => console.log(err));

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

const Item = mongoose.model("Item", itemsSchema);

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

const listSchema = {
    name: String,
    items: [itemsSchema]
}

const List = mongoose.model("List", listSchema);

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
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    })

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }).then(function (foundList) {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName)
        })
            .catch(function (err) { });
    }

});

app.post("/delete", async function (req, res) {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        try {
            await Item.deleteOne({ _id: checkedItemId });
            console.log("Deleted successfully");
        } catch (err) {
            console.error(err);
        }
        res.redirect("/");
    } else {
        try {
            await List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } });
            res.redirect("/" + listName);
        } catch (err) {
            console.error(err);
        }
    }
});

app.get("/:customListName", function (req, res) {
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({ name: customListName })
        .then(function (foundList) {
            if (!foundList) {
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();
                console.log("saved");
                res.redirect("/" + customListName);
            }
            else {
                res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
            }
        })
        .catch(function (err) { });
});
app.get("/about", function (req, res) {
    res.render("about");
});
app.listen(3000, function () {
    console.log("Server started on port 3000")
});
