---
title: Deploy a build and release agent on macOS
ms.custom: seodec18
description: Learn how to deploy a macOS agent to build and deploy your iOS application for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3D487E4E-D940-4DA9-BDE1-1F60E74DD6F1
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 09/26/2019
monikerRange: '>= tfs-2015'
---

# Self-hosted macOS agents

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

::: moniker-end

To build and deploy Xcode apps or Xamarin.iOS projects, you'll need at least one macOS agent. This agent can also build and deploy Java and Android apps.

> Before you begin:
> * If your pipelines are in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted macOS agent.
> *  Otherwise, you've come to the right place to set up an agent on macOS. Continue to the next section.

[!INCLUDE [include](_shared/concepts.md)]

## Check prerequisites

::: moniker range=">= tfs-2018"

Make sure your machine has these prerequisites:
- macOS Sierra (10.12) or higher
- Git 2.9.0 or higher (latest version strongly recommended - you can easily install with [Homebrew](https://brew.sh/))

These prereqs are required for agent version 2.125.0 and higher.

::: moniker-end

::: moniker range="< tfs-2018"

These prereqs are required for agent version 2.124.0 and below.
**If you're able, we recommend upgrading to a newer macOS (10.12+) and upgrading to the newest agent.**

Make sure your machine has these prerequisites:
- OS X Yosemite (10.10), El Capitan (10.11), or macOS Sierra (10.12)
- Git 2.9.0 or higher (latest version strongly recommended)
- Meets all prereqs for [.NET Core 1.x](https://dotnet.microsoft.com/download/dotnet-core/1.0)

::: moniker-end

If you'll be using TFVC, you will also need the [Oracle Java JDK 1.6](http://www.oracle.com/technetwork/java/javaseproducts/downloads/index.html) or higher.
(The Oracle JRE and OpenJDK are not sufficient for this purpose.)

<h2 id="permissions">Prepare permissions</h2>

If you're building from a Subversion repo, you must install the Subversion client on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

[!INCLUDE [permissions](_shared/v2/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, click **macOS**.

1. Click the **Download** button.

1. Follow the instructions on the page.

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.

::: moniker-end

::: moniker range="azure-devops-2019"

### Azure DevOps Server 2019

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure DevOps Server 2019, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab-server-2019.md)]

1. Click **Download agent**.

1. On the **Get agent** dialog box, click **macOS**.

1. Click the **Download** button.

1. Follow the instructions on the page.

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

### TFS 2017 and TFS 2018

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines or TFS, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](_shared/agent-pools-tab/agent-pools-tab-tfs-2017.md)]

1. Click **Download agent**.

1. On the **Get agent** dialog box, click **macOS**.

1. Click the **Download** button.

1. Follow the instructions on the page.

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.

::: moniker-end

::: moniker range="tfs-2015"

### TFS 2015

1. Browse to the [latest release on GitHub](https://github.com/Microsoft/azure-pipelines-agent/releases/latest).

1. Follow the instructions on that page to download the agent.

1. Configure the agent.

   ```
   ./config.sh
   ```

::: moniker-end

### Server URL

::: moniker range="azure-devops"

Azure Pipelines: `https://dev.azure.com/{your-organization}`

::: moniker-end

::: moniker range=">= tfs-2017"

TFS 2017 and newer: `https://{your_server}/tfs`

::: moniker-end

::: moniker range="tfs-2015"

TFS 2015: `http://{your_server}:8080/tfs`

::: moniker-end

### Authentication type

[!INCLUDE [include](_shared/v2/unix-authentication-types.md)]

## Run interactively

For guidance on whether to run the agent in interactive mode or as a service, see [Agents: Interactive vs. service](agents.md#interactive-or-service).

To run the agent interactively:

1. If you have been running the agent as a service, [uninstall the service](#service_uninstall).

1. Run the agent.

   ```bash
   ./run.sh
   ```

To use your agent, run a [job](../process/phases.md) using the agent's pool.
If you didn't choose a different pool, your agent will be in the **Default** pool.

## Run as a launchd service

We provide the `./svc.sh` script for you to run and manage your agent as a launchd LaunchAgent service. This script will be generated after you configure the agent. The service has access to the UI to run your UI tests.

> [!NOTE]
> If you prefer other approaches, you can use whatever kind of service mechanism you prefer. See [Service files](#service-files).

### Tokens

In the section below, these tokens are replaced:

* `{agent-name}`

* `{tfs-name}`

For example, you have configured an agent (see above) with the name `our-osx-agent`. In the following examples, `{tfs-name}` will be either:

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

This command creates a launchd plist that points to `./runsvc.sh`. This script sets up the environment (more details below) and starts the agent's host.


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

Normally, the agent service runs only after the user logs in. If you want the agent service to automatically start when the machine restarts, you can configure the machine to automatically log in and lock on startup. See [Set your Mac to automatically log in during startup - Apple Support](https://support.apple.com/HT201476).

> [!NOTE]
> For more information, see the [Terminally Geeky: use automatic login more securely](https://www.engadget.com/2011/03/07/terminally-geeky-use-automatic-login-more-securely/) blog. The .plist file mentioned in that blog may no longer be available at the source, but a copy can be found here: [Lifehacker - Make OS X load your desktop before you log in](https://lifehacker.com/5779922/make-os-x-load-your-desktop-before-you-log-in).

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

`sudo ./svc.sh install` generates this file from this template: `./bin/vsts.agent.plist.template`

#### .service file

`./svc.sh start` finds the service by reading the `.service` file, which contains the path to the plist service file described above.

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a launchd LaunchAgent service. But you can use whatever kind of service mechanism you prefer.

You can use the template described above as to facilitate generating other kinds of service files. For example, you modify the template to generate a service that runs as a launch daemon if you don't need UI tests and don't want to configure automatic log on and lock. See [Apple Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html).

[!INCLUDE [include](_shared/v2/replace-agent.md)]

[!INCLUDE [include](_shared/v2/remove-and-reconfigure-unix.md)]

[!INCLUDE [include](_shared/v2/configure-help-unix.md)]

[!INCLUDE [include](_shared/capabilities.md)]

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](_shared/v2/qa-agent-version.md)]

### Where can I learn more about how the launchd service works?

[Apple Developer Library: Creating Launch Daemons and Agents](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html)

::: moniker range="azure-devops"

[!INCLUDE [include](_shared/v2/qa-firewall.md)]

::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

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
