---
title: Restore a project
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Restore a recently deleted project in Azure DevOps
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 10/31/2019
---

# Restore a project

[!INCLUDE [version-vsts-plus-azdevserver-2019](../../boards/_shared/version-vsts-plus-azdevserver-2019.md)]

You can restore a deleted project up to 28 days after it was deleted. This article shows you how.

> [!IMPORTANT]
> A project can only be restored if it was deleted from the Web or REST API.

## Prerequisites

::: moniker range="azure-devops"

To restore a project, you must have the "delete project" permission set to **Allow**. To learn how to check your permissions, see [View permissions](../security/view-permissions.md).

::: moniker-end

::: moniker range="azure-devops-2019"

To restore a project, you must delete project permissions and have the "delete project" permission set to **Allow**. To learn how to check your permissions, see [View permissions](../security/view-permissions.md).

::: moniker-end


> [!NOTE]
> A recently deleted project is only viewable when there's a project that's been deleted from an organization within the last 28 days.

## Restore project

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../_img/icons/gear-icon.png) **Organization settings**.

   ![Choose the gear icon, Organization settings](../../_shared/_img/settings/open-admin-settings-vert.png)
3. Select **Overview** and scroll down to "recently deleted projects."

   ![organization-settings-select-overview.png](../accounts/_img/_shared/organization-settings-select-overview.png)

4. Highlight the project you want to restore, and then select **Restore**.

   ![Highlight the project, and then select Restore](_img/restore-project/recently-deleted-projects.png)

::: moniker-end

::: moniker range="azure-devops-2019"

### Using REST API

> [!WARNING]
> If you're trying to restore a project with a name that's already taken, you need to rename the project before it can be restored. To rename the project, enter the following in the request body: `"name":"new name"`
> 

1. Open a browser window and enter a URL that uses the following form:  

    <pre><code>http://ServerName:8080/tfs/DefaultCollection/<i>ProjectName</i></code></pre> 

   For example, to connect to the server named **FabrikamPrime**, enter: **http://FabrikamPrime:8080/tfs/**.

   The default Port is 8080. Specify the port number and directory for your server if defaults aren't used.

2. Get a list of deleted projects using the following request:
   ```
   GET http://ServerName:8080/tfs/DefaultCollection/_apis/projects?stateFilter=deleted&api-version=5.0-preview.3
   ```
3. Restore a deleted project using the following request:
   ```
   PATCH http://ServerName:8080/tfs/DefaultCollection/_apis/projects/{projectId}?api-version=5.0-preview.3
   ```

   Request body
   ```
   {
    "state" : "wellFormed"
   }
   ```

### Using PowerShell

1. Execute the following PowerShell script to get a list of deleted projects and make sure to update `$collectionUrl`.
   ```
   $collectionUrl = "https://localhost/defaultcollection" 
   (irm -Uri "$collectionUrl/_apis/projects?stateFilter=deleted&api-version=5.0-preview.3" -UseDefaultCredentials).value
   ```

    Something similar to the following screenshot appears:
    ![PowerShell script return example for deleted projects](_img/restore-project/deleted-projects-powershell-script-2019.png)

2. Use the following script to restore a project. Be sure to update `$collectionUrl` and `$projectName`.
   ```
   $collectionUrl = "https://localhost/defaultcollection"
   $projectName = 'Project1'
   $project = (irm -Uri "$collectionUrl/_apis/projects?stateFilter=deleted&api-version=5.0-preview.3" -UseDefaultCredentials).value | where > name -eq $projectName
   irm -Uri ($project.url + "?api-version=5.0-preview.3") -UseDefaultCredentials -Method PATCH -Body '{"state":"wellFormed"}' -Headers @> > > {'Content-Type' = 'application/json'}
   ```
::: moniker-end

Your project and associated data are restored.

## Related articles

* [Save project data](save-project-data.md)
* [Create a project](create-project.md)