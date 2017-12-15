---
title: Run the agent behind a web proxy
description: Run the agent behind a web proxy
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.assetid: 6AC4BA22-9F6F-44B5-BB15-445A7CFD2AD4
ms.manager: douge
ms.author: alewis
ms.date: 11/16/2017
---

# Run a private agent behind a web proxy

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

This topic explains how to run a v2 private agent behind a web proxy. 

## VSTS, TFS 2018 RTM and newer

(Applies to agent version 2.122 and newer.)

When your private agent is behind a web proxy, you can:

* Allow your agent to connect to VSTS or TFS behind a web proxy.

* Allow your agent to get sources in the build job and download artifacts in the release job.

* Develop custom vsts-task-lib tasks that leverage the proxy agent configuration.

To enable the agent to run behind a web proxy

1. Pass `--proxyurl`, `--proxyusername` and `--proxypassword` during agent configuration.  
  
 For example:
 
 # [Windows](#tab/windows)

 ```
./config.cmd --proxyurl http://127.0.0.1:8888 --proxyusername "1" --proxypassword "1"
```

 # [macOS and Linux](#tab/unix)

 ```
./sh --proxyurl http://127.0.0.1:8888 --proxyusername "1" --proxypassword "1"
```
 ---
 
 We store your proxy credential securely on each platform.  
 
 # [Windows](#tab/windows)

 Windows Credential Store

 # [macOS and Linux](#tab/unix)

 OSX: OSX Keychain
 
 Linux: Encrypted with symmetric key based on machine id

 ---

1. **Limitation of agent version 122.0**

 This applies to TFS 2018 RTM. It also could apply to VSTS, unless you upgrade your agent.

 # [Windows](#tab/windows)

 The Windows Credential Store will cause a limitation for configuring agent as Windows service**  
    Since we store your proxy credential into `Windows Credential Store` and the `Windows Credential Store` is per user, when you configure the agent as Windows service, you need run the configuration as the same user as the service is going to run as.  
    Ex, in order to configure the agent service run as `mydomain\buildadmin`, you need either login the box as `mydomain\buildadmin` and run `config.cmd` or login the box as someone else but use `Run as different user` option when you run `config.cmd` to run as `mydomain\buildadmin`  

 # [macOS and Linux](#tab/unix)

 No limitation.

 ---

### How the agent handles the proxy within a build or release job

After configuring proxy for agent, agent infrastructure will start talk to VSTS/TFS service through the web proxy specified in the `.proxy` file.  

Since the code for `Get Source` step in build job and `Download Artifact` step in release job are also bake into agent, those steps will also follow the agent proxy configuration from `.proxy` file.  

Agent will expose proxy configuration via environment variables for every task execution, task author need to use `vsts-task-lib` methods to retrieve back proxy configuration and handle proxy with their task.

### Get proxy configuration by using [VSTS-Task-Lib](https://github.com/Microsoft/vsts-task-lib) method

See [VSTS-Task-Lib doc](https://github.com/Microsoft/vsts-task-lib/blob/master/node/docs/proxy.md) for details.

## TFS 2017.2 and older

(You also can use this method for VSTS and newer versions of TFS, but we recommend the above method in those cases.)

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
> This procedure enables the agent infrastructure to operate behind a web proxy. Your build definition and scripts must still handle proxy configuration for each task and tool you run in your build. For example, if you are using a task that makes a REST API call, you must configure the proxy for that task.

## Specify proxy bypass URLs

Create a `.proxybypass` file under agent root to specify proxy bypass Url's Regex (ECMAScript syntax).  
For example:

```
github\.com
bitbucket\.com
```