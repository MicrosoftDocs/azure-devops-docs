---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Request | REST API Reference for Team Foundation Server
description: Work with Git programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 47DDF67E-C4BE-4D96-BA20-360A652F3280
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/03/2016
---

# Git Pull Request API

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../../_data/version3-preview.md)]


Use these APIs to work with a Pull Request in a Team Foundation managed Git repository.

* [General Operations](./pull-requests.md) describes how to find, examine, edit and complete pull requests.

* [Comments threads](./threads.md) can be added to the pull request in general or to a specific location in a file.  These comments are grouped into threads which can be used on the pull request in general or about a particular section of a file in the pull request.

* [Iterations](./iterations.md) contain the history of the pull request.  Every time commits are pushed to the source branch and when the pull request is created, an iteration is created.  Each iteration can contain more than one commit.

* [Reviewers](./reviewers.md) vote to approve or reject the pull request.

* [Work Items](./work-items.md) can be linked to pull requests.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/PullRequestsSample.cs) available for this area.
