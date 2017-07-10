---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Integrating custom apps and third party services with Visual Studio Team Services and Team Foundation Server
description: Overview of integrating with Visual Studio Team Services
ms.assetid: c9b97ad7-ffd8-4657-8322-74f764eec5c9
ms.manager: douge
ms.author: elbatk
ms.date: 08/23/2016
---

# Overview of integrating with Visual Studio Team Services

You can build custom applications that integrate with your Team Services account by using the [REST APIs](#rest-apis) to make direct HTTP calls, or utilize our [.NET Client Libraries](#.net-client-libraries).

Along with implementing Team Services' functionality in your application, you can also integrate with popular third-party services such as Slack or Jenkins.

<a name ="customApps"/>

## REST APIs
You can leverage our REST APIs directly to interact with all areas of Team Services or TFS.

You can check out the [REST API overview page](../api/overview.md) to see all of the APIs, how to use them, and samples.

## .NET client libraries
For .NET developers building Windows apps and services that integrate with Visual Studio Team Services, client libraries are available for integrating with work item tracking, version control, build, and other services.These packages make it easy to acquire and redistribute the libraries needed by your app or service.

Explore the [.NET client library overview](../get-started/client-libraries/dotnet.md) for the different packages and samples.

## Authentication
Authentication is a vital part of integrating with Team Services. Based on the type of application you're building, and what products you're building it for, you'll want to choose a different method of authentication. 

Check out the [authentication guidance](./get-started/authentication/authentication_guidance.md) page to find out exactly which method you should use, along with samples for how to implement it.


## Quickstarts
Check out the quick starts to get you started:
    * [Create a bug](./quickstarts/create-bug-dotnet.md)
    * [Get work items using queries](./quickstarts/work-item-quickstart.md)
    * [Integrate with Jenkins](./quickstarts/jenkins-integrate-quickstart.md)

## Tutorials
For a more in-depth look, find the tutorials:
    * Tutorial 1
    * Tutorial 2

## Samples
If you're looking for samples, find your languages below:
    * REST API samples
    * .NET client library samples



