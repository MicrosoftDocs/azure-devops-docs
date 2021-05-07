---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 06/01/2020
ms.topic: include
---

### Preview of scale set agents

We are previewing a new feature called scale set agents which pairs the convenience and elastic capacity of the Microsoft-hosted agents with the control and flexibility of self-hosted agents. With this preview, we now enable you to manage agents to your specification, completely automated, in your Azure subscription. You may want to consider using scale set agents instead of Microsoft-hosted or self-hosted agents when you:

- need more memory, more processor, more storage, or more I/O than what we offer in native Microsoft-hosted agents
- do not want to allow list a large number of IP addresses within your corporate firewall to enable Microsoft-hosted agents to communicate with your servers
- need more Microsoft-hosted agents than we can provide to meet your large scale needs
- need the ability to partition Microsoft-hosted parallel jobs to individual projects or teams in your organization
- do not want to run dedicated agents around the clock but instead want to de-provision agent machines that are not being actively utilized

To use scale set agents, you will first create a VM scale set in your Azure subscription, and then create an agent pool in Azure Pipelines to point to that scale set. Azure Pipelines will automatically scale this pool based on the number of pending jobs and the number of idle machines that you wish to maintain at all times. Azure Pipelines will also install the agent for you on these virtual machines. For more information, see [scale set agents](/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops&preserve-view=true). As you preview the feature, please include your feedback on the [documentation page](/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops&preserve-view=true).

### Ubuntu 20.04 in preview for Azure Pipelines hosted pools

The Ubuntu 20.04 image is now available in preview for Azure Pipelines hosted pools. To use this image, update your YAML file to include vmImage: 'ubuntu-20.04' . Please note, the ubuntu-latest image label will continue to point to ubuntu-18.04 until ubuntu-20.04 comes out of preview later this year.

Please note, since the ubuntu 20.04 image is in preview, it currently doesn't support all of the tooling available in ubuntu-18.04 . [Learn more](https://github.com/actions/virtual-environments/tree/main/images/linux)

### Support for GitHub packages in YAML pipelines

We have recently introduced a new resource type called **packages** that adds support to consume **NuGet** and **npm** packages from GitHub as a resource in YAML pipelines. As part of this resource, you can now specify the package type (NuGet or npm) that you want to consume from GitHub. You can also enable automated pipeline triggers upon the release of a new package version. Today the support is only available for consuming packages from GitHub, but moving forward, we plan to extend the support to consume packages from other package repositories such as [NuGet](https://www.nuget.org), [npm](https://www.npmjs.com), [AzureArtifacts](https://azure.microsoft.com/services/devops/artifacts) and many more. Refer to the example below for details:

```yml
resources:
  packages:
    - package: myPackageAlias # alias for the package resource
      type: Npm # type of the package NuGet/npm
      connection: GitHubConn # Github service connection of type PAT
      name: nugetTest/nodeapp # <Repository>/<Name of the package>
      version: 1.0.9 # Version of the packge to consume; Optional; Defaults to latest
      trigger: true # To enable automated triggers (true/false); Optional; Defaults to no triggers
```

Note: Today GitHub packages only supports PAT based authentication, which means that the GitHub service connection in the package resource should be of type PAT. Once this limitation is lifted, we will provide support for other types of authentication.

By default, packages are not automatically downloaded in your jobs, hence why we have introduced a **getPackage** macro that allows you consume the package that is defined in the resource. Refer to the example below for details:

```yml
- job: job1
  pool: default
  steps:
    - getPackage: myPackageAlias # Alias of the package resource
```