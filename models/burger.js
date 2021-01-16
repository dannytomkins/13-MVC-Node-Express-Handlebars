const burgers_orm = require("../config/orm")

const burgers_model = {
    selectAll: function(cbController){
        burgers_orm.selectAll( "burgers", function(resultsdb){
            cbController(resultsdb)
        })
    },
    insertOne: function(colNames, values, cbController){
        burgers_orm.insertOne("burgers", colNames, values, function(resultsdb){
            cbController(resultsdb)
        })
    },
    updateOne: function(objectfields, condition, cbController){
        burgers_orm.updateOne("burgers", objectfields, condition, function(resultsdb){
            cbController(resultsdb)
        })
    }
}

module.exports = burgers_model