---
title: Start using Azure DevOps command line interface extension
titleSuffix: Azure DevOps 
description: Get started guide for Azure DevOps extension command line interface 
ms.topic: quickstart
ms.manager: jillfra
ms.prod: devops 
ms.technology: devops-ref
ms.manager: jillfra 
ms.author: geverghe
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 07/08/2019
---

# Get started with Azure DevOps CLI

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 

> [!NOTE]  
> The Azure DevOps Command Line Interface (CLI) is only available for Azure DevOps Services at this time. 


To start using the Azure DevOps extension for Azure CLI, execute the following steps:

1. Install Azure CLI: Follow the instructions available [here](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest) to set up Azure CLI in your environment. At a minimum, your Azure CLI version must be 2.0.49. You can use `az --version` to validate.

2. Add the Azure DevOps extension:

    ```
	az extension add --name azure-devops
    ```

	You can use `az extension list` or `az extension show --name azure-devops` to confirm the installation.

3. Sign in: Run `az login` to sign in.

4. Configure defaults: Although you can provide the organization and project for each command, we recommend you set these as defaults in configuration for seamless commanding.

    ```
	az devops configure --defaults organization=https://dev.azure.com/contoso project=ContosoWebApp
    ```

## Command usage

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
    extension        : Manage extensions.
    project          : Manage team projects.
    security         : Manage security related operations.
    service-endpoint : Manage service endpoints/service connections.
    team             : Manage teams.
    user             : Manage users.
    wiki             : Manage wikis.

Commands:
    configure        : Configure the Azure DevOps CLI or view your configuration.
    feedback         : Displays information on how to provide feedback to the Azure DevOps CLI team.
    invoke           : This command will invoke request for any DevOps area and resource. Please use
                       only json output as the response of this command is not fixed. Helpful docs -
                       https://docs.microsoft.com/rest/api/azure/devops/.
    login            : Set the credential (PAT) to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
```

## Open items in browser

You can use `--open` switch to open any artifact in Azure DevOps portal in your default browser.

For example :

```bash
az pipelines build show --id 1 --open
```

This will show the details of build with `id 1` on the command-line and also open it in the default browser.