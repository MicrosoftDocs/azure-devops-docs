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

::: moniker range="azure-devops"

|                   Feature                             |                                              Description                                       | YAML  | Classic Pipeline | Classic Release | 
|-------------------------------------------------------|------------------------------------------------------------------------------------------------|-------|------------------|-----------------|
| [Agents](../agents/agents.md)                         | A software component that runs on a virtual machine or a physical machine and is responsible for executing the tasks defined in your Azure Pipelines.                                      |  :::image type="icon" source="../../media/icons/checkmark.png" border="false":::  |       :::image type="icon" source="../../media/icons/checkmark.png" border="false":::       |        :::image type="icon" source="../../media/icons/checkmark.png" border="false":::        |
| **Approvals**            | Control your deployment workflow by requiring designated approvers to approve before deploying to a stage.                  |  :::image type="icon" source="../../media/icons/checkmark.png" border="false":::  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        [Classic release](../release/approvals/approvals.md#predeployment-approvals)        |
| **Artifacts**      | Download and publish your binaries and various types of packages to different destinations.          |  [YAML](../artifacts/pipeline-artifacts.md?&tabs=yaml-task)  |       [Classic](../artifacts/pipeline-artifacts.md?&tabs=yaml-task)       |        [Classic release](../release/deploy-multiple-branches.md#set-up-a-release-pipeline)          |
| **Caching**                     | Reduce build time by caching and reusing dependencies from previous runs. |  [YAML](../release/caching.md)   |       :::image type="icon" source="../../media/icons/checkmark.png" border="false":::       |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::         | 
| **Conditions**               | Specify conditions under which a step, job, or stage should run.                                         |  [YAML](../process/conditions.md?tabs=yaml)    |       [Classic](../process/conditions.md?tabs=classic)       |        [Classic release](../process/conditions.md?tabs=classic)        |
| **Container jobs**      | Specify jobs to run in a container.                                                          |  [YAML](../process/container-phases.md)  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |
| **Demands** | Ensure that the capabilities your pipeline needs are present on the running agent.  |  [YAML](../agents/agents.md#configure-demands)  |       [Classic](../agents/agents.md?tabs=classic#configure-demands)       |        [Classic release](../agents/agents.md?tabs=classic#configure-demands)        |
| **Dependencies**                  | Specify a requirement that must be met in order to run the next stage.                |  [YAML](../process/stages.md?tabs=yaml#specify-dependencies)  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        [Classic release](../process/stages.md?tabs=classic#specify-dependencies)        |
| **Deployment groups** | Define a set of target machines each equipped with a deployment agent. Use in conjunction with [Deployment group jobs](../process/deployment-group-phases.md) to execute tasks on some or all of your designated target machines.                                         |  :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::   |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |        [Classic release](../release/deployment-groups/index.md#create-a-deployment-group)        |  
| **Deployment jobs**      | A collection of deployment steps that are run sequentially against the environment.                                                                  |  [YAML](../process/deployment-jobs.md)  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |
| **Environment**            | A collection of resources targeted for deployment. |  [YAML](../process/environments.md)   |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |
| **Gates**               |  Automate release controls by evaluating health signals from external services before completing a deployment. |  :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::   |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |        [Classic release](../release/deploy-using-approvals.md#set-up-gates)        |
| **Jobs**                    | A series of sequential steps that form the smallest unit of work that can be scheduled to run.                                            |  [YAML](../process/phases.md?tabs=yaml)  |       [Classic](../process/phases.md?tabs=classi)        |        [Classic release](../process/phases.md?tabs=classic)         |
| [Service connections](../library/service-endpoints.md#create-a-service-connection) | Enable connection to an external service required to execute tasks in a job.          |  :::image type="icon" source="../../media/icons/checkmark.png" border="false":::   |       :::image type="icon" source="../../media/icons/checkmark.png" border="false":::        |        :::image type="icon" source="../../media/icons/checkmark.png" border="false":::         |
| **Service containers** | Enable you to manage the lifecycle of a containerized service. most commonly used with container jobs.                                |  [YAML](../process/service-containers.md)  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::       |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |
| **Stages**                  | Organize jobs within a pipeline.                                                              |  [YAML](../process/stages.md?tabs=yaml#specify-stages)  |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |        [Classic release](../process/stages.md?tabs=classic#specify-stages)        |
| **Task groups**              | Encapsulate a sequence of tasks into a single reusable task.    |  :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::  |       [Classic](../library/task-groups.md)       |        [Classic release](../library/task-groups.md)        | 
| **Tasks**                         | The building blocks that define the steps that make up a pipeline job.                                           |  [YAML](../process/tasks.md?tabs=yaml)   |       [Classic](../process/tasks.md?tabs=classic)       |        [Classic release](../process/tasks.md?tabs=classic)          |
| **Templates**                 | Define reusable content, logic, and parameters.                                               |  [YAML](../process/templates.md)   |       :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::        |        :::image type="icon" source="../../media/icons/delete-icon.png" border="false":::         |
| **Triggers**                      | Define the event that causes a pipeline to run.                                               |  [YAML](../process/pipeline-triggers.md)  |       [Classic](../process/pipeline-triggers-classic.md)       |        [Classic release](../release/triggers.md)        |
| **Variables**                  | A placeholder for values that can be used throughout your pipeline's execution.                            |  [YAML](../process/variables.md#set-variables-in-pipeline?tabs=yaml)  |       [Classic](../process/variables.md#set-variables-in-pipeline?tabs=classic)       |        [Classic release](../process/variables.md#set-variables-in-pipeline?tabs=classic)        |
| **Variable groups**      | Use to store values and secrets that you want to manage and share across multiple pipelines.     |  [YAML](../library/variable-groups.md#use-a-variable-group?tabs=yaml)  |       [Classic](../library/variable-groups.md#use-a-variable-group?tabs=classic)       |        [Classic release](../library/variable-groups.md#use-a-variable-group?tabs=classic)        | 

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Sign up for Azure Pipelines](pipelines-sign-up.md)
> [Create your first pipeline](../create-first-pipeline.md)
> [Customize your pipeline](../customize-pipeline.md)

