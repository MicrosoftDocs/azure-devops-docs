---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 03/20/2020
---

Publish NuGet packages to a feed in Azure Artifacts to share them with your team and your organization.
First, get the tools and your feed URL:

[!INCLUDE [](nuget-publish-endpoint.md)]

## Publish NuGet package using the NuGet CLI

To be able to publish your package using the NuGet CLI, you will need the following variables:

1. SourceName: the name of your feed created in step (1) of this article
1. SourceURL: the feed URl (step 6). You can find this in the `Project setup` section, under `value`. Navigate to Azure DevOps portal -> Artifact -> Your feed name -> Connect to feed -> Project setup
1. UserName and Pat: Your personal access token (Pat) and userName. see [Authenticate access with personal access tokens](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for help setting up your credentials.

### Install and publish a sample NuGet package  

If you don't have a package but want to try this out, you can install a NuGet sample package from the public NuGet gallery.

* Install the sample NuGet package:

  ```Command
  nuget install HelloWorld -ExcludeVersion
  ```

* Publish the sample NuGet package to your feed:

   Run these two commands in an elevated command prompt to add the source to your nuget.config and push your package to your feed. Don't forget to replace the place holders with the respective value.

  ```Command
  nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
  nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
  ```

### Create and publish your own NuGet package

To create your own NuGet package, follow the steps to [Create NuGet packages](/nuget/create-packages/creating-a-package)

* Publish your package to your feed:

  Run these two commands in an elevated command prompt to add the source to your nuget.config and push your package to your feed. Don't forget to replace the place holders with the respective value.

  ```Command
  nuget sources add -Name <SourceName> -Source <SourceURL> -username <UserName> -password <Pat>
  nuget push -Source <SourceName> -ApiKey az <PackagePath exp:(.\Get-Hello.1.0.0.nupkg)>
