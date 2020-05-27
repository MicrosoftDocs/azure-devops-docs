---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 5/28/2020
ms.topic: include
---
### Preview of scale set agents

We are previewing a new feature called scale set agents - they pair the convenience and elastic capacity of the Microsoft-hosted pools with the control and flexibility of self-hosted agents. Azure Pipelines will manage agents to the customer's specification, completely automated, in the customer's Azure subscription. Here are some of the common scenarios where you may want to consider scale set agents instead of Microsoft-hosted or self-hosted agents: 

- You need more memory, more processor, more storage, or more IO than what we offer in native Microsoft-hosted agents
- You do not want to whitelist a large number of IPs in your corporate firewall so that Microsoft-hosted agents can communicate with your servers
- You can't get enough Microsoft-hosted agents from Microsoft to meet your large scale needs
- You can't partition Microsoft-hosted parallel jobs to individual projects or teams in your organization
- You don't want to run dedicated agents around the clock. You want to de-provision agent machines that are not being used to run jobs

To create a scale set agent pool, you will first create a scale set in your Azure subscription, and then create an agent pool in Azure Pipelines to point to that scale set. Azure Pipelines will automate the scaling of this pool based on the number of pending jobs and the number of idle machines that you wish to maintain at all times. For more information, see [scale set agents](https://docs.microsoft.com/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops). As you preview the feature, please include your feedback on the documentation page.

    
### Github packages support in YAML pipelines

We have recently introduced a new resource type called **packages** that adds support for consuming **NuGet** and **npm** packages from GitHub as a resource in YAML pipelines. As part of this resource, you can now specify the package type (NuGet or npm) that you want to consume from GitHub. You can also enable automated pipeline triggers upon the release of a new package version. Today the support is only available for consuming packages from GitHub, but moving forward, we plan to extend the support to consume packages from other package repositories such as [NuGet](https://www.nuget.org), [npm](https://www.npmjs.com), [AzureArtifacts](https://azure.microsoft.com/services/devops/artifacts) and many more. Refer to the example below for details:

```yml
resources:
  packages:
   - package: myPackageAlias  # alias for the package resource
     type: Npm                # type of the package NuGet/npm
     connection: GitHubConn   # Github service connection of type PAT
     name: nugetTest/nodeapp  # <Repository>/<Name of the package>
     version: 1.0.9           # Version of the packge to consume; Optional; Defaults to latest
     trigger: true            # To enable automated triggers (true/false); Optional; Defaults to no triggers
```

Note: Today GitHub packages only supports PAT based authentication, which means that the GitHub service connection in the package resource should be of type PAT. Once this limitation is lifted, we will provide support for other types of authentication.

By default, packages are not automatically downloaded in your jobs, hence why we have introduced a **getPackage** macro that allows you consume the package that is defined in the resource. Refer to the example below for details:

```yml
- job: job1
  pool: default
  steps:
  - getPackage: myPackageAlias # Alias of the package resource
```

### Tag filter support for pipeline resources

We have now enabled support for adding tags to your **yaml pipeline** resources. You can use tags to control what version of the CI pipeline to run, or when to automatically trigger. See the example below:

```yml
resources:
 pipelines:
   - pipeline: MyCIAlias
     project: Fabrikam
     source: Farbrikam-CI
     branch: master
     tags:             ### This filter is used for resolving default version
       - Production    ### Tags are AND'ed
     trigger:
      tags:            ### This filter is used for triggering the pipeline run
        - Production   ### Tags are AND'ed
        - Signed
```

You can also define the default version of the pipeline resource to be consumed based on tags. Similarly, you can choose to trigger your CD pipeline based on the tags that are set on your CI pipeline. You can also add tags to existing CI pipeline run to trigger your CD pipeline.