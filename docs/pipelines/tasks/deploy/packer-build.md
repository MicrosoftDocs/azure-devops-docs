---
title: Build Machine Image task
description: Build a machine image using Packer to use for Azure Virtual machine scale set deployment
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 845fd4f4-642d-4694-8514-047948a5a556
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Build Machine Image task

**Azure Pipelines**

Use this task in a build or release pipeline to build a machine image using Packer. This image can be used for Azure Virtual machine scale set deployment.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/PackerBuildV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Packer template</td><td>(Required) Select whether you want the task to auto generate Packer template or use custom template provided by you.</td></tr>
<tr><td>Packer template location</td><td>(Required) Path to a custom user-provided template.</td></tr>
<tr><td>Template parameters</td><td>(Optional) Specify parameters which will be passed to Packer for building custom template. This should map to "variables" section in your custom template. E.g. if the template has a variable named "drop-location", then add a parameter here with name "drop-location" and a value which you want to use. You can link the value to a release variable as well. To view/edit the additional parameters in a grid, click on "…" next to text box.</td></tr>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription for baking and storing the machine image.</td></tr>
<tr><td>Storage location</td><td>(Required) Location for storing the built machine image. This location will also be used to create a temporary VM for the purpose of building image.</td></tr>
<tr><td>Storage account</td><td>(Required) Storage account for storing the built machine image. This storage account must be pre-existing in the location selected.</td></tr>
<tr><td>Resource group</td><td>(Required) Azure Resource group that contains the selected storage account.</td></tr>
<tr><td>Base image source</td><td>(Required) Select the source of base image. You can either choose from a curated gallery of OS images or provide url of your custom image.</td></tr>
<tr><td>Base image</td><td>(Required) Choose from curated list of OS images. This will be used for installing pre-requisite(s) and application(s) before capturing machine image.</td></tr>
<tr><td>Base image URL</td><td>(Required) Specify url of base image. This will be used for installing pre-requisite(s) and application(s) before capturing machine image.</td></tr>
<tr><td>Base image OS</td><td>(Required) undefined</td></tr>
<tr><td>Deployment Package</td><td>(Required) Specify the path for deployment package directory relative to $(System.DefaultWorkingDirectory). Supports minimatch pattern. Example path: FrontendWebApp/**/GalleryApp</td></tr>
<tr><td>Deployment script</td><td>(Required) Specify the relative path to powershell script(for Windows) or shell script(for Linux) which deploys the package. This script should be contained in the package path selected above. Supports minimatch pattern. Example path: deploy/**/scripts/windows/deploy.ps1</td></tr>
<tr><td>Deployment script arguments</td><td>(Optional) Specify the arguments to be passed to deployment script.</td></tr>
<tr><td>Additional Builder parameters</td><td>(Optional) In auto generated Packer template mode the task creates a Packer template with an Azure builder. This builder is used to generate a machine image. You can add keys to the Azure builder to customize the generated Packer template. For example setting ssh_tty=true in case you are using a CentOS base image and you need to have a tty to run sudo.<br/>To view/edit the additional parameters in a grid, click on “…” next to text box.</td></tr>
<tr><td>Skip temporary file cleanup during deprovision</td><td>(Optional) During deprovisioning of VM, skip clean-up of temporary files uploaded to VM. Refer [here](https://www.packer.io/docs/builders/azure.html#skip_clean)</td></tr>
<tr><td>Image URL</td><td>(Optional) Provide a name for the output variable which will store generated machine image url.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
