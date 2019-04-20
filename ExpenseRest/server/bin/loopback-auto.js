var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));
var outputPath = path.resolve(__dirname, '../../common/models');
var createIfNotExist = require("create-if-not-exist");
var dataSource = app.dataSources.dfi;
function schemaCB(err, schema) {
   if (schema) {
       console.log("Auto discovery success: " + schema.name);
       var outputName = outputPath + '/' + schema.name + '.json';
       fs.writeFile(outputName, JSON.stringify(schema, null, 2), { overwrite: false }, function (err) {
           if (err) {
               console.log("%%%%%%%%%% in .json files "+err);
           } else {
               console.log("JSON saved to " + outputName);
           }
       });     
       var model_config_file = path.resolve(__dirname, '../model-config.json');   
       var model_config_obj = JSON.parse(fs.readFileSync(model_config_file, 'utf8'));
       if (typeof model_config_obj[schema.name] === 'undefined') {
           model_config_obj[schema.name] = { 'dataSource': 'development', 'public': true };
           let json_content = JSON.stringify(model_config_obj, null, 2);
           console.log(json_content);
           fs.writeFileSync(model_config_file, JSON.stringify(model_config_obj, null, 2),'utf8', function (err) { 

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
        "'use strict';module.exports=function(" + schema.name + ") {};",'utf8'
      );
     
   }
   if (err) {
       console.error(err);
       return;
   }
   return;
};


dataSource.discoverModelDefinitions({ views: true, schema: 'dfidev' }, function (err, data) {
   if (err) {
       console.log("@@@@@@" + err);
   }
   else {
       console.log("####" + JSON.stringify(data));
       var schemas = data;
       // console.log("########"+JSON.stringify(modelConfig));
       for (let i = 0; i < schemas.length; i++) {
           //console.log("Schema Name"+schemas[i].name);
           dataSource.discoverSchema(schemas[i].name, { schema: schemas[i].schema, associations: true, views: true }, schemaCB);
       }
   }
});