var apiwriter = require('apiwriter');
var url = require('url');

// set cfgApisUrl to http://SERVER/COLLECTION/PROJECT/_apis

exports.getContext = function () {
    return {
    };
};

exports.submitRequests = function () {

    // Get a team's areas or team field values
    apiwriter.getJson('/work/teamsettings/teamfieldvalues',
      function(context, result){
        context.defaultValue=result.responseBody.defaultValue;
        context.values=result.responseBody.values;
      });

     
    // Update a teams' areas or team field values
    apiwriter.patchJson('/work/teamsettings/teamfieldvalues',  
        function (context, result) {


            if(context.values[0].includeChildren==false){
                context.values[0].includeChildren=true;
            }
            else{
                context.values[0].includeChildren=false;
            }
            return {
                "defaultValue": context.defaultValue,
                "values":context.values
            }
        }
    );

    // Keep it clean!
    apiwriter.patchJson('/work/teamsettings/teamfieldvalues',  
        function (context, result) {

            if(context.values[0].includeChildren==false){
                context.values[0].includeChildren=true;
            }
            else{
                context.values[0].includeChildren=false;
            }
            return {
                "defaultValue": context.defaultValue,
                "values": context.values
            }
        });
}