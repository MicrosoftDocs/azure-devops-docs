---
title: Restore a deleted wiki
titleSuffix: Azure DevOps
description: Restore or revert a provisioned or published wiki that was accidentally deleted from Azure DevOps using REST API.
ms.subservice: azure-devops-wiki
ms.custom:
ms.topic: how-to
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/19/2023
---

# Restore a deleted wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

If a user deleted a provisioned (project) or published (code) wiki by mistake, you can restore it.
We don't provide options via the UI to delete a wiki, but a user could have used the REST API to delete the repository associated with the wiki.

> [!NOTE]
> Deleted repositories remain in the recycle bin for 30 days, after which they are permanently deleted and can't be restored.

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

## Restore a complete wiki

Wikis, both project and code, are stored as repositories in your project in Azure DevOps. Complete the following steps to restore a complete wiki with REST API.
 
1. Retrieve git repositories: [List repositories](/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-7.1&tabs=HTTP&preserve-view=true).
 
   Use THE `includeHidden=true` parameter to see the wiki repositories.

```HTTP
GET https://dev.azure.com/christiechurch/fabrikamfiber/_apis/git/repositories?includeHidden=true&api-version=7.1-preview.1
```

```REST API
        {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "fabrikamfiber.wiki",
            "url": https://dev.azure.com/christiechurch/052a83ac-af70-4194-b53f-df073e5f1786/_apis/git/repositories/978e3886-64a8-4b6f-96da-6afc2936b04b,
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "fabrikamfiber",
                "url": https://dev.azure.com/christiechurch/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
                "state": "wellFormed",
                "revision": 421800049,
                "visibility": "organization",
                "lastUpdateTime": "2023-07-18T12:25:29.3Z"
            },
            "defaultBranch": "refs/heads/wikiMaster",
            "size": 193,
            "remoteUrl": https://christiechurch@dev.azure.com/christiechurch/fabrikamfiber/_git/fabrikamfiber.wiki,
            "sshUrl": git@ssh.dev.azure.com:v3/christiechurch/fabrikamfiber/fabrikamfiber.wiki,
            "webUrl": https://dev.azure.com/christiechurch/fabrikamfiber/_git/fabrikamfiber.wiki,
            "isDisabled": false,
            "isInMaintenance": false
        }
```

2. [Search the recycle bin](/rest/api/azure/devops/git/repositories/get-recycle-bin-repositories?view=azure-devops-rest-7.1&preserve-view=true) for your repository.

```HTTP
GET https://dev.azure.com/christiechurch/fabrikamfiber/_apis/git/recycleBin/repositories?api-version=7.1-preview.1
```

   When you find your repository, often named as `.wiki`, take note of the repo ID.

```REST API
{
    "value": [
        {
            "id": "978e3886-64a8-4b6f-96da-6afc2936b04b",
            "name": "fabrikamfiber.wiki",
            "project": {
                "id": "052a83ac-af70-4194-b53f-df073e5f1786",
                "name": "fabrikamfiber",
                "url": https://dev.azure.com/christiechurch/_apis/projects/052a83ac-af70-4194-b53f-df073e5f1786,
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
                        "href": https://dev.azure.com/christiechurch/_apis/GraphProfile/MemberAvatars/aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh
                    }
                },
                "id": "0a0a4b55-9671-440d-87bf-26644f200d8a",
                "uniqueName": christiechurch@fabrikam.com,
                "imageUrl": https://dev.azure.com/christiechurch/_api/_common/identityImage?id=0a0a4b55-9671-440d-87bf-26644f200d8a,
                "descriptor": "aad.MDY4MDk2OGQtYWU5OS03Y2M5LTgxZTEtNTBjMDk4ZTllZTlh"
            },
            "createdDate": "2023-07-18T12:23:55.64Z",
            "deletedDate": "2023-07-18T12:41:38.737Z"
        }
    ],
    "count": 1
}
```
 
3. [Restore the wiki](/rest/api/azure/devops/git/repositories/restore-repository-from-recycle-bin?view=azure-devops-rest-7.1&preserve-view=true) from the repository recycle bin.
 
```HTTP
PATCH https://dev.azure.com/christiechurch/fabrikamfiber/_apis/git/recycleBin/repositories/978e3886-64a8-4b6f-96da-6afc2936b04b?api-version=7.1-preview.1
```

```REST API
{
    "deleted": false
}
```
 
The wiki is restored.

## Restore a wiki page

1. Go to the URL for your repo: `https://dev.azure.com/<OrgName>/<ProjectName>/_git/classicreleaseoption.wiki`.

2. Search for the history for the main branch, `wikiMaster`.
 
3. Find and select the commit that has the deleted files.
 
4. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: more actions, and then **Revert**.
 
5. Create and complete a pull request.

Your wiki page is restored.

### Restore a wiki page with CLI

If you prefer command line options, do the following steps.
 
1. Clone the wiki to your local machine.
1. Search for the commit which has the deleted the page.
1. Checkout that commit.
1. Copy the page to make a new commit.

Your wiki page is restored.

### Delete a repository

```HTTP
DELETE https://dev.azure.com/christiechurch/fabrikamfiber/_apis/git/repositories/052a83ac-af70-4194-b53f-df073e5f1786?api-version=7.1-preview.1
```

## Next steps

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)

## Related articles

- [Publish repo to wiki](publish-repo-to-wiki.md)
- [Wiki markdown guidance](markdown-guidance.md)
- [Get notifications for wiki pages](follow-notifications-wiki-pages.md)
