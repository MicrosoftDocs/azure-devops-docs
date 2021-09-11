---
title: Learn about Azure DevOps command line interface extension
titleSuffix: Azure DevOps 
description: Use Azure DevOps extension command line interface 
ms.topic: conceptual
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Get started with Azure DevOps CLI

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

With the Azure DevOps extension for Azure Command Line Interface (CLI),  you can manage many Azure DevOps Services from the command line. CLI commands enable you to streamline your tasks with faster and flexible interactive canvas, bypassing user interface workflows.

> [!NOTE]  
> The Azure DevOps Command Line Interface (CLI) is available for Azure DevOps Server 2020 and Azure DevOps Services. 

To start using the Azure DevOps extension for Azure CLI, perform the following steps:

1. Install Azure CLI: Follow the instructions provided in [Install the Azure CLI](/cli/azure/install-azure-cli) to set up your Azure CLI environment. At a minimum, your Azure CLI version must be 2.10.1. You can use `az --version` to validate.

2. Add the Azure DevOps extension:

    ```
	az extension add --name azure-devops
    ```

	You can use `az extension list` or `az extension show --name azure-devops` to confirm the installation.

3. Sign in: Run `az login` to sign in. Note that we support only interactive or log in using user name and password with `az login`. To sign in using a Personal Access Token (PAT), see [Sign in via Azure DevOps Personal Access Token (PAT)](log-in-via-pat.md). When connecting to an on-premises server instance, sign in using a PAT may be required to run select commands. 

4. Configure defaults: We recommend you set the default configuration for your organization and project. Otherwise, you can set these within the individual commands themselves.  

    ```
	az devops configure --defaults organization=https://dev.azure.com/contoso project=ContosoWebApp
    ```

	If you're connecting to an Azure DevOps Server, specify the URL for your server instance. For example: 

    ```
	az devops configure --defaults organization=https://ServerName/CollectionName project=ProjectName
    ```

## Command usage

Adding the Azure DevOps Extension adds `devops`, `pipelines`, `artifacts`, `boards`, and `repos` groups.
For usage and help content for any command, enter the **-h** parameter, for example:

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

This command shows the details of build with `id 1` on the command-line and also opens it in the default browser.

## Related articles

- [Sign in via Azure DevOps Personal Access Token (PAT)](log-in-via-pat.md)
- [Output formats](/cli/azure/format-output-azure-cli)
- [Index to az devops examples](quick-reference.md)
- [Azure DevOps CLI Extension GitHub Repo](https://github.com/Azure/azure-devops-cli-extension)
