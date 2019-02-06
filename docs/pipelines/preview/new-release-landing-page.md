---
title: New release landing page on Azure Pipelines
ms.custom: seodec18
description: A preview of a new user experience for release landing page on Azure Pipelines
ms.assetid: D44A450A-CD4F-42EB-B11C-95D5BE6DBBE4
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '> tfs-2018'
---

# New release landing page

**Azure Pipelines**

A new and fully redesigned user experience is available for release landing page in Azure Pipelines.
To use this page, you may need to switch it on using one of the on-screen prompts,
or from the [user profile **Previews** panel](../../project/navigation/preview-features.md#enable-features-for-your-use).

## Highlights

* [See a list of the release pipelines you release often](#listdefs)
* [Search your pipelines and favorite them](#favorite) 
* [Get great artifact traceability - see only the most relevant releases for a pipeline currently deployed to a stage](#filter) 
* [View the pipeline easily by expanding a release](#pipeline)
* [Create folders for organization and security](#folders)
* [Set permissions at a folder level](#folders)

## Active tab

<a name="listdefs"></a>
The **Active** tab shows a list of release pipelines, and contains links to create or import a pipeline,
edit the selected pipeline, and create a release.

![Active tab](_img/releases-page/1.png)

Use the drop-down menu to create a draft release, or to delete, clone, or export the selected release pipeline.

![Create release](_img/releases-page/2.png)

<a name="favorite"></a>
Search for pipelines if you have many in your list, or make it easy to select regularly used pipelines by adding them to your list of favorites...

![Search for pipelines](_img/releases-page/3.png)

<a name="filter"></a>
... or use the filter options to show the required subset of pipelines.

![Filter pipelines](_img/releases-page/4.png)

<a name="pipeline"></a>
Use the drop-down menu to open a release and see the pipeline, abandon an executing release, delete a release, or to retain a release indefinitely.

![Open pipelines](_img/releases-page/5.png)

##All definitions tab

<a name="folders"></a>
The **All pipelines** tab shows all your release pipelines as a folder tree.
Create folders and set permissions at folder level.
Use the drop-down menu to create a release or work with the selected pipeline.

![View pipelines](_img/releases-page/6.png)

Because this is currently a preview, expect to see changes to the features and layout as development of the page continues.

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
