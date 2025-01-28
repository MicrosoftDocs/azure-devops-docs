---
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
title: Use the Cross-platform CLI for Azure DevOps 
description: Use the Cross-platform CLI for Azure DevOps, using personal access tokens (PATs).
ms.assetid: 6dc7f977-4b62-4bd6-b77a-1c6cade1ffa8
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/10/2023
---

# Use the Cross-platform CLI for Azure DevOps using personal access tokens

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use personal access tokens (PATs) with the cross-platform CLI for Azure DevOps.

> [!IMPORTANT]
> We don't recommend using basic authentication or PATs. Instead, we recommend using [Microsoft Entra-based authentication](../authentication/entra.md), if you're interacting with Microsoft Entra accounts.

## Prerequisites

- Latest version of [**Node.js source code**](https://nodejs.org/en/download/)
- **Cross-platform CLI for Azure DevOps**
  - Install **tfx-cli** using `npm`, a component of Node.js by running:

   ```no-highlight
    npm i -g tfx-cli 
   ```

   For more information about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Personal access token

Create a personal access token and paste it into the sign-in command.

```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: {url}
> Personal access token: xxxxxxxxxxxx
Logged in successfully
```

See the following examples of valid URLs:

- `https://marketplace.visualstudio.com`
- `https://youraccount.visualstudio.com/DefaultCollection`

## Configure for Basic authentication

> [!WARNING]
> We don't recommend basic authentication. Turning on IIS basic authentication causes various issues, and you should use [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) instead.  For example, if you turn on IIS basic authentication, GIT command line stops working.

Follow these steps to enable basic auth for your Azure DevOps instance:

> [!WARNING]
> Basic authentication sends usernames and passwords in plaintext. Consider [configuring Azure DevOps Server to use SSL](/azure/devops/server/admin/setup-secure-sockets-layer) to enable secure communication when using basic auth.

1. Install the `Basic Authentication` feature for IIS in Server Manager.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of configure basic authentication feature.](./media/configureBasicAuthFeature.png)

2. Open IIS Manager and expand to the `Azure DevOps Server` website, double-click the `Authentication` tile in the Features view.

3. Choose `Basic Authentication` in the list of authentication methods. Choose `Enable` in the right hand column. You should now see `Basic Authentication` enabled.

> [!NOTE]
> Leave the **domain** and **realm** settings for Basic Authentication empty.

## tfx sign in with Basic authentication

Now you can start to use `tfx` against your server. Sign in before you issue commands.

1. Enter the following command:

   ```no-highlight
   tfx login --auth-type basic
   ```

2. Add your service url.
3. Add your username. Use `domain\user` (for example, fabrikam\peter). If you're working on a workgroup machine, use `machinename\user`.
4. Add your password. Enter the password for the username that you previously entered.

**You can now use any other tfx command.**

```no-highlight
> tfx login --auth-type basic
Copyright Microsoft Corporation

Enter service url > http://localhost:8080/tfs/defaultcollection
Enter username > fabfiber\peter
Enter password > *******
logged in successfully
```
