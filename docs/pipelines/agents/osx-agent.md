---
title: Deploy a build and release agent on macOS
description: Learn how to deploy a macOS agent to build and deploy your iOS application for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.assetid: 3D487E4E-D940-4DA9-BDE1-1F60E74DD6F1
ms.date: 07/11/2025
monikerRange: '<= azure-devops'
---

# Self-hosted macOS agents

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

:::moniker range="=azure-devops"

This article provides guidance for using the [4.x agent software](v4-agent.md) with Azure DevOps Services.

:::moniker-end

:::moniker range="<azure-devops"

This article provides guidance for using the [3.x agent software](v3-agent.md) with Azure DevOps Server. For a list of Azure DevOps Server versions that support the 3.x agent, see [Does Azure DevOps Server support the 3.x agent](v3-agent.md#does-azure-devops-server-support-the-3x-agent).

> [!IMPORTANT]
> If you're using Azure DevOps Server, you should be using the [4.x agent software](v4-agent.md).

:::moniker-end

To build and deploy Xcode apps, you need at least one macOS agent. This agent can also build and deploy Java and Android apps.

> [!NOTE]
> This article describes how to configure a [self-hosted agent](agents.md#self-hosted-agents). If you're using Azure DevOps Services and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted macOS agent.

[!INCLUDE [include](includes/concepts.md)]

## Check prerequisites

* Supported operating systems
  * x64
    * macOS 10.15 "Catalina"
    * macOS 11.0 "Big Sur"
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
    * macOS 15.0 "Sequoia"
  * ARM64
    * macOS 11.0 "Big Sur"
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
    * macOS 15.0 "Sequoia" (only supported when using [4.x agent software](v4-agent.md))

- **Git** - Git 2.9.0 or higher (latest version recommended - you can easily install with [Homebrew](https://brew.sh/))
* **.NET** - The agent software runs on .NET 6, but installs its own version of .NET so there is no .NET prerequisite.
* **TFVC** - If you're building from a TFVC repo, see [TFVC prerequisites](#tfvc-prerequisites).

<h2 id="permissions">Prepare permissions</h2>

If you're building from a Subversion repo, you must install the Subversion client on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

[!INCLUDE [permissions](includes/v3/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained in the previous section.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, click **macOS**.

1. Click the **Download** button.

1. Follow the instructions on the page.

1. Clear the extended attribute on the tar file: `xattr -c vsts-agent-osx-x64-V.v.v.tar.gz`.

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.

::: moniker-end

### Server URL

::: moniker range="azure-devops"

Azure Pipelines: `https://dev.azure.com/{your-organization}`

::: moniker-end

::: moniker range="< azure-devops"

Azure DevOps Server: `https://{your_server}/tfs`

::: moniker-end

### Authentication type

When you register an agent, choose from the following authentication types, and agent setup prompts you for the specific additional information required for each authentication type. For more information, see [Self-hosted agent authentication options](./agent-authentication-options.md).

[!INCLUDE [agent-setup-authentication-type](./includes/agent-setup-authentication.md)]

## Run interactively

For guidance on whether to run the agent in interactive mode or as a service, see [Agents: Interactive vs. service](agents.md#interactive-or-service).

To run the agent interactively:

1. If you have been running the agent as a service, [uninstall the service](#service_uninstall).

1. Run the agent.

   ```bash
   ./run.sh
   ```

  To restart the agent, press Ctrl+C and then run `run.sh` to restart it.

To use your agent, run a [job](../process/phases.md) using the agent's pool.
If you didn't choose a different pool, your agent is placed in the **Default** pool.

### Run once

For agents configured to run interactively, you can choose to have the agent accept only one job. To run in this configuration:

 ```bash
./run.sh --once
```

Agents in this mode accept only one job and then spin down gracefully (useful for running on a service like Azure Container Instances).

## Run as a launchd service

We provide the `./svc.sh` script for you to run and manage your agent as a `launchd` LaunchAgent service. This script is generated after you configure the agent. The service has access to the UI to run your UI tests.

> [!NOTE]
> If you prefer other approaches, you can use whatever kind of service mechanism you prefer. See [Service files](#service-files).

### Tokens

In the following section, these tokens are replaced:

* `{agent-name}`

* `{tfs-name}`

For example, you have configured an agent (as shown in the previous example) with the name `our-osx-agent`. In the following examples, `{tfs-name}` is either:

* Azure Pipelines: the name of your organization. For example if you connect to `https://dev.azure.com/fabrikam`, then the service name would be `vsts.agent.fabrikam.our-osx-agent`

* TFS: the name of your on-premises TFS AT server. For example if you connect to `http://our-server:8080/tfs`, then the service name would be `vsts.agent.our-server.our-osx-agent`

### Commands

#### Change to the agent directory

For example, if you installed in the `myagent` subfolder of your home directory:

```bash
cd ~/myagent$
```


#### Install

Command:

```bash
./svc.sh install
```

This command creates a `launchd` plist that points to `./runsvc.sh`. This script sets up the environment (more details in the following section) and starts the agent's host.


#### Start

Command:

```bash
./svc.sh start
```

Output:

```bash
starting vsts.agent.{tfs-name}.{agent-name}
status vsts.agent.{tfs-name}.{agent-name}:

/Users/{your-name}/Library/LaunchAgents/vsts.agent.{tfs-name}.{agent-name}.plist

Started:
13472 0 vsts.agent.{tfs-name}.{agent-name}
```

The left number is the pid if the service is running. If second number is not zero, then a problem occurred.

#### Status

Command:
```bash
./svc.sh status
```

Output:

```bash
status vsts.agent.{tfs-name}.{agent-name}:

/Users/{your-name}/Library/LaunchAgents/vsts.{tfs-name}.{agent-name}.testsvc.plist

Started:
13472 0 vsts.agent.{tfs-name}.{agent-name}
```

The left number is the pid if the service is running. If second number is not zero, then a problem occurred.

#### Stop

Command:

```bash
./svc.sh stop
```

Output:

```bash
stopping vsts.agent.{tfs-name}.{agent-name}
status vsts.agent.{tfs-name}.{agent-name}:

/Users/{your-name}/Library/LaunchAgents/vsts.{tfs-name}.{agent-name}.testsvc.plist

Stopped
```

<h4 id="service_uninstall">Uninstall</h4>

> You should stop before you uninstall.

Command:

```bash
./svc.sh uninstall
```

#### Automatic login and lock

Normally, the agent service runs only after the user logs in. If you want the agent service to automatically start when the machine restarts, you can configure the machine to automatically login and lock on startup. See [Set your Mac to automatically login during startup - Apple Support](https://support.apple.com/HT201476).

> [!NOTE]
> For more information, see the [Terminally Geeky: use automatic login more securely](https://www.engadget.com/2011/03/07/terminally-geeky-use-automatic-login-more-securely/) blog. The .plist file mentioned in that blog may no longer be available at the source, but a copy can be found here: [Lifehacker - Make OS X load your desktop before you log in](https://lifehacker.com/make-os-x-load-your-desktop-before-you-log-in-5779922).

<h3 id="service-update-environment-variables">Update environment variables</h3>

When you configure the service, it takes a snapshot of some useful environment variables for your current logon user such as PATH, LANG, JAVA_HOME, ANT_HOME, and MYSQL_PATH. If you need to update the variables (for example, after installing some new software):

```bash
./env.sh
./svc.sh stop
./svc.sh start
```

The snapshot of the environment variables is stored in `.env` file under agent root directory, you can also change that file directly to apply environment variable changes.

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts.  For example, you could set up the environment or call scripts.

1. Edit `runsvc.sh`.

1. Replace the following line with your instructions:

   ```bash
   # insert anything to setup env when running as a service
   ```

<h3 id="service-files">Service Files</h3>

When you install the service, some service files are put in place.

#### .plist service file

A .plist service file is created:

```
~/Library/LaunchAgents/vsts.agent.{tfs-name}.{agent-name}.plist
```

For example:

```
~/Library/LaunchAgents/vsts.agent.fabrikam.our-osx-agent.plist
```

`./svc.sh install` generates this file from this template: `./bin/vsts.agent.plist.template`

#### .service file

`./svc.sh start` finds the service by reading the `.service` file, which contains the path to the plist service file described above.

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a `launchd` LaunchAgent service. But you can use whatever kind of service mechanism you prefer.

You can use the template described above as to facilitate generating other kinds of service files. For example, you modify the template to generate a service that runs as a launch daemon if you don't need UI tests and don't want to configure automatic log on and lock. See [Apple Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/content/documentation/macOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html).

[!INCLUDE [include](includes/v3/replace-agent.md)]

[!INCLUDE [include](includes/v3/remove-and-reconfigure-unix.md)]

[!INCLUDE [include](includes/v3/configure-help-unix.md)]

[!INCLUDE [include](includes/capabilities.md)]

## FAQ

[!INCLUDE [include](includes/v3/qa-agent-version.md)]

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](includes/v3/qa-agent-version.md)]

### Where can I learn more about how the launchd service works?

[Apple Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/archive/documentation/macOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v3/qa-firewall.md)]

::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

### How do I restart the agent

If you are running the agent interactively, see the restart instructions in [Run interactively](#run-interactively). If you are running the agent as a service, follow the steps to [Stop](#stop) and then [Start](#start) the agent.

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v3/web-proxy-bypass.md)]

::: moniker-end

::: moniker range="<azure-devops"

[!INCLUDE [include](includes/v3/qa-urls.md)]

::: moniker-end

::: moniker range="< azure-devops"

[!INCLUDE [include](../includes/qa-versions.md)]

::: moniker-end

### TFVC prerequisites

If you'll be using TFVC, you'll also need the [Oracle Java JDK 1.6](https://www.oracle.com/technetwork/java/javaseproducts/downloads/index.html) or higher.
(The Oracle JRE and OpenJDK aren't sufficient for this purpose.)

[TEE plugin](https://github.com/microsoft/team-explorer-everywhere) is used for TFVC functionality.
It has an EULA, which you must to accept during configuration if you plan to work with TFVC.

Since the TEE plugin is no longer maintained and contains some out-of-date Java dependencies, starting from Agent 2.198.0 it's no longer included in the agent distribution. However, the TEE plugin is downloaded during checkout task execution if you're checking out a TFVC repo. The TEE plugin is removed after the job execution.

> [!NOTE]
> Note: You may notice your checkout task taking a long time to start working because of this download mechanism.

If the agent is running behind a proxy or a firewall, you must accept to ensure access to the following site: `https://vstsagenttools.blob.core.windows.net/`. The TEE plugin is downloaded from this address.

If you're using a self-hosted agent and facing issues with TEE downloading, you may install TEE manually:
1. Set `DISABLE_TEE_PLUGIN_REMOVAL` environment or pipeline variable to `true`. This variable prevents the agent from removing the TEE plugin after TFVC repository checkout.
2. Download TEE-CLC version 14.135.0 manually from [Team Explorer Everywhere GitHub releases](https://github.com/microsoft/team-explorer-everywhere/releases).
3. Extract the contents of `TEE-CLC-14.135.0` folder to `<agent_directory>/externals/tee`.

<!-- ENDSECTION -->
