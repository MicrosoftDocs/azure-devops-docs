---
title: Deploy apps to an IIS server on a Windows VM (Classic)
description: Deploy web apps to an IIS web server on a Windows virtual machine using Deployment Groups
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

## Create a release pipeline

Using release pipelines, you can deploy your build artifacts to your IIS servers.

1. Select **Pipelines**, and then select **Releases**. Select **New pipeline**.

1. Use the search bar to find the **IIS Website Deployment** template, and then select **Apply**.

    :::image type="content" source="media/iis-web-template.png" alt-text="A screenshot showing how to add the IIS website deployment template.":::

1. Select **Add an artifact** to add your build artifact.

1. Select **Build**, and then select your **Project** and your **Source (build pipeline)**. Select **Add** when you are done.

1. Select the **Continuous deployment trigger** icon in the **Artifacts** section. Enable the **Continuous deployment trigger**,
   and add the **main** branch as a filter.

1. Select **Tasks**, and then select **IIS Deployment**. Select the deployment group you created earlier from the dropdown menu.

    :::image type="content" source="media/iis-deployment-group.png" alt-text="A screenshot showing how to set up the IIS deployment group.":::

1. Select **Save** when you are done.

## Deploy your app

1. Select **Pipelines** > **Releases**, and then select **Create release**.

1. Check that the artifact version you want to use is selected and then select **Create**.

1. Select the release link in the information bar message. For example: "Release **Release-1** has been queued".

1. Navigate to your pipeline **Logs** to see the logs and agent output.

## Related articles

- [Deploy to Linux VMs](./deploy-linuxvm-deploygroups.md)
- [Deploy from multiple branches](../..//release/deploy-multiple-branches.md)
- [Deploy pull request Artifacts](../../release/deploy-pull-request-builds.md)
