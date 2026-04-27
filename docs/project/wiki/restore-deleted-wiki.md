---
title: Restore a deleted wiki
titleSuffix: Azure DevOps
description: Restore or revert a provisioned or published wiki that was accidentally deleted from Azure DevOps by using the REST API.
ms.subservice: azure-devops-wiki
ai-usage: ai-assisted
ms.custom:
ms.topic: how-to
ms.assetid: 
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/18/2026
---

# Restore a deleted wiki

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

If a user accidentally deletes a provisioned (project) or published (code) wiki, you can restore it.
Although the UI doesn't provide options to delete a wiki, users might use the REST API to delete the Git repository associated with the wiki.

> [!NOTE]
> Deleted repositories stay in the recycle bin for 30 days. After 30 days, they're permanently deleted and can't be restored.

## Prerequisites

[!INCLUDE [wiki-prereqs-create-repository](includes/wiki-prereqs-create-repository.md)]

## Restore a complete wiki

Wikis, both project and code, are stored as repositories in your project in Azure DevOps.
Complete the following steps to restore a complete wiki with the REST API.

1. Retrieve Git repositories: [List repositories](/rest/api/azure/devops/git/repositories/list?view=azure-devops-rest-7.1&tabs=HTTP&preserve-view=true).
 
   Use the `includeHidden=true` parameter to see the wiki repositories.

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

The repository contents restore.
If the wiki UI doesn't reappear automatically, publish the restored repo as a wiki or create a wiki via the Wiki REST API to [re-register it with the project](#reassociate-a-restored-wiki).

## Restore a wiki page

1. Go to the URL for your repo: `https://dev.azure.com/<OrgName>/<ProjectName>/_git/classicreleaseoption.wiki`.

1. Search the history for the main branch, `wikiMain`.

1. Find and select the commit that has the deleted files.

1. Select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions**, and then select **Revert**.

1. Create and complete a pull request.

The portal restores your wiki page.

### Restore a wiki page with CLI

If you prefer command line options, follow these steps.
 
1. Clone the wiki to your local machine.
1. Search for the commit that deleted the page.
1. Check out the commit.
1. Copy the page to make a new commit.

Your wiki page is restored.

### Delete a repository

```HTTP
DELETE https://dev.azure.com/christiechurch/fabrikamfiber/_apis/git/repositories/052a83ac-af70-4194-b53f-df073e5f1786?api-version=7.1-preview.1
```

### Reassociate a restored wiki

The recycle-bin restore recovers the Git repository (wiki pages and history) but doesn't always re-create the wiki registration or the file name association in the UI.

If the wiki doesn't appear after you restore the repo, you have two options:

#### Option 1: Republish via UI

1. Go to **Overview** > **Wiki** in your project.
1. If no wiki appears, select **Publish code as wiki**.
1. Select the restored repository and branch (usually `wikiMaster`).
1. Provide a wiki name and folder path if needed.
1. Select **Publish**.

For detailed steps, see [Publish a Git repository to a wiki](publish-repo-to-wiki.md).

#### Option 2: Recreate wiki registration with REST API

1. **Create a new wiki** by using the [Wikis - Create](/rest/api/azure/devops/wiki/wikis/create?view=azure-devops-rest-7.1&preserve-view=true) REST API:

    ```HTTP
    POST https://dev.azure.com/{organization}/{project}/_apis/wiki/wikis?api-version=7.1-preview.2
    ```

    **Request body:**
    ```json
    {
        "type": "codeWiki",
        "name": "Fabrikam Fiber Wiki",
        "projectId": "052a83ac-af70-4194-b53f-df073e5f1786",
        "repositoryId": "978e3886-64a8-4b6f-96da-6afc2936b04b",
        "mappedPath": "/",
        "version": {
            "version": "wikiMaster"
        }
    }
    ```

    Replace the following values:
    - `{organization}`: Your Azure DevOps organization name
    - `{project}`: Your project name or ID
    - `name`: Display name for the wiki
    - `projectId`: Project ID from step 2
    - `repositoryId`: Repository ID from step 2
    - `mappedPath`: Root folder path (usually `/`)
    - `version`: Branch name (usually `wikiMaster`)

1. **Verify the wiki registration** by listing wikis using the [Wikis - List](/rest/api/azure/devops/wiki/wikis/list?view=azure-devops-rest-7.1&preserve-view=true) REST API:

    ```HTTP
    GET https://dev.azure.com/{organization}/{project}/_apis/wiki/wikis?api-version=7.1-preview.2
    ```

#### Post-restoration verification

After using either option:

1. Confirm that the repo and branches exist in your project in **Repos**.
1. Verify the wiki appears in your project under **Overview** > **Wiki**.
1. Check permissions, links, and any widgets that referenced the old wiki.

> [!NOTE]
> - The recycle-bin and some wiki-registration APIs are in preview and can change.
> Test in a nonproduction organization and use the api-version documented for your environment.
> - For project wikis (provisioned wikis), use `type: "projectWiki"` instead of `"codeWiki"` in the REST API call and omit the `repositoryId` and `mappedPath` properties.

## Next step

> [!div class="nextstepaction"]
> [Add and edit wiki pages](add-edit-wiki.md)

## Related content

- [Publish repo to wiki](publish-repo-to-wiki.md)
- [Wiki REST API](/rest/api/azure/devops/?view=azure-devops-rest-7.1&preserve-view=true)
- [Wiki markdown guidance](markdown-guidance.md)
- [Get notifications for wiki pages](follow-notifications-wiki-pages.md)
