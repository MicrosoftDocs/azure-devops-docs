---
title: Run the agent behind a web proxy
ms.custom: seodec18
description: Learn how you can run a v2 private build and release agent behind a web proxy for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 6AC4BA22-9F6F-44B5-BB15-445A7CFD2AD4
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 03/15/2019
monikerRange: '>= tfs-2015'
---

# Run a self-hosted agent behind a web proxy

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

When your self-hosted agent requires a web proxy, you can inform the agent about the proxy during configuration.
This allows your agent to connect to Azure Pipelines or TFS through the proxy.
This in turn allows the agent to get sources and download artifacts.
Finally, it passes the proxy details through to tasks which also need proxy settings in order to reach the web.

::: moniker range=">= tfs-2018"

## Azure Pipelines, TFS 2018 RTM and newer

(Applies to agent version 2.122 and newer.)

To enable the agent to run behind a web proxy, pass `--proxyurl`, `--proxyusername` and `--proxypassword` during agent configuration.  
  
 For example:
 
 # [Windows](#tab/windows)

 ```
./config.cmd --proxyurl http://127.0.0.1:8888 --proxyusername "myuser" --proxypassword "mypass"
```

 # [macOS and Linux](#tab/unix)

 ```
./config.sh --proxyurl http://127.0.0.1:8888 --proxyusername "myuser" --proxypassword "mypass"
```
 ---
 
We store your proxy credential responsibly on each platform to prevent accidental leakage.
On Linux, the credential is encrypted with a symmetric key based on the machine ID.
On macOS, we use the Keychain.
On Windows, we use the Credential Store.

> [!Note]
> Agent version 122.0, which shipped with TFS 2018 RTM, has a known issue configuring as a service on Windows.
> Because the Windows Credential Store is per user, you must configure the agent using the same user the service
> is going to run as. For example, in order to configure the agent service run as `mydomain\buildadmin`,
> you must launch `config.cmd` as `mydomain\buildadmin`. You can do that by logging into the machine with
> that user or using `Run as a different user` in the Windows shell.

### How the agent handles the proxy within a build or release job

The agent will talk to Azure DevOps/TFS service through the web proxy specified in the `.proxy` file.

Since the code for the `Get Source` task in builds and `Download Artifact` task in releases are also baked into the agent, those tasks will follow the agent proxy configuration from the `.proxy` file.  

The agent exposes proxy configuration via environment variables for every task execution.
Task authors need to use [azure-pipelines-task-lib](https://github.com/Microsoft/azure-pipelines-task-lib) methods to retrieve proxy configuration and [handle the proxy](https://github.com/Microsoft/azure-pipelines-task-lib/blob/master/node/docs/proxy.md) within their task.

::: moniker-end

::: moniker range="<= tfs-2017"

## TFS 2017.2 and older

> [!IMPORTANT]
> You also can use this method for Azure Pipelines and newer versions of TFS.
> We strongly recommend the more modern method, which you can access by switching to the TFS 2018 or Azure Pipelines docs.

In the agent root directory, create a .proxy file with your proxy server url.

# [Windows](#tab/windows)

```ps
echo http://name-of-your-proxy-server:8888 | Out-File .proxy
```  

If your proxy doesn't require authentication, then you're ready to configure and run the agent. See [Deploy an agent on Windows](v2-windows.md).

# [macOS and Linux](#tab/unix)

```bash
echo http://name-of-your-web-proxy:8888 > .proxy
```  

If your proxy doesn't require authentication, then you're ready to configure and run the agent. See [Deploy an agent on macOS](v2-osx.md) or [Deploy an agent on Linux](v2-linux.md).

---

> [!NOTE]
> For backwards compatibility, if the proxy is not specified as described above, the agent also checks for a proxy URL from the VSTS_HTTP_PROXY environment variable.

### Proxy authentication

If your proxy requires authentication, the simplest way to handle it is to grant permissions to the user under which the agent runs. Otherwise, you can provide credentials through environment variables. When you provide credentials through environment variables, the agent keeps the credentials secret by masking them in job and diagnostic logs. To grant credentials through environment variables, set the following variables:

# [Windows](#tab/windows)

```ps
$env:VSTS_HTTP_PROXY_USERNAME = "proxyuser"
$env:VSTS_HTTP_PROXY_PASSWORD = "proxypassword"
```  

# [macOS and Linux](#tab/unix)

```bash
export VSTS_HTTP_PROXY_USERNAME=proxyuser
export VSTS_HTTP_PROXY_PASSWORD=proxypassword
```  

If you are running your agent as a service:

1.

 ```bash
export VSTS_HTTP_PROXY_USERNAME=proxyuser
export VSTS_HTTP_PROXY_PASSWORD=proxypassword
```  
1. Update the environment variables. See [macOS](v2-osx.md#service-update-environment-variables) or [Linux](v2-linux.md#service-update-environment-variables).

---

> [!NOTE]
> This procedure enables the agent infrastructure to operate behind a web proxy. Your build pipeline and scripts must still handle proxy configuration for each task and tool you run in your build. For example, if you are using a task that makes a REST API call, you must configure the proxy for that task.

::: moniker-end

## Specify proxy bypass URLs

Create a `.proxybypass` file in the agent's root directory that specifies regular expressions (in ECMAScript syntax) to match URLs that should bypass the proxy. For example:

```
github\.com
bitbucket\.com
```
