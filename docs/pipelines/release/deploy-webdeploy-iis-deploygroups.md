---
title: Deploy web apps to an IIS server on a Windows VM
description: Use a Classic pipeline to deploy web apps to an IIS web server on a Windows virtual machine in a deployment group.
ms.assetid: 979E4504-C88A-4D0A-A912-6E5998D87445
ms.topic: quickstart
ms.author: ronai
author: RoopeshNair
ms.date: 08/19/2024
monikerRange: '<= azure-devops'
---

# Deploy web apps to an IIS server on a Windows VM

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to use a Classic pipeline to deploy an ASP.NET, ASP.NET Core, or Node.js web app to an IIS web server virtual machine (VM) in a Windows deployment group.

## Prerequisites

- An Azure DevOps organization and project. To create an organization and project, see [Create a new organization](../../organizations/accounts/create-organization.md) or [Create a project in Azure DevOps](../../organizations/projects/create-project.md).
- [Administrative access](../agents/windows-agent.md#permissions) to at least one Windows deployment target VM.

#### [.NET](#tab/net/)
- A Classic build pipeline created in Azure Pipelines. For instructions, see [Build ASP.NET apps](../apps/aspnet/build-aspnet-4.md).
- A configured IIS web server.

  [!INCLUDE [prepare-aspnet-windows-vm](../apps/includes/prepare-aspnet-windows-vm.md)]

#### [.NET Core](#tab/netcore/)

- A Classic build pipeline created in Azure Pipelines. For instructions, see [Build .NET Core apps](../ecosystems/dotnet-core.md).
- A configured IIS web server. For instructions, see [Host ASP.NET Core on Windows with IIS](/aspnet/core/host-and-deploy/iis/).

#### [Node](#tab/node/)

- A Classic build pipeline created in Azure Pipelines. For instructions, see [Build Node.js apps](../ecosystems/javascript.md).
- A configured IIS web server. For instructions, see [Hosting node.js applications in IIS on Windows](https://github.com/Azure/iisnode).

---

## Create a deployment group

A deployment group is a logical set of target machines that each have an Azure Pipelines deployment agent installed. Deployment groups make it easier to organize the servers that you want to use to host your app. Each machine interacts with Azure Pipelines to coordinate the deployment of your app.

To create the deployment group:

1. From your Azure DevOps project, select **Pipelines** > **Deployment groups** from the left menu.
1. On the **Deployment groups** screen, select **New**, or select **Add a deployment group** if this deployment group is the first one in the project.
1. Enter a **Deployment group name** and optional **Description**, and then select **Create**.
1. On the next screen, in the machine registration section, select **Windows** for the **Type of target to register**. A registration script is generated.
1. Select **Use a personal access token in the script for authentication**. For more information, see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).
1. Select **Copy script to the clipboard**.

On each of your target VMs:

1. Use an account with administrative permissions to sign in to the VM.
1. To register the machine and install the agent, open an Administrator PowerShell command prompt and run the script you copied.

   When you're prompted to configure optional tags for the agent, press Enter to skip. When you're prompted for the user account, press Enter to accept the defaults.

   > [!NOTE]
   > The agent running the pipeline must have access to the *C:\\Windows\\system32\\inetsrv\\* directory. For more information, see [Security groups, service accounts, and permissions](../../organizations/security/permissions-access.md).

After you set up a target server, the script should return the message `Service vstsagent.{computer-name} started successfully`.

On the **Targets** tab of the Azure Pipelines **Deployment groups** page, you can verify that the VMs are listed and the agents are running. Refresh the page if necessary.

## Create a release pipeline

Deploy the artifacts from your build pipeline to your IIS server by using a release pipeline.

1. From your Azure DevOps project, select **Pipelines** > **Releases**, and then select **New** > **New release pipeline**.
1. On the **Select a template** screen, search for and select **IIS website deployment**, and then select **Apply**.

   :::image type="content" source="media/iis-web-template.png" alt-text="A screenshot showing how to add the IIS website deployment template.":::

1. In your release pipeline, select **Add an artifact**.
1. On the **Add an artifact** screen, select **Build**, select your **Project** and your **Source (build pipeline)**, and then select **Add**.
1. On the release pipeline screen, select the **Continuous deployment trigger** icon in the **Artifacts** section.
1. On the **Continuous deployment** screen, enable the **Continuous deployment trigger**,
1. Under **Build branch filters**, add the **main** build branch as a filter.
1. On the release pipeline screen, select **Tasks**, and then select **IIS Deployment**.
1. On the settings screen, under **Deployment group**, select the deployment group you created earlier.

   :::image type="content" source="media/iis-deployment-group.png" alt-text="A screenshot showing how to set up the IIS deployment group.":::

1. Select **Save**.

## Deploy your app

1. From **Pipelines** > **Releases**, select the release pipeline you just created, and then select **Create release**.
1. Check that the artifact version you want to use is selected, and then select **Create**.
1. Select the release name link in the information bar message **Release \<release name link> has been queued**.
1. Select **View logs** to see the logs and agent output.

## Related articles

- [Deploy from multiple branches](deploy-multiple-branches.md)
- [Deploy pull request artifacts](deploy-pull-request-builds.md)
