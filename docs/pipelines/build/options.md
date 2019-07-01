---
title: Build options
ms.custom: seodec18
description: Learn about building your code or deploying your software using build options on Azure Pipelines and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7C469647-117D-4867-B094-8BC811C0003E
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 04/29/2019
monikerRange: '>= tfs-2015'
---

# Build options

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

## Create a work item on failure

If the build pipeline fails, you can automatically create a work item to track getting the problem fixed. You can specify the work item type.

You can also select if you want to assign the work item to the requestor. For example, if this is a CI build, and a team member checks in some code that breaks the build, then the work item is assigned to that person.

**Additional Fields:** You can set the value of work item fields. For example:

| Field | Value |
|---|---|
| ```System.Title``` | ```Build $(Build.BuildNumber) failed``` |
| ```System.Reason``` |  ```Build failure``` |

**Q:** What other work item fields can I set? **A:**  [Work item field index](../../boards/work-items/guidance/work-item-field.md)


## Allow scripts to access the OAuth token

Select this check box if you want to enable your script to use the build pipeline OAuth token.

For an example, see [Use a script to customize your build pipeline](../scripts/powershell.md).


## Default agent pool

::: moniker range="<= tfs-2017"

> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

::: moniker-end

Select the [pool](../agents/pools-queues.md) that's attached to the pool that contains the agents you want to run this pipeline.

**Tip:**  If your code is in Azure Pipelines and you run your builds on Windows, in many cases the simplest option is to use the [Hosted pool](../agents/hosted.md).

## Build job authorization scope

::: moniker range="<= tfs-2017"

> **TFS 2017.1 and older**
>
> This section is available under <b>General<b> tab.

::: moniker-end

Specify the authorization scope for a build job. Select:

* **Project Collection** if the build needs access to multiple projects.

* **Current Project** if you want to restrict this build to have access only the resources in the current project.
