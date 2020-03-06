---
title: Deploy to Azure App Service using extension
description: Deploy to an Azure SQL database from Azure Pipelines or TFS
ms.assetid: F8AB2F49-FC90-4436-8E47-1F707D76C038
ms.topic: conceptual
ms.custom: seodec18
ms.author: puagarw
author: pulkitaggarwl
ms.date: 03/06/2020
monikerRange: '>= tfs-2017'
---

# Deploy to Azure App Service using extension

This tutorial walks you through setting up a CI/CD pipeline for deploying Node.js application to Azure App Service using [Deploy to Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode-deploy-azure.azure-deploy) extension.

## Prerequisites

- An Azure account. If you don't have one, you can [create for free](https://azure.microsoft.com/free/?utm_source=campaign&utm_campaign=vscode-tutorial-app-service-extension&mktingSource=vscode-tutorial-app-service-extension).

- You need [Visual Studio Code](https://code.visualstudio.com/)  installed along with the [Node.js and npm the Node.js package manager](https://nodejs.org/download) and the below extensions:

    - [Azure Account extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)

    - [Deploy to Azure extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-deploy-azure.azure-deploy)

- A GitHub account, where you can create a repository. If you don't have one, you can [create one for free](https://github.com/).

> [!IMPORTANT]
> Ensure that you have all the prerequisites installed and configured. 
> In VS Code, you should see your Azure email address in the Status Bar.

## Create Node.js application

Create a simple Node.js application that can be deployed to the Cloud. This tutorial uses an application generator to quickly scaffold the application from a terminal.

> [!TIP]
> If you have already completed the [Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) tutorial, you can skip ahead to Setup CI/CD Pipeline and deploy the Web App.
> 

### Install the Express Generator 

[Express](https://www.expressjs.com/) is an extremely popular framework for building and running Node.js applications. You can scaffold (create) a new Express application using the [Express Generator](https://expressjs.com/en/starter/generator.html) tool. The Express Generator is shipped as an npm module and installed by using the npm command-line tool `npm`.

> [!TIP]
> To test that you've got `npm` correctly installed on your computer, type npm --help from a terminal and you should see the usage documentation.
> 

Install the Express Generator by running the following from a terminal:

`npm install -g express-generator`

The `-g` switch installs the Express Generator globally on your machine so you can run it from anywhere.

### Scaffold a new application

We can now scaffold a new Express application called `myExpressApp` by running:

`express myExpressApp --view pug --git`

This creates a new folder called `myExpressApp` with the contents of your application. The `--view pug` parameters tell the generator to use the [pug](https://pugjs.org/api/getting-started.html) template engine (formerly known as jade).

To install all of the application's dependencies (again shipped as npm modules), go to the new folder and execute `npm install`:

```
cd myExpressApp
npm install
```

At this point, we should test that our application runs. The generated Express application has a `package.json` file which includes a start script to run `node ./bin/www`. This will start the Node.js application running.

### Run the application

1. From a terminal in the Express application folder, run:

    `npm start`

    The Node.js web server will start and you can browse to http://localhost:3000 to see the running application.

1. Follow [this link](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line) to push this project to GitHub using the command line. 

1. Open your application folder in VS Code and get ready to deploy it to Azure.

## Setup CI/CD Pipeline

Now you can deploy to Azure WebApps using VS code. This VS Code extension helps you set up continuous build and deployment for Azure WebApps without leaving VS Code.

To use this service, you need to install the extension on VS Code. You can browse and install extensions from within VS Code. 

1. Bring up the **Extensions** view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the **View: Extensions** command `(Ctrl+Shift+X)`.

1. 


