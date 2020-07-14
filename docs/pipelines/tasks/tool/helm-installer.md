---
title: Helm installer task
titleSuffix: Azure Pipelines & TFS
description: Install helm on an agent machine
ms.topic: reference
ms.assetid: ed0fe761-60c2-4bbe-b027-819569b56a3d
ms.manager: atulmal
ms.author: atulmal
author: azooinmyluggage
ms.date: 02/28/2020
monikerRange: 'azure-devops'
---

# Helm installer task

This task can be used for installing a specific version of helm binary on agents.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/HelmInstallerV1.md)]

::: moniker-end

## Task inputs

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>helmVersionToInstall</code><br/>Helm Version Spec</td>
    <td>(Optional) The version of Helm to be installed on the agent. Acceptable values are <code>latest</code> or any semantic version string like <code>2.14.1</code><br/>Default value: <code>latest</code></td>
  </tr>
</table>

The following YAML example showcases the installation of latest version of helm binary on the agent - 

```YAML
- task: HelmInstaller@1
  displayName: Helm installer
  inputs: 
    helmVersionToInstall: latest
```

The following YAML example demonstrates the use of an explicit version string rather than installing the latest version available at the time of task execution - 

```YAML
- task: HelmInstaller@1
  displayName: Helm installer
  inputs: 
    helmVersionToInstall: 2.14.1
```

## Troubleshooting

### HelmInstaller task running on a private agent behind a proxy fails to download helm package.

The HelmInstaller task does not use the proxy settings to download the file https://get.helm.sh/helm-v3.1.0-linux-amd64.zip. You can work around this by pre-installing Helm on your private agents.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/HelmInstallerV1). Feedback and contributions are welcome.