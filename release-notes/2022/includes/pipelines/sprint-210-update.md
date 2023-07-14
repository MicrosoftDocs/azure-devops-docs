---
author: gloridelmorales
ms.author: glmorale
ms.date: 10/4/2022
ms.topic: include
---

### Windows PowerShell task performance improvement

You can use tasks to define automation in a pipeline. One of these tasks is the `PowerShell@2` utility task that lets you execute PowerShell scripts in your pipeline. To use PowerShell script to target an Azure environment, you can use the `AzurePowerShell@5` task. Some PowerShell commands that can print progress updates, for example `Invoke-WebRequest`, now execute faster. The improvement is more significant if you have many of these commands in your script, or when they are long running. With this update, the `progressPreference` property of the `PowerShell@2` and `AzurePowerShell@5` tasks is now set to `SilentlyContinue` by default.

### Pipelines Agent on .NET 6 pre-announcement
This is a pre-announcement that we will be upgrading the Pipelines Agent from .NET 3.1 Core to .NET 6 before December. This will introduce native support for Apple Silicon as well as Windows Arm64.

Using .NET 6 will impact system requirements for the agent. Specifically, we will drop support for the following Operating Systems: CentOS 6, Fedora 29-33, Linux Mint 17-18, Red Hat Enterprise Linux 6

> [!IMPORTANT]
>Please be aware that agents running on any of the above operating systems will either no longer update or fail once we roll out the .NET 6 based agent.

### Node 16 task runner in pipeline agent

In this sprint, we've added a Node 16 task runner to the Pipeline agent. The agent now contains Node 6, 10 & 16 runners. As Node 10 is End-of-Life we have also started to update our In-the-Box tasks to take advantage of the Node 16 runner. We do this using the multi-runner execution model introduced in [Sprint 177](/azure/devops/release-notes/2020/pipelines/sprint-177-update), so tasks can run on Agents that don't have Node 16. Tasks can express compatibility with multiple Node runners in `task.json` under `execution` and have different entrypoints for them. See [instructions](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode16.md) on how to update `task.json`.

We will communicate a schedule to remove End-of-Life versions of Node from the agent later this year.