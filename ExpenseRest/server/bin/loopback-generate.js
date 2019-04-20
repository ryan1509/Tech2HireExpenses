/*
Command:  npm run buildmodels -- --d=database name --t=table name   
              --> To build models for particular table   
                    1)"--d" means database name 
                    2)"--t" means table name
*/
var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');
var createIfNotExist = require("create-if-not-exist");

var dataSource = app.dataSources.tech2hire;
const args = require('minimist')(process.argv.slice(2));
function schemaCB(err, schema) {
    if (schema) {
        console.log("Auto discovery success: " + schema.name);
        var outputName = outputPath + '/' + schema.name + '.json';
        fs.writeFile(outputName, JSON.stringify(schema, null, 2), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputName);
            }
        });
        var model_config_file = path.resolve(__dirname, '../model-config.json');
        var model_config_obj = JSON.parse(fs.readFileSync(model_config_file, 'utf8'));
        if (typeof model_config_obj[schema.name] === 'undefined') {
            model_config_obj[schema.name] = { 'dataSource': 'dfi', 'public': true };
            let json_content = JSON.stringify(model_config_obj, null, 2);
            
            fs.writeFileSync(model_config_file, JSON.stringify(model_config_obj, null, 2), 'utf8', function (err) {

                if (err) {
                    console.log("ASSSSSSSSS   in attaching datasources" + err);
                } else {
                    console.log("JSON saved to " + model_config_file);
                }
            });
        }
        var model_JS_file = path.join(outputPath + '/' + schema.name + '.js');

        createIfNotExist(
            model_JS_file,
            "'use strict';module.exports=function(" + schema.name + ") {};", 'utf8'
        );
    }
    if (err) {
        console.error(err);
        return;
    }
    return;
};

dataSource.discoverSchema(args.t, { schema: args.d, associations: true, views: true }, schemaCB);