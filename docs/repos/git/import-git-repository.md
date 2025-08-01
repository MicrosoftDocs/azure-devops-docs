---
title: Import a Git repository into a project
titleSuffix: Azure Repos
description: Import a Git repository from GitHub, GitLab, Bitbucket, or other locations into your Azure DevOps project using secure authentication methods including Microsoft Entra ID tokens.
ms.assetid: 5439629e-23fd-44f1-a345-f00a435f1430
ms.service: azure-devops-repos
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 07/02/2025
ms.subservice: azure-devops-repos-git
ms.custom: sfi-image-nochange
# customer-intent: As a developer, I want to import an existing Git repository from GitHub, GitLab, or other providers into Azure DevOps so I can consolidate my source code and use Azure DevOps features for my project.
---

# Import a Git repository to a project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows you how to import an existing Git repo from GitHub, Bitbucket, GitLab, or other location into a new or empty existing repo in your Azure DevOps project.

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## Import into a new repo  

Do the following steps to import into a new repo:

> [!NOTE]
> When the import of the repository is completed, Azure DevOps sets the **Default** branch for that imported repository. If the imported repository contains a branch named `main`, it gets set as the default branch, otherwise the first branch (in alphabetical order) of the imported repository gets set as **Default**.

1. In your browser, sign in to your organization and select **Repos** > **Files**.

   ![Screenshot shows view of branches.](media/repos-navigation/repos-files.png)

2. From the repo drop-down, select **Import repository**.

   ![Screenshot shows Manage repositories screen.](media/repo-mgmt/import-repository.png)

3. [Enter the clone URL](clone.md#clone_url) of the source repository and a name for your new Git repository.

  ![Screenshot shows Import Repository Dialog with publicly available sample repo URL.](media/Import-Repo/ImportRepoDialog.png)

4. Select **Import a repository**.

The repo gets imported.

## Import into an existing empty repo 

On the **Files** page of the empty Git repository, select **Import** and [enter the clone URL](clone.md#clone_url). Provide credentials if the source repository requires authentication. 

![Screenshot shows Import Repository into an existing repository.](media/Import-Repo/ImportRepofromEmptyRepo.png)

> [!NOTE]
> The import feature disables automated linking for work items mentioned in a commit comment since the work item IDs in the destination project might not be the same as ones in the source project. Automatic linking for work items mentioned in a commit can be re-enabled by navigating to **Settings**, **Version Control**,  selecting your repository, and choosing **Options**. For more information on linking commits with work items, see [Link work items to commits](share-your-code-in-git-vs.md#link-work-items)
 
::: moniker range=" azure-devops"

## Manually import a repo using az repos CLI

You can use [az repos import](/cli/azure/repos/import#az-repos-import-create) to import a repository to your Azure DevOps project.  

You must first create the repository in Azure DevOps before you can import a Git repository. Also, the repository you create must be empty. To create a repo, see [Create your Git repo in Azure Repos](share-your-code-in-git-cmdline.md#create-your-git-repo-in-azure-repos).

```azurecli
az repos import create --git-source-url
                       [--detect {false, true}]
                       [--git-service-endpoint-id]
                       [--org]
                       [--project]
                       [--repository]
                       [--requires-authorization]
                       [--subscription]
                       [--user-name]
```

**Parameters**

|Parameter|Description|
|---------|-----------|
|`git-source-url`| Required. URL of the source git repository to import.  |
|`detect`| Optional. Automatically detect organization. Accepted values: `false`, `true`.|
|`git-service-endpoint-id`| Optional. Service Endpoint for connection to external endpoint.  |
|`org`, `organization`| Azure DevOps organization URL. You can configure the default organization by using `az devops configure -d organization=<ORG_URL>`. **Required** if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.|
|`project`, `p`|Name or ID of the project. You can configure the default project using `az devops configure -d project=<NAME_OR_ID>`. **Required** if not configured as default or picked up via git config. 
|`repository`| Name or ID of the repository to create the import request in.  |
|`requires-authorization`| Flag to indicate if the source git repository is private. If you require authentication, then generate an authentication token on the source repo and set the environment variable `AZURE_DEVOPS_EXT_GIT_SOURCE_PASSWORD_OR_PAT` to the value of the token. For enhanced security, we recommend using Microsoft Entra ID tokens when possible. Then the import request includes authentication. |
|`subscription`| Name or ID of subscription. You can configure the default subscription using `az account set -s <NAME_OR_ID>`.|
|`user-name`| User name to specify when the git repository is private.|

**Example**

The following command imports the public repo *fabrikam-open-source* to the empty Git repo *fabrikam-open-source* for the default configuration `az devops configure --defaults organization=https://dev.azure.com/fabrikamprime project="Fabrikam Fiber"`.


```azurecli
az repos import create --git-source-url https://github.com/fabrikamprime/fabrikam-open-source --repository fabrikam-open-source
{
  "detailedStatus": {
    "allSteps": [
      "Processing request",
      "Analyzing repository objects",
      "Storing objects",
      "Storing index file",
      "Updating references",
      "Import completed successfully"
    ],
    "currentStep": 6,
    "errorMessage": null
  },
  "importRequestId": 8,
  "parameters": {
    "deleteServiceEndpointAfterImportIsDone": null,
    "gitSource": {
      "overwrite": false,
      "url": "https://github.com/fabrikamprime/fabrikam-open-source"
    },
    "serviceEndpointId": null,
    "tfvcSource": null
  },
  "repository": {
    "defaultBranch": null,
    "id": "0f6919cd-a4db-4f34-a73f-2354114a66c4",
    "isDisabled": false,
    "isFork": null,
    "name": "new-empty-repo",
    "parentRepository": null,
    "project": {
      "abbreviation": null,
      "defaultTeamImageUrl": null,
      "description": "Guidance and source control to foster a vibrant ecosystem for Fabrikam Fiber applications and extensions.",
      "id": "56af920d-393b-4236-9a07-24439ccaa85c",
      "lastUpdateTime": "2021-05-24T21:52:14.95Z",
      "name": "Fabrikam Fiber",
      "revision": 438023732,
      "state": "wellFormed",
      "url": "https://dev.azure.com/fabrikamprime/_apis/projects/56af920d-393b-4236-9a07-24439ccaa85c",
      "visibility": "private"
    },
    "remoteUrl": "https://fabrikamprime@dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_git/fabrikam-open-source",
    "size": 12477,
    "sshUrl": "git@ssh.dev.azure.com:v3/kelliott/Fabrikam%20Fiber/new-empty-repo",
    "url": "https://dev.azure.com/fabrikamprime/56af920d-393b-4236-9a07-24439ccaa85c/_apis/git/repositories/0f6919cd-a4db-4f34-a73f-2354114a66c4",
    "validRemoteUrls": null,
    "webUrl": "https://dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_git/fabrikam-open-source"
  },
  "status": "completed",
  "url": "https://dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_apis/git/repositories/0f6919cd-a4db-4f34-a73f-2354114a66c4/importRequests/8"
}
```

::: moniker-end

<a id="manual-import-git-cli"></a> 

## Manually import a repo using git CLI


1. Clone the source repo to a temporary folder on your computer using the `bare` option, as shown in the following command line example, and then navigate to the repo's folder. When cloning using the `bare` option, the folder name includes the `.git` suffix. In this example, `https://github.com/contoso/old-contoso-repo.git` is the source repo to be manually imported.

    ```
    git clone --bare https://github.com/contoso/old-contoso-repo.git
    cd old-contoso-repo.git
    ```

2. [Create a target repo](create-new-repo.md#create-a-repo-using-the-web-portal) and make a note of the clone URL. In this example, `https://dev.azure.com/contoso-ltd/MyFirstProject/_git/new-contoso-repo` is the URL for the new target repo.

3. Run the following command to copy the source repo to the target repo.

    ```
    git push --mirror https://dev.azure.com/contoso-ltd/MyFirstProject/_git/new-contoso-repo
    ```
    
   > [!WARNING]
   > Using `--mirror` overwrites all branches in the target repo, which includes deleting any branches not in the source repo.

4. If the source repository has LFS objects, then fetch them, and copy them from the source repo to the target repo.

    ```
    git lfs fetch origin --all
    git lfs push --all https://dev.azure.com/contoso-ltd/MyFirstProject/_git/new-contoso-repo
    ```
5. Delete the temporary folder by running the following commands.

    ```
    cd ..
    rm -rf old-contoso-repo.git
    ```

## Frequently asked questions (FAQs)

Although imports are most often successful, the following conditions might cause issues.

* [What if my Source repository is behind two-factor authentication?](#q-what-if-my-source-repository-is-behind-two-factor-authentication)
* [What if my source repository doesn't support multi_ack?](#multiack)
* [Can I import from previous on-premises versions?](#q-can-i-import-from-previous-versions)
* [Can I use MSA-based credentials?](#q-can-i-use-msa-based-credentials)
* [Can I import from TFVC?](#q-can-i-import-from-tfvc)
* [What if my source repository contains Git LFS objects?](#q-what-if-my-source-repository-contains-git-lfs-objects)

### Q: What if my source repository is behind two-factor authentication?

A: The import service uses REST APIs to validate and trigger import and can't work directly with repositories that require two-factor authentication.

Most Git hosting providers support authentication tokens that can be supplied to the import service:

**Microsoft Entra ID tokens (recommended):** Microsoft Entra ID tokens provide better security and are the recommended authentication method. You can obtain these tokens through:

- **Azure CLI** (for development/testing):
   ```bash
   az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
   ```

- **Service Principal** (for production/automated scenarios):
   - Register an application in Microsoft Entra ID
   - Create a client secret for the application
   - Grant the application appropriate permissions in Azure DevOps
   - Use the service principal credentials to obtain tokens programmatically

**Personal Access Tokens (alternative):** [GitHub](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and [Azure DevOps](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) also support personal access tokens. 

<a id="multiack"></a>

### Q: What if my source repository doesn't support multi_ack?

A: The import service uses the [multi_ack](https://git-scm.com/book/en/v2/Git-Internals-Transfer-Protocols) capability of the Git protocol during the import.
If the source repository doesn't provide this capability, the import service can fail to import from the given source.
This failure can happen when creating import request or while import is in progress.

### Q: Can I import from previous versions?

A: If the source Git repository is in an on-premises version earlier than 2017 RTM, then the import fails, due to a contract mismatch between the latest Azure DevOps and previous versions.

### Q: Can I use MSA-based credentials?

A: Unfortunately, MSA (Microsoft Account) based credentials don't work. Import service relies on basic authentication to communicate with the source repository. If the username and password you're using aren't basic auth, then authentication and import fail.
One way to check whether the username / password you're using are basic auth is to try using Git to clone your repository using the following format:

```
git clone https://<<username>>:<<password>>@<<remaining clone Url>>
```

### Q: Can I import from TFVC?

A: You can migrate code from an existing TFVC repository to a new Git repository within the same account. While migrating to Git has many benefits, it's an involved process for large TFVC repositories and teams. Centralized version control systems, like TFVC, behave different than Git in fundamental ways. The switch involves a lot more than learning new commands. It's a disruptive change that requires careful planning. For more information, see [Import from TFVC to Git](import-from-tfvc.md).

### Q: What if my source repository contains Git LFS objects?

A: Git import doesn't import Git LFS objects.

LFS objects can be moved using the following steps:
- Import the repository using import repository feature into Azure DevOps.
	This action copies over all the Git objects from source to Azure DevOps, which also imports the LFS pointers that are Git objects, but not the LFS files

To move over the LFS files, you need both Git.exe and LFS client in the same box and access to both source repository and destination repository
- Clone the imported repository from Azure DevOps to local system. Clone works, but it fails while performing checkout of LFS files
- Add the source repository as remote, for example, "source"
- Perform `git lfs fetch source --all`, which brings over all LFS files from source to your local repository
- Assuming the destination VSTS repository is your "target" remote 
- Perform `git lfs push target --all`

### Q: Can I import updates if the source changes later?

A: The import service is for initially importing an entire repository.
To mirror later changes, you need a local clone of the repository with remotes set to both source and destination.

You can sync changes using the following commands.
We treat the Azure Repos import as `origin` and the original repo as `upstream`.

```shell
git clone --bare <Azure-Repos-clone-URL>.git
cd <name-of-repo>
git remote add --mirror=fetch upstream <original-repo-URL>
git fetch upstream --tags
git push origin --all
```

## Next steps

> [!div class="nextstepaction"]
> [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)

## Related articles

- [Learn more about Git workflow](gitworkflow.md)
