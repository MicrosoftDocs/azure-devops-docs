---
title: Manage your pipeline using the Azure CLI
ms.custom: seodec18, devx-track-azurecli
description: Create your first pipeline in Azure Pipelines, Azure DevOps
ms.topic: quickstart
ms.assetid: 038A5329-1B8F-46D9-A0C3-DA3FCFA43996
ms.author: geverghe
author: geverghe
ms.date: 12/02/2020
monikerRange: 'azure-devops'
---


# Manage your pipelines with Azure CLI

You can manage the pipelines in your organization using these `az pipelines` commands:

- [az pipelines run](#run-a-pipeline): Run an existing pipeline
- [az pipelines update](#update-a-pipeline): Update an existing pipeline
- [az pipelines show](#show-pipeline): Show the details of an existing pipeline

These commands require either the name or ID of the pipeline you want to manage. You can get the ID of a pipeline using the [az pipelines list](/cli/azure/ext/azure-devops/pipelines#ext-azure-devops-az-pipelines-list) command.

### Run a pipeline

You can queue (run) an existing pipeline with the [az pipelines run](/cli/azure/ext/azure-devops/pipelines#ext-azure-devops-az-pipelines-run) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines run [--branch]
                 [--commit-id]
                 [--folder-path]
                 [--id]
                 [--name]
                 [--open]
                 [--org]
                 [--project]
                 [--variables]
``` 

#### Parameters

- **branch**: Name of the branch on which the pipeline run is to be queued, for example, *refs/heads/master*.
- **commit-id**: Commit-id on which the pipeline run is to be queued.
- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to queue.
- **name**: Required if **ID** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to queue.
- **open**: Open the pipeline results page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **variables**: Space separated "name=value" pairs for the variables you would like to set.

#### Example

The following command runs the pipeline named **myGithubname.pipelines-java** in the branch **pipeline** and shows the result in table format.  

```azurecli 
az pipelines run --name myGithubname.pipelines-java --branch pipeline --output table

Run ID    Number      Status      Result    Pipeline ID    Pipeline Name                Source Branch    Queued Time               Reason
--------  ----------  ----------  --------  -------------  ---------------------------  ---------------  --------------------------  --------
123       20200123.2  notStarted            12             myGithubname.pipelines-java  pipeline           2020-01-23 11:55:56.633450  manual
```

### Update a pipeline

You can update an existing pipeline with the [az pipelines update](/cli/azure/ext/azure-devops/pipelines#ext-azure-devops-az-pipelines-update) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines update [--branch]
                    [--description]
                    [--id]
                    [--name]
                    [--new-folder-path]
                    [--new-name]
                    [--org]
                    [--project]
                    [--queue-id]
                    [--yaml-path]
``` 

#### Parameters

- **branch**: Name of the branch on which the pipeline run is to be configured, for example, *refs/heads/master*.
- **description**: New description for the pipeline.
- **id**: Required if **name** is not supplied. ID of the pipeline to update.
- **name**: Required if **ID** is not supplied. Name of the pipeline to update.
- **new-folder-path**: New full path of the folder to which the pipeline is moved, for example, *user1/production_pipelines*.
- **new-name**: New updated name of the pipeline.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **queue-id**: Queue ID of the agent pool where the pipeline needs to run.
- **yaml-path**: Path of the pipeline's yaml file in the repo.

#### Example 

The following command updates the pipeline with the **ID** of 12 with a new name and description and shows the result in table format.

```azurecli 
az pipelines update --id 12 --description "rename pipeline" --new-name updatedname.pipelines-java --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

### Show pipeline

You can view the details of an existing pipeline with the [az pipelines show](/cli/azure/ext/azure-devops/pipelines#ext-azure-devops-az-pipelines-show) command. To get started, see [Get started with Azure DevOps CLI](../cli/index.md).

```azurecli 
az pipelines show [--folder-path]
                  [--id]
                  [--name]
                  [--open]
                  [--org]
                  [--project]
``` 

#### Parameters

- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to show details.
- **name**: Required if **name** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to show details.
- **open**: Open the pipeline summary page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.

#### Example 

The following command shows the details of the pipeline with the **ID** of 12 and returns the result in table format.  

```azurecli 
az pipelines show --id 12 --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

[!INCLUDE [include](includes/get-status-badge.md)]

## Next steps

[!INCLUDE [include](includes/create-first-pipeline-next-steps.md)]
