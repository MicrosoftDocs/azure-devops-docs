---
title: Release Management server/client for VS 2015 and TFS 2015 - overview
ms.custom: seodec18
description: Learn about Microsoft Release Management server and client for Visual Studio 2015 and Team Foundation Server (TFS) 2015.
ms.assetid: 1FBA8A92-BC8C-452A-A5BD-FA6A3D2E2F0B
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 07/16/2018
monikerRange: '>= tfs-2013'
---

# Automate deployments with Release Management

[!INCLUDE [previous-version-header](../_shared/previous-version-header.md)]

Support a rapid release cadence and manage simultaneous releases. Set up 
release paths that represent your stages from development to production.
Run actions to deploy your app to an environment for that stage. Add 
approvers to sign off that the app has successfully passed each stage.
Start your release pipeline manually or automatically from a build. Then track your 
releases as they move through your release path.

![Overview of Release Management](_img/overview-01.png)

**Set up and start a release** 

* [Set up the release management server, client, and deployment agents](install-release-management.md).
* [Set up users and groups and control access to Release Management](add-users-and-groups.md).
* [Create your release path and start a release](manage-your-release.md).

After you have created your release path, you can 
[trigger a release from a build](trigger-a-release.md).

You can also simplify your scripts using 
[configuration variables and system variables](config-and-system-variables.md).

To read a detailed user guide, 
[download this pdf file](http://go.microsoft.com/fwlink/?LinkId=398104).


## Related topics

* [Install Release Management](install-release-management.md)
* [Manage your release](manage-your-release.md)
* [Release your app with deployment agents](release-with-agents.md)
* [Release your app without deployment agents](release-without-agents.md)
* [Deploy continuously to Azure](deploy-continuously-to-azure.md)

[!INCLUDE [wpfver-back-to-index-shared](../_shared/wpfver-back-to-index-shared.md)]
 
[!INCLUDE [wpfver-support-shared](../_shared/wpfver-support-shared.md)]
