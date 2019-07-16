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


<li><p><a data-toggle="collapse" href="#expando-begin-create-build-definition-open-team-project">Open your project in your web browser &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-definition-open-team-project">
<img src="~/pipelines/_shared/_img/browse-to-team-project.png" alt="Browse to project">

<p>(If you don&#39;t see your project listed on the home page, select <strong>Browse</strong>.)</p>
<ul>
<li>On-premises TFS: <code>http://{your_server}:8080/tfs/DefaultCollection/{your_project}</code> </li>
<li>Azure Pipelines: <code>https://dev.azure.com/{your_organization}/{your_project}</code></li>
</ul>
<p><a href="/azure/devops/server/admin/websitesettings" data-raw-source="[The TFS URL doesn&#39;t work for me. How can I get the correct URL?](/azure/devops/server/admin/websitesettings)">The TFS URL doesn&#39;t work for me. How can I get the correct URL?</a></p>
</div>
</li>

<li><p><a data-toggle="collapse" href="#expando-begin-create-build-definition-create">Create a build pipeline (Pipelines tab &gt; Builds) &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-definition-create">
<img src="~/pipelines/_shared/_img/create-new-build-definition.png" alt="Build tab">
<p>
</div>
</li>

<li>Select the <strong>.NET Desktop</strong> template.</li>

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

1. On the Team Explorer home page (Keyboard: Ctrl + 0, H), under **Solutions**, click **New**.

2. Select the **SQL Server** templates section, and then choose the **SQL Server Database Project** template.

3. [Commit and push (Git)](../../../repos/git/share-your-code-in-git-vs.md) or [check in (TFVC)](../../../repos/tfvc/share-your-code-in-tfvc-vs.md) your code.

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
