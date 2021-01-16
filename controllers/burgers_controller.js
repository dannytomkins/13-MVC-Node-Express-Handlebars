const burgers_orm = require("../config/orm")
//import the model to use database function
const burgers_model = require("../models/burger")

const router = require("express").Router()
//get method
router.get("/", function(req, res){
    burgers_model.selectAll(function(resultsdb){
        res.render("index", {burgers:resultsdb})
    })
    
})
//post method
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
    });
//put, update method
router.put("/api/burgers/:id", function(req, res) {
    var devoured = "id = " + req.params.id;

    console.log("devoured", devoured);

    burger.update(
        {
        devoured: req.body.devoured
        },
        condition,
        function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
        }
    );
});


//export routes fore server.js to use
module.exports = router