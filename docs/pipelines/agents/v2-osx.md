---
title: Deploy a build and release agent on macOS
ms.custom: seodec18
description: Learn how to deploy a macOS agent to build and deploy your iOS application for Azure Pipelines and Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3D487E4E-D940-4DA9-BDE1-1F60E74DD6F1
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 03/19/2019
monikerRange: '>= tfs-2015'
---

# Deploy an agent on macOS

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

To build and deploy Xcode apps or Xamarin.iOS projects, you'll need at least one macOS agent. This agent can also build and deploy Java and Android apps.

> Before you begin:
> * If your build and release pipelines are in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a private macOS agent.
> *  Otherwise, you've come to the right place to set up an agent on macOS. Continue to the next section.

[!INCLUDE [include](_shared/concepts.md)]

## Check prerequisites

Make sure your machine is prepared with our [macOS system prerequisites](https://aka.ms/vstsagentosxsystem).

<h2 id="permissions">Prepare permissions</h2>

If you're building from a Subversion repo, you must install the Subversion client on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

[!INCLUDE [permissions](_shared/v2/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range=">= tfs-2017"

### Azure Pipelines and TFS 2017 and newer

<ol>
<li>Log on to the machine using the account for which you've prepared permissions as explained above.</li>
<li>In your web browser, sign in to Azure Pipelines or TFS, and navigate to the **Agent pools** tab:
[!INCLUDE [include](_shared/agent-pools-tab.md)]
</li>

<li>Click **Download agent**.</li>

<li>On the **Get agent** dialog box, click **macOS**.</li>

<li>Click the **Download** button.

<li>Follow the instructions on the page.</li>

<li>Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`. Make sure that the path to the directory contains no spaces because tools and scripts don't always properly escape spaces.</li>
</ol>

::: moniker-end

::: moniker range="tfs-2015"

### TFS 2015

0. Browse to the [latest release on GitHub](https://github.com/Microsoft/azure-pipelines-agent/releases/latest).

0. Follow the instructions on that page to download the agent.

0. Configure the agent.
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

0. If you have been running the agent as a service, [uninstall the service](#service_uninstall).

0. Run the agent.
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

* TFS: the name of your on-premises TFS AT server. For example if you connect to `http://our-server:8080/tfs`, then the service name would be `
vsts.agent.our-server.our-osx-agent`

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

<h3 id="service-update-environment-variables">Update environment variables</h3>

When you configure the service, it takes a snapshot of some useful environment variables for your current logon user such as PATH, LANG, JAVA_HOME, ANT_HOME, and MYSQL_PATH. If you need to update the variables (for example, after installing some new software):

> [!div class="vscom-steps-container" ]
> 0. &nbsp;
>  ```bash
> ./env.sh 
>  ```
>
> 0. &nbsp;
> ```bash
> ./svc.sh stop
>  ```
>
> 0. &nbsp;
>  ```bash
> ./svc.sh start
>  ```

The snapshot of the environment variables is stored in `.env` file under agent root directory, you can also change that file directly to apply environment variable changes.

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts.  For example, you could set up the environment or call scripts.

0. Edit `runsvc.sh`.

0. Replace the following line with your instructions:

```bash

# insert anything to setup env when running as a service

```

<h3 id="service-files">Service Files</h3>

When you install the service, some service files are put in place.

#### .plist service file

A .plist service file is created:

`
~/Library/LaunchAgents/vsts.agent.{tfs-name}.{agent-name}.plist
`

For example:

`
~/Library/LaunchAgents/vsts.agent.fabrikam.our-osx-agent.plist
`

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
