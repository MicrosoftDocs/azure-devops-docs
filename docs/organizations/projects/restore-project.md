---
title: Restore project
titleSuffix: Azure DevOps Services
ms.custom: seodec18, contperf-fy21q4
description: Restore a recently deleted project in Azure DevOps.
ms.assetid: f8638962-1732-4600-94bb-3dc34e0ac48e
ms.subservice: azure-devops-projects
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '>= azure-devops-2019'
ms.date: 06/20/2023
---

# Restore a project

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

If you delete a project in Azure DevOps by mistake, you can restore the project up to 28 days after it was deleted.

## Prerequisites

::: moniker range="azure-devops"

* You must be a member of the [Project Collection Administrators group](../security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.

* You must have the **Delete project** permission set to **Allow**. For more information, see [View permissions](../security/view-permissions.md).

::: moniker-end

::: moniker range=" < azure-devops"

To restore a project, you must have the **Delete project** permission set to **Allow**. For more information, see [View permissions](../security/view-permissions.md).

::: moniker-end

## Restore project

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose ![gear icon](../../media/icons/gear-icon.png) **Organization settings**.

   ![Screenshot showing how to choose the gear icon, Organization settings.](../../media/settings/open-admin-settings-vert.png)

3. Select **Overview**, and then scroll down to "recently deleted projects."

   ![Screenshot that shows recently deleted projects.](../accounts/media/shared/organization-settings-select-overview.png)

1. Highlight the project you want to restore, and then select **Restore**.

   ![Screenshot showing how to Highlight the project, and then select Restore.](media/restore-project/recently-deleted-projects.png)

   
::: moniker-end

::: moniker range=" > azure-devops-2019 < azure-devops"

1. Sign in to your instance (```http://{ServerName:8080/tfs/}/{CollectionName}```)
2. Choose ![gear icon](../../media/icons/gear-icon.png) **Admin settings**.

   :::image type="content" source="../../media/settings/open-admin-settings-server.png" alt-text="Screenshot showing Admin settings button surrounded by red box.":::

3. Select **Projects**, and then scroll down to **Recently deleted projects**.

4. Highlight the project you want to restore, and then select **Restore**.

   ![Screenshot showing how to Highlight the project, and then select Restore for Azure DevOps Server. ](media/restore-project/recently-deleted-projects.png)

::: moniker-end

::: moniker range="azure-devops-2019"

> [!NOTE]
> The UI doesn't support restoring a team project for Azure DevOps Server 2019.  Use the following REST API or PowerShell methods to restore a deleted team project. For more information, see [Projects-Update REST API](/rest/api/azure/devops/core/projects/update)

::: moniker-end

### Restore with REST API

> [!WARNING]
> To restore a project with a name that's already taken, you must rename the project before you can restore it. To rename the project, enter the following text in the request body: `"name":"new name"`

1. Open a browser window and enter a URL that uses the following form:  

    'http://ServerName:8080/tfs/DefaultCollection/ProjectName'

   For example, to connect to the server named **FabrikamPrime**, enter: 'http://FabrikamPrime:8080/tfs/'.

   The default Port is 8080. Specify the port number and directory for your server if defaults aren't used.

2. Get a list of deleted projects using the following request:

   ```
   GET http://ServerName:8080/tfs/DefaultCollection/_apis/projects?stateFilter=
   deleted&api-version=5.0-preview.3
   ```

3. Restore a deleted project using the following request:

   ```
   PATCH http://ServerName:8080/tfs/DefaultCollection/_apis/projects/{projectId}?
   api-version=5.0-preview.3
   ```
   Request body

   ```   
   {
    "state" : "wellFormed"
   }
   ```

### Restore using PowerShell

1. Execute the following PowerShell script to get a list of deleted projects and make sure to update `$collectionUrl`.

   ```
   $collectionUrl = "https://localhost/defaultcollection"
   (irm -Uri "$collectionUrl/_apis/projects?stateFilter=
   deleted&api-version=5.0-preview.3" -UseDefaultCredentials).value
   ```

   Something similar to the following screenshot appears:
   ![Screenshot of PowerShell script return example for deleted projects.](media/restore-project/deleted-projects-powershell-script-2019.png)

2. Use the following script to restore a project. Be sure to update `$collectionUrl` and `$projectName`.


```
$collectionUrl = "https://localhost/defaultcollection"
$projectName = 'Project1'
$project = (irm -Uri "$collectionUrl/_apis/projects?stateFilter=
deleted&api-version=5.0-preview.3" -UseDefaultCredentials).value
 | where {$_.name -eq $projectName}
irm -Uri ($project.url + "?api-version=5.0-preview.3") 
-UseDefaultCredentials -Method PATCH -Body '{"state":"wellFormed"}'
 -ContentType 'application/json'
```

Your project and associated data are restored.

## Related articles

* [Delete a project](delete-project.md)
* [Save project data](save-project-data.md)
* [Create a project](create-project.md)
* [Disconnect your organization from Azure Active Directory (Azure AD)](../accounts/disconnect-organization-from-azure-ad.md)
