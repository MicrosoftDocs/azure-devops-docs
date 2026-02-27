---
title: Get Started with Azure DevOps CLI
titleSuffix: Azure DevOps 
description: Install the Azure DevOps extension for the Azure CLI. Learn how to sign on, configure defaults, access help, and open Azure DevOps Services in a browser.
ms.topic: quickstart
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.custom: pat-reduction
ms.update: 90-days
ms.date: 02/26/2026
#customer intent: As a project team member, I want to set up Azure DevOps CLI and understand how to access pipelines, boards, repos, and artifacts. 
---

# Quickstart: Get started with Azure DevOps CLI

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

This quickstart shows how to install and start using the Azure DevOps extension for the Azure Command Line Interface (CLI). The extension adds commands for managing Azure DevOps Services from the command line so you can script and automate common tasks.

In this quickstart, you learn how to:
- Install the Azure DevOps extension for Azure CLI
- Sign in, configure defaults, and access help for commands
- Use the CLI to open Azure DevOps items in a browser

Quick steps:
1. Install Azure CLI (if not already installed)
1. Add or update the Azure DevOps extension
1. Sign in and set default organization and project
1. Use `az devops --help` or open items with `--open`

> [!NOTE]  
> The Azure DevOps CLI extension works only with Azure DevOps Services (cloud). It doesn't support Azure DevOps Server (on-premises).

## Install and update

1. Install Azure CLI. Follow the steps in [Install the Azure CLI](/cli/azure/install-azure-cli). After installation, verify your version:

```azurecli
az --version
```

1. Add the Azure DevOps extension.

   ```azurecli
   az extension add --name azure-devops
   ```

   If you already have the extension installed and want to make sure you have the latest version, run the update command:

   ```azurecli
   az extension update --name azure-devops
   ```

1. To confirm the installation, run the command `az extension list` or `az extension show --name azure-devops`.

1. To sign in, run the `az login` command. Azure CLI supports only interactive sign-in by using user name and password with `az login`. To sign in by using a personal access token (PAT), see [Sign in via Azure DevOps PAT](log-in-via-pat.md).

   [!INCLUDE [use-microsoft-entra-reduce-pats](../includes/use-microsoft-entra-reduce-pats.md)]

   > [!NOTE]  
   > The Azure DevOps CLI extension supports interactive authentication (Microsoft Entra) and PAT authentication. For service principals and managed identities, use the REST APIs directly or client libraries. For more information, see [Authentication guidance](../integrate/get-started/authentication/authentication-guidance.md).

1. Set the default configuration for your organization and project. Otherwise, specify the values in the individual commands themselves.  

   ```azurecli
   az devops configure --defaults organization=https://dev.azure.com/contoso project=ContosoWebApp
   ```

[!INCLUDE [enable-mcp-server](../boards/includes/enable-mcp-server.md)]

## Use commands

When you add the Azure DevOps Extension, you get the `devops`, `pipelines`, `artifacts`, `boards`, and `repos` groups.

To get usage and help content for any command, specify the `--help` parameter. For example:

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
    login            : Set the credential to use for a particular organization.
    logout           : Clear the credential for all or a particular organization.
```

## Open items in browser

Use the `--open` parameter to open any artifact in the Azure DevOps portal in your default browser.

```azurecli
az pipelines build show --id 1 --open
```

This command shows the details of the build with `--id 1` in the Command Prompt window and also opens it in the default browser.

## Related content

- [Output formats for Azure CLI commands](/cli/azure/format-output-azure-cli)
- [Index to az devops CLI examples](quick-reference.md)
- [Azure DevOps CLI Extension GitHub Repo](https://github.com/Azure/azure-devops-cli-extension)
