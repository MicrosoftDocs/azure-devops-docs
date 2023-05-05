---
title: Deploy an Azure Pipelines agent on Linux
ms.custom: seodec18
description: Learn how you can easily deploy a self-hosted agent on Linux for Azure Pipelines.
ms.topic: conceptual
ms.assetid: 834FFB19-DCC5-40EB-A3AD-18B7EDCA976E
ms.date: 05/05/2023
monikerRange: '<= azure-devops'
---

# Self-hosted Linux agents

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

:::moniker range="<=azure-devops"

> [!IMPORTANT]
> This article provides guidance for using the 3.x agent software with Azure DevOps Services. If you're using Azure DevOps Server or TFS, see [Self-hosted Linux agents (Agent version 2.x)](v2-linux-agent.md).

:::moniker-end

::: moniker range="tfs-2018"

[!INCLUDE [temp](../includes/concept-rename-note.md)]

::: moniker-end

To run your jobs, you'll need at least one agent. A Linux agent can build and deploy different kinds of apps, including Java and Android apps. See [Check prerequisites](#check-prerequisites) for a list of supported Linux distributions.

> [!NOTE]
> This article describes how to configure a [self-hosted agent](agents.md#self-hosted-agents). If you're using Azure DevOps Services and a [Microsoft-hosted agent](hosted.md) meets your needs, you can skip setting up a self-hosted Linux agent.

[!INCLUDE [include](includes/concepts.md)]

## Check prerequisites

::: moniker range="> tfs-2018"

The agent is based on .NET 6.
You can run this agent on several Linux distributions.
We support the following subset of .NET Core supported distributions:

* Supported distributions
  * x64
    * CentOS 7, 8
    * Debian 10+
    * Fedora 36+
    * openSUSE 15+
    * Red Hat Enterprise Linux 7+
      * No longer requires separate package
    * SUSE Enterprise Linux 12 SP2 or later
    * Ubuntu 22.04, 20.04, 18.04, 16.04
    * CBL-Mariner 2.0
  * ARM64
    * Debian 10+
    * Ubuntu 22.04, 20.04, 18.04
* **Git** - Regardless of your platform, you will need to install Git 2.9.0 or higher.
We strongly recommend installing the latest version of Git.
* **.NET** - The agent software runs on .NET 6, but installs its own version of .NET so there is no .NET prerequisite.
* **Subversion** - If you're building from a Subversion repo, you must install the Subversion client on the machine.
* **TFVC** - If you're building from a TFVC repo, see [TFVC prerequisites](#tfvc-prerequisites).

> [!NOTE]
> The agent installer knows how to check for other dependencies.
You can install those dependencies on supported Linux platforms by running `./bin/installdependencies.sh` in the agent directory.
>
> Be aware that some of these dependencies required by .NET are fetched from third party sites, like `packages.efficios.com`. Review the `installdependencies.sh` script and ensure any referenced third party sites are accessible from your Linux machine before running the script.
>
> Please also make sure that all required repositories are connected to the relevant package manager used in `installdependencies.sh` (like `apt` or `zypper`).
> 
> For issues with dependencies installation (like 'dependency was not found in repository' or 'problem retrieving the repository index file') - you can reach out to distribution owner for further support.

::: moniker-end

You should run agent setup manually the first time.
After you get a feel for how agents work, or if you want to automate setting up many agents, consider using [unattended config](#unattended-config).

<h2 id="permissions">Prepare permissions</h2>

[!INCLUDE [include](includes/v3/prepare-permissions.md)]

<a name="download-configure"></a>
## Download and configure the agent

::: moniker range="azure-devops"

### Azure Pipelines

1. Log on to the machine using the account for which you've prepared permissions as explained above.

1. In your web browser, sign in to Azure Pipelines, and navigate to the **Agent pools** tab:

   [!INCLUDE [include](includes/agent-pools-tab.md)]

1. Select the **Default** pool, select the **Agents** tab, and choose **New agent**.

1. On the **Get the agent** dialog box, click **Linux**.

1. On the left pane, select the specific flavor. We offer x64 or ARM for many Linux distributions.

1. On the right pane, click the **Download** button.

1. Follow the instructions on the page.</li>

1. Unpack the agent into the directory of your choice. `cd` to that directory and run `./config.sh`.

::: moniker-end


### Server URL

::: moniker range="azure-devops"

Azure Pipelines: `https://dev.azure.com/{your-organization}`

::: moniker-end

### Authentication type

[!INCLUDE [include](includes/v3/unix-authentication-types.md)]

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

[!INCLUDE [include](includes/v3/replace-agent.md)]

[!INCLUDE [include](includes/v3/remove-and-reconfigure-unix.md)]

[!INCLUDE [include](includes/v3/configure-help-unix.md)]

[!INCLUDE [include](includes/capabilities.md)]

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [include](includes/v3/qa-agent-version.md)]

### Why is sudo needed to run the service commands?

`./svc.sh` uses `systemctl`, which requires `sudo`.

Source code: [systemd.svc.sh.template on GitHub](https://github.com/Microsoft/azure-pipelines-agent/blob/master/src/Misc/layoutbin/systemd.svc.sh.template)

::: moniker range="azure-devops"

[!INCLUDE [include](includes/v3/qa-firewall.md)]

::: moniker-end

### How do I run the agent with self-signed certificate?

[Run the agent with self-signed certificate](certificate.md)

### How do I run the agent behind a web proxy?

[Run the agent behind a web proxy](proxy.md)

### How do I restart the agent

If you are running the agent interactively, see the restart instructions in [Run interactively](#run-interactively). If you are running the agent as a systemd service, follow the steps to [Stop](#stop) and then [Start](#start) the agent.

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
It has an EULA, which you'll need to accept during configuration if you plan to work with TFVC.

Since the TEE plugin is no longer maintained and contains some out-of-date Java dependencies, starting from Agent 2.198.0 it's no longer included in the agent distribution. However, the TEE plugin will be downloaded during checkout task execution if you're checking out a TFVC repo. The TEE plugin will be removed after the job execution.

> [!NOTE]
> Note: You may notice your checkout task taking a long time to start working because of this download mechanism.

If the agent is running behind a proxy or a firewall, you'll need to ensure access to the following site: `https://vstsagenttools.blob.core.windows.net/`. The TEE plugin will be downloaded from this address.

If you're using a self-hosted agent and facing issues with TEE downloading, you may install TEE manually:
1. Set `DISABLE_TEE_PLUGIN_REMOVAL` environment or pipeline variable to `true`. This variable prevents the agent from removing the TEE plugin after TFVC repository checkout.
2. Download TEE-CLC version 14.135.0 manually from [Team Explorer Everywhere GitHub releases](https://github.com/microsoft/team-explorer-everywhere/releases).
3. Extract the contents of `TEE-CLC-14.135.0` folder to `<agent_directory>/externals/tee`.

<!-- ENDSECTION -->
