'use strict';module.exports=function(Expensemst) {

    let commonService = require('../../../ExpenseRest/server/services/commonService.js');

    Expensemst.getYear=function(callback){
        commonService.getYearMst(function(err,res){
            console.log("response in js===",res);
            if(err) callback(err);
            callback(null,res)
        })
    }

    Expensemst.remoteMethod('getYear', {
        returns: { arg: 'response', type: 'object' },
        http: {
          path: '/getYear',
          verb: 'get'
        },
        description: "To get year list"
      });

      
      
      Expensemst.getMonth=function(callback){
        commonService.getMonth(function(err,res){
            if(err) callback(err);
            callback(null,res)
        })
    }

    Expensemst.remoteMethod('getMonth', {
        returns: { arg: 'response', type: 'object' },
        http: {
          path: '/getMonth',
          verb: 'get'
        },
        description: "To get month list"
      });

      
      
      Expensemst.getExpenseTypes=function(callback){
        commonService.getExpenseTypes(function(err,res){
            if(err) callback(err);
            callback(null,res)
        })
    }

    Expensemst.remoteMethod('getExpenseTypes', {
        returns: { arg: 'response', type: 'object' },
        http: {
          path: '/getExpenseTypes',
          verb: 'get'
        },
        description: "To get month list"
      });

};