var apiwriter = require('apiwriter');

exports.getContext = function() {
    return {
        feedName: 'EngineeringInternal'
    }
}

exports.submitRequests = function() {

    apiwriter.setEnableWrite(true);

    // get feed permissions
    apiwriter.getJson('/packaging/feeds/{feedName}/permissions')

    // get global feed permissions
    apiwriter.getJson('/packaging/globalpermissions')

    // update feed permissions
    apiwriter.patchJson('/packaging/feeds/{feedName}/permissions', function (context, options) {
        return [
                {
                    "role":3,
                    "identityDescriptor":"Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2520422648-1909688902-2986275227-4210569620-1-653012555-3795782475-2724694617-2471557501"
                }
              ]
    })

    // Everyone can create feeds
    apiwriter.patchJson('/packaging/globalpermissions', function(context, options) {
        return [
            {
                identityDescriptor: 'Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3',
                role: 2
            },
            {
                identityDescriptor: 'Microsoft.IdentityModel.Claims.ClaimsIdentity;afd9e15b-cb4a-4adb-931b-8cc520a03c36',
                role: 1
            }
        ]
    })

    // Remove permissions from Everyone
    apiwriter.patchJson('/packaging/globalpermissions', function(context, options) {
        return [
            {
                identityDescriptor: 'Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3',
                role: 1
            }
        ]
    })
};