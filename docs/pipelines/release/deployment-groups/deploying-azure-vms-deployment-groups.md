---
title: Deploy web apps to Azure VMs with deployment groups
description: Learn how to deploy web apps to Azure VMs with deployment groups in Azure Pipelines.
ms.topic: tutorial
ms.date: 07/17/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
---

# Deploy web apps to Azure VMs with deployment groups

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

In earlier versions of Azure Pipelines, deploying applications to multiple servers required significant planning and maintenance. Windows PowerShell remoting had to be enabled manually, specific ports needed to be opened, and deployment agents had to be installed on each server. Managing roll-out deployments also required manual intervention. These challenges have been greatly simplified with the introduction of  [Deployment Groups](/vsts/build-release/concepts/definitions/release/deployment-groups/).

A deployment group installs a deployment agent on each target server in the group and enables the release pipeline to gradually deploy the application across those servers. You can create multiple pipelines for roll-out deployments, allowing phased delivery of application updates to different user groups.

> [!NOTE]
> Deployment groups are used in Classic pipelines. If you are using YAML pipelines, see [Environments](../../process/environments.md).

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../../organizations/projects/create-project.md). |
| **Azure DevOps Demo Generator**   | - [Set up the Demo Generator](/azure/devops/demo-gen/configure).<br>- Create a [new Azure DevOps project](/azure/devops/demo-gen/use-demo-generator-v2) and make sure to choose the **DeploymentGroups** template (number 15 in the list).  |
| **Azure**   | - An [Azure subscription](https://azure.microsoft.com/free/). |

## Set up resources in Azure

This section guides you through setting up your Azure resources using an ARM template. It provisions six Virtual Machine (VM) web servers with IIS configured, a SQL Server VM (DB server), an Azure Load Balancer, and all necessary network connections.

1. Select the [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FramiMSFT%2FDeploymentTemplate%2Fmain%2Fazurewebdeploy.json) button to initiate the deployment of your resources in Azure.

1. Fill in the required information, then select **Review + create**. You can use any allowed combination of usernames and passwords, as they won’t be used again in this tutorial. The **Env Prefix Name** is added to all resource names to ensure global uniqueness. Use something personal or random. If you encounter a naming conflict during validation or creation, try changing this value and redeploying. Provisioning typically takes 10–15 minutes.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/provision-resources-arm-azure.png" alt-text="A screenshot showing how to set up your Azure resources in Azure.":::

1. After validation completes, select **Create** to deploy your resources.

1. Once deployment finishes, go to your resource group in the Azure portal to review the generated resources. Select the DB server VM with **sqlSrv** in its name to view its details.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/arm-deployment-view-resources.png" alt-text="A screenshot displaying the newly created resources in Azure.":::

1. Copy the **DNS name** as you’ll need it in a later step.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/arm-vm-overview.png" alt-text="A screenshot displaying the DB server VM in Azure.":::

## Creata a deployment group

A deployment group is a collection of machines, each with a deployment agent installed. These machines communicate with Azure Pipelines to coordinate application deployments.

1. Navigate to the Azure DevOps project you created earlier using the demo generator.

1. Select **Pipelines** > **Deployment groups**.

1. Select **Add a deployment group**.

1. Enter **Release** as the **Deployment group name**, then select **Create**. A registration script will be generated. You can use this script to register target servers and install the deployment agent manually. However, in this tutorial, the target servers are automatically registered as part of the release pipeline.

## Configure the release pipeline

1. From under **Pipelines**, navigate to **Releases**. Select the release pipeline named **Deployment Groups** and select **Edit**.

1. Select the **Tasks** tab to view the deployment tasks in pipeline. The tasks are organized as three stages called **Agent phase**, **Deployment group phase**, and **IIS Deployment phase**.

1. Select the **Agent phase**. In this stage, the target servers are associated with the deployment group using the Azure Resource Group Deployment task. To run, an agent pool and specification must be defined. Select the **Azure Pipelines** pool and **windows-latest** specification.

    ![Configuring the agent phase](media/deploying-azure-vms-deployment-groups/agent-phase.png)

1. Select the **Azure Resource Group Deployment** task. Configure a service connection to the Azure subscription used earlier to create infrastructure. After authorizing the connection, select the resource group created for this tutorial.

    ![Creating an Azure service connection](media/deploying-azure-vms-deployment-groups/create-azure-connection.png)

1. This task will run on the virtual machines hosted in Azure, and will need to be able to connect back to this pipeline in order to complete the deployment group requirements. To secure the connection, they will need a **personal access token (PAT)**. From the **User settings** dropdown, open **Personal access tokens** in a new tab. Most browsers support opening a link in a new tab via right-click context menu or **Ctrl+Click**.

    ![Navigating to personal access tokens](media/deploying-azure-vms-deployment-groups/open-pat.png)

1. In the new tab, select **New Token**.

1. Enter a name and select the **Full access** scope. Select **Create** to create the token. Once created, copy the token and close the browser tab. You return to the Azure Pipeline editor.

    ![Creating a personal access token](media/deploying-azure-vms-deployment-groups/create-pat.png)

1. Under **Azure Pipelines service connection**, select **New**.

    ![Adding an Azure Pipelines service connection](media/deploying-azure-vms-deployment-groups/new-azure-pipelines-connection.png)

1. Enter the **Connection URL** to the current instance of Azure DevOps. This URL is something like `https://dev.azure.com/[Your account]`. Paste in the **Personal Access Token** created earlier and specify a **Service connection name**. Select **Verify and save**.

    ![Creating an Azure Pipelines service connection](media/deploying-azure-vms-deployment-groups/create-azure-pipelines-connection.png)
  
    > [!NOTE]
    > To register an agent, you must be a member of the Administrator role in the agent pool. The identity of the agent pool administrator is needed only at the time of registration. The administrator identity isn't persisted on the agent, and it's not used in any subsequent communication between the agent and Azure Pipelines. After the agent is registered, there's no need to renew the personal access token because it's required only at the time of registration.

1. Select the current **Team project** and the **Deployment group** created earlier.

    ![Configuring the Azure Pipelines deployment group](media/deploying-azure-vms-deployment-groups/configure-pipeline-deployment-group.png)

1. Select the **Deployment group phase** stage. This stage executes tasks on the machines defined in the deployment group. This stage is linked to the **SQL-Svr-DB** tag. Choose the **Deployment Group** from the dropdown.

    ![Configuring the deployment group phase](media/deploying-azure-vms-deployment-groups/deployment-group-phase.png)

1. Select the **IIS Deployment phase** stage. This stage deploys the application to the web servers using the specified tasks. This stage is linked to the **WebSrv** tag. Choose the **Deployment Group** from the dropdown.

1. Select the **Disconnect Azure Network Load Balancer** task. As the target machines are connected to the NLB, this task will disconnect the machines from the NLB prior to the deployment and reconnect them back to the NLB after the deployment. Configure the task to use the Azure connection, resource group, and load balancer (there should only be one). 

1. Select the **IIS Web App Manage** task. This task runs on the deployment target machines registered with the deployment group configured for the task/stage. It creates a web app and application pool locally with the name **PartsUnlimited** running under the port **80**

1. Select the **IIS Web App Deploy** task. This task runs on the deployment target machines registered with the deployment group configured for the task/stage. It deploys the application to the IIS server using **Web Deploy**.

1. Select the **Connect Azure Network Load Balancer** task. Configure the task to use the Azure connection, resource group, and load balancer (there should only be one).

1. Select the **Variables** tab, create your variables, and provide their respective values as shown in the example below:

    | Variable Name | Variable Value  |
    |--|--|
    | DatabaseName | PartsUnlimited-Dev |
    | DBPassword | xxxxxxxx |
    | DBUserName | xxxxxxxx |
    | DefaultConnectionString | Data Source=[YOUR_DNS_NAME];Initial Catalog=PartsUnlimited-Dev;User ID=xxxxxxxx;Password=xxxxxxxx;MultipleActiveResultSets=False;Connection Timeout=30; |
    | ServerName | localhost |

    > [!IMPORTANT]
    > Make sure to replace your SQL server DNS name (which you noted from Azure portal earlier) in **DefaultConnectionString** variable.

    Your DefaultConnectionString  should look similar to the following after replacing the SQL DNS:

    `Data Source=cust1sqljo5zndv53idtw.westus2.cloudapp.azure.com;Initial Catalog=PartsUnlimited-Dev;User ID=xxxxxxxx;Password=xxxxxxxx;MultipleActiveResultSets=False;Connection Timeout=30;`

    The final variable list should look something like this:

    ![Configuring pipeline variables](media/deploying-azure-vms-deployment-groups/variables.png)

    > [!NOTE]
    > You may receive an error that the `DefaultConnectionString` variable must be saved as a secret. If that happens, select the variable and click the padlock icon that appears next to its value to protect it.

## Queuing a release and reviewing the deployment 

1. Select **Save** and confirm.

1. Select **Create release** and confirm. Follow the release through to completion. The deployment is then ready for review.

1. In the Azure portal, open one of the web VMs in your resource group. You can select any that have `websrv` in the name.

    ![Locating a web VM](media/deploying-azure-vms-deployment-groups/web-vm.png)

1. Copy the **DNS** of the VM. The [**Azure Load Balancer**](/azure/load-balancer/load-balancer-overview) will distribute incoming traffic among healthy instances of servers defined in a load-balanced set. As a result, the **DNS** of all web server instances is the same.

    ![Locating the web app domain](media/deploying-azure-vms-deployment-groups/web-app-domain.png)

1. Open a new browser tab to the DNS of the VM. Confirm the deployed app is running.

    ![Reviewing the app](media/deploying-azure-vms-deployment-groups/web-app-review.png)

## Summary

In this tutorial, you deployed a web application to a set of Azure VMs using Azure Pipelines and Deployment Groups. While this scenario covered a handful of machines, you can easily scale the process up to support hundreds, or even thousands, of machines using virtually any configuration.

## Cleaning up resources

This tutorial created an Azure DevOps project and some resources in Azure. If you're not going to continue to use these resources, delete them with the following steps:

1. Delete the Azure DevOps project created by the Azure DevOps Demo Generator.

1. All Azure resources created during this tutorial were assigned to the resource group specified during creation. Deleting that group will delete the resources they contain. This deletion can be done via the CLI or portal.

## Next steps

> [!div class="nextstepaction"]
> [Provision agents for deployment groups](howto-provision-deployment-group-agents.md)
