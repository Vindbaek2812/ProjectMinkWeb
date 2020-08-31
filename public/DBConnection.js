
var Connection = require('tedious').Connection;  
    var config = {  
        server: 'thyrrestrupserver.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'ThyrrestrupAdmin', //update me
                password: 'Tmink1234567'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'ThyrrestrupDB'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });  
    var Request = require('tedious').Request  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement1() {  
        request = new Request("INSERT SalesLT.Product (username, password) OUTPUT INSERTED.ProductID VALUES (@username, @password);", function(err) {  
         if (err) {  
            console.log(err);}  
        });  
        request.addParameter('username', TYPES.NVarChar,'SQL Server Express 2014');  
        request.addParameter('password', TYPES.NVarChar , 'SQLEXPRESS2014');  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                console.log("Username is " + column.value);  
              }  
            });  
        });       
        connection.execSql(request);  
    }  