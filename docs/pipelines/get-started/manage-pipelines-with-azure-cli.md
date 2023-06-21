---
title: Manage your pipeline with Azure CLI
titleSuffix: Azure DevOps 
description: Use Azure DevOps extension command line interface to manage your pipelines
ms.topic: conceptual
ms.custom: devx-track-azurecli
ms.author: sandrica
author: silviuandrica
monikerRange: '>= azure-devops-2020'
ms.date: 11/12/2021
---

# Manage your pipeline with Azure CLI

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

You can manage the pipelines in your organization using these `az pipelines` commands:

- [az pipelines run](#run-a-pipeline): Run an existing pipeline
- [az pipelines update](#update-a-pipeline): Update an existing pipeline
- [az pipelines show](#show-pipeline): Show the details of an existing pipeline

These commands require either the name or ID of the pipeline you want to manage. You can get the ID of a pipeline using the [az pipelines list](/cli/azure/pipelines#ext-azure-devops-az-pipelines-list) command.

To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

## Run a pipeline

You can queue (run) an existing pipeline with the [az pipelines run](/cli/azure/pipelines#ext-azure-devops-az-pipelines-run) command. 

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

### Parameters

- **branch**: Name of the branch on which the pipeline run is to be queued, for example, *refs/heads/main*.
- **commit-id**: Commit-id on which the pipeline run is to be queued.
- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to queue.
- **name**: Required if **ID** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to queue.
- **open**: Open the pipeline results page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **variables**: Space separated "name=value" pairs for the variables you would like to set.

### Example

The following command runs the pipeline named **myGithubname.pipelines-java** in the branch **pipeline** and shows the result in table format.  

```azurecli 
az pipelines run --name myGithubname.pipelines-java --branch pipeline --output table

Run ID    Number      Status      Result    Pipeline ID    Pipeline Name                Source Branch    Queued Time               Reason
--------  ----------  ----------  --------  -------------  ---------------------------  ---------------  --------------------------  --------
123       20200123.2  notStarted            12             myGithubname.pipelines-java  pipeline           2020-01-23 11:55:56.633450  manual
```

## Update a pipeline

You can update an existing pipeline with the [az pipelines update](/cli/azure/pipelines#ext-azure-devops-az-pipelines-update) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

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

### Parameters

- **branch**: Name of the branch on which the pipeline run is to be configured, for example, *refs/heads/main*.
- **description**: New description for the pipeline.
- **id**: Required if **name** is not supplied. ID of the pipeline to update.
- **name**: Required if **ID** is not supplied. Name of the pipeline to update.
- **new-folder-path**: New full path of the folder to which the pipeline is moved, for example, *user1/production_pipelines*.
- **new-name**: New updated name of the pipeline.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **queue-id**: Queue ID of the agent pool where the pipeline needs to run.
- **yaml-path**: Path of the pipeline's yaml file in the repo.

 Global parameters include `debug`, `help`, `only-show-errors`, `query`, `output`, and `verbose`.

> [!TIP]
> There are also global parameters you can use such as `--output`.
> The `--output` parameter is available for all commands. The **table** value presents output in a friendly format. For more information, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).

### Example 

The following command updates the pipeline with the **ID** of 12 with a new name and description and shows the result in table format.

```azurecli 
az pipelines update --id 12 --description "rename pipeline" --new-name updatedname.pipelines-java --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

## Show pipeline

You can view the details of an existing pipeline with the [az pipelines show](/cli/azure/pipelines#ext-azure-devops-az-pipelines-show) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli 
az pipelines show [--folder-path]
                  [--id]
                  [--name]
                  [--open]
                  [--org]
                  [--project]
                  [--query-examples]
                  [--subscription]
``` 

### Parameters

- **folder-path**: Folder path of pipeline. Default is root level folder.
- **id**: Required if **name** is not supplied. ID of the pipeline to show details.
- **name**: Required if **name** is not supplied, but ignored if **ID** is supplied. Name of the pipeline to show details.
- **open**: Open the pipeline summary page in your web browser.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **query examples**: Recommend a JMESPath string for you.
- **subscription**: Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`.

#### Example 

The following command shows the details of the pipeline with the **ID** of 12 and returns the result in table format.  

```azurecli 
az pipelines show --id 12 --output table

ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

## Next steps

You can [customize your pipeline](../customize-pipeline.md) or learn more about configuring pipelines in the language of your choice:

* [.NET Core](../ecosystems/dotnet-core.md)
* [Go](../ecosystems/go.md)
* [Java](../ecosystems/java.md)
* [Node.js](../ecosystems/javascript.md)
* [Python](../ecosystems/python.md)
* [Containers](../ecosystems/containers/build-image.md)

## FAQ

### How do I programmatically create a build pipeline?

[REST API Reference: Create a build pipeline](../../integrate/index.md)

> [!NOTE]
> You can also manage builds and build pipelines from the command line or scripts using the [Azure Pipelines CLI](/cli/azure/).

<!-- ENDSECTION -->

### Can I run multiple pipelines in Azure DevOps Services using a single command?

Currently, the Azure CLI and Azure APIs don't offer commands that run multiple pipelines from the command line. You can use [Azure CLI commands](/cli/azure/pipelines) to list all pipelines and definitions and provide a *single* release or build ID as a parameter. All commands are designed to work for independent runs of independent pipelines, and they require unique ID requests that allow only one, unique value. To learn about pipeline triggers, see [Specify events that trigger pipelines](../build/triggers.md).
