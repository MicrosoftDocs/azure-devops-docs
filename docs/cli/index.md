---
title: Get Started with Azure DevOps CLI
titleSuffix: Azure DevOps 
description: Install the Azure DevOps extension command line interface. Learn how to sign on, configure defaults, access help, and open Azure DevOps services in a browser.
ms.topic: quickstart
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 05/30/2025
#customer intent: As a project team member, I want to set up Azure DevOps CLI and understand how to access pipelines, boards, repos, and artifacts. 
---

# Get started with Azure DevOps CLI

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

With the Azure DevOps extension for Azure Command Line Interface (CLI), you can manage many Azure DevOps Services from the command line. Azure CLI commands enable you to streamline your tasks with faster and flexible interactive canvas, bypassing user interface workflows.

> [!NOTE]  
> The Azure DevOps CLI is only available for use with Azure DevOps Services. The Azure DevOps extension for the Azure CLI doesn't support any version of Azure DevOps Server.

To start using the Azure DevOps extension for Azure CLI:

1. Install Azure CLI. Follow the instructions in [Install the Azure CLI](/cli/azure/install-azure-cli) to set up your Azure CLI environment. At a minimum, your Azure CLI version must be 2.10.1. You can use the `az --version` command to validate.

1. Add the Azure DevOps extension.

   ```azurecli
   az extension add --name azure-devops
   ```

1. To confirm the installation, run the command `az extension list` or `az extension show --name azure-devops`.

1. To sign in, run the `az login` command. Azure CLI supports only interactive sign-in using user name and password with `az login`. To sign in using a Personal Access Token (PAT), see [Sign in via Azure DevOps PAT](log-in-via-pat.md).

> [!NOTE]  
> The Azure DevOps extension doesn't currently support authenticating by using [Managed Identities](../integrate/get-started/authentication/service-principal-managed-identity.md).

1. We recommend that you set the default configuration for your organization and project. Otherwise, you can specify the values in the individual commands themselves.  

   ```azurecli
   az devops configure --defaults organization=https://dev.azure.com/contoso project=ContosoWebApp
   ```

## Use commands

Adding the Azure DevOps Extension adds `devops`, `pipelines`, `artifacts`, `boards`, and `repos` groups.

For usage and help content for any command, specify the `--help` parameter, for example:

```azurecli
az devops --help
```

```output
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
                       https://learn.microsoft.com/rest/api/azure/devops/.
    login            : Set the credential (PAT) to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
```

## Open items in browser

You can use `--open` parameter to open any artifact in Azure DevOps portal in your default browser.

```azurecli
az pipelines build show --id 1 --open
```

This command shows the details of the build with `id 1` in the Command Prompt window and also opens it in the default browser.

## Related content

- [Sign in via Azure DevOps personal access token](log-in-via-pat.md)
- [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)
- [Index to az devops CLI examples](quick-reference.md)
- [Azure DevOps CLI Extension GitHub Repo](https://github.com/Azure/azure-devops-cli-extension)
