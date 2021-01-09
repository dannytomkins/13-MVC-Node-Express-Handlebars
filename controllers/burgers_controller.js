const burgers_model = require("../models/burger")

const router = require("express").Router()

router.get("/", function(req, res){
    burgers_model.selectAll(function(resultsdb){
        res.render("index", {burgers:resultsdb})
    })
    
})


//router.post("/api/burgers")

module.exports = router