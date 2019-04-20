/*
@author : Ryan Marshal
@description : This Service is meant for Login Module 
*/

let app = require('../server'),
loopback = app.dataSources.tech2hire.connector;

function loginService(){

    /*
    @author : Ryan Marshal
    @params : {employeeid : id}
    @returns : {Object}
    */ 
    this.getEmployeeResponsibilities=function(data,callback){
        let role_assigned=false;
        app.models.Employeerole.findOne({where:{"employeeid":data.employeeid}}).then(function(response){
            console.log(JSON.stringify(response));
            if(response != null){
                role_assigned=true;
            }
            if(role_assigned){
                app.models.Roleresponsibilities.find(
                    {
                        where:{"rolemstid":response.rolemstid},
                        include:["responsibilities"]
                        
                    }).then(function(response){
                        console.log("Response--"+JSON.stringify(response));
                        callback(null,response);
                    })
            }
            else{
                callback(null,role_assigned);
            }
        })
    }
}

loginService=new loginService();
module.exports=loginService