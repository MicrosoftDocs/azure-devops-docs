---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 08/24/2020
ms.topic: include
---

### Pipelines images announcements

> [!NOTE]
> Azure Pipelines images are continuously updated in an effort to provide users with the best experience possible. These routine updates are predominantly aimed at addressing bugs or out of date software. They will often have no impact on your pipelines, however this is not always the case. Your pipeline may be impacted if it takes a dependency on a piece of software that has either been removed or updated on the image.
>
> To learn more about upcoming updates on our Windows, Linux and MacOS images, please read the following announcements:
>
> - [Window 2016](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/win/Windows2016-Readme.md)
> - [Windows 2019](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/win/Windows2019-Readme.md)
> - [Ubuntu 16.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu1604-README.md)
> - [Ubuntu 18.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu1804-README.md)
> - [Ubuntu 20.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu2004-README.md)
> - [MacOS 10.15](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/macos/macos-10.15-Readme.md)
>
> To view release notes for upcoming (pre-release) and deployed changes, please subscribe to the following release notes:
>
> - [Release notes](https://github.com/actions/virtual-environments/releases)

### Agent log uploads improved

When an agent stops communicating with the Azure Pipelines server, the job it was running becomes abandoned. If you happened to be looking at the streaming console logs, you might have gotten some clues about what the agent was up to right before it stopped responding. But if you weren't, or if you refreshed the page, those console logs were gone. With this release, if the agent stops responding before it sends up its full logs, we'll keep the console logs as the next-best thing. Console logs are limited to 1000 characters per line and can occasionally be incomplete, but they're a lot more helpful than showing nothing! Examining these logs may help you troubleshoot your own pipelines, and it will certainly help our support engineers when they assist with troubleshooting.

### Optionally mount container volumes read-only

When you run a container job in Azure Pipelines, several volumes containing the workspace, tasks, and other materials are mapped as volumes. These volumes default to read/write access. For increased security, you can mount the volumes read-only by altering your container specification in YAML. Each key under `mountReadOnly` can be set to `true` for read-only (the default is `false`).

```yml
resources:
  containers:
    - container: example
      image: ubuntu:18.04
      mountReadOnly:
        externals: true
        tasks: true
        tools: true
        work: false
```

### Fine-grained control over container start/stop

In general, we recommend that you allow Azure Pipelines to manage the lifecycle of your job and service containers. However, in some uncommon scenarios, you may want to start and stop them yourself. With this release, we've built that capability into the Docker task.

Here's an example pipeline using the new capability:

```yml
resources:
  containers:
    - container: builder
      image: ubuntu:18.04
steps:
  - script: echo "I can run inside the container (it starts by default)"
    target:
      container: builder
  - task: Docker@2
    inputs:
      command: stop
      container: builder
# if any step tried to run in the container here, it would fail
```

Also, we include the list of containers in a pipeline variable, `Agent.ContainerMapping`. You can use this if you want to inspect the list of containers in a script, for example. It contains a stringified JSON object mapping the resource name ("builder" from the example above) to the container ID the agent manages.

### Unzip task bundles for each step

When the agent runs a job, it first downloads all the task bundles required by the job's steps. Normally, for performance, it unzips the tasks once per job even if the task is used in multiple steps. If you have concerns about untrusted code altering the unzipped contents, you can trade away a little bit of performance by having the agent unzip the task on each usage. To enable this mode, pass `--alwaysextracttask` when configuring the agent.

### Improve release security by restricting scope of access tokens

Building upon our initiative to enhance security settings for Azure Pipelines, we now support restricting scope of access tokens for releases.

Every job that runs in releases gets an access token. The access token is used by the tasks and by your scripts to call back into Azure DevOps. For example, we use the access token to get source code, download artifacts, upload logs, test results, or to make REST calls into Azure DevOps. A new access token is generated for each job, and it expires once the job completes.

With this update, we build upon [improve pipeline security by restricting the scope of access tokens](../../../2019/sprint-160-update.md#improve-pipeline-security-by-restricting-the-scope-of-access-tokens) and extend the same to classic releases.

This feature will be on by default for new projects and organizations. For existing organizations, you must enable it in Organization **Settings > Pipelines > Settings. > Limit job authorization scope to current project for release pipelines**. Learn more [here](/azure/devops/pipelines/release/artifacts?view=azure-devops&preserve-view=true#artifact-sources---azure-pipelines).

### YAML preview API enhancements

A few sprints ago, we introduced the ability to <a href="/azure/devops/release-notes/2020/sprint-165-update#preview-fully-parsed-yaml-document-without-committing-or-running-the-pipeline">preview the complete YAML</a> of a pipeline without running it. With this update, we've created a dedicated new URL for the preview capability. Now you can POST to `https://dev.azure.com/{org}/{project}/_apis/pipelines/{pipelineId}/preview` to retrieve the finalized YAML body. This new API takes the same parameters as queuing a run, but no longer requires the &quot;Queue builds&quot; permission.