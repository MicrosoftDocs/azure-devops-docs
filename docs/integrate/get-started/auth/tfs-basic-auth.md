---
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
title: Cross-platform CLI authentication for Azure DevOps
description: Learn authentication options for the cross-platform CLI for Azure DevOps, including Microsoft Entra ID tokens and personal access tokens.
ms.assetid: 6dc7f977-4b62-4bd6-b77a-1c6cade1ffa8
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 07/14/2025
---

# Cross-platform CLI authentication for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

This article explains authentication approaches for the cross-platform CLI (tfx-cli) and Azure DevOps.

> [!IMPORTANT]
> We recommend using [Microsoft Entra ID authentication](../authentication/entra.md) as the primary method for authentication. Personal access tokens (PATs) should be used only when Microsoft Entra ID authentication isn't available. Basic authentication is deprecated and not recommended.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/en/download/) (latest LTS version recommended)
- **tfx-cli** installed globally:

   ```bash
   npm install -g tfx-cli
   ```

For more information about tfx-cli, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Authentication methods

Choose the appropriate authentication method based on your environment:

| Method | Recommended for | 
|--------|----------------|
| Microsoft Entra ID | Azure DevOps Services | 
| PAT | Azure DevOps Server, automation scripts | 
| Basic Authentication | Azure DevOps Server only | 

## Microsoft Entra ID authentication (Recommended)

For Azure DevOps Services, use Microsoft Entra ID authentication for the best security:

```bash
tfx login
```

When prompted:
1. Enter your service URL, for example, `https://dev.azure.com/Your_Organization`.
2. Follow the browser-based authentication flow.
3. Complete the sign-in process in your browser.

For detailed guidance on Microsoft Entra ID authentication, see [Microsoft Entra-based authentication](../authentication/entra.md).

## PAT authentication

Use PATs when Microsoft Entra ID authentication isn't available, such as with Azure DevOps Server.

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
   - Double-select **Authentication** in the Features view.
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
