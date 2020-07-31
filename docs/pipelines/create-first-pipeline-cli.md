---
title: Create your first pipeline using the Azure CLI
ms.custom: seodec18, devx-track-azurecli
description: Create your first pipeline in Azure Pipelines, Azure DevOps
ms.topic: quickstart
ms.assetid: 038A5329-1B8F-46D9-A0C3-DA3FCFA43996
ms.author: geverghe
author: geverghe
ms.date: 6/30/2019
monikerRange: 'azure-devops'
---

# Create your first pipeline from the CLI

[!INCLUDE [temp](includes/version-team-services.md)]

This is a step-by-step guide to using Azure Pipelines from the Azure CLI (command-line interface) to build a GitHub repository.
You can use Azure Pipelines to build an app written in any language. For this quickstart, you'll use Java.

## Prerequisites

[!INCLUDE [include](includes/prerequisites.md)]
[!INCLUDE [include](includes/prerequisites-cli.md)]

## Get your first run

1. From a command prompt, sign in to the Azure CLI.

    ```
    az login
    ```

1. Fork the following repository into your GitHub account:

    ```
    https://github.com/MicrosoftDocs/pipelines-java
    ```

    After you've forked it, clone it to your dev machine. 
    Learn how: [Fork a repo](https://help.github.com/en/articles/fork-a-repo).

1. Navigate to the cloned directory.

1. Create a new pipeline:

    ```
    az pipelines create --name "First-Java.CI"
    ```
    The repository and branch details are picked up from the git configuration available in the cloned directory.   

1. Enter your GitHub user name and password to authenticate Azure Pipelines.
   
    ```
    Enter your GitHub username (Leave blank for using already generated PAT): Contoso
    
    Enter your GitHub password:
    ``` 

1. Provide a name for the service connection created to enable Azure Pipelines to communicate with the GitHub Repository.
    
    ```
    Enter a service connection name to create? ContosoPipelineServiceConnection
    ```

1. Select the Maven pipeline template from the list of recommended templates. 

    ```
    Which template do you want to use for this pipeline?
    [1] Maven
    [2] Maven package Java project Web App to Linux on Azure
    [3] Android
    [4] Ant
    [5] ASP.NET
    [6] ASP.NET Core
    [7] ASP .NET Core (.NET Framework)
    [8] Starter pipeline
    [9] C/C++ with GCC
    [10] Go
    [11] Gradle
    [12] HTML
    [13] Jekyll site
    [14] .NET Desktop
    [15] Node.js
    [16] Node.js with Angular
    [17] Node.js with Grunt
    [18] Node.js with gulp
    [19] Node.js with React
    [20] Node.js with Vue
    [21] Node.js with webpack
    [22] PHP
    [23] Python Django
    [24] Python package
    [25] Ruby
    [26] Universal Windows Platform
    [27] Xamarin.Android
    [28] Xamarin.iOS
    [29] Xcode
    Please enter a choice [Default choice(1)]:
    ```

1. The pipeline YAML is generated. You can open the YAML in your default editor to view and make changes.

    ```
    Do you want to view/edit the template yaml before proceeding?
    [1] Continue with the generated yaml
    [2] View or edit the yaml
    Please enter a choice [Default choice(1)]:2
    ```
    
1. Provide where you want to commit the YAML file that is generated.

    ```
    How do you want to commit the files to the repository?
    [1] Commit directly to the master branch.
    [2] Create a new branch for this commit and start a pull request.
    Please enter a choice [Default choice(1)]:
    ```

1. A new run is started. Wait for the run to finish.

## Manage your pipelines

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

[!INCLUDE [include](includes/create-first-pipeline-next-steps.md)]
