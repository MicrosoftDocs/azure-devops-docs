---
title: Deploy an Azure Pipelines agent on Windows
description: Learn how to use Windows agents to build and deploy your Windows and Azure code for Azure Pipelines
ms.topic: conceptual
ms.date: 07/11/2025
monikerRange: '<= azure-devops'
---

# Self-hosted Windows agents

[!INCLUDE [version-gt-2022](../../includes/version-gt-2022.md)]

To build and deploy Windows, Azure, and other Visual Studio solutions you'll need at least one Windows agent. Windows agents can also build Java and Android apps.

:::moniker range="=azure-devops"

This article provides guidance for using the [4.x agent software](v4-agent.md) with Azure DevOps Services.

:::moniker-end

:::moniker range="<azure-devops"

This article provides guidance for using the [3.x agent software](v3-agent.md) with Azure DevOps Server. For a list of Azure DevOps Server versions that support the 3.x agent, see [Does Azure DevOps Server support the 3.x agent](v3-agent.md#does-azure-devops-server-support-the-3x-agent).

> [!IMPORTANT]
> If you're using Azure DevOps Server, you should be using the [4.x agent software](v4-agent.md).

:::moniker-end

> [!NOTE]
> This article describes how to configure a [self-hosted agent](agents.md#self-hosted-agents). If you're using Azure DevOps Services and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted Windows agent.

[!INCLUDE [include](includes/concepts.md)]

## Check prerequisites

Make sure your machine has these prerequisites:

* Operating system version
  * Client OS
    * Windows 7 SP1 [ESU](/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq)
    * Windows 8.1
    * Windows 10
    * Windows 11
  * Server OS
    * Windows Server 2012 or higher
* The agent software installs its own version of .NET so there's no .NET prerequisite.
* [PowerShell 3.0](/powershell/scripting/install/installing-windows-powershell) or higher
* **Subversion** - If you're building from a Subversion repo, you must install the Subversion client on the machine.
* Recommended - [Visual Studio build tools](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools) (2015 or higher)


You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

### Hardware specs 

The hardware specs for your agents will vary with your needs, team size, etc.
It's not possible to make a general recommendation that will apply to everyone.
As a point of reference, the Azure DevOps team builds the hosted agents code using pipelines that utilize [hosted agents](hosted.md).
On the other hand, the bulk of the Azure DevOps code is built by 24-core server class machines
running four self-hosted agents apiece.

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [permissions](includes/v3/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, choose **Windows**.

1. On the left pane, select the processor architecture of the installed Windows OS version on your machine.
The x64 agent version is intended for 64-bit Windows, whereas the x86 version is intended for 32-bit Windows.
If you aren't sure which version of Windows is installed, [follow these instructions to find out](/windows/client-management/windows-version-search).

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page to download the agent.

1. Unpack the agent into the directory of your choice. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces. A recommended folder is `C:\agents`. Extracting in the download folder or other user folders may cause permission issues.

> [!IMPORTANT]
> We strongly recommend you configure the agent from an elevated PowerShell window.
> If you want to configure as a service, this is **required**.
>
> You must not use [Windows PowerShell ISE](/powershell/scripting/windows-powershell/ise/introducing-the-windows-powershell-ise) to configure the agent.

> [!IMPORTANT]
> For security reasons we strongly recommend making sure the agents folder (`C:\agents`) is only editable by admins.


> [!Note]
> Please avoid using mintty based shells, such as git-bash, for agent configuration. Mintty is not fully compatible with native Input/Output Windows API ([here](https://github.com/mintty/mintty/wiki/Tips#inputoutput-interaction-with-alien-programs) is some info about it) and we can't guarantee the setup script will work correctly in this case.

## Install the agent

1. Start an elevated (PowerShell) window and set the location to where you unpacked the agent.

   ```ps
   cd C:\agents 

1. Run `config.cmd`. This will ask you a series of questions to configure the agent.

   ```ps
   .\config.cmd

### Server URL

:::moniker range="azure-devops"

When setup asks for your server URL, for Azure DevOps Services, answer `https://dev.azure.com/{your-organization}`.

:::moniker-end

:::moniker range="<azure-devops"

When setup asks for your server URL, for Azure DevOps Server, answer `https://{my-server}/{my-collection}`.

:::moniker-end

### Agent setup authentication type

When you register an agent, choose from the following authentication types, and setup will prompt you for the specific additional information required for each authentication type.  For more information, see [Self-hosted agent authentication options](./agent-authentication-options.md).

[!INCLUDE [agent-setup-authentication-type](./includes/agent-setup-authentication.md)]

:::moniker range="<= azure-devops-2022"

Windows agents have the following two additional authentication options on Azure DevOps Server and TFS.

* [**Negotiate**](./agent-authentication-options.md#negotiate) Connect to TFS as a user other than the signed-in user via a Windows authentication scheme such as NTLM or Kerberos. After you select Negotiate you'll be prompted for credentials.
* [**Integrated**](./agent-authentication-options.md#integrated) (Default) Connect a Windows agent to TFS using the credentials of the signed-in user via a Windows authentication scheme such as NTLM or Kerberos. You won't be prompted for credentials after you choose this method.

> [!IMPORTANT]
> Your server must be [configured to support the authentication method](agents.md#configure-tfs-authentication) to use Alternate, Negotiate, or Integrated authentication.

:::moniker-end

The authentication method used for registering the agent is used only during agent registration. To learn more about how agents communicate with Azure Pipelines after registration, see [Communication with Azure Pipelines or TFS](agents.md#communication).

### Choose interactive or service mode

For guidance on whether to run the agent in interactive mode or as a service, see [Agents: Interactive vs. service](agents.md#interactive-or-service).

If you choose to run as a service (which we recommend), the username you run as should be 20 characters or fewer.

## Run the agent

### Run interactively

If you configured the agent to run interactively, run the following the command to start the agent.

 ```ps
 .\run.cmd
 ```

To restart the agent, press Ctrl+C to stop the agent, and then run `run.cmd` to restart it. 

> [!NOTE]
> If you are running the agent from PowerShell Core to execute Windows PowerShell tasks, your pipeline may fail with an error such as `Error in TypeData "System.Security.AccessControl.ObjectSecurity": The member is already present`. This is because 
> Windows PowerShell inherits the `PSModulePath` environment variable, which includes PowerShell Core module locations, from its parent process. 
>
> As a workaround, you can set the agent's knob `AZP_AGENT_CLEANUP_PSMODULES_IN_POWERSHELL` to `true` in the pipeline. This will allow the agent to reset `PSModulePath` 
> before executing tasks.
> 
> ```yml    
> variables:
>  AZP_AGENT_CLEANUP_PSMODULES_IN_POWERSHELL: "true"
> ```
>
> If this workaround does not resolve your issue, or if you need to use custom module locations, you can set the `$Env:PSModulePath` variable as needed in your PowerShell Core window before running the agent.

#### Run once

You can also choose to have the agent accept only one job and then exit.
To run in this configuration, use the following command.

 ```ps
 .\run.cmd --once
 ```

Agents in this mode will accept only one job and then spin down gracefully (useful for running in [Docker](docker.md) on a service like Azure Container Instances).

### Run as a service

If you configured the agent to run as a service, it starts automatically. You can view and control the agent running status from the services snap-in. Run `services.msc` and look for one of:
- "Azure Pipelines Agent (*name of your agent*)"
- "VSTS Agent (*name of your agent*)"
- "vstsagent.(*organization name*).(*name of your agent*)"

> [!Note]
> To allow more flexibility with access control of an agent running as a service it
> is possible to set up the agent service SID type as [`SERVICE_SID_TYPE_UNRESTRICTED`] via
> flag or prompt during interactive configuration flow.
> By default, the agent service is configured with `SERVICE_SID_TYPE_NONE`.
>
> For more details about [SID](/windows-server/identity/ad-ds/manage/understand-security-identifiers) types please check this [documentation](/windows/win32/api/winsvc/ns-winsvc-service_sid_info#members).

To restart the agent, right-click the entry and choose **Restart**.

> [!Note]
> If you need to change the agent's logon account, don't do it from the Services
> snap-in. Instead, see the information below to reconfigure the agent.

To use your agent, run a [job](../process/phases.md) using the agent's pool.
If you didn't choose a different pool, your agent will be in the **Default** pool.

[!INCLUDE [include](includes/v3/replace-agent.md)]

## Remove and reconfigure an agent

To remove the agent:

```ps
.\config remove
```

After you've removed the agent, you can [configure it again](#download-configure).

## Unattended config

The agent can be set up from a script with no human intervention.
You must pass `--unattended` and the answers to all questions.

[!INCLUDE [unattend](./includes/v3/unattended-config.md)]

`.\config --help` always lists the latest required and optional responses.

## Diagnostics

If you're having trouble with your self-hosted agent, you can try running diagnostics.
After configuring the agent:

```ps
.\run --diagnostics
```

This will run through a diagnostic suite that may help you troubleshoot the problem.
The diagnostics feature is available starting with agent version 2.165.0.

:::moniker range=">azure-devops-2022"

## Network diagnostics for self-hosted agents

Set the value of `Agent.Diagnostic` to `true` to collect additional logs that can be used for troubleshooting network issues for self-hosted agents. For more information, see [Network diagnostics for self-hosted agents](../troubleshooting/review-logs.md#network-diagnostics-for-self-hosted-agents)

:::moniker-end

## Help on other options

To learn about other options:

```ps
.\config --help
```

The help provides information on authentication alternatives and unattended configuration.

[!INCLUDE [include](includes/capabilities.md)]

## FAQ

### What version of Git does my agent run?

[!INCLUDE [include](includes/system-prefer-git-from-path.md)]

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](includes/v3/qa-agent-version.md)]

::: moniker range="azure-devops"
[!INCLUDE [include](includes/v3/qa-firewall.md)]
::: moniker-end

### How do I run the agent with self-signed certificate?

> [!NOTE]
> Running the agent with a self-signed certificate only applies to Azure DevOps Server.

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

### How do I restart the agent

If you're running the agent interactively, see the restart instructions in [Run interactively](#run-interactively). If you're running the agent as a service, restart the agent by following the steps in [Run as a service](#run-as-a-service).

::: moniker range=">=azure-devops-2020"
### How do I set different environment variables for each individual agent?

Create a `.env` file under agent's root directory and put the environment variables you want to set into the file in the following format, and then restart the agent.

```
MyEnv0=MyEnvValue0
MyEnv1=MyEnvValue1
MyEnv2=MyEnvValue2
MyEnv3=MyEnvValue3
MyEnv4=MyEnvValue4
```
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](includes/v3/web-proxy-bypass.md)]
::: moniker-end

::: moniker range="azure-devops"
[!INCLUDE [include](includes/v3/qa-urls.md)]
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
