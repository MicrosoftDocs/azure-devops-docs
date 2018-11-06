---
title: View builds, releases, pipelines 
titleSuffix: Azure DevOps Services Public Project
description: View build and release status an pipelines for a public project
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.topic: quickstart
ms.date: 11/06/2018
monikerRange: 'vsts'
---

# View build and release pipelines

[!INCLUDE [temp](_shared/version-public-projects.md)]  

When viewing a public project, you can view the status of build and release pipelines. If you're a contributor, you can also [define build pipelines](../../pipelines/get-started-yaml.md?toc=/azure/devops/organizations/public/toc.json&bc=/azure/devops/organizations/public/breadcrumb/toc.json).  

[!INCLUDE [temp](_shared/anon-user.md)]

## View recent builds and build pipelines  

[!INCLUDE [temp](../../_shared/new-navigation.md)]

# [New navigation](#tab/new-nav)

To view the status of recent builds, select  **Pipelines > Builds**. To view a summary or history of any build, choose a build.

> ![Pipelines>Recent Builds, new navigation ](_img/pipelines/view-build-vert-brn.png)

# [Previous navigation](#tab/previous-nav)  

To view the status of recent builds, choose **Build and Release>Builds**. To view a summary or history of any build, choose a build.

> ![Build and Release>Recent Builds page ](_img/pipelines/view-build-status.png)

---

## View active release pipelines

# [New navigation](#tab/new-nav)

To view active release pipelines, select **Pipelines > Releases**.

> ![Pipelines, Recent Releases, new navigation ](_img/pipelines/view-releases-vert.png)

From there, you can drill into the details of a release. For example, here we show  the **Release-3** pipeline.

> ![Pipelines, Build status page ](_img/pipelines/release-chart.png)

# [Previous navigation](#tab/previous-nav)

To view active release pipelines, choose **Build and Release>Releases**.

> ![Build and Release>Recent releases page ](_img/pipelines/view-releases.png)

From there, you can drill into the details of a release. For example, here we show the **Release-3** pipeline.

> ![Build and Release>Build status page ](_img/pipelines/release-chart.png)

---

## Related articles

- [Release pipelines](../../pipelines/release/index.md)