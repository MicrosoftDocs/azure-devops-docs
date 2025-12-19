---
title: Configure demands
description: Learn how to configure demands for Managed DevOps Pools.
ms.date: 12/17/2025
ms.topic: how-to
---

# Configure demands for Managed DevOps Pools

Pipelines use [demands](/azure/devops/pipelines/yaml-schema/pool-demands) to specify what capabilities an agent needs for Azure DevOps to send a pipeline job to the agent.

In Managed DevOps Pools, demands like [`ImageOverride`](#imageoverride) work just like demands in Azure Pipelines. A pipeline job is routed to a specific agent that has attributes that match the demand. You can use some demands, like [`WorkFolder`](#workfolder) and [`Priority`](#priority), to configure attributes on the agent.

This article describes the demands available in Managed DevOps Pools and how to use them.

## WorkFolder

The default work folder for agents is typically `D:\a\_work` (or `C:\a\_work` if the pool's VM size doesn't have a `D` drive) for Windows agents or `/mnt/vss/_work` for Linux agents, and your pipeline can reference it by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables). You can override this location to change both the drive and directory name used when the agent starts by specifying the `WorkFolder` demand in your pipeline.

> [!TIP]
> The `WorkFolder` demand configures a custom agent working folder at the pipeline level. To configure your agents to use a custom working directory for every agent in the pool, configure the [Work folder](configure-advanced-settings.md#work-folder) setting.

If you have a stateful pool with a running agent with a `WorkFolder` that matches your demand, your pipeline job is sent to that agent. If you aren't using stateful pools, or there's no agent running with that `WorkFolder`, a new agent is started and configured to use the designated `WorkFolder`. The directory specified is created if not present. If the path name for the `WorkFolder` is invalid, the default agent working folder is used.

Set your agent work folder by configuring the `WorkFolder` demand in the `demands` section of your pipeline. If you're using an [attached data disk](configure-storage.md) and want your agent work folder on that disk, use `WorkFolder` and [specify a folder on the data disk as your agent working directory](configure-storage.md#use-the-data-disk-for-your-agent-working-directory).

#### [Windows](#tab/windows/)

The default work folder for Windows agents is typically on drive `D`. You can reference it in your pipeline by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables).

In the following example, `WorkFolder` is set to an [attached data disk](./configure-storage.md?tabs=windows#use-the-data-disk-for-your-agent-working-directory) with the letter `F`.

```yml
pool: 
  name: fabrikam-managed-pool # Name of pool
  demands:
  - WorkFolder -equals f:\custom-work-folder
```

#### [Linux](#tab/linux/)

The default work folder for agents is typically `/mnt` for Linux. You can reference it in your pipeline by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables).

In the following example, `WorkFolder` is set to an [attached data disk](./configure-storage.md?tabs=linux#use-the-data-disk-for-your-agent-working-directory).

```yml
pool: 
  name: fabrikam-managed-pool # Name of pool
  demands:
  - WorkFolder -equals /mnt/storage/sdc/custom-work-folder
```

* * *

## Priority

`Priority` specifies the priority of the job. Jobs with higher priority are executed first. Valid values are: `High`, `Medium`, and `Low`. The default value is `Medium`.

Configure the `Priority` demand in the `demands` section of your pipeline.

```yml
pool: 
  name: fabrikam-dev-pool # Name of pool
  demands:
  - Priority -equals Low
```

Jobs are selected to run from the queue in order of priority. For example, you have a pool that has a maximum agents setting of `10` and you configured a pipeline to use this pool. The pool is already running 10 pipelines and 20 more are queued. If you want to run a priority pipeline, for example to push out a hotfix, it would normally run after the 10 running pipelines and the 20 queued pipelines finish. If you set priority to `High` when you queue your urgent pipeline, it gets an agent and runs before the 20 previously queued pipelines.

If multiple jobs are queued at the same time, a lower-priority job might run before a higher-priority job.

For the case of a single pipeline with multiple jobs:

* If your pipeline has [dependencies that define sequential jobs](../pipelines/process/phases.md#dependencies), the sequential jobs run in the order specified by the pipeline regardless of the priority setting for each job.
* If your pipeline has multiple jobs configured to run in parallel (which is [the default for YAML pipelines](../pipelines/process/phases.md#dependencies)), the jobs are queued at the same time. Jobs in the pipeline with a lower priority value might run before jobs in the pipeline with a higher priority value.

## ImageOverride

If you have multiple images in your pool, you can configure your pipelines to use a specific image. Use the `ImageOverride` demand and provide the image's [alias](configure-images.md#use-multiple-images-per-pool-with-aliases). To use an Azure Pipelines image, use its [predefined alias](configure-images.md#azure-pipelines-image-predefined-aliases). For all other images, you must [configure your own aliases](configure-images.md#configure-image-aliases).

If you have multiple images in your pool, and don't use demands in your pipelines to designate an image, the pipelines run by using the first listed image in your pool. You can change the order of the images in your pool by changing the order of the images in the `images` list in the `fabricProfile` section (if you're using [templates](./configure-images.md?&tabs=arm#choose-your-pools-image)). You can also order the [images in the images list](./configure-pool-settings.md#images) in the Azure portal by dragging them.

In the following example, a pipeline is configured to run on an image that's configured with an `ubuntu-24.04-gen2` alias.

```yml
pool: 
  name: fabrikam-dev-pool # Name of pool
  demands:
  - ImageOverride -equals ubuntu-24.04-gen2
```

> [!IMPORTANT]
> Don't put quotes around the alias name in the `ImageOverride` demand, even if it has spaces in the name.

## ImageVersionOverride

If you want to use a specific version of the image instead of the version specified by your image configuration, you can use the `ImageVersionOverride` demand. For example, you can use it to validate a new image version before you promote it to be **latest** for an image.

When you use `ImageVersionOverride` to specify a different image version than what's configured in your [pool settings](./configure-images.md), each agent is started on demand by using the specified image version. [Standby agents](./configure-scaling.md#standby-agent-mode) are provisioned by using the image versions specified in your [pool's configuration](./configure-images.md). If you use `ImageVersionOverride`, any standby agents don't match that version and a fresh agent is started.

Configure the `ImageVersionOverride` demand in the `demands` section of your pipeline. The following example specifies an `ImageVersionOverride` of `20250427.1.0`.

```yml
pool: 
  name: fabrikam-dev-pool # Name of pool
  demands:
  - ImageVersionOverride -equals 20250427.1.0
```

> [!TIP]
> If you think a pipeline is failing due to an image update, follow the procedure in [Troubleshooting: Check to see if there was an image update](./troubleshooting.md#check-to-see-if-there-has-been-an-image-update).

## CustomCapabilities

If you have stateful pools and you want to run a job on a specific running agent instance, you can use the `CustomCapabilities` demand. The `CustomCapabilities` demand applies only to agents in stateful pools. When you're using stateless pools, you get a fresh agent image for every job.

When you specify a `CustomCapabilities` demand in your pipeline, if any pipeline with the same demand has previously run, and the stateful agent that ran the pipeline is still online, that agent is used to run the pipeline.

If no online agents match the `CustomCapabilities` demand, an agent is provisioned from the pool. It's tagged with the `CustomCapabilities` demand, and is used to run the pipeline.

Subsequent jobs with the same `CustomCapabilities` demand use that tagged agent instance to run their jobs as long as that agent is online.

In the following example, a pipeline is run using the `windows-2022` Azure Pipelines image in a stateful pool. If an online agent is ready to accept jobs and is tagged with the `CustomCapabilities` attribute (set by a pipeline that previously ran on the agent), that agent is used to run this pipeline. If no online agent matches this demand, the next available agent is used to run the job, and the agent is tagged with the `CustomCapabilities` attribute. Future pipeline runs with this demand runs on this agent, if it's online and ready for jobs.

```yml
pool: 
  name: fabrikam-dev-pool # Name of pool
  demands:
  - ImageOverride -equals windows-2022
  - CustomCapabilities -equals MyCustomValue
```

For example, if you have a large repository that takes a long time to clone, and you have multiple pipelines that run from this repository, you can use the same `CustomCapabilities` demand in the pipelines. This demand helps the second pipeline run more quickly by using an agent that already has a clone of the repository.

## Related content

* [Configure images](./configure-images.md)
