---
title: Docker Installer task
description: Install the Docker CLI on an agent machine
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 1394E182-B515-4CC0-890B-9A2378DBEA68
ms.manager: shasb
ms.author: shasb
ms.date: 02/12/2019
monikerRange: '> tfs-2018'
---

# Docker Installer task

**Azure Pipelines**

Use this task in a build or release pipeline to install a specific version of
the Docker CLI on the agent machine.

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>dockerVersion</code><br/>Docker Version</td><td>(Required) Specify the version of Docker CLI to install.<br/>Default value: 17.09.0-ce</td></tr>
<tr><td><code>releaseType</code><br/>Release type</td><td>(Optional) Select the release type to install. 'Nightly' is not supported on Windows.<br/>Default value: stable</td></tr>
</table>

This YAML example installs the Docker CLI on the agent machine:

```YAML
- task: DockerInstaller@0
  displayName: Docker Installer
  inputs:
    dockerVersion: 17.09.0-ce
    releaseType: stable
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.