---
title: Allow Pipelines to access project-scoped feeds that are scoped to a different project
description: How to set permissions to access a project-scoped feed in a different project
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 08/05/2020
monikerRange: '>= tfs-2017'
---

# How to allow a Pipeline to access a project-scoped feed in a different project

When a Pipeline needs to connect to a project-scoped feed in a different project, the pipeline must have access to both the project that the feed is scoped to and the feed itself.
Your **Project build service** identity will look as follows:
`[Project name] Build Service ([Organization name])` (e.g. FabrikamFiber Build Service (codesharing-demo))

2. From the project hosting the feed, go to the **Project settings** > **Permissions** to add your pipeline's **project build service** to the Contributors group or an alternative group your project may have that allows contributor access to its users.

3. From the project-scoped feed, select **Settings** > **Feed permissions** and add your project build service as a **Collaborator**.
