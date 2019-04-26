---
ms.assetid: 7F0B861F-D88B-45A8-8510-19041543C49E
title: Build your SQL server database
ms.topic: conceptual
ms.custom: seodec18
description: Define a continuous integration (CI) build for your SQL server database in Azure Pipelines or Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 01/02/2017
monikerRange: '>= tfs-2015'
---

# Build your SQL server database

[!INCLUDE [temp](../../_shared/version.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

Here we'll show you how to define your continuous integration (CI) pipeline for your SQL server database project.

## Get set up

For the instructions in this topic, you need a SQL server database project in Visual Studio.

> [!TIP]
> If you don't yet have an app but want to try this out, then see the [Q&A below](#new_solution).

## Define your CI build pipeline

### Create the build pipeline

<ol>
    [!INCLUDE [include](../../_shared/begin-create-build-definition.md)]

    <li>Select the **.NET Desktop** template.</li>

    <li>As the repository source, select the project, repository, and branch.</li>
</ol>

### Enable continuous integration (CI)

On the Triggers tab, enable **continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

## Queue and test the build

Save the build pipeline and queue a new build by selecting the **Queue new build** command. Once the build is done, click **Artifacts** and then **Explore** to see the DACPAC (.dacpac file) produced by the build. This is the package that your release pipeline will consume to deploy your database.

## Deploy your database

After you've run the build, you're ready to create a release pipeline to deploy your database to:

* <a href="../../targets/azure-sqldb.md"><img src="../../tasks/deploy/_img/azure-sql-database-deployment-icon.png"/> Azure SQL Server</a>

* <a href="../cd/howto-webdeploy-iis-deploygroups.md#database"><img src="../../tasks/deploy/_img/sql-server-database-deployment-icon.png"/> SQL Server</a>

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<h3 id="new_solution">How do I create an SQL server database solution?</h3>

0. In Visual Studio, [connect to your project](../../../organizations/projects/connect-to-projects.md#visual-studio).

0. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

0. Select the **SQL Server** templates section, and then choose the **SQL Server Database Project** template.

0. [Commit and push (Git)](../../../repos/git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../repos/tfvc/share-your-code-in-tfvc-vs.md) your code.

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
