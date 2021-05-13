---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

You've just learned how to create your first pipeline in Azure. Learn more about configuring pipelines in the language of your choice:

* [.NET Core](../ecosystems/dotnet-core.md)
* [Go](../ecosystems/go.md)
* [Java](../ecosystems/java.md)
* [Node.js](../ecosystems/javascript.md)
* [Python](../ecosystems/python.md)
* [Containers](../ecosystems/containers/build-image.md)

Or, you can proceed to [customize the pipeline](../customize-pipeline.md) you just created.

To run your pipeline in a container, see [Container jobs](../process/container-phases.md).

For details about building GitHub repositories, see [Build GitHub repositories](../repos/github.md).

To learn what else you can do in YAML pipelines, see [YAML schema reference](../yaml-schema.md).

### Clean up

If you created any test pipelines, they are easy to delete when you are done with them. 

#### [Browser](#tab/browser)

To delete a pipeline, navigate to the summary page for that pipeline, and choose **Delete** from the **...** menu at the top-right of the page. Type the name of the pipeline to confirm, and choose **Delete**.

![Delete pipeline](../media/get-started-yaml/delete-pipeline.png)

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

To delete a pipeline using Azure CLI, you can use the [az pipeline delete](/cli/azure/pipelines?view=azure-cli-latest&preserve-view=true#ext-azure-devops-az-pipelines-delete) command. This command requires the `id` of the pipeline to delete, which you can get using the [az pipeline list](/cli/azure/pipelines?view=azure-cli-latest&preserve-view=true#ext-azure-devops-az-pipelines-list) command. 

[List pipelines](#list-pipelines) | [Delete pipeline](#delete-pipeline) | [Example](#example)

> [!NOTE]
> If this is your first time using [az pipelines](/cli/azure/pipelines?view=azure-cli-latest&preserve-view=true) commands, see [Get started with Azure DevOps CLI](../../cli/index.md).

### List pipelines

You can list your pipelines using the [az pipelines list](/cli/azure/pipelines?view=azure-cli-latest&preserve-view=true#ext-azure-devops-az-pipelines-list) command.

```azurecli
az pipelines list [--detect {false, true}]
                  [--folder-path]
                  [--name]
                  [--org]
                  [--project]
                  [--query-order {ModifiedAsc, ModifiedDesc, NameAsc, NameDesc, None}]
                  [--repository]
                  [--repository-type {bitbucket, git, github, githubenterprise, svn, tfsgit, tfsversioncontrol}]
                  [--top]
```

#### Parameters

- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **folder-path**: If specified, filters to definitions under this folder.
- **name**: Limit results to pipelines with this name or starting with this name. Examples: "FabCI" or "Fab*".
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **query-order**: Order of the results. Accepted values: **ModifiedAsc**, **ModifiedDesc**, **NameAsc**, **NameDesc**, **None**
- **repository**: Limit results to pipelines associated with this repository.
- **repository-type**: Limit results to pipelines associated with this repository type. It is mandatory to pass **repository** argument along with this argument. Accepted values: **bitbucket**, **git**, **github**, **githubenterprise**, **svn**, **tfsgit**, **tfsversioncontrol**
- **top**: Maximum number of pipelines to list.

### Delete pipeline

You can delete a pipeline using the [az pipelines delete](/cli/azure/pipelines?view=azure-cli-latest&preserve-view=true#ext-azure-devops-az-pipelines-delete) command.

```azurecli
az pipelines delete --id
                    [--detect {false, true}]
                    [--org]
                    [--project]
                    [--yes]
```

#### Parameters

- **id**: (Required) ID of the pipeline.
- **detect**: Automatically detect organization. Accepted values: **false**, **true**
- **org** or **organization**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
- **project** or **p**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up via git config.
- **yes** or **y**: Do not prompt for confirmation.

### Example

The following example lists pipelines in table format, and then deletes the pipeline with an ID of 6. This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`

```azurecli
az pipelines list --output table

ID    Path    Name           Status    Default Queue
----  ------  -------------  --------  ------------------
6     \       FabrikamFiber  enabled   Hosted Ubuntu 1604

az pipelines delete --id 6

Are you sure you want to delete this pipeline? (y/n): y
Pipeline 6 was deleted successfully.
```

* * *
