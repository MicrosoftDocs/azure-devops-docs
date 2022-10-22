---
title: Build Machine Image task
description: Build a machine image using Packer to use for Azure Virtual machine scale set deployment
ms.topic: reference
ms.assetid: 845fd4f4-642d-4694-8514-047948a5a556
ms.author: ronai
author: RoopeshNair
ms.date: 06/16/2020
monikerRange: 'azure-devops'
---

# Build Machine Image task

[!INCLUDE [version-eq-azure-devops](../../../includes/version-eq-azure-devops.md)]

Use this task to build a machine image using Packer. This image can be used for Azure Virtual machine scale set deployment.

## YAML snippet

[!INCLUDE [temp](../includes/yaml/PackerBuildV1.md)]

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Packer template</td><td>(Required) Select whether you want the task to auto generate Packer template or use custom template provided by you.</td></tr>
<tr><td>Packer template location</td><td>(Required) Path to a custom user-provided template.</td></tr>
<tr><td>Template parameters</td><td>(Optional) Specify parameters which will be passed to Packer for building custom template. This should map to &quot;variables&quot; section in your custom template. E.g. if the template has a variable named &quot;drop-location&quot;, then add a parameter here with name &quot;drop-location&quot; and a value which you want to use. You can link the value to a release variable as well. To view/edit the additional parameters in a grid, click on &quot;…&quot; next to text box.</td></tr>
<tr><td>Azure subscription</td><td>(Required) Select the Azure Resource Manager subscription for baking and storing the machine image.</td></tr>
<tr><td>Storage location</td><td>(Required) Location for storing the built machine image. This location will also be used to create a temporary VM for the purpose of building image.</td></tr>
<tr><td>Storage account</td><td>(Required) Storage account for storing the built machine image. This storage account must be pre-existing in the location selected.</td></tr>
<tr><td>Resource group</td><td>(Required) Azure Resource group that contains the selected storage account.</td></tr>
<tr><td>Base image source</td><td>(Required) Select the source of base image. You can either choose from a curated gallery of OS images or provide url of your custom image.</td></tr>
<tr><td>Base image</td><td>(Required) Choose from curated list of OS images. This will be used for installing pre-requisite(s) and application(s) before capturing machine image.</td></tr>
<tr><td>Base image URL</td><td>(Required) Specify url of base image. This will be used for installing pre-requisite(s) and application(s) before capturing machine image.</td></tr>
<tr><td>Base image OS</td><td>(Required) undefined</td></tr>
<tr><td>Deployment Package</td><td>(Required) Specify the path for deployment package directory relative to $(System.DefaultWorkingDirectory). Supports minimatch pattern. Example path: FrontendWebApp/<strong>/GalleryApp</td></tr>
<tr><td>Deployment script</td><td>(Required) Specify the relative path to powershell script(for Windows) or shell script(for Linux) which deploys the package. This script should be contained in the package path selected above. Supports minimatch pattern. Example path: deploy/</strong>/scripts/windows/deploy.ps1</td></tr>
<tr><td>Deployment script arguments</td><td>(Optional) Specify the arguments to be passed to deployment script.</td></tr>
<tr><td>Additional Builder parameters</td><td>(Optional) In auto generated Packer template mode the task creates a Packer template with an Azure builder. This builder is used to generate a machine image. You can add keys to the Azure builder to customize the generated Packer template. For example setting ssh_tty=true in case you are using a CentOS base image and you need to have a tty to run sudo.<br/>To view/edit the additional parameters in a grid, click on “…” next to text box.</td></tr>
<tr><td>Skip temporary file cleanup during deprovision</td><td>(Optional) During deprovisioning of VM, skip clean-up of temporary files uploaded to VM. Refer <a href="https://www.packer.io/docs/builders/azure.html#skip_clean" data-raw-source="[here](https://www.packer.io/docs/builders/azure.html#skip_clean)">here</a></td></tr>
<tr><td>Image URL</td><td>(Optional) Provide a name for the output variable which will store generated machine image url.</td></tr>
</table>

[!INCLUDE [temp](../includes/control-options-arguments.md)]

> [!NOTE]
> If you want to enable detailed logs, navigate to **Pipelines** > **Edit** > **Variables**, and then add a new variable *PACKER_LOG* and set its value to 1.
