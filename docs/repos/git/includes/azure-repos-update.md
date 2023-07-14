---
ms.service: azure-devops-repos
ms.topic: include
ms.author: vijayma
author: vijayma
ms.date: 02/23/2022
ms.subservice: azure-devops-repos-git
---



You can use [az repos update](/cli/azure/repos#az-repos-update) to update the default branch or rename a repository.  

```azurecli
az repos show --repository
                [--default-branch]
                [--detect {false, true}]
                [--name]
                [--org]
                [--project]
                [--subscription]
```

**Parameters**

|Parameter|Description|
|---------|-----------|
|`repository`| Name or ID of a repository.  |
|`default-branch`|Specify the default branch to be set for the repository. Example: 'refs/heads/live' or 'live'.|
|`detect`|Automatically detect organization. Accepted values: `false`, `true`.|
|`name`|New name for the repository.|
|`org`, `organization`|Azure DevOps organization URL. You can configure the default organization by using `az devops configure -d organization=<ORG_URL>`. **Required** if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.|
|`project`, `p`|Name or ID of the project. You can configure the default project using `az devops configure -d project=<NAME_OR_ID>`. **Required** if not configured as default or picked up via git config.|
|`subscription`|Name or ID of subscription. You can configure the default subscription using `az account set -s <NAME_OR_ID>`.|


**Example**

The following command renames the *contosoREPO* to *contosoFabrikam* for the default configuration `az devops configure --defaults organization=https://dev.azure.com/fabrikamprime project="Fabrikam Fiber"`.

```azurecli
az repos show --repository contosoREPO --output table
ID                                    Name         Default Branch    Project
------------------------------------  -----------  ----------------  --------------
30954ce5-417b-4930-b8d2-8b6cac934a34  contosoREPO  main              Fabrikam Fiber
```
For more details, enter the following command: 

```azurecli
az repos update --repository contosoREPO --name contosoFabrikam
{
  "defaultBranch": "refs/heads/main",
  "id": "30954ce5-417b-4930-b8d2-8b6cac934a34",
  "isDisabled": false,
  "isFork": null,
  "name": "contosoFabrikam",
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
  "remoteUrl": "https://fabrikamprime@dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_git/contosoFabrikam",
  "size": 1627,
  "sshUrl": "git@ssh.dev.azure.com:v3/fabrikam/Fabrikam%20Fiber/contosoFabrikam",
  "url": "https://dev.azure.com/fabrikamprime/56af920d-393b-4236-9a07-24439ccaa85c/_apis/git/repositories/30954ce5-417b-4930-b8d2-8b6cac934a34",
  "validRemoteUrls": null,
  "webUrl": "https://dev.azure.com/fabrikamprime/Fabrikam%20Fiber/_git/contosoFabrikam"
}
```
