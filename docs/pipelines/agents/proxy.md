---
title: Run the agent behind a web proxy
ms.custom: seodec18
description: Learn how you can run a v2 private build and release agent behind a web proxy for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 6AC4BA22-9F6F-44B5-BB15-445A7CFD2AD4
ms.date: 01/25/2023
monikerRange: '<= azure-devops'
---

# Run a self-hosted agent behind a web proxy

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

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

Note that many tools do not automatically use the agent configured proxy settings. For example, tools such as `curl` and `dotnet` may require proxy environment variables such as `http_proxy` to also be set on the machine.

::: moniker-end

## Specify proxy bypass URLs

Create a `.proxybypass` file in the agent's root directory that specifies regular expressions (in ECMAScript syntax) to match URLs that should bypass the proxy. For example:

```
github\.com
bitbucket\.com
```
