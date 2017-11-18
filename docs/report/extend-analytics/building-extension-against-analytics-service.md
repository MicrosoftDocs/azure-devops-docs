---
title: Build a hub extension | VSTS
description: How to build a hub extension that calls the Analytics Service OData for Visual Studio Team Services (VSTS) from Power BI Desktop
ms.prod: vs-devops-alm
ms.technology: vs-devops-reporting
ms.assetid: B1CAEAB1-3D8F-44FA-A2FD-CA24695AEE86
ms.manager: douge
ms.author: kaelli
ms.date: 11/13/2017
---

# Build a hub extension  

**VSTS**  

Building an extension that calls the Analytics Service is identical to building any other extension. However,
in this early stage, a few things have to be done manually at this point - and then there's working
with the returned data. This documentation will show you how to do both.

[!INCLUDE [temp](../_shared/analytics-preview.md)]

To build an extension, see [Write your first extension for VSTS](../../extend/get-started/node.md).
We won't be building a grid control to hold the results though - we'll be building a chart. For the purposes of this
example we'll use the open source C3 library which sits on top of D3.

At the end of this walkthrough you will have a new hub called "Analytics Data" with a bar chart showing the count of work
items across all projects in your account.

##Set up the project

**Before beginning, download the following items:**

* [Client SDK](https://github.com/microsoft/vss-sdk)
* [D3](https://github.com/mbostock/d3/releases/download/v3.5.13/d3.zip)
* [C3](https://github.com/masayuki0812/c3/archive/0.4.10.zip)

### Create the web page  

1. Create a new folder called "Analytics Extension"
2. Unzip the Client SDK and copy the VSS.SDK.js file into the **Analytics Extension\sdk\scripts** folder
3. Unzip D3 and copy the d3.min.js file into the **Analytics Extension\scripts** folder
4. Unzip C3 and copy the c3.min.js file into the **Analytics Extension\scripts** folder
5. Add another folder called **images** to the Analytics Extension folder and copy an image you would like to use
as your extension image
6. Copy the c3.min.css file into the **Analytics Extension\content** folder
7. In the Analytics Extension folder create a new web page called **Analytics.html**
8. Copy the following html and javascript in the Analytics.html page

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Analytics Data</title>

<script src="sdk/scripts/VSS.SDK.js"></script>
<script src="scripts/d3.min.js" charset="utf-8"></script>
<script src="scripts/c3.min.js"></script>

<link href="content/c3.min.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="chart"></div>
<script type="text/javascript">
// Sets up the initial handshake with the host frame
VSS.init({
// Our extension will explicitly notify the host when we're done loading
explicitNotifyLoaded: true,

// We are using some VSTS APIs, so we will need the module loader to load them in
usePlatformScripts: true,
usePlatformStyles: true
});

VSS.require(["VSS/Authentication/Services"],
function (VSS_Auth_Service) {
<!--Get authentication token-->

<!--Get analytics data-->

<!--Create the chart-->
});

VSS.notifyLoadSucceeded();
</script>
</body>
</html>
```

### Handle authentication 

For a more comprehensive discussion of authentication, see [Choosing the right authentication mechanism](../../integrate/get-started/authentication/authentication-guidance.md).
To get an authorization token, replace the **Get authentication token** comment from the code above with the following:

```
//Get the access token and invoke a callback function
VSS.getAccessToken().then(function(token){
// Get the token
var authToken = VSS_Auth_Service.authTokenManager.getAuthorizationHeader(token);

<!--Get analytics data-->

<!--Create the chart-->
});
```

Once the token is retrieved, you need to add it to the request for data from the Analytics Service. To do this, replace the
**Get analytics data** comment with the following:


```
    //Get the access token and invoke a callback function
    VSS.getAccessToken().then(function(token){

    // Get the token
    var authToken = VSS_Auth_Service.authTokenManager.getAuthorizationHeader(token);

    //Get the account name so that we're calling a valid Analytics Service endpoint
    var accountName = VSS.getWebContext().account.name;

    $.ajax({
    type: "GET",
    url: "https://" + accountName + ".analytics.visualstudio.com/_odata/v1.0-preview/WorkItems?$apply=groupby((WorkItemType), aggregate($count as Count))",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    beforeSend: function (xhr) {
    xhr.setRequestHeader('Authorization', authToken);
    }
    })
    .success(function (data, textStatus, jqXHR) {
    <!--Create the chart-->
    })
    .error(function (jqXHR, textStatus, errorThrown) {
    $("#chart").html(errorThrown);
    });
    });
```

This call uses the jQuery ajax function to call out to the Analytics Service and sets the content type and data type. The
beforeSend callback sets the authorization header with the token retrieved from the previous step.
The success and error callbacks are called respectively after the call to the Analytics Service is completed.

Finally, to build the chart, replace the **Create the chart** comment with the following code:

```
//Retrieve the JSON data
var jsonData = JSON.parse(data);

//Create the chart
var chart = c3.generate({
    bindto: '#chart',
    data: {
        //Set the data 
        json: jsonData.value,
        keys: {
            //Tell C3 that the x-axis is the WorkItemType value and that the value is Count
            x: 'WorkItemType',
            value: ['Count']
        },
        //Set the chart type and show labels
        type: 'bar',
        labels: true
    },
    axis: {
        //Make sure the x-axis is a category otherwise you can't set a textual value
        x: {
            type: 'category'
        },
        y: {
            label: {
                text: 'Work Item Count',
                position: 'outer-middle'
            }
        }
    },
    legend: {
        position: 'right'
    }
});
```

### Create the manifest   

Full documentation on extension manifests can be found in the [Extension manifest reference](../../extend/develop/manifest.md) documentation.
For the purposes of this sample, use the following manifest and copy it into a file called vss-extension.json in the root folder.

```
{
  "manifestVersion": 1,
  "id": "AnalyticsSampleAddIn",
  "version": "0.1.0",
  "name": "Analytics Sample",
  "publisher": "<Your Publisher Name Here>",
  "description": "An Analytics Service based extension",
  "public": false,
  "targets": [
    {
      "id": "Microsoft.VisualStudio.Services"
    }
  ],
  "icons": {
    "default": "images/<image>.png"
  },
  "categories": [
    "Plan and track"
  ],
  "tags": [
    "Sample"
  ],
  "content": {
    "details": {
      "path": "overview.md"
    },
    "license": {
      "path": "license.md"
    }
  },
  "branding": {
    "color": "blue",
    "theme": "light"
  },
  "scopes": [
    "vso.analytics"
  ],
  "contributions": [
    {
      "id": "sampleChart",
      "type": "ms.vss-web.hub",
      "description": "Adds a sample analytics chart.",
      "targets": [
        "ms.vss-work-web.work-hub-group"
      ],
      "properties": {
        "title": "Analytics Sample",
        "name": "Analytics Sample",
        "uri": "Analytics.html"
      }
    }
  ],
  "files": [
    {
      "path": "Analytics.html",
      "addressable": true
    },
    {
      "path": "sdk/scripts",
      "addressable": true
    },
    {
      "path": "images/<image>.png",
      "addressable": true
    },
    {
      "path": "scripts",
      "addressable": true
    },
    {
      "path": "Content",
      "addressable": true
    }
  ]
}

```

**Remember to replace the publisher name and image name as appropriate. In this example the license.md and overview.md files
do exist but they have no content. They must exist otherwise the extension cannot be compiled into a VSIX pacakage.**

There are a few key things to note here:
* This extension adds a work-hub-group (extension points are described in [Extension points](../../extend/reference/targets/overview.md))
* The name of the hub is "Analytics Sample" and it will load the page "Analytics.html"
* The scope is **vso.analytics** which is the OAuth scope required to access the Analytics Service

At this point the extension can be compiled, deployed, installed and executed following the steps described 
in the [Create your first extension for VSTS](../../extend/get-started/node.md) documentation, starting from the Create your publisher section.

Once the solution is deployed you should see something similar to the following:

## Build a widget extension  

Widgets allow you to place items on a [dashboard](../dashboards/dashboards.md) and to compose those items as required. Detailed information
on creating widget extensions can be found in  [Building a dashboard widget that calls the Analytics Service](../../extend/develop/add-dashboard-widget.md). This topic covers how to call out to the Analytics Service specifically.