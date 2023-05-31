---
title: Create a multistage pipeline with Azure DevOps
description: Build a pipeline for development, staging, testing, and pushing to production.
ms.topic: how-to 
ms.date: 05/30/2023
ms.custom: template-how-to-pattern
---

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

# Create a multistage pipeline with Azure DevOps

You can use a multistage pipeline to divide your CI/CD process into stages that represent different parts of your development cycle. In this article, we'll build a YAML pipeline with four stages: 

* Build: builds the source code and produces a package
* Dev: test changes before deploying to production
* Deploy: deploy to an Azure App Service instance

We'll create a web application for a pretend space game that includes a leaderboard to show high scores. 

## Prerequisites

* A GitHub account where you can create a repository. [Create one for free](https://github.com).
* An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/dotnet).
    * An Azure DevOps organization and project. [Create one for free](../get-started/pipelines-sign-up.md). 
* An ability to run pipelines on Microsoft-hosted agents. You can either purchase a [parallel job](../licensing/concurrent-jobs.md) or you can request a free tier. 


## 1 - Fork the project

1. Fork the following sample .NET app at GitHub.

```
https://github.com/Azure-Samples/js-e2e-express-server
```

## 2 - Create the App Service environments

1. Go to the Azure portal.  

1. Generate a random number that makes your web app's domain name unique.

2. Create a resource group that contains all of your App Service instances.

3. Create an App Service plan.




## 3 - Add the Build stage
TODO: Add introduction sentence(s)
TODO: Add ordered list of procedure steps

## 4 - Add the Dev stage
TODO: Add introduction sentence(s)
TODO: Add ordered list of procedure steps

## 5 - Add the Deploy stage 
TODO: Add introduction sentence(s)
TODO: Add ordered list of procedure steps

<!-- 5. Next steps ------------------------------------------------------------------------

Required: Provide at least one next step and no more than three. Include some context so the 
customer can determine why they would click the link.
Add a context sentence for the following links.

-->

## Next steps
TODO: Add your next step link(s)

<!--
Remove all the comments in this template before you sign-off or merge to the main branch.

-->