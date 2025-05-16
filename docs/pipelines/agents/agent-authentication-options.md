---
title: Self-hosted agent authentication options
description: Learn about authentication options for registering a self-hosted agent
ms.topic: conceptual
ms.date: 03/26/2025
ms.custom: arm2024
monikerRange: '<= azure-devops'
---

# Self-hosted agent authentication options

Azure Pipelines provides a choice of several authentication options you can use when you are registering an agent. These methods of authentication are used only during agent registration. See [Agents communication](./agents.md#communication) for details of how agents communicate after registration.

| Agent registration method | Azure DevOps Services | Azure DevOps Server & TFS |
|--------------------------|-----------------------|---------------------------|
| [Personal access token (PAT)](#personal-access-token-pat) | Supported | Supported when server is configured with HTTPS |
| [Service Principal (SP)](#service-principal)      | Supported | Currently not supported |
| [Device code flow (Microsoft Entra ID)](#device-code-flow)   | Supported | Currently not supported |
| [Integrated](#integrated) | Not supported | Windows agents only |
| [Negotiate](#negotiate) | Not supported | Windows agents only |
| [Alternate (ALT)](#alternate-alt) | Not supported | Supported when server is configured with HTTPS |

## Personal access token (PAT)

Specify **PAT** for authentication type during agent configuration to use a personal access token to authenticate during agent registration, then specify a personal access token (PAT) with **Agent Pools (read, manage)** scope (or **Deployment group (read, manage)** scope for a [deployment group](../release/deployment-groups/index.md) agent) can be used for agent registration.

For more information, see [Register an agent using a personal access token (PAT)](./personal-access-token-agent-registration.md)

## Service Principal

Specify **SP** for authentication type during agent configuration to use a service principal to authenticate during agent registration.

For more information, see [Register an agent using a Service Principal](./service-principal-agent-registration.md).

## Device code flow 

Specify `AAD` for authentication type during agent configuration to use device code flow to authenticate during agent registration.

For more information, see [Register an agent using device code flow](./device-code-flow-agent-registration.md).

## Integrated

:::moniker range="azure-devops"

Integrated windows authentication for agent registration is only available for Windows agent registration on Azure DevOps Server and TFS.

:::moniker-end

:::moniker range="< azure-devops"

Specify **Integrated** for authentication type during agent configuration to use integrated Windows authentication to authenticate during agent registration.

Connect a Windows agent to TFS using the credentials of the signed-in user through a Windows authentication scheme such as NTLM or Kerberos.

To use this method of authentication, you must first configure your TFS server.

1. Sign into the machine where you are running TFS.

1. Start Internet Information Services (IIS) Manager. Select your TFS site and make sure Windows Authentication is enabled with a valid provider such as NTLM or Kerberos.

![Screenshot of IIS TFS windows authentication configuration.](media/configure-tfs-authentication/iis-tfs-authentication-windows.png)

![Screenshot of IIS TFS windows authentication with NTLM provider configuration.](media/configure-tfs-authentication/iis-tfs-authentication-windows-ntlm-provider.png)

:::moniker-end

## Negotiate

:::moniker range="azure-devops"

The negotiate authentication method for agent registration is only available for Windows agent registration on Azure DevOps Server and TFS.

:::moniker-end

:::moniker range="< azure-devops"

Connect to TFS as a user other than the signed-in user through a Windows authentication scheme such as NTLM or Kerberos.

To use this method of authentication, you must first configure your TFS server.

1. Log on to the machine where you are running TFS.

1. Start Internet Information Services (IIS) Manager. Select your TFS site and make sure Windows Authentication is enabled with the Negotiate provider and with another method such as NTLM or Kerberos.

![Screenshot of IIS TFS windows authentication configuration.](media/configure-tfs-authentication/iis-tfs-authentication-windows.png)

![Screenshot of IIS TFS windows authentication with negotiate and NTLM provider configuration.](media/configure-tfs-authentication/iis-tfs-authentication-windows-negotiate-and-ntlm-providers.png)

:::moniker-end

## Alternate (ALT)

:::moniker range="azure-devops"

The alternate (basic) authentication method for agent registration is only available on Azure DevOps Server and TFS.

:::moniker-end

:::moniker range="< azure-devops"

Connect to TFS using Basic authentication. To use this method, you must first [configure HTTPS on TFS](/azure/devops/server/admin/websitesettings).

To use this method of authentication, you must configure your TFS server as follows:

1. Sign in to the machine where you are running TFS.

1. Configure basic authentication. See [Using `tfx` against Team Foundation Server 2015 using Basic Authentication](https://github.com/Microsoft/tfs-cli/blob/master/docs/configureBasicAuth.md).

> [!NOTE]
> By product design, IIS anonymous authentication is required for OAuth authentication to work.
> This OAuth authentication is being used by Azure DevOps for the agent and pipeline functionality. For this reason even if we have agents already configured, those agents will become unusable if we disable the 
> anonymous authentication.
> Azure DevOps products already have an excellent security approach. The TFS/Azure DevOps server application in IIS will not let unauthenticated requests through. That just lets it through the IIS front door to the
> application, which enforces OAuth. For example, in a pipeline run, the build server generates an OAuth token per build, which is scoped to the build and expires after the build. So even though the token is guarded, if
> leaked, it's useless after the build - contrary to an identity. The OAuth token is also not available to code run by the build process (unit tests checked in by developers). If it relied on the Windows identity the
> Windows service ran as, then developers running unit tests in the CI could elevate to access or delete code they don't have permissions to.

:::moniker-end


