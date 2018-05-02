---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
title: Git Pull Request | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with Git programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 47DDF67E-C4BE-4D96-BA20-360A652F3280
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git Pull Request API
[!INCLUDE [API_version](../../_data/version3-preview.md)]


Use these APIs to work with a Pull Request in a Team Foundation managed Git repository.

* [General Operations](./pull-requests.md)
This section describes how to find, examine, edit and complete pull requests.

* [Comments](./threads.md)
Users can comment on pull requests.  These comments are grouped into threads which can be used on the pull request in general or about a particular section of a file in the pull request.

* [Iterations](./iterations.md)
Iterations contain the history of the pull request.  Every time commits are pushed to the source branch and when the pull request is created, an iteration is created.  Each iteraction can contain more than one commit.

* [Reviewers](./reviewers.md)
The primary action for reviewers is to vote to approve or reject the pull request.

* [Work Items](./work-items.md)
Pull requests can be linked to work items.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/Git/PullRequestsSample.cs) available for this area.
