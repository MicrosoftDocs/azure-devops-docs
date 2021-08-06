---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 07/29/2021
ms.topic: include
---
### Support for sequential deployments rather than latest only when using exclusive lock checks

In YAML pipelines, checks are used to control the execution of stages on [protected resources](https://docs.microsoft.com/azure/devops/pipelines/security/resources?view=azure-devops). One of the common checks that you can use is an [exclusive lock check](https://docs.microsoft.com/azure/devops/pipelines/process/approvals?view=azure-devops&tabs=check-pass#exclusive-lock). This check lets only a single run from the pipeline proceed. When multiple runs attempt to deploy to an environment at the same time, the check cancels all the old runs and permits the latest run to be deployed.

Canceling old runs is a good approach when your releases are cumulative and contain all the code changes from previous runs. However, there are some pipelines in which code changes are not cumulative. With this new feature, you can choose to allow all runs to proceed and deploy sequentially to an environment, or preserve the previous behavior of canceling old runs and allowing just the latest. You can specify this behavior using a new property called `lockBehavior` in the pipeline YAML file. A value of `sequential` implies that all runs acquire the lock sequentially to the protected resource. A value of `runLatest` implies that only the latest run acquires the lock to the resource.

To use exclusive lock check with `sequential` deployments or `runLatest`, follow these steps:

 1. Enable the exclusive lock check on the environment (or another protected resource).
 2. In the YAML file for the pipeline, specify a new property called `lockBehavior`. This can be specified for the whole pipeline or for a given stage:

Set on a stage:

```yaml
stages:
- stage: A
  lockBehavior: sequential
  jobs:
  - job: Job
    steps:
    - script: Hey!
```
Set on the pipeline:

```yaml
lockBehavior: runLatest
stages:
- stage: A
  jobs:
  - job: Job
    steps:
    - script: Hey!
```

If you do not specify a `lockBehavior`, it is assumed to be `runLatest`.

### Support for Quebec version of ServiceNow

Azure Pipelines has an existing integration with ServiceNow. The integration relies on an [app](https://store.servicenow.com/sn_appstore_store.do#!/store/application/fa788cb5dbb5630040669c27db961940) in ServiceNow and an [extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-servicenowchangerequestmanagement) in Azure DevOps. We have now updated the app to work with the Quebec version of ServiceNow. Both classic and YAML pipelines now work with Quebec. To ensure that this integration works, upgrade to the new version of the app (4.188.0) from the Service Now store. For more information, see [Integrate with ServiceNow Change Management](https://docs.microsoft.com/azure/devops/pipelines/release/approvals/servicenow?view=azure-devops).

### Change in .NET SDK preinstallation policy on Microsoft-hosted Windows and macOS agents

Recently, we [announced](https://docs.microsoft.com/azure/devops/release-notes/2021/sprint-187-update#change-in-net-sdk-preinstallation-policy-on-microsoft-hosted-ubuntu-agents) a change in .NET SDK preinstallation policy on Microsoft hosted Ubuntu agents. We are now making the same change for Microsoft-hosted Windows and macOS agents.

Currently, we install all available and supported versions of the .NET SDK (2.1.x, 3.1.x, 5.0.x) on Microsoft-hosted Windows and macOS agents. This approach will be changed in favor of installing the latest patch version for every feature version. This change is being made to provide you with more free space and for new tool requests. For more information, see our [software and image guidelines](https://github.com/actions/virtual-environments/blob/main/docs/software-and-images-guidelines.md).

#### What does it mean?

The SDK version is composed of the following parts: `x.y.znn`. `z` is the feature version and `nn` is the patch version. For example, for 2.1.302, the feature version is 3, and 02 is the patch version. According to the new approach, we will only install the latest patch version for every feature version, i.e. only 2.1.302 will be installed for 2.1.3x, only 2.1.403 for 2.1.4x and so on. All versions of the .NET SDK that are not the latest patch versions will be removed from Windows and macOS images on September 6th. This change impacts all the versions of Windows and macOS on Microsoft-hosted agents.

#### Target date

Deployment of updated images will start September 6th and will take 3-4 days.

#### Possible impact

If you use a [global.json file](/dotnet/core/tools/global-json), your build will be affected in the following cases:

Your build will fail if the global.json file contains the `rollForward: disable` property and an SDK version that is not the latest patch version. For example:
```
{
  "sdk": {
    "version": "3.1.100",
    "rollForward": "disable"
  }
}
```

.NET SDK version will be automatically changed to the latest patch if the global.json file contains the `rollForward: patch` property. For example:
```
{
  "sdk": {
    "version": "3.1.100",
    "rollForward": "patch"
  }
}
```

If the `rollForward` field is not specified in your global.json file, there will be no change for you. The latest installed patch level is used.

If you need to use an exact .NET SDK version that is not the latest patch, please use the [`UseDotNet` task](/azure/devops/pipelines/tasks/tool/dotnet-core-tool-installer) to install it as part of the build:

``` YAML
steps:
- task: UseDotNet@2
  displayName: 'Use .NET Core sdk'
  inputs:
    version: <dotnet version>
```

### Changes to PublishBuildArtifacts and DownloadBuildArtifacts tasks

Azure Pipelines supports two sets of tasks for publishing/downloading artifacts. [PublishPipelineArtifact and DownloadPipelineArtifact](https://docs.microsoft.com/azure/devops/pipelines/artifacts/pipeline-artifacts?view=azure-devops&tabs=yaml) are the newer and recommended tasks for performing these steps.

PublishBuildArtifacts and DownloadBuildArtifacts are the older tasks and they do not have the same performance and storage optimizations that are present in the corresponding PipelineArtifact tasks. These older tasks also had scale limitations in terms of how they were implemented. Some of our larger customers have been running into these limits.

While we would like all customers to move to the PipelineArtifact tasks, we also had to take some steps to address the scalability of older BuildArtifact tasks. As part of a recent update to improve their scalability, Azure Pipelines agents will now directly interact with build artifacts via blobstore domains (instead of routing through tfs domains). These pipelines will begin accessing IP addresses and domains that have long been on the Azure DevoOps [allow-list](https://docs.microsoft.com/azure/devops/organizations/security/allow-list-ip-url?view=azure-devops&tabs=IP-V4#azure-artifacts) but may not have been used before by specific pipelines.

The updated implementation of BuildArtifact tasks requires an agent upgrade, which should happen automatically unless automatic upgrades have been specifically disabled or the firewalls are incorrectly configured.

If your agents are running in firewalled environments that did not follow the linked instructions, they may see failures when updating the agent or in the PublishBuildArtifacts or DownloadBuildArtifacts tasks until the firewall configuration is corrected.

A common symptom of this problem are sudden errors relating to ssl handshakes or artifact download failures, generally on deployment pools targeted by Release Management definitions. Alternatively, if agent upgrades have been blocked, you might observe that releases are waiting for an agent in the pool that never arrives, or that agents go offline half-way through their update (this latter is related to environments that erroneously block the agent CDN).
