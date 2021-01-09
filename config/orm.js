var connection = require("./connection")

const burgers_orm = {
    selectAll:function(tableName, cbModel){
        connection.query("SELECT * FROM ?? ", tableName, function(error, resultsdb){
            cbModel(resultsdb)
        } )
    }
}
module.exports = burgers_orm