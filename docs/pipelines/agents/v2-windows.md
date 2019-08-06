---
title: Deploy a Azure Pipelines agent on Windows
ms.custom: seodec18
description: Learn how to use Windows agents to build and deploy your Windows and Azure code for Azure Pipelines and TFS.
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 20409B8F-A3A9-49A0-A418-1840BD7ADA8E
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 03/19/2019
monikerRange: '>= tfs-2015'
---

# Self-hosted Windows agents

**Azure Pipelines | TFS 2018 | TFS 2017 | [TFS 2015](v1-windows.md) | [Previous versions (XAML builds)](https://msdn.microsoft.com/library/ms252495%28v=vs.120%29.aspx)**

::: moniker range="tfs-2015"

> [!IMPORTANT]
> For TFS 2015, see [Self-hosted Windows agents - TFS 2015](v1-windows.md).

::: moniker-end

To build and deploy Windows, Azure, and other Visual Studio solutions you'll need at least one Windows agent. Windows agents can also build Java and Android apps.

> Before you begin:
> * If your code is in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted Windows agent.
> * If your code is in an on-premises Team Foundation Server (TFS) 2015 server, see [Deploy an agent on Windows for on-premises TFS 2015](v1-windows.md).
> *  Otherwise, you've come to the right place to set up an agent on Windows. Continue to the next section.

[!INCLUDE [include](_shared/concepts.md)]

## Check prerequisites

Make sure your machine is prepared with our [Windows system prerequisites](https://aka.ms/vstsagentwinsystem).

If you're building from a Subversion repo, you must install the Subversion client on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

### Hardware specs 

The hardware specs for your agents will vary with your needs, team size, etc.
It's not possible to make a general recommendation that will apply to everyone.
As a point of reference, the Azure DevOps team builds its hosted agents using the [hosted agents](hosted.md).
On the other hand, the bulk of the Azure DevOps code is built by 24-core server class machines
running 4 agents apiece.

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [permissions](_shared/v2/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab.md)]

1. Click **Download agent**.</li>

1. On the **Get agent** dialog box, click **Windows**.</li>

1. On the left pane, select the processor architecture of the installed Windows OS version on your machine.
The x64 agent version is intended for 64-bit Windows, whereas the x86 version is intended for 32-bit Windows.
If you aren't sure which version of Windows is installed, [follow these instructions to find out](/windows/client-management/windows-version-search).

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Then run `config.cmd`. This will ask you a series of questions to configure the agent.

::: moniker-end

::: moniker range="azure-devops-2019"

### Azure DevOps Server 2019

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure DevOps Server 2019, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab-server-2019.md)]

1. Click **Download agent**.</li>

1. On the **Get agent** dialog box, click **Windows**.</li>

1. On the left pane, select the processor architecture of the installed Windows OS version on your machine.
The x64 agent version is intended for 64-bit Windows, whereas the x86 version is intended for 32-bit Windows.
If you aren't sure which version of Windows is installed, [follow these instructions to find out](/windows/client-management/windows-version-search).

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Then run `config.cmd`. This will ask you a series of questions to configure the agent.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

### TFS 2017 and TFS 2018

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to TFS, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab-tfs-2018.md)]

1. Click **Download agent**.

1. On the **Get agent** dialog box, click **Windows**.

1. Click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Then run `config.cmd`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.

::: moniker-end

> [!Note]
> We strongly recommend you configure the agent from an elevated PowerShell window.
> If you want to configure as a service, this is **required**.

### Server URL and authentication

::: moniker range="azure-devops"
When setup asks for your server URL, for Azure DevOps Services, answer `https://dev.azure.com/{your-organization}`.
::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"
When setup asks for your server URL, for TFS, answer `https://{your_server}/tfs`.
::: moniker-end

::: moniker range="azure-devops"
When setup asks for your authentication type, choose **PAT**.
Then paste the [PAT token you created](#permissions) into the command prompt window.

> [!NOTE]
> When using PAT as the authentication method, the PAT token is only used during the initial configuration of the agent. Later, if the PAT expires or needs to be renewed, no further changes are required by the agent.

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops"
> [!IMPORTANT]
> 
> Make sure your server is [configured to support the authentication method](agents.md#configure-tfs-authentication) you want to use.
  
When you configure your agent to connect to TFS, you've got the following options:

* **Alternate** Connect to TFS using Basic authentication. After you select Alternate you'll be prompted for your credentials.

* **Negotiate** Connect to TFS as a user other than the signed-in user via a Windows authentication scheme such as NTLM or Kerberos. After you select Negotiate you'll be prompted for credentials.

* **Integrated** (Default) Connect a Windows agent to TFS using the credentials of the signed-in user via a Windows authentication scheme such as NTLM or Kerberos. You won't be prompted for credentials after you choose this method.
 
* **PAT** Supported only on Azure Pipelines and TFS 2017 and newer. After you choose PAT, paste the [PAT token you created](#permissions) into the command prompt window. Use a personal access token (PAT) if your TFS instance and the agent machine are not in a trusted domain. PAT authentication is handled by your TFS instance instead of the domain controller.

> [!NOTE]
> When using PAT as the authentication method, the PAT token is used only for the initial configuration of the agent. If the PAT needs to be regenerated, no further changes are needed to the agent. 

Learn more at [Communication with Azure Pipelines or TFS](agents.md#communication).

::: moniker-end

### Choose interactive or service mode

For guidance on whether to run the agent in interactive mode or as a service, see [Agents: Interactive vs. service](agents.md#interactive-or-service).

If you choose to run as a service (which we recommend), the username you run as should be 20 characters or less.

## Run the agent

 If you configured the agent to run interactively, to run it:

 ```ps
 .\run.cmd
 ```

If you configured the agent to run as a service, it starts automatically. You can view and control the agent running status from the services snap-in. Run `services.msc` and look for one of:
- "Azure Pipelines Agent (*name of your agent*)".
- "VSTS Agent (*name of your agent*)".
- "vstsagent.(*organization name*).(*name of your agent*)".

> [!Note]
> If you need to change the agent's logon account, don't do it from the Services
> snap-in. Instead, see the information below to re-configure the agent.

To use your agent, run a [job](../process/phases.md) using the agent's pool.
If you didn't choose a different pool, your agent will be in the **Default** pool.

[!INCLUDE [include](_shared/v2/replace-agent.md)]

## Remove and re-configure an agent

To remove the agent:

```ps
.\config remove
```

After you've removed the agent, you can [configure it again](#download-configure).

## Unattended config

The agent can be set up from a script with no human intervention.
You must pass `--unattended` and the answers to all questions.

[!INCLUDE [unattend](./_shared/v2/unattended-config.md)]

`.\config --help` always lists the latest required and optional responses.

## Help on other options

To learn about other options:

```ps
.\config --help
```

The help provides information on authentication alternatives and unattended configuration.

[!INCLUDE [include](_shared/capabilities.md)]

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](_shared/v2/qa-agent-version.md)]

::: moniker range="tfs-2017"

### What version of the agent runs with TFS 2017?

| TFS version | Minimum agent version |
|-|-|
| 2017 RTM | 2.105.7 |
| 2017.3 | 2.112.0 |

::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](_shared/v2/qa-firewall.md)]
::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

::: moniker range="azure-devops"
### How do I set different environment variables for each individual agent?

Create a `.env` file under agent's root directory and put environment variables you want to set into the file as following format:

```
MyEnv0=MyEnvValue0
MyEnv1=MyEnvValue1
MyEnv2=MyEnvValue2
MyEnv3=MyEnvValue3
MyEnv4=MyEnvValue4
```
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](_shared/v2/web-proxy-bypass.md)]
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](_shared/v2/qa-urls.md)]
::: moniker-end

::: moniker range="< azure-devops"
[!INCLUDE [include](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
