---
ms.technology: devops-ecosystem
ms.topic: conceptual
title: Use the Cross-platform CLI for Azure DevOps 
description: Use the Cross-platform CLI for Azure DevOps, using personal access tokens (PATs).
ms.assetid: 6dc7f977-4b62-4bd6-b77a-1c6cade1ffa8
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/20/2020
---

# Use the Cross-platform CLI for Azure DevOps using personal access tokens (PATs)

[!INCLUDE [version-all](../../../includes/version-all.md)]
 

- You can download the latest version of **Node.js source code**, from the [Node.js source code downloads page](https://nodejs.org/en/download/)
- Install the **Cross-platform CLI for Azure DevOps**
  - Install **tfx-cli** using `npm`, a component of Node.js by running:
    ```no-highlight
    npm i -g tfx-cli 
    ```
    To learn more about **tfx-cli**, see the [Node CLI for Azure DevOps on GitHub](https://github.com/Microsoft/tfs-cli).

## Personal access token
Start by creating a personal access token and paste it into the sign in command.

```
~$ tfx login
Copyright Microsoft Corporation

> Service URL: {url}
> Personal access token: xxxxxxxxxxxx
Logged in successfully
```


Examples of valid URLs are:

- `https://marketplace.visualstudio.com`
- `https://youraccount.visualstudio.com/DefaultCollection`


 
## Configure for Basic authentication

> [!IMPORTANT]
> Basic authentication is not recommended.  Turning on IIS basic authentication causes various issues, and you should 
> use [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) instead.  For example, if you turn on IIS basic authentication, GIT command line stops working.


Follow these steps to enable basic auth for your Azure DevOps instance:


> [!WARNING]
> Basic authentication sends usernames and passwords in plaintext. You should consider [configuring Azure DevOps Server to use SSL](/azure/devops/server/admin/setup-secure-sockets-layer) in order to enable secure communication when using basic auth.
 

1. Install the `Basic Authentication` feature for IIS in Server Manager
   <div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
   <img alt="Configure basic authentication feature" src="./media/configureBasicAuthFeature.png" style="display:block;padding-bottom:10px;padding-top:10px;margin-left:auto;margin-right:auto">
   </div>
2. Open IIS Manager and expand to the <code>Azure DevOps Server</code> website, double-click the <code>Authentication</code> tile in the Features view.

3. Choose `Basic Authentication` in the list of authentication methods. Choose `Enable` in the right hand column. You should now see `Basic Authentication` enabled.

> [!NOTE]
> Leave the **domain** and **realm** settings for Basic Authentication empty.

## tfx sign in with Basic authentication

Now you can start to use `tfx` against your server. You'll want to sign in before issuing commands.

1. Enter the following command:
   ```no-highlight
   tfx login --auth-type basic
   ```

2. Add your service url.
3. Add your username. Use `domain\user` (e.g. fabrikam\peter). If you are working on a workgroup machine, use `machinename\user`.
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