---
ms.subservice: azure-devops-ecosystem
title: Develop a web extension
description: Tutorial showing you how to develop your first web extension for Azure DevOps.
ms.assetid: ae82118c-82fa-40ec-9f29-989ce981f566
ms.custom: engagement-fy23
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/12/2022
---

# Develop a web extension

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use extensions to enhance Azure DevOps with new web experiences, dashboard widgets, build tasks, and more. You can develop extensions using standard technologies like HTML, JavaScript, and CSS. This tutorial guides you through creating a web extension for Azure DevOps. 

> [!TIP]
> [Explore the extension samples](../develop/samples-overview.md) and the newest documentation on extension development using the [Azure DevOps Extension SDK](https://developer.microsoft.com/azure-devops/develop/extensions).

## Prerequisites

You must have the following permission and installations.

* You must be an organization owner. If you don't have an organization, you can [create an organization for free](https://app.vsaex.visualstudio.com/profile/account).
* Install [Node.js](https://nodejs.org).
* Install the extension packaging tool (TFX). Run `npm install -g tfx-cli` from a command prompt, which you'll use to [package your extension](../publish/overview.md) later on.

## Create a directory and manifest

An extension is composed of a set of files that includes a required manifest file. You package it into a .vsix file and publish to the Visual Studio Marketplace.

1. Create a directory to hold the files needed for your extension:
   
   ```
   mkdir my-first-extension
   ```

2. From this directory, initialize a new npm package manifest:
   
   ```
   npm init -y
   ```

   This file describes the libraries required by your extension.

3. Install the Microsoft VSS Web Extension SDK package and save it to your npm package manifest:
   
   ```
   npm install azure-devops-extension-sdk --save
   ```

   This SDK includes a JavaScript library that provides APIs required for communicating with the page your extension is embedded in.

4. Create an extension manifest file named `vss-extension.json` at the root of your extension directory with the following content:

    ```json
    {
        "manifestVersion": 1,
        "id": "my-first-extension",
        "publisher": "",
        "version": "1.0.0",
        "name": "My First Extension",
        "description": "A sample Visual Studio Services extension",
        "public": false,
        "categories": ["Azure Repos"],
        "targets": [
            {
                "id": "Microsoft.VisualStudio.Services"
            }
        ],
        "contributions": [
            {
                "id": "my-hub",
                "type": "ms.vss-web.hub",
                "targets": [
                    "ms.vss-code-web.code-hub-group"
                ],
                "properties": {
                    "name": "My Hub",
                    "uri": "my-hub.html"
                }
            }
        ],
        "files": [
            {
                "path": "my-hub.html",
                "addressable": true
            },
            {
                "path": "node_modules/azure-devops-extension-sdk/lib",
                "addressable": true,
                "packagePath": "lib"
            }
        ]
    }
    ```

    > [!NOTE]
    > The `public` property controls whether the extension is visible to everyone on the Visual Studio Marketplace. Keep your extensions private during development.

5. Create a file named `my-hub.html` at the root of your extension directory with the following content, which is for the view (also known as a hub) contributed into the web experience.

    ```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <script src="lib/SDK.min.js"></script>
        <style>
            body {
                background-color: rgb(0, 67, 117);
                color: white;
                margin: 10px;    
                font-family: "Segoe UI VSS (Regular)","-apple-system",BlinkMacSystemFont,"Segoe UI",sans-serif;
            }
        </style>
        <script type="text/javascript">
            SDK.init();
            SDK.ready(function() {
                document.getElementById("name").innerText = SDK.getUser().name;
            });
        </script>
    </head>
    <body>        
        <h1>Hello, <span id="name"></span></h1>
    </body>
    </html>
    ```

6. Your extension directory should look like the following example.

    ```
    |-- my-hub.html
    |-- node_modules
        |-- @types
        |-- azure-devops-extension-sdk
    |-- package.json
    |-- vss-extension.json
    ```

[!INCLUDE [preview](../_data/get-help.md)]
## Next steps

> [!div class="nextstepaction"]
> [Package and publish your extension](../publish/overview.md)

## Related articles

* [Developer Formula Design System](https://developer.microsoft.com/azure-devops/)
* [Contribution model](../develop/contributions-overview.md)
