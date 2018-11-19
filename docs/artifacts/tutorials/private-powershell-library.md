---
title: Use Azure Artifacts as a private PowerShell repository
description: Use Azure Artifacts within Azure DevOps Services to create your own private PowerShell repository
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.reviewer: amullans
ms.date: 11/19/2018
monikerRange: 'vsts'
---

# Use Azure Artifacts as a private PowerShell repository

**Azure DevOps Services**

Azure Artifacts provides an easy way to share your PowerShell scripts and books across your entire team or company. By storing your PowerShell scripts in a private NuGet repository within Azure Artifacts, you can give members of your team the ability to download or update them quickly using the command line.

> [!NOTE]
> This guide assumes you've already set up Azure Artifacts. You can check out how to license the extension in the [License Azure Artifacts guide](license-azure-artifacts.md).

## Prerequisites

1. [The NuGet CLI](/nuget/tools/nuget-exe-cli-reference)

2. [An Azure DevOps Services Account](https://azure.microsoft.com/en-us/services/devops/)

## Create a PAT to get command-line access to Azure DevOps Services

The first step is to create a PAT through the Azure DevOps Services UI to authenticate your command-line with the service.

1. Head to your Azure DevOps Services organization: `https://dev.azure.com/<org_name>`
2. From your home page, open your profile. Go to your security details:
    <img alt="Go to Azure DevOps organization home, open your profile, go to Security" src="../../repos/git/_shared/_img/my-profile-team-services.png" style="border: 1px solid #CCCCCC" />
3. Create a personal access token.

   <img alt="Add a personal access token" src="../../repos/git/_shared/_img/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />

4.  Name your token. Select a lifespan for your token.

	If you have more than one organization, you can also select the Azure DevOps organization where you want to use the token.

    <img alt="Name your token, select a lifespan. If using Azure DevOps Services, select an account for your token" src="../../repos/git/_shared/_img/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

5.  Select the [scopes](../../../integrate/get-started/authentication/oauth.md#scopes) that this token will authorize for *your specific tasks*.

    For this tutorial, you will only need **Packaging: Read, write & manage** permissions, but you may want to add more if you'd like to use this token for other tasks.

6. When you're done, make sure to *copy the token*, as this value will only be shown once. You'll use this token as your password, you can choose to store this value in whatever manner you prefer, but it should be treated as safely as a password.

> If you like, you can [learn more about using PATs to authenticate in Azure DevOps Services](/azure/devops/organizations/accounts/use-persona-access-tokens-to-authenticaate).

## Create the feed

A feed is a central repository that can store multiple packages of different types. We will need to create a feed in order to store packages, which will be PowerShell Modules in this scenario.

1. Navigate to **Azure Artifacts** from your Azure DevOps Services organization.
2. On your first visit to **Azure Artifacts**, you'll be welcomed with an image telling you to create a new feed, click _+ New feed_. If you already have feeds in **Azure Artifacts**, simply click _+ New feed_ near the top of the UI.
3. 

## Creating and packaging a module

[!INCLUDE [](_shared/maven/publish.md)]

<a name="consume-in-visual-studio"></a>

## Install an artifact from your feed

[!INCLUDE [](_shared/maven/install.md)]

<a name="automate-with-continuous-integration"></a>

## Automate the process with continuous integration

You can use continuous integration systems such as Team Build to automate the installation and publishing of your Maven artifacts. 
To get started with continuous integration, see the [Maven in Team Build guidance](/azure/devops/pipelines/packages/maven).

## What's next?

For more advanced topics, check out the [content summary](overview.md).
