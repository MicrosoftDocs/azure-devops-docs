---
title: Deploy Web Apps to Azure VMs by Using Deployment Groups
description: Learn how to deploy web apps to Azure VMs by using deployment groups in Azure Pipelines.
ms.topic: how-to
ms.date: 07/17/2025
monikerRange: '<= azure-devops'
ms.custom: sfi-image-nochange
---

# Deploy web apps to Azure VMs by using deployment groups

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

In earlier versions of Azure Pipelines, deploying applications to multiple servers required significant planning and maintenance. Windows PowerShell remoting had to be enabled manually, specific ports needed to be opened, and deployment agents had to be installed on each server. Managing rollout deployments also required manual intervention. The introduction of [deployment groups](/vsts/build-release/concepts/definitions/release/deployment-groups/) greatly simplified these challenges.

A deployment group installs a deployment agent on each target server in the group and enables the release pipeline to gradually deploy the application across those servers. You can create multiple pipelines for rollout deployments, to allow phased delivery of application updates to different user groups.

> [!NOTE]
> Deployment groups are used in classic pipelines. If you're using YAML pipelines, see [Create and target Azure DevOps environments](../../process/environments.md).

## Prerequisites

| Product | Requirements |
| ------- | ------------ |
| Azure DevOps | - An Azure DevOps [organization](../../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../../organizations/projects/create-project.md). |
| Azure DevOps Demo Generator | - [Set up the Demo Generator](/azure/devops/demo-gen/configure).<br>- Create a [new Azure DevOps project](/azure/devops/demo-gen/use-demo-generator-v2) and make sure to choose the **DeploymentGroups** template.  |
| Azure | - An [Azure subscription](https://azure.microsoft.com/free/). |

## Set up resources in Azure

This section guides you through setting up your Azure resources by using an Azure Resource Manger template. It provisions six virtual machine (VM) web servers with IIS configured, a SQL Server VM (database server), an Azure load balancer, and all necessary network connections.

1. Select the [![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FramiMSFT%2FDeploymentTemplate%2Fmain%2Fazurewebdeploy.json) button to initiate the deployment of your resources in Azure.

1. Fill in the required information, and then select **Review + create**.

   You can use any allowed combination of usernames and passwords, because you won't use them again in this article. The **Env Prefix Name** value is added to all resource names to ensure global uniqueness. Use something personal or random. If you encounter a naming conflict during validation or creation, try changing this value and redeploying. Provisioning typically takes 10–15 minutes.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/provision-resources-arm-azure.png" alt-text="Screenshot that shows how to set up Azure resources.":::

1. After validation finishes, select **Create** to deploy your resources.

1. After deployment finishes, go to your resource group in the Azure portal to review the generated resources. Select the database server VM with **sqlSrv** in its name to view its details.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/arm-deployment-view-resources.png" alt-text="Screenshot that shows newly created resources in Azure.":::

1. Copy the **DNS name** value, because you'll need it in a later step.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/arm-vm-overview.png" alt-text="Screenshot that shows a DB server VM in Azure.":::

## Create a deployment group

A deployment group is a collection of machines. Each machine has a deployment agent installed. These machines communicate with Azure Pipelines to coordinate application deployments.

1. Go to the Azure DevOps project that you created earlier by using the Demo Generator.

1. Select **Pipelines** > **Deployment groups**.

1. Select **Add a deployment group**.

1. Enter **Release** as the **Deployment group name** value, and then select **Create**.

A registration script is generated. You can use this script to register target servers and install the deployment agent manually. However, in this article, the target servers are automatically registered as part of the release pipeline.

## Create a personal access token

1. From your Azure DevOps project, select the **User Settings** icon, and then select **Personal Access Tokens**.

1. Select **New Token**, enter a name for your personal access token (PAT), and then choose an expiration date.

1. Select **Custom defined** for **Scopes**, select **Show all scopes**, and then check the following scopes:
    - **Project and Team** > **Read & write**.
    - **Agent Pools** > **Read & manage**
    - **Deployment Groups** > **Read & manage**.

1. When you finish, select **Create**. Copy your PAT, because you'll need it in the following section.

## Configure the release pipeline

The template for the classic release pipeline includes one agent job, **Agent phase**, which runs tasks on an agent in an agent pool. It also includes two deployment group jobs: **Deployment group phase** and **IIS Deployment phase**.

Deployment group jobs run tasks on machines defined in a deployment group. Use the following steps to configure each job.

### Configure the agent job

1. Go to your Azure DevOps project and select **Pipelines** > **Releases**.

1. Select the **Deployment Groups** release definition, and then select **Edit**.

1. Select the **Tasks** tab to view the deployment tasks in your pipeline.

1. Select the **Agent phase** stage, and then choose the **Azure Pipelines** pool and the **windows-latest** specification.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-groups-release-pipeline-agent-phase.png" alt-text="Screenshot that shows the agent phase in the classic release pipeline.":::

1. Select the **Azure Resource Group Deployment** task, select the **Azure subscription** value that you used earlier to create your resources, and then select **Authorize** to authorize the connection. After the connection is authorized, select the **Resource group** value that you created for this article.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-groups-release-pipeline-resource-group-deployment-task.png" alt-text="Screenshot that shows how to configure a resource group in a deployment task.":::

1. This task will run on virtual machines in Azure and must be able to connect back to the pipeline to complete the deployment group requirements. To secure the connection, you need to set up a service connection by using the PAT that you created earlier. Scroll down within the same task, and select **New** under **Azure Pipelines service connection**.

1. In the **New service connection** pane, enter the **Connection URL** value for your Azure DevOps organization: `https://dev.azure.com/organizationName`. Paste in the **Personal Access Token** value that you created earlier, specify a **Service connection name** value, and select the **Grant access permission to all pipelines** checkbox. When you finish, select **Verify and save**.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-groups-release-pipeline-deployment-task-service-connection.png" alt-text="Screenshot that shows how to configure a new service connection for the deployment task.":::

1. Scroll down in the **Azure Resource Group Deployment** task. In the dropdown menus, select your **Team project** value and the **Deployment Group** value that you created earlier.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-groups-release-pipeline-team-deployment-group-setup.png" alt-text="Screenshot that shows how to configure a team project and deployment group for the deployment task.":::

### Configure the deployment group jobs

1. From the **Deployment Groups** release definition, select the **Deployment group phase** job.

   This job executes tasks on the machines defined in the deployment group. This job uses the **SQL-Svr-DB** tag to deploy to a subset of targets in the deployment group.

   In the **Deployment Group** dropdown list, select the **Release** deployment group that you created earlier.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-phase-setup.png" alt-text="Screenshot that shows how to configure a job for the deployment group phase.":::

1. Select the **IIS Deployment phase** job. This job uses the **WebSrv** tag to deploy the web application to a subset of the web servers. In the dropdown list, select the **Deployment Group** value that you created earlier.

1. The **Disconnect Azure Network Load Balancer** and **Connect Azure Network Load Balancer** tasks are deprecated. you can disable them for now by right-clicking the task and selecting **Disable select task(s)**.

1. The **IIS Web App Manage** and **IIS Web App Deploy** tasks are prefilled and require no changes.

1. Select the **Variables** tab, select **Pipeline variables**, and provide the following values. Replace the placeholder in the **DefaultConnectionString** variable with the SQL Server DNS name that you copied earlier.

    | Variable name | Variable value |
    | ------------- | -------------- |
    | `DatabaseName` | `PartsUnlimited-Dev` |
    | `DBPassword` | `xxxxxxxx` |
    | `DBUserName` | `xxxxxxxx` |
    | `DefaultConnectionString` | `Data Source=[YOUR_DNS_NAME];Initial Catalog=PartsUnlimited-Dev;User ID=xxxxxxxx;Password=xxxxxxxx;MultipleActiveResultSets=False;Connection Timeout=30;` |
    | `ServerName` | `localhost` |

1. Select **Save**, add a comment if you'd like, then select **Ok**.

> [!TIP]
> If you receive an error that the `DefaultConnectionString` variable must be saved as a secret, select the padlock icon next to its value to protect it.

## Create a release and deploy the application

Now that the release definition is configured and saved, you can proceed to create a release to deploy your web app to Azure.

However, before you start the release, you have to make sure that the build pipeline ran at least once. This action generates the pipeline artifact that's required for deployment. If you try to run the release pipeline before the build pipeline, the **Artifacts** section on the **Release pane** will be empty.

Use the following steps to run your pipeline, generate a pipeline artifact, and then create a new release:

1. In your Azure DevOps project, select **Pipeline**, and then select the **Deployment Groups** build pipeline.

1. Select **Run pipeline**. On the **Run pipeline** pane, select your **Agent specification** value, and then select **Run**.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-agent-specification-run.png" alt-text="Screenshot that shows how to configure a pipeline run.":::

1. After the pipeline finishes successfully, it generates a pipeline artifact. You can view it from the pipeline summary.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-pipeline-artifact.png" alt-text="Screenshot that shows a generated pipeline artifact.":::

1. Go to **Pipelines** > **Release**, select your release definition, and then select **Create release** to start the deployment pipeline.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-create-release.png" alt-text="Screenshot that shows how to create a new release.":::

1. Select **Create**, and then select the pipeline run to open the overview. Your pipeline should have a status of **In progress**. Select the stage to view the detailed deployment logs.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-release-overview.png" alt-text="Screenshot that shows a release pipeline overview.":::

1. In the release summary, you can monitor the status of each phase of the deployment.

    :::image type="content" source="media/deploying-azure-vms-deployment-groups/deployment-group-release-summary.png" alt-text="Screenshot that shows a release summary.":::

## Troubleshoot

### Connection or login error

While you run the **Sql Dacpac Deployment On Machine Group** task, you might get one of these errors:

- "Unable to connect to master or target server"
- "A connection was successfully established with the server, but then an error occurred during the login process"

If you encounter either of these errors, follow these steps:

1. Make sure that you successfully created the database during the resource deployment. You can confirm this creation by using the Azure CLI or `sqlcmd`:

    ```
    sqlcmd -S <server-name> -U <username> -P <password> -Q "SELECT name FROM sys.databases"
    ```

    If your database is not present in the list, you can create a new one by using the following command:

    ```
    sqlcmd -S <server-name> -U <username> -P <password> -Q "CREATE DATABASE [YourDatabaseName]"
    ```

2. Make sure that SQL Server authentication is enabled. Your SQL Server deployment must be configured to allow both SQL Server authentication and Windows authentication (mixed mode). To enable SQL Server authentication:

   a. Connect by using SQL Server Management Studio or `sqlcmd`.

   b. Run the following query:

      ```
      EXEC xp_instance_regwrite 
          N'HKEY_LOCAL_MACHINE',
          N'Software\\Microsoft\\MSSQLServer\\MSSQLServer',
          N'LoginMode',
          REG_DWORD,
          2;
      ```

   c. Restart the SQL Server service for the change to take effect:

      ```
      net stop MSSQLSERVER
      net start MSSQLSERVER
      ```

### Agents showing as offline

If one or more of your agents are showing as offline, even though they're running on your VM, you can try a couple of things. First, log in to the VM where the agent is running and run the following command to check if your VM is resolving to the same set of IPs:

```
nslookup dev.azure.com
```

If all VMs are resolving to the same set of IPs, make sure the load balancer is configured with the correct outbound rule. You can add a backend pool to your load balancer in Azure, add the NICs of your VMs to the backend pool, and then associate the backend pool with your load balancer's outbound rule. To do this task:

1. Go to Azure and find your load balancer.

1. Select **Backend pools**, and then either choose your existing pool or create a new one. Under **IP configurations**, and add your web servers.

1. Go to **Load balancing rules** and select your load-balancing rule. In the **Backend pool** dropdown list, select your backend pool.

## Clean up resources

In this article, you created an Azure DevOps project and deployed resources in Azure. If you no longer need them, follow these steps to clean up.

### Delete the Azure DevOps project

Go to **Project settings**, and then select **Overview** > **Delete**.

### Delete the Azure resource group

All Azure resources that you created in this article are in the same resource group. Deleting the resource group removes all associated resources.

To delete the resource group by using the Azure CLI, run this command:

```dotnetcli
az group delete --name <RESOURCE_GROUP_NAME> --yes --no-wait
```

To delete the resource group by using the Azure portal:

1. In the Azure portal, go to **Resource groups**.

1. Select the resource group that you used in the article.

1. Select **Delete resource group**, confirm the name, and then select **Delete**.

## Related content

- [Provision agents for deployment groups](howto-provision-deployment-group-agents.md)
- [Add deployment group jobs to a release pipeline](../deployment-group-phases.md)
- [Deploy pull request artifacts with classic release pipelines](../deploy-pull-request-builds.md)
