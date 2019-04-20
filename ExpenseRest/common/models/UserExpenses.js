'use strict';module.exports=function(UserExpenses) {

    let commonService = require('../../../ExpenseRest/server/services/commonService.js');

    UserExpenses.saveExpenses=function(data,callback){
        commonService.saveExpenses(data,function(err,res){
            if(err) callback(err);
            callback(null,res)
        })
    }

    UserExpenses.remoteMethod('saveExpenses', {
        accepts:{arg:'data',type:'object',http:{source:'body'}},
        returns: { arg: 'response', type: 'object',root:true },
        http: {
          path: '/saveExpenses',
          verb: 'post'
        },
        description: "To save expenses"
      });

    UserExpenses.getUserExpenses=function(callback){
        commonService.getUserExpenses(function(err,res){
            if(err) callback(err);
            callback(null,res)
        })
    }

    UserExpenses.remoteMethod('getUserExpenses', {
        returns: { arg: 'response', type: 'object',root:true },
        http: {
          path: '/getUserExpenses',
          verb: 'get'
        },
        description: "To get user expenses"
      });
};