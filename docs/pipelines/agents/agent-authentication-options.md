---
title: Self-hosted agent authentication options
description: Learn about authentication options for registering a self-hosted agent
ms.topic: conceptual
ms.date: 09/22/2023
monikerRange: '<= azure-devops'
---

# Self-hosted agent authentication options

| Agent registration method | Azure DevOps Services | Azure DevOps Server & TFS |
|--------------------------|-----------------------|---------------------------|
| [Personal access token (PAT)](#personal-access-token-pat) | Supported | Supported when server is configured with HTTPS |
| [Service Principal (SP)](#service-principal-sp)      | Supported | Currently not supported |
| [Device code flow (AAD)](#device-code-flow-aad)     | Supported | Currently not suported |
| [Integrated](#integrated) | Not supported | Windows agents only |
| [Negotiate](#negotiate) | Not supported | Windows agents only |
| [Alternate (ALT)](#alternate-alt) | Not supported | Supported when server is configured with HTTPS |

## Personal access token (PAT)

[Generate](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) and use a PAT to connect an agent with Azure Pipelines or TFS 2017 and newer. PAT is the only scheme that works with Azure Pipelines. The PAT must have **Agent Pools (read, manage)** scope (for a [deployment group](../release/deployment-groups/index.md) agent, the PAT must have **Deployment group (read, manage)** scope), and while a single PAT can be used for registering multiple agents, the PAT is used only at the time of registering the agent, and not for subsequent [communication](#communication). For more information, see the Authenticate with a personal access token (PAT) section in the [Windows](windows-agent.md), [Linux](linux-agent.md), or [macOS](osx-agent.md) self-hosted agents articles.

To use a PAT with Azure DevOps Server, your server must be configured with HTTPS. See [Web site settings and security](/azure/devops/server/admin/websitesettings).

## Service Principal (SP)

## Device code flow (AAD)

## Integrated

Connect a Windows agent to TFS using the credentials of the signed-in user through a Windows authentication scheme such as NTLM or Kerberos.

To use this method of authentication, you must first configure your TFS server.

1. Sign into the machine where you are running TFS.

1. Start Internet Information Services (IIS) Manager. Select your TFS site and make sure Windows Authentication is enabled with a valid provider such as NTLM or Kerberos.

![IIS TFS windows authentication](media/configure-tfs-authentication/iis-tfs-authentication-windows.png)

![IIS TFS windows authentication with ntlm provider](media/configure-tfs-authentication/iis-tfs-authentication-windows-ntlm-provider.png)


## Negotiate

Connect to TFS as a user other than the signed-in user through a Windows authentication scheme such as NTLM or Kerberos.

To use this method of authentication, you must first configure your TFS server.

1. Log on to the machine where you are running TFS.

1. Start Internet Information Services (IIS) Manager. Select your TFS site and make sure Windows Authentication is enabled with the Negotiate provider and with another method such as NTLM or Kerberos.

![IIS TFS windows authentication](media/configure-tfs-authentication/iis-tfs-authentication-windows.png)

![IIS TFS windows authentication with negotiate and ntlm provider](media/configure-tfs-authentication/iis-tfs-authentication-windows-negotiate-and-ntlm-providers.png)

## Alternate (ALT)

Connect to TFS using Basic authentication. To use this method, you must first [configure HTTPS on TFS](/azure/devops/server/admin/websitesettings).

To use this method of authentication, you must configure your TFS server as follows:

1. Sign in to the machine where you are running TFS.

1. Configure basic authentication. See [Using `tfx` against Team Foundation Server 2015 using Basic Authentication](https://github.com/Microsoft/tfs-cli/blob/master/docs/configureBasicAuth.md).
