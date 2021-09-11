---
title: Use Azure Pipelines
ms.custom: seodec18
description: Learn the basics about Azure Pipelines and how to use it to automatically build and release code.
ms.topic: overview
ms.author: sdanie
author: steved0x
ms.date: 09/02/2021
monikerRange: '>= tfs-2015'
---

# Use Azure Pipelines

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range=">= azure-devops-2019"

Azure Pipelines supports continuous integration (CI) and continuous 
delivery (CD) to continuously test, build, and deploy your code. You accomplish this by defining a pipeline. 

The latest way to build pipelines is with the [YAML pipeline editor](yaml-pipeline-editor.md). You can also use Classic pipelines with the [Classic editor](../release/define-multistage-release-process.md). 

::: moniker-end

::: moniker range="<= tfs-2018"

Azure Pipelines supports continuous integration (CI) and continuous 
delivery (CD) to continuously test, build, and deploy your code.  You accomplish this by defining a pipeline 
using the user interface, also referred to as _Classic_. 

::: moniker-end

[!INCLUDE [temp](../includes/concept-rename-note.md)]

## Automate tests, builds, and delivery

Continuous integration (CI) automates tests and builds for your project. CI helps to catch bugs or issues early in the development cycle, when they're easier and faster to fix. Items known as artifacts are produced from CI systems. They're used by the continuous delivery release pipelines to drive automatic deployments.

Continuous delivery automatically deploys and tests code in multiple stages to help drive quality. Continuous integration systems produce deployable artifacts, which include infrastructure and apps. Automated release pipelines consume these artifacts to release new versions and fixes to the target of your choice.

| Continuous integration (CI)                         |  Continuous delivery (CD)                       |
| ----------------------------------------------------|-------------------------------------------------|
|- Increase code coverage<br/>- Build faster by splitting test and build runs<br/>- Automatically ensure you don't ship broken code<br/>- Run tests continually. |- Automatically deploy code to production<br/>- Ensure deployment targets have latest code<br/>- Use tested code from CI process.|


## Define pipelines using YAML syntax

::: moniker range=">= azure-devops-2019"

You define your pipeline in a YAML file called `azure-pipelines.yml` with the rest of your app.

![Pipelines YAML intro image](../media/pipelines-image-yaml.png)

* The pipeline is versioned with your code. It follows the same branching structure. You get validation of your changes through code reviews in pull requests and branch build policies.
* Every branch you use can modify the build policy by modifying the `azure-pipelines.yml` file.
* A change to the build process might cause a break or result in an unexpected outcome. Because the change is in version control with the rest of your codebase, you can more easily identify the issue.

Follow these basic steps:

1. Configure Azure Pipelines to use your Git repo.
1. Edit your `azure-pipelines.yml` file to define your build.
1. Push your code to your version control repository. This action kicks off the default trigger to build and deploy and then monitor the results.

Your code is now updated, built, tested, and packaged. It can be deployed to any target.

::: moniker-end

::: moniker range="<= tfs-2018"

YAML pipelines aren't available in TFS 2018 and earlier versions.

::: moniker-end

## Define pipelines using the Classic interface 
 
Create and configure pipelines in the Azure DevOps web portal with the Classic user interface editor. 
You define a *build pipeline* to build and test your code, and then to publish artifacts. You also define a *release pipeline* to consume and deploy those artifacts to deployment targets.

![Pipelines designer intro image](../media/pipelines-image-designer.png)

Follow these basic steps:

1. Configure Azure Pipelines to use your Git repo.
1. Use the Azure Pipelines classic editor to create and configure your build and release pipelines.
1. Push your code to your version control repository. This action triggers your pipeline and runs tasks such as building or testing code.

The build creates an artifact that's used by the rest of your pipeline to run tasks such as deploying to staging or production.

Your code is now updated, built, tested, and packaged. It can be deployed to any target.


## Feature availability 

::: moniker range=">= azure-devops-2019"

Certain pipeline features are only available when using YAML or when defining build or release pipelines with the Classic interface. The following table indicates which features are supported and for which tasks and methods. 


| Feature | YAML | Classic Build |  Classic Release |Notes| 
|---------|---------|---------|---------|---------|
| [Agents](../agents/agents.md) |  Yes | Yes | Yes | Specifies a required resource on which the pipeline runs.|
| [Approvals](../release/approvals/index.md) | Yes | No  | Yes | Defines a set of validations required prior to completing a deployment stage. |
| [Artifacts](../artifacts/artifacts-overview.md) | Yes | Yes | Yes | Supports publishing or consuming different package types. |
| [Caching](../release/caching.md) | Yes | Yes | No  | Reduces build time by allowing outputs or downloaded dependencies from one run to be reused in later runs. In Preview, available with Azure Pipelines only.| 
| [Conditions](../process/conditions.md) | Yes | Yes | Yes | Specifies conditions to be met prior to running a job.     |
| [Container jobs](../process/container-phases.md) |  Yes | No | No | Specifies jobs to run in a container.  |
| [Demands](../process/demands.md) |  Yes | Yes | Yes | Ensures pipeline requirements are met before running a pipeline stage. Requires self-hosted agents. |
| [Dependencies](../process/stages.md) |  Yes | Yes | Yes | Specifies a requirement that must be met in order to run the next job or stage.  |
| [Deployment groups](../release/deployment-groups/index.md) | Yes | No | Yes | Defines a logical set of deployment target machines. | 
| [Deployment group jobs](../process/deployment-group-phases.md)|No | No | Yes | Specifies a job to release to a deployment group. | 
| [Deployment jobs](../process/deployment-jobs.md) | Yes | No |  No | Defines the deployment steps. | 
| [Environment](../process/environments.md) | Yes | No | No | Represents a collection of resources targeted for deployment. Available with Azure Pipelines only.|
| [Gates](../release/approvals/gates.md) | No | No | Yes | Supports automatic collection and evaluation of external health signals prior to completing a release stage. Available with Classic Release only. |
| [Jobs](key-pipelines-concepts.md) | Yes | Yes | Yes | Defines the execution sequence of a set of steps.|
| [Service connections](../library/service-endpoints.md) | Yes | Yes | Yes | Enables a connection to a remote service that is required to execute tasks in a job.   |
| [Service containers](../process/service-containers.md) | Yes |No | No  |Enables you to manage the lifecycle of a containerized service.   |
| [Stages](key-pipelines-concepts.md) | Yes | No | Yes |Organizes jobs within a pipeline. |
| [Task groups](../library/task-groups.md) | No | Yes  | Yes | Encapsulates a sequence of tasks into a single reusable task. If using YAML, see templates.| 
| [Tasks](../process/tasks.md) | Yes | Yes | Yes | Defines the building blocks that make up a pipeline.  |
| [Templates](../process/templates.md) | Yes |  No | No | Defines reusable content, logic, and parameters.   |
| [Triggers](../build/triggers.md) | Yes |Yes  | Yes   |Defines the event that causes a pipeline to run.  |
| [Variables](../process/variables.md) | Yes | Yes | Yes | Represents a value to be replaced by data to pass to the pipeline.    |
| [Variable groups](../library/variable-groups.md) | Yes | Yes | Yes | Use to store values that you want to control and make available across multiple pipelines.| 

::: moniker-end



::: moniker range="<= tfs-2018"

TFS 2015 through TFS 2018 supports the Classic interface only. The following table indicates which pipeline features are available when defining build or release pipelines. 

| Feature | Classic Build |  Classic Release |Notes| 
|---------|---------|---------|---------|
| [Agents](../agents/agents.md) |  Yes | Yes |  Specifies a required resource on which the pipeline runs.|
| [Approvals](../release/approvals/index.md) |  No  | Yes | Defines a set of validations required prior to completing a deployment stage. |
| [Artifacts](../artifacts/artifacts-overview.md) | Yes | Yes | Supports publishing or consuming different package types. |
| [Conditions](../process/conditions.md) | Yes | Yes | Specifies conditions to be met prior to running a job.     |
| [Demands](../process/demands.md) | Yes | Yes | Ensures pipeline requirements are met before running a pipeline stage. Requires self-hosted agents. |
| [Dependencies](../process/stages.md) | Yes | Yes | Specifies a requirement that must be met in order to run the next job or stage.  |
| [Deployment groups](../release/deployment-groups/index.md) |  No | Yes | Defines a logical set of deployment target machines. | 
| [Deployment group jobs](../process/deployment-group-phases.md)| No | Yes | Specifies a job to release to a deployment group. | 
| [Jobs](key-pipelines-concepts.md) |  Yes | Yes | Defines the execution sequence of a set of steps.|
| [Service connections](../library/service-endpoints.md) |  Yes | Yes | Enables a connection to a remote service that is required to execute tasks in a job.   |
| [Stages](key-pipelines-concepts.md) |  No | Yes |Organizes jobs within a pipeline. |
| [Task groups](../library/task-groups.md) | Yes  | Yes | Encapsulates a sequence of tasks into a single reusable task. If using YAML, see templates.| 
| [Tasks](../process/tasks.md) |  Yes | Yes | Defines the building blocks that make up a pipeline.  |
| [Triggers](../build/triggers.md) | Yes  | Yes   |Defines the event that causes a pipeline to run.  |
| [Variables](../process/variables.md) |  Yes | Yes | Represents a value to be replaced by data to pass to the pipeline.    |
| [Variable groups](../library/variable-groups.md) |  Yes | Yes | Use to store values that you want to control and make available across multiple pipelines.| 

::: moniker-end



## Try this next

> [!div class="nextstepaction"]
> [Create your first pipeline](../create-first-pipeline.md)

## Related articles

- [Key concepts for new Azure Pipelines users](key-pipelines-concepts.md) 


