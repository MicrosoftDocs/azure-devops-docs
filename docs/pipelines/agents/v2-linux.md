---
title: Deploy a build and release agent on Linux
titleSuffix: Azure Pipelines & TFS
description: Learn how you can easily deploy a private build and release agent on Linux for Azure Pipelines and Team Foundation Server (TFS).
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 834FFB19-DCC5-40EB-A3AD-18B7EDCA976E
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 10/15/2018
monikerRange: '>= tfs-2015'
---

# Deploy an agent on Linux

**Azure Pipelines | TFS 2018 | TFS 2017 | TFS 2015**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

To build or deploy you'll need at least one agent. A Linux agent can build and deploy different kinds of apps, including Java and Android apps. We support Ubuntu, Red Hat, and CentOS.

> Before you begin:
> * If your build and release pipelines are in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a private Linux agent.
> *  Otherwise, you've come to the right place to set up an agent on Linux. Continue to the next section.

[!INCLUDE [include](_shared/concepts.md)]

## Check prerequisites

Where are your builds and releases running?

::: moniker range="vsts"

**Azure Pipelines**: The agent is based on CoreCLR 2.0. You can run this agent on several Linux distributions. Make sure your machine is prepared with [our prerequisites](https://github.com/Microsoft/azure-pipelines-agent/blob/master/docs/start/envlinux.md).

::: moniker-end

::: moniker range="<= tfs-2018"

**TFS 2018 RTM and older**: The agent is based on CoreCLR 1.0. Make sure your machine is prepared with our prerequisites for either of the supported distributions:

 * [Ubuntu systems](https://aka.ms/vstsagentubuntusystem)

 * [Red Hat/CentOS systems](https://aka.ms/vstsagentredhatsystem)

 ::: moniker-end

### Subversion

If you're building from a Subversion repo, you must install the Subversion client on the machine.

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [include](_shared/v2/prepare-permissions.md)]

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

<li>On the **Get agent** dialog box, click **Linux**.</li>

<li>Click the **Download** button.

<li>Follow the instructions on the page.</li>

<li>Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`.</li>
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

::: moniker range="vsts"

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

For guidance on whether to run the agent in interactive mode or as a service, see [Agents: Interactive vs. service](agents.md#account).

To run the agent interactively:

0. If you have been running the agent as a service, [uninstall the service](#service_uninstall).

0. Run the agent.
 ```bash
./run.sh
 ```

## Run as a systemd service

If your agent is running on these operating systems you can run the agent as a systemd service:

* Ubuntu 16 LTS or newer
* Red Hat 7.1 or newer

We provide the `./svc.sh` script for you to run and manage your agent as a systemd service. This script will be generated after you configure the agent.

> [!NOTE]
> If you have a different distribution, or if you prefer other approaches, you can use whatever kind of service mechanism you prefer. See [Service files](#service-files).

### Commands

#### Change to the agent directory

For example, if you installed in the `myagent` subfolder of your home directory:

```bash
cd ~/myagent$
```

#### Install

Command:

```bash
sudo ./svc.sh install
```

This command creates a service file that points to `./runsvc.sh`. This script sets up the environment (more details below) and starts the agents host.

#### Start

```bash
sudo ./svc.sh start
```

#### Status

```bash
sudo ./svc.sh status
```

#### Stop

```bash
sudo ./svc.sh stop
```

<h4 id="service_uninstall">Uninstall</h4>

> You should stop before you uninstall.

```bash
sudo ./svc.sh uninstall
```

<h3 id="service-update-environment-variables">Update environment variables</h3>

When you configure the service, it takes a snapshot of some useful environment variables for your current logon user such as PATH, LANG, JAVA_HOME, ANT_HOME, and MYSQL_PATH. If you need to update the variables (for example, after installing some new software):

> [!div class="vscom-steps-container" ]
> 0. &nbsp;
>  ```bash
> ./env.sh
>  ```
> 
> 0. &nbsp;
>  ```bash
> sudo ./svc.sh stop
>  ```
> 
> 0. &nbsp;
>  ```bash
> sudo ./svc.sh start
>  ```

The snapshot of the environment variables is stored in `.env` file under agent root directory, you can also change that file directly to apply environment variable changes.

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts.  For example, you could set up the environment or call scripts.

0. Edit `runsvc.sh`.

0. Replace the following line with your instructions:

 ```bash
# insert anything to setup env when running as a service
 ```

<h3 id="service-files">Service files</h3>

When you install the service, some service files are put in place.

#### systemd service file

A systemd service file is created:

`/etc/systemd/system/vsts.agent.{tfs-name}.{agent-name}.service`

For example, you have configured an agent (see above) with the name `our-linux-agent`. The service file will be either:

* Azure Pipelines: the name of your organization. For example if you connect to `https://dev.azure.com/fabrikam`, then the service name would be `/etc/systemd/system/vsts.agent.fabrikam.our-linux-agent.service`

* TFS: the name of your on-premises TFS AT server. For example if you connect to `http://our-server:8080/tfs`, then the service name would be `/etc/systemd/system/vsts.agent.our-server.our-linux-agent.service`

`sudo ./svc.sh install` generates this file from this template: `./bin/vsts.agent.service.template`

#### .service file

`sudo ./svc.sh start` finds the service by reading the `.service` file, which contains the name of systemd service file described above.

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a systemd service. But you can use whatever kind of service mechanism you prefer (for example: initd or upstart).

You can use the template described above as to facilitate generating other kinds of service files.

[!INCLUDE [include](_shared/v2/replace-agent.md)]

[!INCLUDE [include](_shared/v2/remove-and-reconfigure-unix.md)]

[!INCLUDE [include](_shared/v2/configure-help-unix.md)]

[!INCLUDE [include](_shared/capabilities.md)]

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

### Why is sudo needed to run the service commands?

`./svc.sh` uses `systemctl`, which requires `sudo`.

Source code: [systemd.svc.sh.template on GitHub](https://github.com/Microsoft/azure-pipelines-agent/blob/master/src/Misc/layoutbin/systemd.svc.sh.template)

::: moniker range="vsts"
[!INCLUDE [include](_shared/v2/qa-firewall.md)]
::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

::: moniker range="vsts"
[!INCLUDE [include](_shared/v2/web-proxy-bypass.md)]
::: moniker-end

::: moniker range="vsts"
[!INCLUDE [include](_shared/v2/qa-urls.md)]
::: moniker-end

::: moniker range="< vsts"
[!INCLUDE [include](../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
