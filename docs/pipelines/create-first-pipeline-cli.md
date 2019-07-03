---
title: Create your first pipeline using the Azure CLI
ms.custom: seodec18
description: Create your first pipeline in Azure Pipelines, Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 038A5329-1B8F-46D9-A0C3-DA3FCFA43996
ms.manager: jillfra
ms.author: geverghe
author: geverghe
ms.date: 6/30/2019
monikerRange: 'azure-devops'
---

# Create your first pipeline from the CLI

This is a step-by-step guide to using Azure Pipelines from the Azure CLI (command-line interface) to build a GitHub repository.
You can use Azure Pipelines to build an app written in any language. For this quickstart, you'll use Java.


## Prerequisites

[!INCLUDE [include](_shared/prerequisites.md)]
[!INCLUDE [include](_shared/prerequisites-cli.md)]

## Get your first run

1. From a command prompt, sign in to the Azure CLI.

    ```
    az login
    ```

1. Fork the following repository into your GitHub account:

    ```
    https://github.com/MicrosoftDocs/pipelines-java
    ```

    After you've forked it, clone it to your dev machine. 
    Learn how: [Fork a repo](https://help.github.com/en/articles/fork-a-repo).

1. Navigtate to the cloned directory.

1. Create a new pipeline:

    ```
    az pipelines create --name "First-Java.CI"
    ```
    The repository and branch details are picked up from the git configuration available in the cloned directory.   
    
1. Enter your GitHub user name and password to authenticate Azure Pipelines.
   
    ```
    Enter your GitHub username (leave blank for using already generated PAT): Contoso
    
    Enter your GitHub password:
    ``` 

1. Provide a name for the service connection created to enable Azure Pipelines to communicate with the GitHub Repository.
    
    ```
    Enter a service connection name to create? ContosoPipelineServiceConnection
    ```

1. Select the Maven pipeline template from the list of recommended templates. 

    ```
    Which template do you want to use for this pipeline?
    [1] Maven
    [2] Maven package Java project Web App to Linux on Azure
    [3] Android
    [4] Ant
    [5] ASP.NET
    [6] ASP.NET Core
    [7] ASP .NET Core (.NET Framework)
    [8] Starter pipeline
    [9] C/C++ with GCC
    [10] Go
    [11] Gradle
    [12] HTML
    [13] Jekyll site
    [14] .NET Desktop
    [15] Node.js
    [16] Node.js with Angular
    [17] Node.js with Grunt
    [18] Node.js with gulp
    [19] Node.js with React
    [20] Node.js with Vue
    [21] Node.js with webpack
    [22] PHP
    [23] Python Django
    [24] Python package
    [25] Ruby
    [26] Universal Windows Platform
    [27] Xamarin.Android
    [28] Xamarin.iOS
    [29] Xcode
    Please enter a choice [Default choice(1)]:
    ```

1. The pipeline YAML is generated. You can open the YAML in your default editor to view and make changes.

    ```
    Do you want to view/edit the template yaml before proceeding?
    [1] Continue with the generated yaml
    [2] View or edit the yaml
    Please enter a choice [Default choice(1)]:2
    ```
    
1. Provide where you want to commit the YAML file that is generated.

    ```
    How do you want to commit the files to the repository?
    [1] Commit directly to the master branch.
    [2] Create a new branch for this commit and start a pull request.
    Please enter a choice [Default choice(1)]:
    ```

1. A new run is started. Wait for the run to finish.

[!INCLUDE [include](_shared/get-status-badge.md)]

[!INCLUDE [include](_shared/create-first-pipeline-next-steps.md)]
