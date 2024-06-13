---
title: Use Azure Pipelines
description: Learn the basics about Azure Pipelines and how to use it to automatically build and release code.
ms.topic: overview
ms.author: sdanie
author: steved0x
ms.date: 06/12/2024
monikerRange: '<= azure-devops'
---

# Use Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines enables developers to continuously test, build, and deploy their code to various environments. By defining pipelines, developers can automate the processes of continuous integration (CI) and continuous delivery (CD), streamlining their workflows.

Azure Pipelines supports a wide range of languages, platforms, and tools, and offers both [YAML-based](yaml-pipeline-editor.md) and [Classic pipeline](../release/define-multistage-release-process.md) editors for creating and managing pipelines.

## Continuous integration and continuous delivery

Continuous integration (CI) automates testing and building processes for your project. CI helps detecting bugs early in development for quicker fixes. CI systems produce a binary (artifact) that is consumed by continuous delivery (CD) pipelines to automate deployments.

Continuous delivery (CD) automates code deployment and testing across multiple stages to ensure quality. CD pipelines consume these generated artifacts from CI systems to deploy new versions to the target of your choice such as Azure App Service, Azure Container Registry, etc.

|          Continuous integration (CI)                      |          Continuous delivery (CD)                   |
| --------------------------------------------------------- | --------------------------------------------------- |
| - Enhances code coverage                                  | - Automates deployment to production                |
| - Prevents shipping of broken code                        | - Ensures deployment targets have latest code       |
| - Executes continuous testing                             | - Uses tested code from CI pipelines                |                                           |

## Define pipelines using YAML

Your pipeline configuration resides in a YAML file named `azure-pipelines.yml`, alongside your application.

- The YAML file is versioned alongside your application code, adhering to the same branching structure. 

- Each branch can customize the pipeline by editing the `azure-pipelines.yml` file. See [Branch consideration for triggers in YAML pipelines](../build/triggers.md#branch-considerations) for more details.

- Keeping the pipeline configuration in version control ensures that any changes that cause issues or unexpected outcomes can be easily identified within your codebase.

To define your YAML pipeline, follow these basic steps:

1. Configure Azure Pipelines to use your Git repository.

1. Edit your `azure-pipelines.yml` file to define your pipeline.

1. Push your code to your version control repository to trigger your pipeline.

Your code is now updated, built, tested, and packaged, ready for deployment to any target.

## Define pipelines using the Classic interface 

::: moniker range="> azure-devops-2019"

Classic pipelines are created in the Azure DevOps web portal with the Classic user interface editor. 
You can define a *pipeline* to build, test your code, and then publish your artifact (binary). Additionally, you can define a *release pipeline* to consume your binary (artifact) and deploy it to specific targets.

To define your Classic pipeline, follow these basic steps:

1. Configure Azure Pipelines to use your Git repository.

1. Use the Azure Pipelines classic editor to create and configure your pipeline and release pipelines.

1. Push your code to your version control repository. This action triggers your pipeline and runs tasks such as building or testing code.

Your pipeline generates a binary (artifact) that can be consumed by the release pipeline for deployment to staging or production.

Your code is now updated, built, tested, and packaged, ready for deployment to any target.

::: moniker-end

::: moniker range="azure-devops-2019"

Classic pipelines are created in the Azure DevOps web portal with the Classic user interface editor. 
You can define a *build pipeline* to build, test your code, and then publish your artifact (binary). Additionally, you can define a *release pipeline* to consume your binary (artifact) and deploy it to specific targets.

To define your Classic pipeline, follow these basic steps:

1. Configure Azure Pipelines to use your Git repository.

1. Use the Azure Pipelines classic editor to create and configure your build and release pipelines.

1. Push your code to your version control repository. This action triggers your build pipeline and runs tasks such as building or testing code.

Your build pipeline generates a binary (artifact) that can be consumed by the release pipeline for deployment to staging or production.

Your code is now updated, built, tested, and packaged, ready for deployment to any target.

::: moniker-end

## Feature availability 

::: moniker range=">= azure-devops-2019"

Certain pipeline features are only available when using YAML or when defining build or release pipelines with the Classic interface. The following table indicates which features are supported and for which tasks and methods. 


| Feature | YAML | Classic Build |  Classic Release |Notes| 
|---|:-:|:-:|:-:|---|
| [Agents](../agents/agents.md) | ✅ | ✅ | ✅ | Specifies a required resource on which the pipeline runs.|
| [Approvals](../release/approvals/index.md) | ✅ | ❌ | ✅ | Defines a set of validations required prior to completing a deployment stage. |
| [Artifacts](../artifacts/artifacts-overview.md) | ✅ | ✅ | ✅ | Supports publishing or consuming different package types. |
| [Caching](../release/caching.md) | ✅ | ✅ | ❌ | Reduces build time by allowing outputs or downloaded dependencies from one run to be reused in later runs. In Preview, available with Azure Pipelines only.| 
| [Conditions](../process/conditions.md) | ✅ | ✅ | ✅ | Specifies conditions to be met prior to running a job.     |
| [Container jobs](../process/container-phases.md) |  ✅ | ❌ | ❌ | Specifies jobs to run in a container.  |
| [Demands](/azure/devops/pipelines/yaml-schema/pool-demands) | ✅ | ✅ | ✅ | Ensures pipeline requirements are met before running a pipeline stage. Requires self-hosted agents. |
| [Dependencies](../process/stages.md) | ✅ | ✅ | ✅ | Specifies a requirement that must be met in order to run the next job or stage.  |
| [Deployment groups](../release/deployment-groups/index.md) | ❌ | ❌ | ✅ | Defines a logical set of deployment target machines. | 
| [Deployment group jobs](../process/deployment-group-phases.md)| ❌ | ❌ | ✅ | Specifies a job to release to a deployment group. | 
| [Deployment jobs](../process/deployment-jobs.md) | ✅ | ❌ | ❌ | Defines the deployment steps. | 
| [Environment](../process/environments.md) | ✅ | ❌ | ❌ | Represents a collection of resources targeted for deployment. Available with Azure Pipelines only.|
| [Gates](../release/approvals/gates.md) | ❌ | ❌ | ✅ | Supports automatic collection and evaluation of external health signals prior to completing a release stage. Available with Classic Release only. |
| [Jobs](key-pipelines-concepts.md) | ✅ | ✅ | ✅ | Defines the execution sequence of a set of steps.|
| [Service connections](../library/service-endpoints.md) | ✅ | ✅ | ✅ | Enables a connection to a remote service that is required to execute tasks in a job.   |
| [Service containers](../process/service-containers.md) | ✅ | ❌ | ❌ |Enables you to manage the lifecycle of a containerized service.   |
| [Stages](key-pipelines-concepts.md) | ✅ | ❌ | ✅ |Organizes jobs within a pipeline. |
| [Task groups](../library/task-groups.md) | ❌ | ✅  | ✅ | Encapsulates a sequence of tasks into a single reusable task. If using YAML, see templates.| 
| [Tasks](../process/tasks.md) | ✅ | ✅ | ✅ | Defines the building blocks that make up a pipeline.  |
| [Templates](../process/templates.md) | ✅ |  ❌ | ❌ | Defines reusable content, logic, and parameters.   |
| [Triggers](../build/triggers.md) | ✅ | ✅| ✅ | Defines the event that causes a pipeline to run.  |
| [Variables](../process/variables.md) | ✅ | ✅ | ✅ | Represents a value to be replaced by data to pass to the pipeline.    |
| [Variable groups](../library/variable-groups.md) | ✅ | ✅ | ✅ | Use to store values that you want to control and make available across multiple pipelines.| 

::: moniker-end







## Next steps

> [!div class="nextstepaction"]
> [Create your first pipeline](../create-first-pipeline.md)

## Related articles

- [Key concepts for new Azure Pipelines users](key-pipelines-concepts.md) 
