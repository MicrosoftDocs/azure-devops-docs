---
ms.subservice: azure-devops-ecosystem
ms.topic: overview
title: Cross-platform CLI authentication for Azure DevOps
description: Learn authentication options for the cross-platform CLI for Azure DevOps, including personal access tokens and basic authentication.
ms.assetid: 6dc7f977-4b62-4bd6-b77a-1c6cade1ffa8
monikerRange: '<= azure-devops'
ms.custom: pat-deprecation
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 02/26/2026
---

# Cross-platform CLI authentication for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article explains authentication approaches for the cross-platform CLI (tfx-cli) and Azure DevOps.

[!INCLUDE [use-microsoft-entra-reduce-pats](../../../includes/use-microsoft-entra-reduce-pats.md)]

> [!IMPORTANT]
> Basic authentication is deprecated and not recommended.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en/download/) (latest LTS version recommended)
- **tfx-cli** installed globally:

   ```bash
   npm install -g tfx-cli
   ```

For more information about tfx-cli, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Authentication methods

The tfx-cli supports the following authentication methods:

| Method | Recommended for | 
|--------|----------------|
| PAT | Azure DevOps Services and Azure DevOps Server | 
| Basic Authentication | Azure DevOps Server only (deprecated) | 

## PAT authentication

Use PATs to authenticate with Azure DevOps Services or Azure DevOps Server.

### Create and use a PAT

1. [Create a PAT](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) with the required scopes.
2. Sign in using the PAT:

    ```bash
    tfx login
    ```

3. When prompted, provide:
   - **Service URL**: Your Azure DevOps instance URL.
   - **Personal access token**: The PAT you created.

**Example URLs:**
- Azure DevOps Services: `https://dev.azure.com/Your_Organization`
- Azure DevOps Server: `https://yourserver/tfs/DefaultCollection`
- Visual Studio Marketplace: `https://marketplace.visualstudio.com`

**Example session:**
```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: https://dev.azure.com/Your_Organization
> Personal access token: **********************
Logged in successfully
```

## Basic authentication (Deprecated)

> [!WARNING]
> Basic authentication is deprecated and not recommended. Use Microsoft Entra ID instead. Basic authentication:
> - Sends credentials in plaintext
> - Can cause issues with Git command line operations
> - Poses security risks

### Configure basic authentication (Azure DevOps Server only)

If you must use basic authentication with Azure DevOps Server installations:

1. **Enable IIS Basic Authentication:**
   - Open Server Manager.
   - Install the Basic Authentication feature for IIS.
   - In IIS Manager, go to your Azure DevOps Server website.
   - Double-click **Authentication** in the Features view.
   - Enable Basic Authentication.
   - Leave domain and realm settings empty.

2. **Sign in with basic authentication:**

    ```bash
    tfx login --auth-type basic
    ```

3. When prompted, provide:
   - **Service URL**: Your on-premises server URL (for example, `http://yourserver:8080/tfs/DefaultCollection`).
   - **Username**: Use `domain\username` format (for example, `fabrikam\john`)
   - **Password**: Your domain password.

> [!TIP]
> Consider [configuring SSL](/azure/devops/server/admin/setup-secure-sockets-layer) for secure communication when using basic authentication.

## Next step

> [!div class="nextstepaction"]
> [View the complete tfx-cli command reference](https://github.com/Microsoft/tfs-cli)
