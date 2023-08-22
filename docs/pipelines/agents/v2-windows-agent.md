---
title: Deploy an Azure Pipelines agent on Windows (2.x)
ms.custom: contperf-fy21q1
description: Learn how to use Windows agents to build and deploy your Windows and Azure code for Azure Pipelines and TFS (2.x)
ms.topic: conceptual
ms.assetid: 20409B8F-A3A9-49A0-A418-1840BD7ADA8E
ms.date: 05/05/2023
monikerRange: '<= azure-devops'
---

# Self-hosted Windows agents (2.x)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

:::moniker range="azure-devops"

> [!IMPORTANT]
> This article provides guidance for using the 2.x version agent software with Azure DevOps Server and TFS. If you're using Azure DevOps Services, see [Self-hosted Windows agents](windows-agent.md).

:::moniker-end

To build and deploy Windows, Azure, and other Visual Studio solutions you'll need at least one Windows agent. Windows agents can also build Java and Android apps.

> Before you begin:
> * If your code is in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted Windows agent.
> *  Otherwise, you've come to the right place to set up an agent on Windows. Continue to the next section.

[!INCLUDE [include](includes/concepts.md)]

## Check prerequisites

Make sure your machine has these prerequisites:
- Windows 7 SP1 [ESU](/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq), 8.1, 10, or 11 (if using a client OS)
- Windows 2012 or higher (if using a server OS)
- [PowerShell 3.0](/powershell/scripting/install/installing-windows-powershell) or higher
- [.NET Framework](/dotnet/framework/install/) 4.6.2 or higher

> [!IMPORTANT]
> Starting December 2019, the minimum required .NET version for build agents is 4.6.2 or higher.

Recommended:
- [Visual Studio build tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16) (2015 or higher)


If you're building from a Subversion repo, you must install the [Subversion client](https://subversion.apache.org/) on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

### Hardware specs 

The hardware specs for your agents will vary with your needs, team size, etc.
It's not possible to make a general recommendation that will apply to everyone.
As a point of reference, the Azure DevOps team builds the hosted agents code using pipelines that utilize [hosted agents](hosted.md).
On the other hand, the bulk of the Azure DevOps code is built by 24-core server class machines
running 4 self-hosted agents apiece.

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [permissions](includes/v2/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, choose **Windows**.

1. On the left pane, select the processor architecture of the installed Windows OS version on your machine.
The x64 version is intended for 64-bit Windows, whereas the x86 version is intended for 32-bit Windows.
If you aren't sure which version of Windows is installed, [follow these instructions to find out](/windows/client-management/windows-version-search).

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces. A recommended folder is `C:\agents`. Extracting in the download folder or other user folders may cause permission issues. Then run `config.cmd`. This will ask you a series of questions to configure the agent.

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

### Azure DevOps Server  2019 and Azure DevOps Server 2020

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure DevOps Server 2019, and navigate to the **Agent pools** tab:

      [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Click **Download agent**.</li>

1. On the **Get agent** dialog box, click **Windows**.</li>

1. On the left pane, select the processor architecture of the installed Windows OS version on your machine.
The x64 version is intended for 64-bit Windows, whereas the x86 version is intended for 32-bit Windows.
If you aren't sure which version of Windows is installed, [follow these instructions to find out](/windows/client-management/windows-version-search).

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces. A recommended folder is `C:\agents`. Extracting in the download folder or other user folders may cause permission issues. Then run `config.cmd`. This will ask you a series of questions to configure the agent.

::: moniker-end

::: moniker range="tfs-2018"

### TFS 2018

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to TFS, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab/agent-pools-tab-tfs-2018.md)]

1. Click **Download agent**.

1. On the **Get agent** dialog box, click **Windows**.

1. Click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces. A recommended folder is `C:\agents`. Extracting in the download folder or other user folders may cause permission issues. Then run `config.cmd`. 

::: moniker-end

> [!IMPORTANT]
> We strongly recommend you configure the agent from an elevated PowerShell window.
> If you want to configure as a service, this is **required**.
>
> You must not use [Windows PowerShell ISE](/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise) to configure the agent.

> [!IMPORTANT]
> For security reasons we strongly recommend making sure the agents folder (`C:\agents`) is only editable by admins.


> [!Note]
> Please avoid using mintty based shells, such as git-bash, for agent configuration. Mintty is not fully compatible with native Input/Output Windows API ([here](https://github.com/mintty/mintty/wiki/Tips#inputoutput-interaction-with-alien-programs) is some info about it) and we couldn't guarantee correct work of setup script in this case.

### Server URL and authentication

::: moniker range="azure-devops"
When setup asks for your server URL, for Azure DevOps Services, answer `https://dev.azure.com/{your-organization}`.
::: moniker-end

::: moniker range="< azure-devops"
When setup asks for your server URL, for TFS, answer `https://{your_server}/tfs`.
::: moniker-end

::: moniker range="azure-devops"
When setup asks for your authentication type, choose **PAT**.
Then paste the [PAT token you created](#permissions) into the command prompt window.

> [!NOTE]
> When using PAT as the authentication method, the PAT token is only used during the initial configuration of the agent. Later, if the PAT expires or needs to be renewed, no further changes are required by the agent.

::: moniker-end

::: moniker range="< azure-devops"
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

If you choose to run as a service (which we recommend), the username you run as should be 20 characters or fewer.

## Run the agent

### Run interactively

If you configured the agent to run interactively, to run it:

 ```ps
 .\run.cmd
 ```

To restart the agent, press Ctrl+C to stop the agent and then run `run.cmd` to restart it. 

### Run once

For agents configured to run interactively, you can choose to have the agent accept only one job.
To run in this configuration:

 ```ps
 .\run.cmd --once
 ```

Agents in this mode will accept only one job and then spin down gracefully (useful for running in [Docker](docker.md) on a service like Azure Container Instances).

### Run as a service

If you configured the agent to run as a service, it starts automatically. You can view and control the agent running status from the services snap-in. Run `services.msc` and look for one of:
- "Azure Pipelines Agent (*name of your agent*)".
- "VSTS Agent (*name of your agent*)".
- "vstsagent.(*organization name*).(*name of your agent*)".

To restart the agent, right-click the entry and choose **Restart**.

> [!Note]
> If you need to change the agent's logon account, don't do it from the Services
> snap-in. Instead, see the information below to re-configure the agent.

To use your agent, run a [job](../process/phases.md) using the agent's pool.
If you didn't choose a different pool, your agent will be in the **Default** pool.

[!INCLUDE [include](includes/v2/replace-agent.md)]

## Remove and re-configure an agent

To remove the agent:

```ps
.\config remove
```

After you've removed the agent, you can [configure it again](#download-configure).

## Unattended config

The agent can be set up from a script with no human intervention.
You must pass `--unattended` and then answers to all questions.

[!INCLUDE [unattend](./includes/v2/unattended-config.md)]

`.\config --help` always lists the latest required and optional responses.

## Diagnostics

If you're having trouble with your self-hosted agent, you can try running diagnostics.
After configuring the agent:

```ps
.\run --diagnostics
```

This will run through a diagnostic suite that may help you troubleshoot the problem.
The diagnostics feature is available starting with version 2.165.0.

## Help on other options

To learn about other options:

```ps
.\config --help
```

The help provides information on authentication alternatives and unattended configuration.

[!INCLUDE [include](includes/capabilities.md)]

## FAQ

[!INCLUDE [include](includes/v3/qa-agent-version.md)]

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](includes/v2/qa-agent-version.md)]

::: moniker range="azure-devops"
[!INCLUDE [include](includes/v2/qa-firewall.md)]
::: moniker-end

### How do I run the agent with self-signed certificate?

> [!NOTE]
> Running the agent with a self-signed certificate only applies to Azure DevOps Server.

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

### How do I restart the agent

If you are running the agent interactively, see the restart instructions in [Run interactively](#run-interactively). If you are running the agent as a service, restart the agent by following the steps in [Run as a service](#run-as-a-service).

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
[!INCLUDE [include](includes/v2/web-proxy-bypass.md)]
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](includes/v2/qa-urls.md)]
::: moniker-end

::: moniker range="< azure-devops"
[!INCLUDE [include](../includes/qa-versions.md)]
::: moniker-end

### What is enable SERVICE_SID_TYPE_UNRESTRICTED for agent service?

When configuring the agent software on Windows Server, you can specify the service security identifier from the following prompt.

```
Enter enable SERVICE_SID_TYPE_UNRESTRICTED for agent service (Y/N) (press enter for N)
```

Previous versions of the agent software set the service security identifier type to `SERVICE_SID_TYPE_NONE`, which is the default value for the current agent versions. To configure the security service identifier type to `SERVICE_SID_TYPE_UNRESTRICTED`, press `Y`.

For more information, see [SERVICE_SID_INFO structure](/windows/win32/api/winsvc/ns-winsvc-service_sid_info) and [Security identifiers](/windows-server/identity/ad-ds/manage/understand-security-identifiers).

<!-- ENDSECTION -->
