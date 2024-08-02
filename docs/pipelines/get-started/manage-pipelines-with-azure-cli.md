---
title: Manage pipelines with the Azure DevOps CLI
description: Learn about the Azure DevOps CLI extension and about the az pipelines list, show, run, and update commands for managing your pipelines.
ms.topic: conceptual
ms.custom: devx-track-azurecli
ms.author: sandrica
author: silviuandrica
monikerRange: 'azure-devops'
ms.date: 08/01/2024
---

# Manage pipelines with the Azure DevOps CLI

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

This article describes how you can manage existing pipelines in your Azure DevOps project by using the following [az pipelines](/cli/azure/pipelines) commands:

- [az pipelines list](/cli/azure/pipelines#az-pipelines-list) to list pipelines in a project
- [az pipelines show](/cli/azure/pipelines#az-pipelines-show) to show the details of a pipeline
- [az pipelines run](/cli/azure/pipelines#az-pipelines-run) to run a pipeline
- [az pipelines update](/cli/azure/pipelines#az-pipelines-update) to update a pipeline
- [az pipelines delete](/cli/azure/pipelines#az-pipelines-delete) to delete a pipeline

>[!NOTE]
>The Azure DevOps CLI extension is available only for Azure DevOps Services, and doesn't support any version of Azure DevOps Server.

## Azure DevOps CLI extension

The `az-pipelines` command group is a part of the [DevOps](/cli/azure/service-page/devops) extension to the Azure CLI, which requires Azure CLI version 2.30.0 or higher. The Azure DevOps extension installs automatically the first time you run an `azure pipelines` command. For more information on getting started, see [Get started with Azure DevOps CLI](../../cli/index.md).

You can also use global Azure CLI parameters, such as `debug`, `help`, `only-show-errors`, `query`, `output`, and `verbose`, in your Azure DevOps CLI commands. The `table` value for the `--output` global parameter presents output in a friendly format. For more information, see [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli).

You can set the default Azure DevOps organization for Azure DevOps CLI commands by using `az devops configure --defaults organization=<YourOrganizationURL>`, or use the `--detect true` parameter to automatically detect the organization. You can configure the default Azure DevOps project by using `az devops configure -d project=<Project Name or ID>`.

If you don't detect the organization or configure a default organization or project, or pick up the organization and project via `git config`, you must specify the `org` and `project` parameters in each command.

## List existing pipelines

The `run`, `show`, `update`, and `delete` pipeline commands require either the `name` or `id` of the pipeline you want to manage. If you use `id`, the `name` parameter is ignored. To get a list of project pipelines, including their IDs, use the [az pipelines list](/cli/azure/pipelines#ext-azure-devops-az-pipelines-list) command. You can filter or format the results list by using parameters.

For example, the following command lists the project pipelines that have names beginning with `python*`, in table format.

```azurecli
az pipelines list --name python* --output table
```

Output:

```output
ID    Path    Name                        Status    Default Queue
----  ------  --------------------------  --------  ---------------
17    \       python-sample-vscode-flask  disabled  Azure Pipelines
24    \       python-sample-get-started   enabled   Azure Pipelines
```

<a name="show-pipeline"></a>
## Show details for a pipeline

To view the details of an existing pipeline, use the [az pipelines show](/cli/azure/pipelines#ext-azure-devops-az-pipelines-show) command. For example, the following command shows the details of the pipeline with the `ID` of `12`, and opens the pipeline summary page in your web browser.

```azurecli 
az pipelines show --id 12 --open
```

## Run a pipeline

To queue and run an existing pipeline, use the [az pipelines run](/cli/azure/pipelines#ext-azure-devops-az-pipelines-run) command. You can set `parameters` and `variables` to use in the run.

For example, the following command runs the pipeline with `name` of `myGithubname.pipelines-java` in the `pipeline` branch, sets the value of variable `var1` to `100` for the run, and outputs results in `table` format.

```azurecli 
az pipelines run --name myGithubname.pipelines-java --branch pipeline --variables var1=100 --output table
```

Output:

```output
Run ID    Number      Status      Result    Pipeline ID    Pipeline Name                Source Branch    Queued Time                 Reason
--------  ----------  ----------  --------  -------------  ---------------------------  ---------------  --------------------------  --------
123       20200123.2  notStarted            12             myGithubname.pipelines-java  pipeline         2020-01-23 11:55:56.633450  manual
```

## Update a pipeline

To update an existing pipeline, use the [az pipelines update](/cli/azure/pipelines#ext-azure-devops-az-pipelines-update) command. For example, the following command updates the pipeline with the `id` of `12` with a new name and description, and outputs the result in table format.

```azurecli 
az pipelines update --id 12 --description "rename pipeline" --new-name updatedname.pipelines-java --output table
```

Output:

```output
ID    Name                        Status    Default Queue
----  --------------------------  --------  ------------------
12    updatedname.pipelines-java  enabled   Hosted Ubuntu 1604
```

## Delete a pipeline

To delete a pipeline, run the [az-pipelines-delete](/cli/azure/pipelines#az-pipelines-delete) command. For example, the following command deletes the pipeline with ID of `12`, and doesn't prompt for confirmation. If you don't include the `--yes` parameter, the command prompts for confirmation by default.

```azurecli
az pipelines delete --id 12 --yes
```

## Programmatically create and configure pipelines

You can build custom applications or services that integrate with Azure DevOps by using the REST APIs to make direct HTTP calls. For more information, see the [Azure DevOps Services REST API Reference](/rest/api/azure/devops). You can also use the [client libraries](/rest/api/azure/devops#client-libraries) for these APIs.

### Skip a stage in a pipeline run

You can use the `az rest` command with the [Run Pipeline](/rest/api/azure/devops/pipelines/runs/run-pipeline) REST API to skip a stage in a pipeline run, using the `stagesToSkip` parameter.

For example:

```azurecli
az rest --method post `
    --uri https://dev.azure.com/{organization}/{project}/_apis/pipelines/{pipelineId}/runs?api-version=7.1-preview.1 `
    --body "{'stagesToSkip': [''], 'resources': {'repositories': {'self': {'refName': 'refs/heads/{branch}'}}}}" `
    --resource 499b84ac-1321-427f-aa17-267ca6975798
```

## Next steps

You can use Azure Pipelines to build, configure, test, and deploy apps in the language of your choice. For more information, see the following articles:

- [Build, test, and deploy .NET Core apps](../ecosystems/dotnet-core.md)
- [Build and test Go projects](../ecosystems/go.md)
- [Build Java apps](../ecosystems/java.md)
- [Build and publish a Node.js package](../ecosystems/javascript.md)
- [Build and publish a Python app](../ecosystems/python.md)
- [Build a container image to deploy apps](../ecosystems/containers/build-image.md)
- [Customize your pipeline](../customize-pipeline.md)

## Related content

- [Get started with Azure DevOps CLI](../../cli/index.md)
- [Specify events that trigger pipelines](../build/triggers.md)
- [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)
