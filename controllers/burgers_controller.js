const burgers_orm = require("../config/orm")
//import the model to use database function
const burgers_model = require("../models/burger")

const router = require("express").Router()
//get method
router.get("/", function (req, res) {
    burgers_model.selectAll(function (resultsdb) {
        res.render("index", { burgers: resultsdb })
    })

})
//post method
router.post("/api/burgers", function (req, res) {
    //WHAT IS BURGER???
    //burger.create(["burger_name"], [req.body.name], function(result) {
    burgers_model.insertOne(["burger_name"], [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});
//put, update method
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;



    burgers_model.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function (results) {

            res.json(results)
        }
    );
});


//export routes fore server.js to use
module.exports = router