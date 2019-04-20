'use strict';

module.exports = function(Usermst) {

    let loginService=require('../../server/services/loginService.js');
    Usermst.getEmployeeResponsibilities=function(data,callback){
        loginService.getEmployeeResponsibilities(data,function(err,result){
            callback(null,result);
        })
    }


    Usermst.remoteMethod('getEmployeeResponsibilities', {
        accepts:{arg:"data",type:"object"},
        returns: { arg: "response", type: "object", root: true },
        http: { path: "/getEmployeeResponsibilities", verb: "get" }
    })
};
