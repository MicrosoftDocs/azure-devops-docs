---
title: Use an Azure Resource Manager template to deploy a Linux web app to Azure
description: Use an Azure Resource Manager template to deploy a Linux web app to Azure
ms.topic: quickstart
ms.author: jukullam
author: JuliaKM
ms.date: 07/30/2021
monikerRange: '=azure-devops'
ms.custom: subject-armqs, contperf-fy21q2
---

# Quickstart: Use an ARM template to deploy a Linux web app to Azure

Get started with [Azure Resource Manager templates (ARM templates)](/azure/azure-resource-manager/templates/overview) by deploying a Linux web app with MySQL. ARM templates give you a way to save your configuration in code. Using an ARM template is an example of infrastructure as code and a good DevOps practice.

An [ARM template](/azure/azure-resource-manager/templates/overview) is a JavaScript Object Notation (JSON) file that defines the infrastructure and configuration for your project. The template uses declarative syntax. In declarative syntax, you describe your intended deployment without writing the sequence of programming commands to create the deployment.

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).

## Get the code

For this repository on GitHub:

```
https://github.com/Azure/azure-quickstart-templates/tree/master/quickstarts/microsoft.web/webapp-linux-managed-mysql
```

## Review the template

The template used in this quickstart is from [Azure Quickstart Templates](https://azure.microsoft.com/resources/templates/webapp-linux-managed-mysql/). 

<!-- :::code language="json" source="~/../quickstart-templates/101-webapp-linux-managed-mysql/azuredeploy.json"::: -->

The template defines several resources:

- [Microsoft.Web/serverfarms](/azure/templates/microsoft.web/serverfarms)
- [Microsoft.Web/sites](/azure/templates/microsoft.web/sites)
- [Microsoft.DBforMySQL/servers](/azure/templates/microsoft.dbformysql/servers)
- [Microsoft.DBforMySQL/servers/firewallrules](/azure/templates/microsoft.dbformysql//servers/firewallrules)
- [Microsoft.DBforMySQL/servers/databases](/azure/templates/microsoft.dbformysql/servers/databases)

## Create your pipeline and deploy your template

1. Sign in to your Azure DevOps organization and navigate to your project. [Create a project](../../../../organizations/projects/create-project.md) if you do not already have one. 

2. Go to **Pipelines**, and then select **Create Pipeline**.

3. Select **GitHub** as the location of your source code. 

   > [!NOTE]
   > You may be redirected to GitHub to sign in. If so, enter your GitHub credentials.

4. When the list of repositories appears, select `yourname/azure-quickstart-templates/`.

   > [!NOTE]
   > You may be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

5. When the Configure tab appears, select `Starter pipeline`.

6. Replace the content of your pipeline with this code:

   :::code language="yml" source="~/../snippets/pipelines/azure/arm-template.yml" range="4-8":::

7. Create three variables:  `siteName`, `administratorLogin`, and `administratorLoginPassword`. `administratorLoginPassword` needs to be a secret variable.
    * Select **Variables**. 
    * Use the `+` sign to add three variables. When you create `administratorLoginPassword`, select **Keep this value secret**.
    * Click **Save** when you're done.
        
   |Variable  |Value  |Secret?  |
   |---------|---------|---------|
   |siteName     |  `mytestsite`       |    No     |
   |adminUser     |     `fabrikam`    |    No     |
   |adminPass     |    `Fqdn:5362!`     |    Yes     |


8. Map the secret variable `$(adminPass)` so that it is available in your Azure Resource Group Deployment task. At the top of your YAML file, map `$(adminPass)` to `$(ARM_PASS)`. 

   :::code language="yml" source="~/../snippets/pipelines/azure/arm-template.yml" range="1-8" highlight="1-2":::


9. Add the Copy Files task to the YAML file. You will use the `101-webapp-linux-managed-mysql` project. For more information, see [Build a Web app on Linux with Azure database for MySQL](https://github.com/Azure/azure-quickstart-templates/tree/master/quickstarts/microsoft.web/webapp-linux-managed-mysql) repo for more details. 

   :::code language="yml" source="~/../snippets/pipelines/azure/arm-template.yml" range="1-15" highlight="10-15":::

10. Add and configure the **Azure Resource Group Deployment** task. 
    
    The task references both the artifact you built with the Copy Files task and your pipeline variables. Set these values when   configuring your task.

    - **Deployment scope (deploymentScope)**: Set the deployment scope to `Resource Group`. You can target your deployment to a management group, an Azure subscription, or a resource group. 
    - **Azure Resource Manager connection (azureResourceManagerConnection)**: Select your Azure Resource Manager service connection. To configure new service connection, select the Azure subscription from the list and click **Authorize**. See [Connect to Microsoft Azure](../../../library/connect-to-azure.md) for more details
    - **Subscription (subscriptionId)**: Select the subscription where the deployment should go.
    - **Action (action)**: Set to `Create or update resource group` to create a new resource group or to update an existing one. 
    - **Resource group**: Set to`ARMPipelinesLAMP-rg` to name your new resource group. If this is an existing resource group, it will be updated.
    - **Location(location)**: Location for deploying the resource group. Set to your closest location (for example, West US). If the resource group already exists in your subscription, this value will be ignored.
    - **Template location (templateLocation)**: Set to `Linked artifact`. This is location of your template and the parameters files.
    - **Template (cmsFile)**: Set to `$(Build.ArtifactStagingDirectory)/azuredeploy.json`. This is the path to the ARM template. 
    - **Template parameters (cmsParametersFile)**: Set to `$(Build.ArtifactStagingDirectory)/azuredeploy.parameters.json`. This is the path to the parameters file for your ARM template.
    - **Override template parameters (overrideParameters)**:  Set to `-siteName $(siteName) -administratorLogin $(adminUser) -administratorLoginPassword $(ARM_PASS)` to use the variables you created earlier. These values will replace the parameters set in your template parameters file.
    - **Deployment mode (deploymentMode)**: The way resources should be deployed. Set to `Incremental`. Incremental keeps resources that are not in the ARM template and is faster than `Complete`.  `Validate` mode lets you find problems with the template before deploying. 
   
    :::code language="yml" source="~/../snippets/pipelines/azure/arm-template.yml" range="1-29" highlight="17-29":::

11. Click **Save and run** to deploy your template. The pipeline job will be launched and after few minutes, depending on your agent, the job status should indicate `Success`.

## Review deployed resources

1. Verify that the resources deployed. Go to the `ARMPipelinesLAMP-rg` resource group in the Azure portal and verify that you see  App Service, App Service Plan, and Azure Database for MySQL server resources. 

   :::image type="content" source="media/azure-resources-portal.png" alt-text="ARM template resources in the Azure portal":::

   You can also verify the resources using Azure CLI. 

   ```azurecli-interactive
   az resource list --resource-group ARMPipelinesLAMP-rg --output table
   ```

2. Go to your new site. If you set `siteName` to `armpipelinetestsite`, the site is located at `https://armpipelinetestsite.azurewebsites.net/`.

## Clean up resources

You can also use an ARM template to delete resources. Change the `action` value in your **Azure Resource Group Deployment** task to `DeleteRG`. You can also remove the inputs for `templateLocation`, `csmFile`, `csmParametersFile`, `overrideParameters`, and `deploymentMode`.

  :::code language="yml" source="~/../snippets/pipelines/azure/arm-template-cleanup.yml" range="1-24" highlight="17-24":::


## Next steps

> [!div class="nextstepaction"]
> [Create your first ARM template](/azure/azure-resource-manager/templates/template-tutorial-create-first-template)