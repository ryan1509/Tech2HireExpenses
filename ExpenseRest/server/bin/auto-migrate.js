var app=require('../server');

var dataSource=app.dataSources.dfi;

dataSource.automigrate('usermst',function(err){
   if(err) throw err;
   else{
       console.log("####")
   }
   dataSource.disconnect();  
})