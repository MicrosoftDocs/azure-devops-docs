---
title: Deploy to Kubernetes task
description: Deploy, configure, or update a Kubernetes cluster in Azure Container Service by running kubectl commands.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: CBC316A2-586F-4DEF-BE79-488A1F503564
ms.manager: dastahel
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'vsts'
---

# Deploy to Kubernetes task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy, configure, or update a Kubernetes cluster in Azure Container Service by running kubectl commands.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/KubernetesV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Kubernetes service connection</td><td>(Optional) Select a Kubernetes service connection.</td></tr>
<tr><td>Namespace</td><td>(Optional) Set the namespace for the kubectl command by using the –namespace flag. If the namespace is not provided, the commands will run in the default namespace.</td></tr>
<tr><td>Command</td><td>(Required) Select or specify a kubectl command to run.</td></tr>
<tr><td>Use Configuration files</td><td>(Optional) Use Kubernetes configuration file with the kubectl command. Filename, directory, or URL to Kubernetes configuration files can also be provided.</td></tr>
<tr><td>Configuration file</td><td>(Required) Filename, directory, or URL to kubernetes configuration files that will be used with the commands.</td></tr>
<tr><td>Arguments</td><td>(Optional) Arguments to the specified kubectl command.</td></tr>
<tr><td>Type of secret</td><td>(Required) Create/update a generic or dockerimagepullsecret.</td></tr>
<tr><td>Arguments</td><td>(Optional) Specify keys and literal values to insert in secret.For example, --from-literal=key1=value1 --from-literal=key2="top secret".</td></tr>
<tr><td>Container Registry type</td><td>(Required) Select a Container registry type. The task can use Azure Subscription details to work with an Azure Container registry. Other standard Container registries are also supported.</td></tr>
<tr><td>Docker Registry connection</td><td>(Optional) Select a Docker registry connection. Required for commands that need to authenticate with a registry.</td></tr>
<tr><td>Azure subscription</td><td>(Optional) Select the Azure Resource Manager subscription, which contains Azure Container Registry. Note: To configure new service connection, select the Azure subscription from the list and click 'Authorize'. If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button.</td></tr>
<tr><td>Azure Container Registry</td><td>(Optional) Select an Azure Container Registry which will be used for pulling container images and deploying applications to the Kubernetes cluster. Required for commands that need to authenticate with a registry.</td></tr>
<tr><td>Secret name</td><td>(Optional) Name of the secret. You can use this secret name in the Kubernetes YAML configuration file.</td></tr>
<tr><td>Force update secret</td><td>(Optional) Delete the secret if it exists and create a new one with updated values.</td></tr>
<tr><td>ConfigMap name</td><td>(Optional) ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable.</td></tr>
<tr><td>Force update configmap</td><td>(Optional) Delete the configmap if it exists and create a new one with updated values.</td></tr>
<tr><td>Arguments</td><td>(Optional) Specify keys and literal values to insert in configMap.For example, --from-literal=key1=value1 --from-literal=key2="top secret".</td></tr>
<tr><td>Kubectl</td><td>(Optional) undefined</td></tr>
<tr><td>Version spec</td><td>(Optional) Version Spec of version to get.  Examples: 1.7.0, 1.x.0, 4.x.0, 6.10.0, >=6.10.0</td></tr>
<tr><td>Check for latest version</td><td>(Optional) Always checks online for the latest available version (stable.txt) that satisfies the version spec. This is typically false unless you have a specific scenario to always get latest. This will cause it to incur download costs when potentially not necessary, especially with the hosted build pool.</td></tr>
<tr><td>Path to Kubectl</td><td>(Required) Full path to the kubectl.exe</td></tr>
<tr><td>Working directory</td><td>(Optional) Working directory for the Kubectl command.</td></tr>
<tr><td>Output format</td><td>(Optional) Output format.</td></tr>
<tr><td>Output variable name</td><td>(Optional) Name of the variable in which output of the command should be saved.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
