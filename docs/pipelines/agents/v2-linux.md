---
title: Deploy an Azure Pipelines agent on Linux
ms.custom: seodec18
description: Learn how you can easily deploy a self-hosted agent on Linux for Azure Pipelines and Team Foundation Server (TFS).
ms.topic: conceptual
ms.assetid: 834FFB19-DCC5-40EB-A3AD-18B7EDCA976E
ms.date: 09/20/2021
monikerRange: '>= tfs-2015'
---

# Self-hosted Linux agents

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker-end

To run your jobs, you'll need at least one agent. A Linux agent can build and deploy different kinds of apps, including Java and Android apps. We support Ubuntu, Red Hat, and CentOS.

> Before you begin:
> * If your pipelines are in [Azure Pipelines](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs) and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a private Linux agent.
> *  Otherwise, you've come to the right place to set up an agent on Linux. Continue to the next section.

[!INCLUDE [include](includes/concepts.md)]

## Check prerequisites

::: moniker range="> tfs-2018"

The agent is based on .NET Core 3.1.
You can run this agent on several Linux distributions.
We support the following subset of .NET Core supported distributions:
- x64
  - CentOS 7, 6 (see note 1)
  - Debian 9
  - Fedora 30, 29
  - Linux Mint 18, 17
  - openSUSE 42.3 or later
  - Oracle Linux 7
  - Red Hat Enterprise Linux 8, 7, 6 (see note 1)
  - SUSE Enterprise Linux 12 SP2 or later
  - Ubuntu 20.04, 18.04, 16.04
- ARM32 (see note 2)
  - Debian 9
  - Ubuntu 18.04

> [!NOTE]
> Note 1: RHEL 6 and CentOS 6 require installing the specialized `rhel.6-x64` version of the agent.

> [!NOTE]
> Note 2: ARM instruction set [ARMv7](https://en.wikipedia.org/wiki/List_of_ARM_microarchitectures) or above is required.
> Run `uname -a` to see your Linux distro's instruction set.

Regardless of your platform, you will need to install Git 2.9.0 or higher.
We strongly recommend installing the latest version of Git.

If you'll be using TFVC, you will also need the [Oracle Java JDK 1.6](https://www.oracle.com/technetwork/java/javaseproducts/downloads/index.html) or higher.
(The Oracle JRE and OpenJDK are not sufficient for this purpose.)

> [!NOTE]
> The agent installer knows how to check for other dependencies.
You can install those dependencies on supported Linux platforms by running `./bin/installdependencies.sh` in the agent directory.
>
> Be aware that some of these dependencies required by .NET Core are fetched from third party sites, like `packages.efficios.com`. Review the `installdependencies.sh` script and ensure any referenced third party sites are accessible from your Linux machine before running the script.

::: moniker-end

::: moniker range="<= tfs-2018"

**TFS 2018 RTM and older**: The shipped agent is based on CoreCLR 1.0.
We recommend that, if able, you should upgrade to a later agent version (2.125.0 or higher).
See [Azure Pipelines agent prereqs](?view=azure-devops&preserve-view=true#check-prerequisites) for more about what's required to run a newer agent.

If you must stay on the older agent, make sure your machine is prepared with our prerequisites for either of the supported distributions:

* [Ubuntu systems](https://aka.ms/vstsagentubuntusystem)
* [Red Hat/CentOS systems](https://aka.ms/vstsagentredhatsystem)

::: moniker-end

### Subversion

If you're building from a Subversion repo, you must install the Subversion client on the machine.

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [include](includes/v2/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, click **Linux**.

1. On the left pane, select the specific flavor. We offer x64 or ARM for most Linux distributions. We also offer a specific build for Red Hat Enterprise Linux 6.

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page.</li>

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`.

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

### Azure DevOps Server 2019 and Azure DevOps Server 2020

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure DevOps Server 2019, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Click **Download agent**.</li>

1. On the **Get agent** dialog box, click **Linux**.</li>

1. On the left pane, select the specific flavor. We offer x64 or ARM for most Linux distributions. We also offer a specific build for Red Hat Enterprise Linux 6.

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page.</li>

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

### TFS 2017 and TFS 2018

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to TFS, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab/agent-pools-tab-tfs-2018.md)]

1. Click **Download agent**.

1. On the **Get agent** dialog box, click **Linux**.

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

::: moniker range="azure-devops-2019"

Azure DevOps Server 2019: `https://{your_server}/DefaultCollection`

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2019"

TFS 2017 and newer: `https://{your_server}/tfs`

::: moniker-end

::: moniker range="tfs-2015"

TFS 2015: `http://{your_server}:8080/tfs`

::: moniker-end

### Authentication type

[!INCLUDE [include](includes/v2/unix-authentication-types.md)]

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
If you didn't choose a different pool, your agent will be in the **Default** pool.

### Run once

For agents configured to run interactively, you can choose to have the agent accept only one job.
To run in this configuration:

 ```bash
./run.sh --once
```

Agents in this mode will accept only one job and then spin down gracefully (useful for running in [Docker](docker.md) on a service like Azure Container Instances).

## Run as a systemd service

If your agent is running on these operating systems you can run the agent as a `systemd` service:

* Ubuntu 16 LTS or newer
* Red Hat 7.1 or newer

We provide an example `./svc.sh` script for you to run and manage your agent as a `systemd` service.
This script will be generated after you configure the agent.
We encourage you to review, and if needed, update the script before running it.

Some important caveats:
* If you run your agent as a service, you cannot run the agent service as `root` user.
* Users running [SELinux](https://selinuxproject.org/) have reported difficulties with the provided `svc.sh` script.
Refer to [this agent issue](https://github.com/microsoft/azure-pipelines-agent/issues/2738) as a starting point.
SELinux is not an officially supported configuration.

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
sudo ./svc.sh install [username]
```

This command creates a service file that points to `./runsvc.sh`. This script sets up the environment (more details below) and starts the agents host. If `username` parameter is not specified then the username is taken from the $SUDO_USER environment variable which is set by sudo command. This variable is always equal to the name of the user who invoked the `sudo` command.

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

```bash
./env.sh
sudo ./svc.sh stop
sudo ./svc.sh start
```

The snapshot of the environment variables is stored in `.env` file (`PATH` is stored in `.path`) under agent root directory, you can also change these files directly to apply environment variable changes.

### Run instructions before the service starts

You can also run your own instructions and commands to run when the service starts.  For example, you could set up the environment or call scripts.

1. Edit `runsvc.sh`.

1. Replace the following line with your instructions:

   ```bash
   # insert anything to setup env when running as a service
   ```

<h3 id="service-files">Service files</h3>

When you install the service, some service files are put in place.

#### systemd service file

A systemd service file is created:

`/etc/systemd/system/vsts.agent.{tfs-name}.{agent-name}.service`

For example, you have configured an agent (see above) with the name `our-linux-agent`. The service file will be either:

* **Azure Pipelines**: the name of your organization. For example if you connect to `https://dev.azure.com/fabrikam`, then the service name would be `/etc/systemd/system/vsts.agent.fabrikam.our-linux-agent.service`

* **TFS or Azure DevOps Server**: the name of your on-premises server. For example if you connect to `http://our-server:8080/tfs`, then the service name would be `/etc/systemd/system/vsts.agent.our-server.our-linux-agent.service`

`sudo ./svc.sh install` generates this file from this template: `./bin/vsts.agent.service.template`

#### .service file

`sudo ./svc.sh start` finds the service by reading the `.service` file, which contains the name of systemd service file described above.

### Alternative service mechanisms

We provide the `./svc.sh` script as a convenient way for you to run and manage your agent as a systemd service. But you can use whatever kind of service mechanism you prefer (for example: initd or upstart).

You can use the template described above as to facilitate generating other kinds of service files.

## Use a cgroup to avoid agent failure

It's important to avoid situations in which the agent fails or become unusable because otherwise the agent can't stream pipeline logs or report pipeline status back to the server. You can mitigate the risk of this kind of problem being caused by high memory pressure by using cgroups and a lower `oom_score_adj`. After you've done this, Linux reclaims system memory from pipeline job processes before reclaiming memory from the agent process. [Learn how to configure cgroups and OOM score](https://github.com/Microsoft/azure-pipelines-agent/blob/master/docs/start/resourceconfig.md).

[!INCLUDE [include](includes/v2/replace-agent.md)]

[!INCLUDE [include](includes/v2/remove-and-reconfigure-unix.md)]

[!INCLUDE [include](includes/v2/configure-help-unix.md)]

[!INCLUDE [include](includes/capabilities.md)]

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](includes/v2/qa-agent-version.md)]

### Why is sudo needed to run the service commands?

`./svc.sh` uses `systemctl`, which requires `sudo`.

Source code: [systemd.svc.sh.template on GitHub](https://github.com/Microsoft/azure-pipelines-agent/blob/master/src/Misc/layoutbin/systemd.svc.sh.template)

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v2/qa-firewall.md)]

::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

### How do I restart the agent

If you are running the agent interactively, see the restart instructions in [Run interactively](#run-interactively). If you are running the agent as a systemd service, follow the steps to [Stop](#stop) and then [Start](#start) the agent.

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v2/web-proxy-bypass.md)]

::: moniker-end

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v2/qa-urls.md)]

::: moniker-end

::: moniker range="< azure-devops"

[!INCLUDE [include](../includes/qa-versions.md)]

::: moniker-end

<!-- ENDSECTION -->
