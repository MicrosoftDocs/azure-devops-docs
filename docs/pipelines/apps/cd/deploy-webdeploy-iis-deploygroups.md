---
title: Deploy apps to an IIS server on a Windows VM (Classic)
description: Deploy an web apps to an IIS web server on a Windows virtual machine using Deployment Groups
ms.assetid: 979E4504-C88A-4D0A-A912-6E5998D87445
ms.topic: quickstart
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/25/2022
monikerRange: '<= azure-devops'
---

# Deploy apps to a Windows Virtual Machine

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Learn how to use Azure Pipelines to build and deploy your ASP.NET, ASP.NET Core, or Node.js web app to an IIS web server running on a Windows Virtual Machine.

## Prerequisites

- An Azure DevOps Organization. [Create an organization](../../../organizations/accounts/create-organization.md), if you don't have one already.
- [Build pipeline](#build-pipeline)
- [Configure IIS web server](#configure-iis-web-server)

### Build Pipeline

Set up a build pipeline if you don't have one already.

#### [.NET](#tab/net/)

- [Build ASP.NET apps](../aspnet/build-aspnet-4.md)

#### [.NET Core](#tab/netcore/)

- [Build .NET Core apps](../../ecosystems/dotnet-core.md)

#### [Node](#tab/node/)

- [Build Node.js apps](../../ecosystems/javascript.md)

---

### Configure IIS web server

Configure your IIS server if you haven't done so already

#### [.NET](#tab/net/)

[!INCLUDE [prepare-aspnet-windows-vm](../includes/prepare-aspnet-windows-vm.md)]

#### [.NET Core](#tab/netcore/)

- [Host ASP.NET Core on Windows with IIS](/aspnet/core/host-and-deploy/iis/).

#### [Node](#tab/node/)

- [Hosting node.js applications in IIS on Windows](https://github.com/Azure/iisnode)

---

## Create a deployment group

Deployment groups make it easier to organize the servers that you want to use to host your app. A deployment group is a collection of machines with an Azure Pipelines agent on each of them. Each machine interacts with Azure Pipelines to coordinate the deployment of your app.

1. Select **Pipelines**, and then select **Deployment groups**.

1. Select **Add a deployment group** (or **New** if there are already deployment groups in place).

1. Enter a name for your group, and then select **Create**.

1. In the machine registration section, make sure that **Windows** is selected from the dropdown menu, and that the **Use a personal access token in the script for authentication** checkbox is also selected. Select **Copy script to clipboard** when you are done. The script that you've copied to your clipboard will download and configure an agent on the VM so that it can receive new web deployment packages and apply them to IIS.

1. Log in to your VM, open an elevated PowerShell command prompt window and run the script.

1. When you're prompted to configure tags for the agent, press Enter to skip. (tags are optional)

1. When you're prompted for the user account, press **Enter** to accept the defaults.

   > [!NOTE]
   > The agent running the pipeline must have access to the *C:\Windows\system32\inetsrv\* directory. See [Security groups, service accounts, and permissions](../../../organizations/security/permissions-access.md) for more details.

1. You should see the following message when the script is done *Service vstsagent.account.computername started successfully*.

1. Navigate to **Deployment groups**, and then select your deployment group. Select the **Targets** tab and make sure your VM is listed.

## Define your CD release pipeline

Your CD release pipeline picks up the artifacts published by your CI build and then deploys them to your IIS servers.

1. If you haven't already done so, install the [IIS Web App Deployment Using WinRM](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp)
   extension from Marketplace. This extension contains the tasks required for this example.

1. Do one of the following:

   * If you've just completed a CI build then, in the build's **Summary** tab choose **Release**.
     This creates a new release pipeline that's automatically linked to the build pipeline.

   * Open the **Releases** tab of **Azure Pipelines**, open the **+** drop-down
     in the list of release pipelines, and choose **Create release pipeline**.

1. Select the **IIS Website Deployment** template and choose **Apply**.

1. If you created your new release pipeline from a build summary, check that the build pipeline
   and artifact is shown in the **Artifacts** section on the **Pipeline** tab. If you created a new
   release pipeline from the **Releases** tab, choose the **+ Add** link and select your build artifact.

1. Choose the **Continuous deployment** icon in the **Artifacts** section, check that the continuous deployment trigger is enabled,
   and add a filter to include the **main** branch.

1. Open the **Tasks** tab and select the **IIS Deployment** job. For the **Deployment Group**, select the deployment group you created earlier (such as *myIIS*).

1. Save the release pipeline.

## Create a release to deploy your app

You're now ready to create a release, which means to run the release pipeline with the artifacts produced by a specific build. This will result in deploying the build:

[!INCLUDE [simple-create-release](../includes/simple-create-release.md)]

## Next steps

* [Dynamically create and remove a deployment group](howto-webdeploy-iis-deploygroups.md#depgroup)
* [Apply stage-specific configurations](howto-webdeploy-iis-deploygroups.md#envirconfig)
* [Perform a safe rolling deployment](howto-webdeploy-iis-deploygroups.md#rolling)
* [Deploy a database with your app](howto-webdeploy-iis-deploygroups.md#database)
