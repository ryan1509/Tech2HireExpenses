let app = require('../server'),
    loopback = app.dataSources.tech2hire.connector;


function commonService() {

   

    // this.getCountryList = function (callback) {
    //     app.models.Countrymst.find().then((response) => {
    //         console.log('at line 8--------------' + JSON.stringify(response));
    //         callback(null, response);
    //     })
    // }

  
    // this.getStateList = function (data, callback) {
    //     let query = "select statename from statemst where countrymstid=" + data[0].id;
    //     console.log('At line 31-------------' + query)
    //     loopback.query(query, data, function (err, response) {
    //         callback(null, response);
    //     });


    // };

    this.getYearMst=function(callback){
        app.models.Expensemst.find({"where":{"lookuptype":'YEAR'}}).then((response)=>{
            console.log("===YEAR=="+JSON.stringify(response));
            callback(null,response);
        })
    }

    this.getMonth=function(callback){
        app.models.Expensemst.find({"where":{"lookuptype":'MONTH'}}).then((response)=>{
            console.log("==Month=="+JSON.stringify(response));
            callback(null,response);
        })
    }

    this.getExpenseTypes=function(callback){
        app.models.Expensemst.find({"where":{"lookuptype":'CATEGORY'}}).then((response)=>{
            console.log("==Category=="+JSON.stringify(response));
            callback(null,response);
        })
    }

    this.saveExpenses=function(data,callback){
        app.models.UserExpenses.create(data).then((response)=>{
            console.log("==status==",response);
            callback(null,response);
        })
    }

    this.getUserExpenses=function(callback){
        app.models.UserExpenses.find().then((response)=>{
            console.log("==expenses==",response);
            callback(null,response);
        })
    }

}
commonService = new commonService();
module.exports = commonService;
