---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 09/10/2020
ms.topic: include
---

### General availability of scale-set agents

A few months ago, we announced the [preview of Scale-set agents](../../sprint-170-update.md#preview-of-scale-set-agents). We are now happy to announce the general availability of this feature. In the last two months, we improved the reliability in performing various scale-set operations. We updated the [guidance](/azure/devops/pipelines/agents/scale-set-agents) on how you can improve the performance of provisioning new virtual machines. We moved the logic for installing an agent into a custom VM extension so that you can leverage the VM script extension slot for your own needs. Finally, we improved diagnosability by surfacing the errors when we perform scale-up or scale-down operations on Azure.


### Run this job next

Have you ever had a bugfix which you needed to deploy _right this minute_ but had to wait behind CI and PR jobs? With this release, we now allow you to bump the priority of a queued job. Users with the "Manage" permission on the pool - typically pool administrators - will see a new "Run next" button on the job details page. Clicking the button will set the job to be run as soon as possible. (You'll still need available parallelism and a suitable agent, of course.)


### Template expressions allowed in YAML `resources` block

Previously, <a href="/azure/devops/pipelines/process/expressions">compile-time expressions</a> (`${{ }}`) were not allowed in the `resources` section of an Azure Pipelines YAML file. With this release, we have lifted this restriction for containers. This allows you to use <a href="/azure/devops/pipelines/process/runtime-parameters">runtime parameter</a> contents inside your resources, for example to pick a container at queue time. We plan to extend this support to other resources over time.


### Control over automated task updates from Marketplace

When you write a YAML pipeline, normally you specify only the major version number of the included tasks. This allows your pipelines to automatically take the latest feature additions and bug fixes. Occasionally you may need to roll back to a previous point release of a task, and with this update, we added the ability for you to do so. You may now specify a full major.minor.patch task version in your YAML pipelines.

We don't recommend that you do this regularly, and use it only as a temporary workaround when you find that a newer task breaks your pipelines. Also, this will not install an older version of a task from the Marketplace. It must already exist in your organization or your pipeline will fail.

Example:

```
steps:
- task: MyTask@1  # a normal, major-version only reference
- task: MyOtherTask@2.3.4   # pinned to a precise version
```