---
title: Configure demands
description: Learn how to configure demands for Managed DevOps Pools.
ms.date: 11/13/2024
---

# Demands

[Demands](/azure/devops/pipelines/yaml-schema/pool-demands) provide a way for pipelines to specify what capabilities must be present in an agent in order for Azure DevOps to send a job from the pipeline to the agent. In Managed DevOps Pools, demands like [ImageOverride](#imageoverride) work just like demands in Azure Pipelines, where a pipeline job is routed to a specific agent that has attributes matching the demand, but some demands, like [WorkFolder](#workfolder) and [Priority](#priority), can be used to configure attributes on the agent. This article describes the demands available in Managed DevOps Pools and how to use them.

## WorkFolder

The default work folder for agents is typically on the **D:\\** drive for Windows or **/mnt** for Linux, and can be referenced in your pipeline by using the `Agent.WorkFolder` [predefined variable](/azure/devops/pipelines/build/variables). You can override this location to change both the drive and directory name used when starting the agent by specifying the `WorkFolder` demand in your pipeline. If you have a stateful pool with a running agent with a `WorkFolder` that matches your demand, your pipeline will be sent to that agent. If you aren't using stateful pools, or there is no agent running with that `WorkFolder`, a new agent is started and configured to use the designated `WorkFolder`. The directory specified is created if not present. If the path name for the `WorkFolder` is invalid, the default agent working folder is used.

Configure the `WorkFolder` demand in the `demands` section of your pipeline to set your agent work folder. If you're using an [attached data disk](configure-storage.md) and want your agent work folder on that disk, use `WorkFolder` and [specify a folder on the data disk as your agent working directory](configure-storage.md#use-the-data-disk-for-your-agent-working-directory).

```yml
pool: 
  name: fabrikam-managed-pool # Name of Managed DevOps Pool
  demands:
  - WorkFolder -equals c:\custom-work-folder # Windows agent example
  # Use a folder like /user/local/custom-work-folder for Linux
  # or /mnt/storage/sdc/custom-work-folder if you're using a data disk.
```

## Priority

`Priority` specifies the priority of the job. Jobs with higher priority are executed first. Valid values are: `High`, `Medium`, `Low`. The default value is `Medium`.

Configure the `Priority` demand in the `demands` section of your pipeline.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - Priority -equals Low
```

Jobs are selected to run from the queue in order of priority. For example, you have a pool which has a maximum agents setting of 10 and a pipeline configured to use this pool. The pool is already running 10 pipelines, and 20 more are queued. If you have a priority pipeline to run, for example to push out a hot fix, it would normally run after the 10 running pipelines and the 20 queued pipelines complete. If you set priority to high when queuing your hotfix pipeline, it will get an agent and run before the 20 previously queued pipelines.

If multiple jobs are queued at the same time, it is possible that a lower priority job will run before a higher priority job.

For the case of a single pipeline with multiple jobs:

* If your pipeline has [dependencies that define sequential jobs](../pipelines/process/phases.md#dependencies), the sequential jobs run in the order specified by the pipeline regardless of the priority setting for each job.
* If your pipeline has multiple jobs configured to run in parallel ([the default for YAML pipelines](../pipelines/process/phases.md#dependencies)), the jobs are queued at the same time, and jobs in the pipeline with lower priority might run before jobs in the pipeline with higher priority.


## ImageOverride

If you have multiple images in your pool, you can configure your pipelines to use a specific image by using the `ImageOverride` demand and providing the [alias](configure-images.md#use-multiple-images-per-pool-with-aliases) of the image to use. If you're using an Azure Pipelines image, you can use its [predefined alias](configure-images.md#azure-pipelines-image-predefined-aliases). For all other images, you must [configure your own aliases](configure-images.md#configure-image-aliases).

In the following example, a pipeline is configured to run using an image that is configured with an `ubuntu-20.04-gen2` alias.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - ImageOverride -equals ubuntu-20.04-gen2
```

> [!IMPORTANT]
> Don't put quotes around the alias name in the `ImageOverride` demand, even if it has spaces in the name.

## ImageVersionOverride

If you're using a Shared Image Gallery or Azure Marketplace [image](configure-images.md#choose-your-pools-image) and want to use a specific version of the image instead of the version specified by your image configuration, you can use the `ImageVersionOverride` demand. For example, you can use it to validate a new image version before promoting it to be **latest** for an image. The following examples specify an `ImageVersionOverride` of `2.0.0`.

Configure the `ImageVersionOverride` demand in the `demands` section of your pipeline.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - ImageVersionOverride -equals 2.0.0
```

## CustomCapabilities

If you have stateful pools and you want a way to run a job on a specific running agent instance, you can use the `CustomCapabilities` demand.

> [!IMPORTANT]
> The `CustomCapabilities` demand applies only to agents in stateful pools. When you're using stateless pools, you get a fresh agent image for every job.

When you specify a `CustomCapabilities` demand in your pipeline, if any pipeline with the same demand has run previously, and the stateful agent that ran the pipeline is still online, that agent will be used to run the pipeline. If no online agents match the `CustomCapabilities` demand, an agent is provisioned from the pool, tagged with the `CustomCapabilities` demand, and is used to run the pipeline. Subsequent jobs with the same `CustomCapabilities` demand will use that tagged agent instance to run their jobs as long as that agent is online.

In the following example, a pipeline is run using the `windows-2022` Azure Pipelines image in a stateful pool. If an online agent is ready to accept jobs and is tagged with the `CustomCapabilities` attribute (set by a pipeline that previously ran on the agent), that agent will be used to run this pipeline. If no online agent matches this demand, the next available agent is used to run the job, and the agent is tagged with the `CustomCapabilities` attribute. Future pipeline runs with this demand will run on this agent, if it is online and ready for jobs.

```yml
pool: 
  name: fabrikam-dev-pool # Name of Managed DevOps Pool
  demands:
  - ImageOverride -equals windows-2022
  - CustomCapabilities -equals MyCustomValue
```

For example, you have a large repository that takes a long time to clone, and you have multiple pipelines that run from this repository. Using the same `CustomCapabilities` demand in the pipelines could help the second pipeline run more quickly by using an agent with the repository already cloned.

## See also

* [Configure images](./configure-images.md)
