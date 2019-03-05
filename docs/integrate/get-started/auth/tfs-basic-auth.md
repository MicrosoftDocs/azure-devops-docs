---
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
title: Basic Authentication for Team Foundation Server
description: Use the TFS Cross Platform (tfx) command line interface against TFS using basic authentication.
ms.assetid: 6dc7f977-4b62-4bd6-b77a-1c6cade1ffa8
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 03/10/2017
---

# Use the TFS Cross Platform Command Line with TFS using basic authentication or personal access tokens (PATs)

> [!IMPORTANT]
> Basic authentication is not recommended.  Turning on IIS basic authentication causes various issues, and you should 
> use [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) instead.  For example, if you turn on IIS basic authentication, GIT command line will stop working.


## If you know you want IIS basic authentication, then you'll need ...

- The latest version of **node**, which can be downloaded [here](https://nodejs.org/en/download/)
- **TFS Cross Platform Command Line Interface (tfx)**
    - **tfx** can be installed using `npm`, a component of Node.js by running:
```no-highlight
npm i -g tfx-cli
```

> To find out more about the tfx CLI, check out the [tfx documentation in GitHub](https://github.com/Microsoft/tfs-cli).

## Configure TFS to use Basic Authentication

> [!WARNING]
> Basic authentication sends usernames and passwords in plaintext. You should consider [configuring TFS to use SSL](/azure/devops/server/admin/setup-secure-sockets-layer) in order to enable secure communication when using basic auth.



Follow these steps to enable basic auth for your TFS:

1. Install the `Basic Authentication` feature for IIS in Server Manager
<div style="vertical-align:middle;display:block;width:60;margin-left:auto;margin-right:auto">
<img alt="Configure basic authentication feature" src="./_img/configureBasicAuthFeature.png" style="display:block;padding-bottom:10px;padding-top:10px;margin-left:auto;margin-right:auto">
</div>
2. Open IIS Manager and expand to the `Team Foundation Server` website, double click the `Authentication` tile in the Features view.

3. Click on `Basic Authentication` in the list of authentication methods. Click `Enable` in the right hand column. You should now see `Basic Authentication` enabled.

> [!NOTE]
> Leave the **domain** and **realm** settings for Basic Authentication empty.

## tfx login with Basic Authentication

Now you can start to use `tfx` against your TFS server. You'll want to login before issuing commands.

1. Type the following login command:
```no-highlight
tfx login --auth-type basic
```

2. You will be prompted to add your service url.
3. You will be prompted for your username. Use `domain\user` (e.g. fabrikam\peter). If you are working on a workgroup machine, use `machinename\user`.
4. You will be prompted for your password. Enter the password for the username you entered.

**You can now use any other tfx command.**

```no-highlight
> tfx login --auth-type basic
Copyright Microsoft Corporation

Enter service url > http://localhost:8080/tfs/defaultcollection
Enter username > fabfiber\peter
Enter password > *******
logged in successfully
```