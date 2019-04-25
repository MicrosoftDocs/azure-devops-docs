---
title: Helm Tool Installer task
titleSuffix: Azure Pipelines & TFS
description: Install Helm and Kubernetes on an agent machine
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 068D5909-43E6-48C5-9E01-7C8A94816220
ms.manager: dastahel
ms.author: dastahel
ms.date: 01/18/2019
monikerRange: 'azure-devops'
---

# Helm Tool Installer task

[!INCLUDE [version-team-services](../../_shared/version-team-services.md)]

[Helm](https://helm.sh/) is a package manager for Kubernetes. Helm charts help you define, install, and upgrade even the most complex Kubernetes application. Use Helm to:

- Find and use popular software packaged as Helm charts to run in Kubernetes

- Share your own applications as Helm charts

- Create reproducible builds of your Kubernetes applications

- Serve as templates for Kubernetes manifest files

- Manage the releases of Helm packages

Use this task in a build or release pipeline to install Helm and kubectl on the agent machine.

::: moniker range="> tfs-2018"

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>helmVersion</code><br/>Helm Version Spec</td><td>(Required) Specify the version of Helm to install.<br/>Default value: 2.9.1</td></tr>
<tr><td><code>checkLatestHelmVersion</code><br/>Check for latest version of Helm</td><td>(Optional) Check for the latest version of Helm.<br/>Default value: true</td></tr>
<tr><td><code>installKubeCtl</code><br/>Install kubectl</td><td>(Required) Install kubectl.<br/>Default value: true</td></tr>
<tr><td><code>kubectlVersion</code><br/>Kubectl Version Spec</td><td>(Required if installKubeCtl == true) Specify the version of kubectl to install.<br/>Default value: 1.8.9</td></tr>
<tr><td><code>checkLatestKubeCtl</code><br/>Check for latest version of kubectl</td><td>(Required if installKubeCtl == true) Check for the latest version of kubectl.<br/>Default value: true</td></tr>
</table>

This YAML example installs Helm on the agent machine:

```YAML
- task: HelmInstaller@0
  displayName: Helm Installer
  inputs:
    helmVersion: 2.9.1
    checkLatestHelmVersion: true
    installKubectl: true 
    kubectlVersion: 1.8.9
    checkLatestKubectl: true
```
::: moniker-end

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
