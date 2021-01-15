var connection = require("./connection")

//helper function from activity 16 to pass in values to mysql query
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
    }



const burgers_orm = {
    selectAll: function(tableName, cbModel){
        connection.query("SELECT * FROM ?? ", tableName, function(error, resultsdb){
            cbModel(resultsdb)
        } )
    },
}

//export orm object
module.exports = burgers_orm