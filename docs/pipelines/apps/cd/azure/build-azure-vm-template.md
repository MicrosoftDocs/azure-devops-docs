---
title: Build a VM using RM templates
description: How to build an Azure Virtual Machine using ARM templates in Azure Pipelines and Team Foundation Server (TFS).
ms.assetid: 10C708EC-0D2A-4EF8-9381-4CF8B1EBA755
ms.topic: conceptual
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Build an Azure virtual machine using an Azure RM template

[!INCLUDE [version-tfs-2015-rtm](../../../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../../includes/concept-rename-note.md)]
::: moniker-end

In just a few steps, you can provision Azure virtual machines (VMs)
using [Resource Manager (RM) templates](/azure/azure-resource-manager/templates/deploy-powershell).
Managing the pipelines for virtual machines in this
way is considered **Infrastructure as code** and is
a good DevOps practice.

For this example, the template for creating the Azure
VMs must be checked into a version control repository
along with the rest of the application code, and it
must be published as part of the build output.

## Create the template 

Before you can build the solution, you must create an Azure RM template.
Follow these steps to create and check-in a new Resource Manager template.

1. In Visual Studio, choose **File | Add | New project** and add a
   new **Azure Resource Group** project to your solution.

1. When prompted for an Azure template, select **Windows Virtual Machine**.

   > The **Windows Virtual Machine** template is a simple example of
   provisioning a single virtual machine in Azure.
   For provisioning other types of resources, you can either edit the
   **WindowsVirtualMachine.json** file, select other
   templates in the project creation wizard, or download one
   of the many templates available at
   [https://github.com/Azure/azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates).

1. Add a project for your app to the solution. This could be
   a project for an existing app, or a new project created from the
   Visual Studio **File | Add | New project** menu.

1. Save the entire solution (not just the project) and 
   commit the changes into a [Team Foundation Server](../../../../repos/tfvc/index.yml) or 
   [Azure Repos Git](../../../../repos/git/index.yml) repository.

## Create the build pipeline

Carry out the following steps to publish an artifact with the Resource Manager template files.

1. Create a new build pipeline for the solution you just checked into a TFS or Git repo.

1. Enable continuous integration (CI) to tell the system to queue a build whenever someone on your team commits or checks in new code.

1. Publish the artifacts from the build and make sure that the template files from your ARM template project are included in the artifacts published by your build pipeline.

1. Save the pipeline, queue a new build, and verify that the artifact contains the **Templates** folder containing the template files **WindowsVirtualMachine.json** and **WindowsVirtualMachine.parameters.json**. This is the template that your release pipeline will consume to provision an Azure virtual machine.

For more details on each step, see [Continuous integration with Azure Resource Manager templates](/azure/azure-resource-manager/templates/deployment-tutorial-pipeline).

## Provision your virtual machine

After you've run the build, you're ready to create a release pipeline to provision your virtual machine:

:::image type="icon" source="../../../tasks/deploy/media/azure-resource-group-deployment-icon.png" border="false"::: [Provision an Azure virtual machine using an Azure RM template](deploy-provision-azure-vm.md)

<!-- BEGINSECTION class="md-qanda" -->

::: moniker range="<= tfs-2018"

## FAQ

[!INCLUDE [temp](../../../includes/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->

[!INCLUDE [rm-help-support-shared](../../../includes/rm-help-support-shared.md)]