---
title: Azure Pipelines Agents
ms.topic: concept-article
ms.custom: devx-track-azurecli
description: Learn how you can build code and deploy software by using agents in Azure Pipelines.
ms.assetid: 5C14A166-CA77-4484-8074-9E0AA060DE58
ms.date: 01/24/2025
monikerRange: '<= azure-devops'
---

# Azure Pipelines agents

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You need at least one agent to build your code or deploy your software by using Azure Pipelines. As your code base and team grow, you need multiple agents.

When your pipeline runs, the system begins one or more jobs. An agent computes infrastructure by using installed agent software that runs one job at a time.

Azure Pipelines provides several different types of agents.

| Agent type | Description | Availability |
|------------|-------------|--------------|
| [Microsoft-hosted agents](#microsoft-hosted-agents) | Agents hosted and managed by Microsoft. | Azure DevOps Services |
| [Self-hosted agents](#install) | Agents that you configure and manage that are hosted on your virtual machines (VMs). | Azure DevOps Services, Azure DevOps Server |
| [Managed DevOps Pools agents](#managed-devops-pools-agents) | Managed DevOps Pools is a fully managed service. Virtual machines or containers that power the agents live in a Microsoft Azure subscription and not in your own Azure subscription. | Azure DevOps Services |
| [Azure Virtual Machine Scale Set agents](#azure-virtual-machine-scale-set-agents) | A form of self-hosted agents that uses Azure Virtual Machine Scale Sets and can be autoscaled to meet demands. <br><br>If you're considering using autoscalable, self-hosted agent pools, we recommend that you consider Managed DevOps Pools. For more information, see [Compare Managed DevOps Pools with Azure Virtual Machine Scale Set agents](../../managed-devops-pools/migrate-from-scale-set-agents.md) and [Managed DevOps Pools overview](../../managed-devops-pools/overview.md). | Azure DevOps Services |

::: moniker range="<=azure-devops"
You can run jobs [directly on the host machine of the agent](../process/phases.md) or [in a container](../process/container-phases.md).
::: moniker-end

::: moniker range="azure-devops"

## Microsoft-hosted agents

[!INCLUDE [include](includes/hosted-agent-intro.md)]

[Learn more about Microsoft-hosted agents](hosted.md).

::: moniker-end

<a id="install"></a>

## Self-hosted agents

A *self-hosted agent* is an agent that you set up to run jobs and manage yourself. You can use self-hosted agents in Azure Pipelines or Azure DevOps Server. Self-hosted agents give you more control to install dependent software that you need for your builds and deployments. Also, machine-level caches and configuration persist from run to run, which can boost speed.

> [!NOTE]
> Although multiple agents can be installed per machine, we strongly recommend that you install only one agent per machine.

When you install two or more agents, it might adversely affect performance and the result of your pipelines.

::: moniker range="azure-devops"

> [!TIP]
> Before you install a self-hosted agent, you might want to see if a Microsoft-hosted agent pool works for you. In many cases, a Microsoft-hosted agent pool is the simplest way to get started. [Give it a try](hosted.md).

:::moniker-end

You can install the agent on Linux, macOS, and Windows machines or a Docker container. For more information about installing a self-hosted agent, see:

* [macOS agent](osx-agent.md)
* [Linux agent](linux-agent.md)
* [Windows agent](windows-agent.md)
* [Docker agent](docker.md)

> [!NOTE]
> On macOS, you need to clear the special attribute on the download archive to prevent the macOS Gatekeeper protection from displaying for each assembly in the TAR file when `./config.sh` is run. The following command clears the extended attribute on the file:
>
> ```bash
> xattr -c vsts-agent-osx-x64-V.v.v.tar.gz  ## replace V.v.v with the version in the filename downloaded.
> 
> # then unpack the gzip tar file normally:
> 
> tar xvfz vsts-agent-osx-x64-V.v.v.tar.gz
> ```

After you install the agent on a machine, you can install any other software on that machine that your jobs require.

::: moniker range="azure-devops"

> [!NOTE]
> Agents are widely backward compatible. Any version of the agent should be compatible with any Azure DevOps version, as long as Azure DevOps doesn't demand a higher version of the agent.
>
> We support only the most recent version of the agent, because that is the only version guaranteed to have all up-to-date patches and bug fixes.

### Node runner versions

The agent ships with several versions of Node.js libraries to support target tasks that use different Node handlers.

All official Azure DevOps tasks use Node 20 as a universal handler. However, customers might still use custom tasks that use the end-of-support Nodes 6, 10, or 16 libraries. To support backward compatibility with a node that reached end of support, we provide the following self-service methods so that you can manually install the designated Node runner:

* Manually install the Node 6 or 10 runner. For more information, see [Node runner support](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/noderunner.md).
* Use the [`NodeTaskRunnerInstaller@0`](/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0) task in your pipelines that require the outdated Node 6 or 10 library.
* Install an agent package that includes Nodes 6 and 10.
  
  Azure Pipelines provides two versions of agent packages.

  * `vsts-agent-\`: Packages that support Nodes 6 and 10.
  * `pipelines-agent-\`: Packages that don't support Nodes 6 and 10. In the future, this version of the package becomes the default agent package.

  If aren't using any tasks that require Nodes 6 or 10, and you don't want Nodes 6 or 10 installed on your agent machine, you can install the agent from [Alternate Agent Downloads in this documentation](https://github.com/microsoft/azure-pipelines-agent/releases).

## Azure Virtual Machine Scale Set agents

Azure Virtual Machine Scale Set agents are a form of self-hosted agents that can be autoscaled to meet your demands. This elasticity reduces your need to run dedicated agents all the time. Unlike Microsoft-hosted agents, you have flexibility over the size and image of machines on which agents run.

Azure Pipelines manages the scaling of your agents for you. Specify the following factors:

* A Virtual Machine Scale Set
* The number of agents to keep on standby
* A maximum number of virtual machines in the scale set

For more information, see [Azure Virtual Machine Scale Set agents](scale-set-agents.md).

[!INCLUDE [mdp-recommended](../../managed-devops-pools/includes/mdp-recommended.md)]

## Managed DevOps Pools agents

Managed DevOps Pools empowers development teams to quickly and easily spin up Azure DevOps agent pools that are tailored to a team's specific needs.

Managed DevOps Pools:

* Implements security best practices.
* Provides ways to balance cost and performance.
* Provides paths for the most common scenarios.
* Significantly reduces the time it takes to create and maintain custom pools.

Managed DevOps Pools is an evolution of Azure DevOps Virtual Machine Scale Set agent pools. It simplifies custom pool creation even further by improving the scalability and reliability of custom pools. Managed DevOps Pools is a fully managed service. The virtual machines or containers that power agents live in a Microsoft Azure subscription and not in your own Azure subscription, similar to Azure DevOps Virtual Machine Scale Set agent pools. For more information, see the [Managed DevOps Pools](../../managed-devops-pools/index.yml) documentation.

::: moniker-end

## Parallel jobs

::: moniker range="azure-devops"

The concept of parallel jobs represents the number of jobs you can run at the same time in your organization. If your organization has a single parallel job, you can run a single job at a time in your organization. Any other concurrent jobs are queued until the first job completes. To run two jobs at the same time, you need two parallel jobs. In Azure Pipelines, you can run parallel jobs on Microsoft-hosted infrastructure or on your own (self-hosted) infrastructure.

Microsoft provides a free tier of service by default in every organization that includes at least one parallel job. Depending on the number of concurrent pipelines you need to run, you might need more parallel jobs to use multiple Microsoft-hosted or self-hosted agents at the same time. For more information on parallel jobs and different free tiers of service, see [Parallel jobs in Azure Pipelines](../licensing/concurrent-jobs.md).

::: moniker-end

::: moniker range="< azure-devops"

You might need more parallel jobs to use multiple agents at the same time:

* [Parallel jobs in Azure DevOps Server](../licensing/concurrent-pipelines-tfs.md)

::: moniker-end

::: moniker range="<azure-devops"

> [!IMPORTANT]
> Starting with Azure DevOps Server 2019, you don't pay for self-hosted concurrent jobs in releases. You're only limited by the number of agents that you have.

::: moniker-end

<h2 id="capabilities">Capabilities</h2>

Every self-hosted agent has a set of capabilities that indicate what it can do. Capabilities are name-value pairs that are either:

* Capabilities that the agent software discovers, called *system capabilities*.
* Capabilities that you define, called *user capabilities*.

The agent software automatically determines various system capabilities. These capabilities include the name of the machine, type of operating system, and versions of certain software installed on the machine. Also, environment variables defined in the machine automatically appear in the list of system capabilities.

> [!NOTE]
> When you store environment variables as capabilities, the stored capability values are used to set the environment variables when an agent runs. Also, when you make any changes to environment variables while the agent is running, they aren't picked up and used by any task. If you don't want sensitive environment variables that change to be stored as capabilities, you can direct the agent to ignore them. Set the `VSO_AGENT_IGNORE` environment variable, with a comma-delimited list of variables to ignore. For example, `PATH` is a critical variable that you might want to ignore if you're installing software.

When you author a pipeline, you specify certain **demands** of the agent. The system sends the job only to agents that have capabilities that match the [demands](/azure/devops/pipelines/yaml-schema/pool-demands) specified in the pipeline. As a result, agent capabilities allow you to direct jobs to specific agents.

> [!NOTE]
>
> Demands and capabilities are designed for use with self-hosted agents so that jobs can be matched with an agent that meets the requirements of the job. When you use Microsoft-hosted agents, you select an image for the agent that matches the requirements of the job. Although it's possible to add capabilities to a Microsoft-hosted agent, you don't need to use capabilities with Microsoft-hosted agents.

### Configure demands

# [YAML](#tab/yaml)

:::moniker range="<=azure-devops"

To add a demand to your YAML build pipeline, add the `demands:` line to the `pool` section.

```yaml
pool:
  name: Default
  demands: SpecialSoftware # exists check for SpecialSoftware
```

You can check for the existence of a capability or make a comparison with the value of a capability. For more information, see [YAML schema - Demands](/azure/devops/pipelines/yaml-schema/pool-demands).

:::moniker-end

# [Classic](#tab/classic)

In the **Tasks** tab of the pipeline, add the demand to your agent job.

| Name | Condition | Value |
|---|---|---|
| `SpecialSoftware` | Exists | n/a |
| `Agent.OS` | Equals | Linux |

---

### Configure agent capabilities

#### [Azure Pipelines UI](#tab/browser)

You can view agent details, including version and system capabilities, and manage its user capabilities. Go to **Agent pools** and select the **Capabilities** tab for the desired agent.

1. In your web browser, go to Agent pools:

   [!INCLUDE [agent-pools-tab](includes/agent-pools-tab.md)]

1. Go to the **Capabilities** tab:

   [!INCLUDE [agent-capabilities](includes/agent-capabilities-tab.md)]

1. To register a new capability with the agent, choose **Add a new capability**.

#### [Azure DevOps CLI](#tab/azure-devops-cli/)

::: moniker range="azure-devops"

You can view the agent details, including version and capabilities. Use the following [`az pipelines agent`](/cli/azure/pipelines/agent) Azure CLI methods.

[List agents](#list-agents) | [Show agent details](#show-agent-details)

> [!NOTE]
> If this is your first time using [`az pipelines`](/cli/azure/pipelines) commands, see [Get started with the Azure DevOps CLI](../../cli/index.md).

### List agents

You can list your agents by using the [`az pipelines agent list`](/cli/azure/pipelines/agent#az-pipelines-agent-list) command.

```azurecli
az pipelines agent list --pool-id
                        [--agent-name]
                        [--demands]
                        [--detect {false, true}]
                        [--include-assigned-request {false, true}]
                        [--include-capabilities {false, true}]
                        [--include-last-completed-request {false, true}]
                        [--org]
                        [--subscription]
```

#### Parameters

* `pool-id`: (Required) The agent pool that contains the agents.
* `agent-name`: Filter on agent name.
* `demands`: Filter by demands the agents can satisfy. Comma-separated list.
* `detect`: Automatically detect organization. Accepted values are `false` and `true`.
* `include-assigned-request`: Determines whether to include details about the agents' current work. Accepted values are `false` and `true`.
* `include-capabilities`: Determines whether to include the agents' capabilities in the response. Accepted values are `false` and `true`.
* `include-last-completed-request`: Determines whether to include details about the agents' most recent completed work. Accepted values are `false` and `true`.
* `org` or `organization`: The Azure DevOps organization URL. You can configure the default organization by using `az devops configure -d organization=ORG_URL`. This parameter is required if not configured as default or picked up via git config. Example: `https://dev.azure.com/MyOrganizationName/`.
* `subscription`: The name or ID of the subscription. You can configure the default subscription by using `az account set -s NAME_OR_ID`.

#### Example

The following example lists all agents in the pool `ID: 4` in table format. To retrieve the ID of pools, use [`az pipelines pool list`](pools-queues.md?tabs=yaml#list-agent-pools). This example uses the following default configuration: `az devops configure --defaults organization=https://dev.azure.com/fabrikam-tailspin project=FabrikamFiber`.

```azurecli
az pipelines agent list --pool-id 4 --output table

ID    Name          Is Enabled    Status    Version
----  ------------  ------------  --------  ---------
3     Hosted Agent  True          offline   2.155.1
```

### Show agent details

You can retrieve agent details by using the [`az pipelines agent show`](/cli/azure/pipelines/agent#az-pipelines-agent-show) command.

```azurecli
az pipelines agent show --agent-id
                        --pool-id
                        [--detect {false, true}]
                        [--include-assigned-request {false, true}]
                        [--include-capabilities {false, true}]
                        [--include-last-completed-request {false, true}]
                        [--org]
                        [--subscription]
```

#### Parameters

* `agent-id` or `id`: (Required) The agent ID to get information about.
* `pool-id`: (Required) The agent pool that contains the agents.
* `detect`: Automatically detect organization. Accepted values are `false` and `true`.
* `include-assigned-request`: Determines whether to include details about the agents' current work. Accepted values are `false` and `true`.
* `include-capabilities`: Determines whether to include the agents' capabilities in the response. Accepted values are `false` and `true`.
* `include-last-completed-request`: Determines whether to include details about the agents' most recent completed work. Accepted values are `false` and `true`.

You can run tasks by using Windows authentication to access an external service. The agent must run under an account with access to that service in pipelines or variable groups when it's exchanged with the agent.

The payload of the messages exchanged between the agent and Azure Pipelines is secured by using asymmetric encryption. Each agent has a public-private key pair, and the public key is exchanged with the server during registration. The server uses the public key to encrypt the payload of the job before it sends it to the agent. The agent decrypts the job content by using its private key. `gentCloudRequest": null,`

```json

  <Some properties omitted for space>

  "status": "offline",
  "statusChangedOn": null,
  "systemCapabilities": {
    "ANDROID_HOME": "",
    "ANDROID_NDK_HOME": "",
    "Agent.Name": "Hosted Agent",
    "Agent.Version": "2.160.1",

    <Some capabilities omitted for space>

    "sh": "",
    "subversion": "",
    "svn": "",
    "To run tasks using Windows authentication to access an external service, the agent must run under an account with access to that service.
```

If you're running UI tests like Selenium, or Coded UI tests that require a browser, the browser opens in the context of the agent account.

On Windows, we recommend that you use a service account like Network Service or Local Service. These accounts have restricted permissions and passwords that don't expire. This process reduces the need for agent management over time.

These credentials are different from the credentials that you use when you register the agent with Azure Pipelines or Azure DevOps Server.

::: moniker-end

[!INCLUDE [note-cli-not-supported](../../includes/note-cli-not-supported.md)]

---

> [!TIP]
>
> After you install new software on a self-hosted agent, you must restart the agent for the new capability to show up. For more information, see: [Restart Windows agent](windows-agent.md#how-do-i-restart-the-agent), [Restart Linux agent](linux-agent.md#how-do-i-restart-the-agent), and [Restart Mac agent](osx-agent.md#how-do-i-restart-the-agent).

<h2 id="communication">Communication</h2>

::: moniker range="azure-devops"

### Communication with Azure Pipelines

::: moniker-end

::: moniker range="<azure-devops"

### Communication with Azure DevOps Server

::: moniker-end

The agent communicates with Azure Pipelines or Azure DevOps Server. It determines which job it needs to run and reports the logs and job status. The agent always initiates this communication.

All the messages from the agent to Azure Pipelines or Azure DevOps Server happen over HTTP or HTTPS, depending on how you configure the agent. This pull model allows you to configure the agent to different topologies as shown by the following examples.

::: moniker range="< azure-devops"
:::image type="content" source="media/agent-topologies-tfs.png" alt-text="Graphic that shows agent topologies in on-premises installations." lightbox= "media/agent-topologies-tfs.png":::
::: moniker-end

::: moniker range="azure-devops"
:::image type="content" source="media/agent-topologies-devops.png" alt-text="Graphic that shows agent topologies in Azure DevOps Services." lightbox= "media/agent-topologies-devops.png":::
::: moniker-end

Here's a common communication pattern between the agent and Azure Pipelines or Azure DevOps Server.

1. The user registers an agent with Azure Pipelines or Azure DevOps Server by adding it to an [agent pool](pools-queues.md). To register an agent in that agent pool, you need to have the [Agent pool administrator](pools-queues.md#security) role. The **Agent pool administrator** role is needed only at the time of registration and isn't persisted on the agent. It isn't used in any further communication between the agent and Azure Pipelines or Azure DevOps Server.

   Once registration is complete, the agent downloads a `listener OAuth token` and uses it to listen to the job queue.

1. The agent listens to see if a new job request is posted in the job queue in Azure Pipelines or Azure DevOps Server by using an HTTP long poll. When a job is available, the agent downloads the job and a `job-specific OAuth token`. Azure Pipelines/Azure DevOps Server generates a short-lived token for the scoped identity [specified in the pipeline](../build/options.md).

   The agent uses the token to access or modify resources on Azure Pipelines or Azure DevOps Server within that job (for example, to access source code or upload test results).

1. The agent discards the job-specific `OAuth` token after the job is completed, and then checks if there's a new job request using the listener OAuth token.

The payload of the messages exchanged between the agent and Azure Pipelines or Azure DevOps Server are secured by using asymmetric encryption.

Each agent has a public-private key pair, and the public key is exchanged with the server during registration. The server uses the public key to encrypt the payload of the job before it sends it to the agent. The agent decrypts the job content by using its private key.

This method secures secrets stored in pipelines or variable groups when exchanged with the agent.

> [!NOTE]
> The agent provides support for UTF-8 client encoding output. However, if your system doesn't use UTF-8 encoding, you might encounter some problems with log output. For example, logs might contain characters that your system’s encoding doesn't recognize, so they might appear to be garbled or missing symbols.

::: moniker range="azure-devops"

### Communication to deploy to target servers

When you use the agent to deploy artifacts to a set of servers, it must have "line of sight" connectivity to those servers. Microsoft-hosted agent pools, by default, have connectivity to Azure websites and servers that run in Azure.

> [!NOTE]
> If your Azure resources run in an Azure Virtual Network, you can get the [Agent IP ranges](hosted.md#agent-ip-ranges) where Microsoft-hosted agents are deployed. Then, you can configure the firewall rules for your Azure virtual network to allow access by the agent.

If your on-premises environments don't have connectivity to a Microsoft-hosted agent pool, which is typically the case due to intermediate firewalls, you need to manually configure self-hosted agents on on-premises computers. The agents must have connectivity to the target on-premises environments, and access to the internet to connect to Azure Pipelines or Azure DevOps Server. This process is demonstrated in the following schematic:

:::image type="content" source="media/agent-connections-devops.png" alt-text="Graphic that shows agent connectivity for on-premises environments." lightbox= "media/agent-connections-devops.png":::
::: moniker-end

<a name="configure-tfs-authentication"></a>
## Authentication

To register an agent, you need to be a member of the [administrator role](pools-queues.md#security) in the agent pool. The identity of agent pool administrator is needed only at the time of registration and isn't persisted on the agent. It isn't used in any subsequent communication between the agent and Azure Pipelines or Azure DevOps Server. To configure the agent, you also must be a local administrator on the server.

When you register an agent, choose from the following authentication types. The agent setup process prompts you for the specific additional information required for each authentication type. For more information, see [Self-hosted agent authentication options](./agent-authentication-options.md).

[!INCLUDE [agent-setup-authentication-type](./includes/agent-setup-authentication.md)]

:::moniker range="<= azure-devops-2022"

Additionally, Windows agents have the following two authentication options on Azure DevOps Server.

* [**Negotiate**](./agent-authentication-options.md#negotiate): Connect to Azure DevOps Server as a user other than the signed-in user via a Windows authentication scheme (for example: New Technology LAN Manager (NTLM) or Kerberos). After you select **Negotiate**, you're prompted for credentials.
* [**Integrated**](./agent-authentication-options.md#integrated): (Default) Connect a Windows agent to Azure DevOps Server by using the credentials of the signed-in user via a Windows authentication scheme (for example: NTLM or Kerberos). You won't be prompted for credentials after you choose this method.

> [!IMPORTANT]
> You must configure your server [to support the authentication method](agents.md#configure-tfs-authentication) to use Alternate, Negotiate, or Integrated authentication.

:::moniker-end

The authentication method that you use to register the agent is used only during agent registration. To learn more about how agents communicate with Azure Pipelines after registration, see [Communication with Azure Pipelines or Azure DevOps Server](#communication).

<h2 id="interactive-or-service">Interactive vs. service</h2>

You can run your self-hosted agent as either a service or an interactive process.

After you configure the agent, we recommend you first try it in interactive mode to make sure it works. Then, for production use, we recommend you run the agent in one of the following modes so that it reliably remains in a running state. These modes also ensure that the agent starts automatically if the machine is restarted.

* **As a service**: You can use the service manager of the operating system to manage the lifecycle of the agent. The experience to autoupgrade the agent is better when you run the agent as a service.
* **As an interactive process with automatic sign in enabled**: In some cases, you might need to run the agent interactively for production use (for example: to run UI tests). When you configure an agent to run in this mode, the screen saver is disabled. Some domain policies might prevent you from enabling automatic sign in or disabling the screen saver. In such cases, you might need to seek an exemption from the domain policy, or run the agent on a workgroup computer where the domain policies don't apply.

   > [!NOTE]
   > There are security risks when you enable automatic sign in or disable the screen saver. Other users might be able to access the computer and use the account that automatically signs in. If you configure the agent to run this way, you must ensure the computer is physically protected (for example: located in a secure facility).
   >
   > If you use remote desktop to access a computer on which an agent is running with automatic sign in, closing the remote desktop causes the computer to lock. Any UI tests that run on this agent might fail. To avoid this issue, use the [`tscon`](/windows-server/administration/windows-commands/tscon) command to disconnect from remote desktop. Refer to the following example:
   >
   > `%windir%\System32\tscon.exe 1 /dest:console`

<h2 id="account">Agent account</h2>

Whether you run an agent as a service or interactively, you can choose which computer account you use to run the agent. The choice of agent account depends solely on the needs of the tasks that run in your build and deployment jobs.

For example, to run tasks by using Windows authentication to access an external service, the agent must run by using an account with access to that service. However, if you're running UI tests such as Selenium or Coded UI tests that require a browser, the browser opens in the context of the agent account.

On Windows, we recommend that you use a service account like Network Service or Local Service. These accounts permissions are restricted and their passwords don't expire, so the agent requires less management over time.

These credentials are different from the credentials that you use when you register the agent with Azure Pipelines or Azure DevOps Server.

## Agent version and upgrades

::: moniker range="azure-devops"

We update the agent software every few weeks in Azure Pipelines. We indicate the agent version in the format `{major}.{minor}`. For instance, if the agent version is `2.1`, then the major version is `2` and the minor version is `1`.

We keep Microsoft-hosted agents up to date. If the newer version of the agent is only different in the *minor* version, Azure Pipelines can automatically update self-hosted agents. The default setting is **enabled**. You can configure this setting in **Agent pools** by selecting your agent, and then selecting **Settings**. An upgrade is requested when a platform feature or one of the tasks in the pipeline requires a newer version of the agent.

If you run a self-hosted agent interactively, or if there's a newer *major* version of the agent available, then you might have to manually upgrade the agents. You can upgrade the agents from the **Agent pools** tab under your organization. Pipelines can't run without a compatible agent.

### To update self-hosted agents

1. Navigate to **Project settings** > **Agent pools**.

   :::image type="content" source="media/agent-queues-tab/agent-queues.png" alt-text="Screenshot that shows how to find and select Agent pools." lightbox= "media/agent-queues-tab/agent-queues.png":::

1. Select your agent pool and choose **Update all agents**.

   :::image type="content" source="media/agents/update-all-agents.png" alt-text="Screenshot that shows how to select Update all agents." lightbox= "media/agents/update-all-agents.png":::

    You can also update agents individually by choosing **Update agent** from the **...** menu.

   :::image type="content" source="media/agents/update-agent.png" alt-text="Screenshot that shows how to select Update agent." lightbox= "media/agents/update-agent.png":::

1. Select **Update** to confirm.

   :::image type="content" source="media/agents/update-all-agents-confirmation.png" alt-text="Screenshot that shows how to select Update to confirm." lightbox= "media/agents/update-all-agents-confirmation.png":::

1. An update request is queued for each agent in the pool, and runs when any currently running jobs complete. An upgrade typically takes only a few moments. This amount of time is long enough to download the latest version of the agent software (approximately 200 MB), unzip it, and restart the agent with the new version. You can monitor the status of your agents on the **Agents** tab.

::: moniker-end

::: moniker range="< azure-devops"

We update the agent software with every Azure DevOps Server update. We indicate the agent version in the format `{major}.{minor}`. For instance, if the agent version is `2.1`, then the major version is 2 and the minor version is 1.

When your Azure DevOps Server has a newer version of the agent, and that newer agent is only different in the *minor* version, it can usually be automatically upgraded. An upgrade is requested when a platform feature or one of the tasks that you use in the pipeline requires a newer version of the agent. Starting with Azure DevOps Server 2019, you don't have to wait for a new server release. You can [upload a new version of the agent to your application tier](#can-i-update-my-agents-that-are-part-of-an-azure-devops-server-pool), and that version is offered as an upgrade.

If you run the agent interactively, or if a newer *major* version of the agent is available, then you might have to manually upgrade the agents. You can easily upgrade the agent from the **Agent pools** tab under your project collection. Pipelines can't run without a compatible agent.

::: moniker-end

You can view the version of an agent. Navigate to **Agent pools** and select the **Capabilities** tab for the desired agent, as described in [Configure agent capabilities](#configure-agent-capabilities).

To trigger agent update programmatically, you can use the *Agent update API* as described in the section [How can I trigger agent updates programmatically for a specific agent pool?](#how-can-i-trigger-agent-updates-programmatically-for-specific-agent-pool)

> [!NOTE]
> For servers with no internet access, manually copy the agent ZIP file to the following folder to use as a local file. Create the **Agents** folder if it isn't present:
>
> * Windows: `%ProgramData%\Microsoft\Azure DevOps\Agents`
> * Linux: `usr/share/Microsoft/Azure DevOps/Agents`
> * macOS: `usr/share/Microsoft/Azure DevOps/Agents`

## Agent directory structure

[!INCLUDE [include](includes/agent-directory-structure.md)]

## FAQ

[!INCLUDE [include](includes/v2/qa-agent-version.md)]

<h3 id="private-agent-performance-advantages">Do self-hosted agents have any performance advantages over Microsoft-hosted agents?</h3>

In many cases, yes. If you use a self-hosted agent, you can run incremental builds. For example, if you define a pipeline that doesn't clean the repo and doesn't perform a clean build, your builds typically run faster. You don't get these benefits with a Microsoft-hosted agent unless you use features such as [caching](../release/caching.md), because the agent is destroyed after the pipeline is completed.

A Microsoft-hosted agent can take longer to start your build. While it often takes just a few seconds for your job to be assigned to a Microsoft-hosted agent, it can sometimes take several minutes for an agent to be allocated, depending on the load on our system.

### Can I install multiple self-hosted agents on the same machine?

Yes. This approach might work well for agents that run jobs that don't consume many shared resources. For example, you could try it for agents that run releases that mostly orchestrate deployments and don't do much work on the agent itself.

You might find that in other cases you don't gain much efficiency by running multiple agents on the same machine. For example, it might not be worthwhile for agents that run builds that consume a lot of disk space and input/output resources.

You might also run into problems if parallel build jobs are using the same singleton tool deployment (for example: npm packages). One build might update a dependency while another build is using it, which could cause unreliable results and errors.

::: moniker range="<=azure-devops"

### What do agents do when pipeline jobs are canceled?

For Microsoft-hosted agents, the agent is torn down and returned to the Azure Pipelines pool.

For self-hosted agents:

When a pipeline is canceled, the agent sends a sequence of commands to the process that's executing the current step.

* The first command is sent with a timeout of 7.5 seconds.
* If the process doesn't terminate, a second command is sent with a 2.5-second timeout.
* If the process doesn't terminate, the agent commands it to be killed.
* If the process ignores the two initial termination requests, it's forcibly killed.

From the initial request to termination takes approximately 10 seconds.

The commands issued to the process to cancel the pipeline differ based on the agent operating system.

* macOS and Linux: The commands sent are `SIGINT`, followed by `SIGTERM`, followed by `SIGKILL`.
* Windows: The commands sent to the process are `Ctrl+C`, followed by `Ctrl+Break`, followed by `Process.Kill`.

### How can I trigger agent updates programmatically for specific agent pool?

You can trigger agent updates for the pool by using the following API:

::: moniker-end

::: moniker range="azure-devops"

```
POST https://dev.azure.com/{organization}/_apis/distributedtask/pools/{poolId}/messages?agentId={agentId}&api-version=6.0
```

::: moniker-end

::: moniker range="<azure-devops"

```
POST https://{server url}/tfs/{collection}/_apis/distributedtask/pools/{poolId}/messages?agentId={agentId}&api-version=6.0
```

> [!NOTE]
> For more information, see [API and Azure DevOps Server version mapping](/rest/api/azure/devops#api-and-tfs-version-mapping).

::: moniker-end

::: moniker range="<=azure-devops"

#### URI Parameters

| Name           | In    | Required | Type          | Description                                                                            |
| -------------- | ----- | -------- | ------------- | -------------------------------------------------------------------------------------- |
| `agentId`      | query | `False`    | string        | The agent to update. If not specified, update is triggered for all agents.       |
| `organization` | path  | `True`     | string        | The name of the Azure DevOps organization.                                             |
| `poolId`       | path  | `True`     | integer int32 | The agent pool to use.                                                                  |
| `api-version`  | query | `False`    | string        | Version of the API to use. To use this version of the API, the value should be set to `6.0`. |

To trigger an agent update, the request body should be empty.

> [!NOTE]
> Azure Pipelines Agent is open source on [GitHub](https://github.com/microsoft/azure-pipelines-agent).

## Related content

For more information about agents, see the following modules from the [Build applications with Azure DevOps](/training/paths/build-applications-with-azure-devops/) learning path:

* [Choose a Microsoft-hosted or self-hosted build agent](/training/modules/host-build-agent/2-choose-a-build-agent)
* [Host your own build agent in Azure Pipelines](/training/modules/host-build-agent/)

::: moniker-end
