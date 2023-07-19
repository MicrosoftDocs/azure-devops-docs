---
title: Restore a deleted wiki
titleSuffix: Azure DevOps
description: Restore a provisioned or published wiki that was deleted by mistake in Azure DevOps.
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

If someone deleted a provisioned or published wiki by mistake, you can restore it.

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



#### [Azure DevOps CLI](#tab/azure-devops-cli) 

::: moniker range="azure-devops"

https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-7.1&tabs=HTTP

(You need to use includeHidden=true parameter to see the WIKI repositories)

GET https://dev.azure.com/dmittal/classicreleaseoption/_apis/git/repositories?includeHidden=true&api-version=7.1-preview.1

        {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "classicreleaseoption.wiki",
            "url": https://dev.azure.com/dmittal/052a83ac-af70-4194-b53f-df073e5f1786/_apis/git/repositories/978e3886-64a8-4b6f-96da-6afc2936b04b,
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "classicreleaseoption",
                "url": https://dev.azure.com/dmittal/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
                "state": "wellFormed",
                "revision": 421800049,
                "visibility": "organization",
                "lastUpdateTime": "2023-07-18T12:25:29.3Z"
            },
            "defaultBranch": "refs/heads/wikiMaster",
            "size": 193,
            "remoteUrl": https://dmittal@dev.azure.com/dmittal/classicreleaseoption/_git/classicreleaseoption.wiki,
            "sshUrl": git@ssh.dev.azure.com:v3/dmittal/classicreleaseoption/classicreleaseoption.wiki,
            "webUrl": https://dev.azure.com/dmittal/classicreleaseoption/_git/classicreleaseoption.wiki,
            "isDisabled": false,
            "isInMaintenance": false
        }

2. We do not provide any options in the UI to delete the WIKI, however, there are chances someone might have use REST API to delete the repository associated with WIKI

Delete a repository:
DELETE https://dev.azure.com/dmittal/classicreleaseoption/_apis/git/repositories/052a83ac-af70-4194-b53f-df073e5f1786?api-version=7.1-preview.1

3. Once the WIKI is deleted, it wont show up in the WIKI link in Azure DevOps UI, however, it can be restored using REST API.

Search for the respositores which are in recycle bin (please note deleted repositories are in recycle bin for 30 days after which they are permanantly deleted and cannot be restored)
https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/get-recycle-bin-repositories?view=azure-devops-rest-7.1

GET https://dev.azure.com/dmittal/classicreleaseoption/_apis/git/recycleBin/repositories?api-version=7.1-preview.1

(Search for the wiki repositories from the list and note down the id, generally wiki repositories are named as .wiki if not renamed earlier)

{
    "value": [
        {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "classicreleaseoption.wiki",
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "classicreleaseoption",
                "url": https://dev.azure.com/dmittal/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
                "state": "wellFormed",
                "revision": 421800049,
                "visibility": "organization",
                "lastUpdateTime": "2023-07-18T12:25:29.3Z"
            },
            "deletedBy": {
                "displayName": "Deepak Mittal",
                "url": https://spsprodeus23.vssps.visualstudio.com/A1df9d653-bdfb-459b-a0c7-725052b2f944/_apis/Identities/0a0a4b55-9671-440d-87bf-26644f200d8a,
                "_links": {
                    "avatar": {
                        "href": https://dev.azure.com/dmittal/_apis/GraphProfile/MemberAvatars/aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh
                    }
                },
                "id": "0a0a4b55-9671-440d-87bf-26644f200d8a",
                "uniqueName": dmittal@microsoft.com,
                "imageUrl": https://dev.azure.com/dmittal/_api/_common/identityImage?id=0a0a4b55-9671-440d-87bf-26644f200d8a,
                "descriptor": "aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh"
            },
            "createdDate": "2023-07-18T12:23:55.64Z",
            "deletedDate": "2023-07-18T12:41:38.737Z"
        }
    ],
    "count": 1
}

4. Restore WIKI from repository recycle bin

https://learn.microsoft.com/en-us/rest/api/azure/devops/git/repositories/restore-repository-from-recycle-bin?view=azure-devops-rest-7.1

PATCH https://dev.azure.com/dmittal/classicreleaseoption/_apis/git/recycleBin/repositories/978e3886-64a8-4b6f-96da-6afc2936b04b?api-version=7.1-preview.1

Request body:
    {
    "deleted": false
    }

5. Woohoo!!, Wiki is restored.





```azurecli 
az devops wiki restore [--mapped-path]
                      [--name]
                      [--org]
                      [--project]
                      [--repository]
                      [--type {codewiki, projectwiki}]
                      [--version]
``` 

#### Parameters 

- **mapped-path**: (Required for the **codewiki** type). Mapped path of the new wiki. For example, you can specify '/' to publish from the root of the repository. 
- **name**: (Required for the **codewiki** type). Name of the new wiki. If you don't specify a name for type **projectwiki**, then the new wiki will be named *TeamProjectName.wiki*.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **repository**: (Required for the **codewiki** type). Name or ID of the repository to publish the wiki from.
- **type**: Type of wiki to create. The accepted values are **projectwiki** (default) and **codewiki**.
- **version**: (Required for the **codewiki** type). Repository branch name to publish the code wiki from.

::: moniker-end
[!INCLUDE [temp](../../includes/note-cli-supported-server.md)]
::: moniker range="azure-devops"

#### Example 

The following command restores a wiki named "Fabrikam Fiber" and shows the output in table format.

```azurecli 
....

```

::: moniker-end

[!INCLUDE [temp](../../includes/note-cli-not-supported.md)] 

* * * 

## Next steps

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)
