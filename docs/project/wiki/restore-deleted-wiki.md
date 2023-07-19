---
title: Restore a deleted wiki
titleSuffix: Azure DevOps
description: Restore or revert a provisioned or published wiki that was accidentally deleted from Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom:
ms.topic: how-to
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/18/2023
---

# Restore a deleted wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

If someone deleted a provisioned (project) or published (code) wiki by mistake, you can restore it.
We don't provide options via the UI to delete a wiki, but a user could have used the REST API to delete the repository associated with the wiki.

> [!NOTE]
> Deleted repositories remain in the recycle bin for 30 days, after which they are permanently deleted and can't be restored.

<a id="prereq">  </a>

## Prerequisites

::: moniker range="azure-devops"

* You must have at least Basic access to restore a wiki.
* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

::: moniker range=" < azure-devops"

* You must have the permission **Create Repository** to publish code as wiki. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md). 
* Anyone who is a member of the Contributors security group can add or edit wiki pages. Anyone with access to the team project, including [stakeholders](../../organizations/security/get-started-stakeholder.md), can view the wiki.

::: moniker-end

[!INCLUDE [temp](includes/open-wiki-hub.md)]

## Restore a wiki

#### [Browser](#tab/browser) 

1. Go to your wiki URL in Azure Devops. For example, `https://dev.azure.com/<OrgName>/<ProjectName>/_git/classicreleaseoption.wiki`. Wikis are managed as repos in Azure DevOps.

2. Look for the main branch history.

3. Find and select the commit, which deleted the files.

4. Select the :::image type="icon" source="../../report/dashboards/media/icons/actions-icon.png" border="false"::: actions icon, and then **Revert**.

5. Create a pull request and complete it.

If you prefer command line options, you can clone the wiki to your local machine and search for the commit, which has deleted the page. Then, check out the commit and copy the page to make a new commit.

#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

When a wiki gets deleted, it doesn't appear in the wiki link in Azure DevOps UI, but you can restore it using REST API.

```CLI 
az devops wiki restore [--name]
                      [--org]
                      [--project]
                      [--repositoryId]
                      [--api-version]
``` 

#### Parameters 

- **name**: Name of the wiki.
- **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **repositoryId**: Name or ID of the repository to publish the wiki from.
- **api-version**: Repository branch name to publish the code wiki from.

::: moniker-end
[!INCLUDE [temp](../../includes/note-cli-supported-server.md)]
::: moniker range="azure-devops"

#### Example 

### List git repositories

The following command [lists git repositories](/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-7.1&tabs=HTTP&preserve-view=true). Optionally, use the `includeHidden=true` parameter to see the hidden wiki repositories.

```
GET https://dev.azure.com/{organization}/{project}/_apis/git/repositories?api-version=7.1-preview.1
```

```azurecli 
    {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "classicreleaseoption.wiki",
            "url": https://dev.azure.com/fabrikam/052a83ac-af70-4194-b53f-df073e5f1786/_apis/git/repositories/978e3886-64a8-4b6f-96da-6afc2936b04b,
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "classicreleaseoption",
                "url": https://dev.azure.com/fabrikam/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
                "state": "wellFormed",
                "revision": 421800049,
                "visibility": "organization",
                "lastUpdateTime": "2023-07-18T12:25:29.3Z"
            },
            "defaultBranch": "refs/heads/wikiMaster",
            "size": 193,
            "remoteUrl": https://fabrikam@dev.azure.com/fabrikam/classicreleaseoption/_git/classicreleaseoption.wiki,
            "sshUrl": git@ssh.dev.azure.com:v3/fabrikam/classicreleaseoption/classicreleaseoption.wiki,
            "webUrl": https://dev.azure.com/fabrikam/classicreleaseoption/_git/classicreleaseoption.wiki,
            "isDisabled": false,
            "isInMaintenance": false
    }
```

### Search recycle bin for repositories

The following command [searches for repositories that are in the recycle bin](/rest/api/azure/devops/git/repositories/get-recycle-bin-repositories?view=azure-devops-rest-7.1&preserve-view=true).

Search from the wiki repositories from the list and note the ID. Generally, wiki repositories get named `.wiki`.

```
{
    "value": [
        {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "classicreleaseoption.wiki",
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "classicreleaseoption",
                "url": https://dev.azure.com/fabrikam/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
                "state": "wellFormed",
                "revision": 421800049,
                "visibility": "organization",
                "lastUpdateTime": "2023-07-18T12:25:29.3Z"
            },
            "deletedBy": {
                "displayName": "Christie Church",
                "url": https://spsprodeus23.vssps.visualstudio.com/A1df9d653-bdfb-459b-a0c7-725052b2f944/_apis/Identities/0a0a4b55-9671-440d-87bf-26644f200d8a,
                "_links": {
                    "avatar": {
                        "href": https://dev.azure.com/fabrikam/_apis/GraphProfile/MemberAvatars/aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh
                    }
                },
                "id": "0a0a4b55-9671-440d-87bf-26644f200d8a",
                "uniqueName": fabrikam@microsoft.com,
                "imageUrl": https://dev.azure.com/fabrikam/_api/_common/identityImage?id=0a0a4b55-9671-440d-87bf-26644f200d8a,
                "descriptor": "aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh"
            },
            "createdDate": "2023-07-18T12:23:55.64Z",
            "deletedDate": "2023-07-18T12:41:38.737Z"
        }
    ],
    "count": 1
}
```

### Restore a wiki

The following command [restores a wiki](/rest/api/azure/devops/git/repositories/restore-repository-from-recycle-bin?view=azure-devops-rest-7.1&preserve-view=true) from the repository recycle bin.

```
{
   "deleted": false
}
```

   The wiki is restored.
::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * * 

## Next steps

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)
