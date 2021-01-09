const burgers_orm = require("../config/orm")

const burgers_model = {
    selectAll: function(cbController){
        burgers_orm.selectAll( "burgers", function(resultsdb){
            cbController(resultsdb)
        })
    }
}

module.exports = burgers_model