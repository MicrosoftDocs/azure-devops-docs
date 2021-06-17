---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 06/16/2021
ms.topic: include
---

### Retain pipelines that are consumed in other pipelines

Classic releases had the ability to automatically retain builds that they consume. This was one of the gaps between classic releases and YAML pipelines, and it stopped some of you from moving to YAML. With this release, we have addressed this gap. 

Now you can create a multi-stage YAML pipeline to represent your release, and [consume another YAML pipeline in it as a resource](https://docs.microsoft.com/azure/devops/pipelines/process/resources?view=azure-devops&tabs=schema#resources-pipelines). When you do so, Azure Pipelines will automatically retain the resource pipeline as long as the release pipeline is retained. When the release pipeline is deleted, the lease on the resource pipeline is released and its own retention policies are followed.

### Changes in the automatic creation of environments

When you author a YAML pipeline and refer to an environment that does not exist, Azure Pipelines automatically creates the environment. This automatic creation can occur in either the user context or the system context. In the following flows, Azure Pipelines knows about the user performing the operation:
 * You use the YAML pipeline creation wizard in the Azure Pipelines web experience and refer to an environment that hasn't been created yet.
 * You update the YAML file using the Azure Pipelines web editor and save the pipeline after adding a reference to an environment that does not exist.
 * You update the YAML file using another external code editor and then start a new run manually using the Azure Pipelines web interface.
In each of the above cases, Azure Pipelines has a clear understanding of the user performing the operation. Hence, it creates the environment and adds the user to the administrator role for the environment. This user has all the permissions to manage the environment and/or to include other users in various roles for managing the environment.

In the following flows, Azure Pipelines does not have information about the user creating the environment: you update the YAML file using another external code editor, add a reference to an environment that does not exist, and then cause a continuous integration pipeline to be triggered. In this case, Azure Pipelines does not know about the user. Previously, we handled this case by adding all the project contributors to the administrator role of the environment. Any member of the project could then change these permissions and prevent others from accessing the environment.

We received your feedback about granting administrator permissions on an environment to all members of a project. As we listened to your feedback, we heard that we should not be auto-creating an environment if it is not clear as to who the user performing the operation is. With this release, we made changes to how environments will be automatically created:
 * Going forward, pipeline runs will not automatically create an environment if it does not exist and if the user context is not known. In such cases, the pipeline will fail with an *Environment not found error*. You need to pre-create the environments with the right security and checks configuration before using it in a pipeline.
 * Pipelines with known user context will still auto-create environments just like they did in the past.
 * Finally, it should be noted that the feature to automatically create an environment was only added to simplify the process of getting started with Azure Pipelines. It was meant for test scenarios, and not for production scenarios. You should always pre-create production environments with the right permissions and checks, and then use them in pipelines.

### Remove Insights dialogue from Build Pipeline
Based on your feedback, the task/pipeline Insights dialogue box that displays when navigating the Build Pipeline has been removed to improve the workflow. The pipeline analytics are still available so that you have the insights you need.