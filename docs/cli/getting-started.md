---
title: Get started with Azure DevOps CLI
titleSuffix: Azure DevOps
description: Get started using Azure DevOps extension for Azure CLI
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid: 
ms.manager: bijuv
ms.author: geverghe
author: geverghe
ms.reviewer: geverghe
monikerRange: '== azure-devops-services'
ms.date: 04/12/2019  
---
To start usign the Azure DevOps extension for Azure CLI, execute the following steps:
1. [Install Azure CLI](): Follow the instructions available in [Microsoft Docs]() to set up Azure CLI in your environment. At a minimum, your Azure CLI version must be 2.0.49. You can use az -version to validate.
2. Add the Azure DevOps extension:
    ```
    az extension add --name azure-devops
    ```
    You can use `az extension list` or `az extension show --name azure-devops` to confirm the installation.
3. Sing in: Run `az login` to sign in
4. Configure Defaults: Although you can provide the organization and project for each command, we recommend you set these as defaults in configuration for seamless commanding
    ```
    az devops configure --defaults organization=https://dev.azure.com/contoso project=ContosoWebApp
    ```

# Command Usage
Adding the Azure DevOps Extension adds `devops`, `pipelines`, `artifacts`, `boards` and `repos` groups.
For usage and help content for any command, pass in the -h parameter, for example:

```bash
$ az devops -h

Group
    az devops : Manage Azure DevOps organization level operations.
        Related Groups
        az pipelines: Manage Azure Pipelines
        az boards: Manage Azure Boards
        az repos: Manage Azure Repos
        az artifacts: Manage Azure Artifacts.

Subgroups:
    admin            : Manage administration operations.
    project          : Manage team projects.
    service-endpoint : Manage service endpoints/service connections.
    team             : Manage teams.

Commands:
    configure        : Configure the Azure DevOps CLI or view your configuration.
    feedback         : Displays information on how to provide feedback to the Azure DevOps CLI team.
    login            : Set the credential (PAT) to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
```
