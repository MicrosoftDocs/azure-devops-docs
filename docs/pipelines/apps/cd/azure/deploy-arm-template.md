---
title: Use an Azure Resource Manager template to deploy a Linux web app to Azure
description: Use an Azure Resource Manager template to deploy a Linux web app to Azure
ms.topic: quickstart
ms.author: jukullam
author: JuliaKM
ms.date: 02/22/2022
monikerRange: '=azure-devops'
ms.custom: subject-armqs, devx-track-arm-template, arm2024, linux-related-content
---

# Quickstart: Use an ARM template to deploy a Linux web app to Azure

[!INCLUDE [version-eq-azure-devops](../../../../includes/version-eq-azure-devops.md)]

Get started with [Azure Resource Manager templates (ARM templates)](/azure/azure-resource-manager/templates/overview) by deploying a Linux web app with MySQL. ARM templates give you a way to save your configuration in code. Using an ARM template is an example of infrastructure as code and a good DevOps practice.

An [ARM template](/azure/azure-resource-manager/templates/overview) is a JavaScript Object Notation (JSON) file that defines the infrastructure and configuration for your project. The template uses declarative syntax. In declarative syntax, you describe your intended deployment without writing the sequence of programming commands to create the deployment.

You can use either JSON or [Bicep syntax](/azure/azure-resource-manager/bicep/overview) to deploy Azure resources. Learn more about the [difference between JSON and Bicep for templates](/azure/azure-resource-manager/bicep/compare-template-syntax).

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/pricing/purchase-options/azure-account?cid=msft_learn).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- (For Bicep deployments) An existing resource group. Create a resource group with [Azure portal](/azure/azure-resource-manager/management/manage-resource-groups-portal#create-resource-groups), [Azure CLI](/azure/azure-resource-manager/management/manage-resource-groups-cli#create-resource-groups), or [Azure PowerShell](/azure/azure-resource-manager/management/manage-resource-groups-powershell#create-resource-groups).

## Security best practices

Before creating your pipeline, understand these security best practices for deploying ARM templates:

### Service connection setup with least privilege

When creating an Azure Resource Manager service connection, follow the principle of least privilege:

- **Use Managed Identity or OpenID Connect (OIDC)** instead of service principal secrets when possible. These methods eliminate the need to manage credentials. For setup instructions, see [Use OIDC with Azure Pipelines](/azure/devops/pipelines/library/connect-to-azure#create-a-service-connection-using-service-principal-secret).
- **Scope the service connection** to the specific subscription or resource group where you're deploying, not to your entire organization or subscription.
- **Create a dedicated service principal** for your pipeline with only the permissions needed for this deployment (typically Contributor role on the target resource group, not the subscription).
- **Avoid using service principal secrets** in pipelines. If you must use secrets, rotate them regularly.

### Secure credential and secret management

Do not store sensitive information like passwords directly as pipeline variables:

- **Use Azure Key Vault** to store sensitive values like database passwords, API keys, and connection strings.
- **Link Key Vault secrets to your pipeline** using the [Azure Key Vault task](/azure/devops/pipelines/tasks/reference/azure-key-vault-v2) to retrieve secrets at runtime.
- **Enable secret masking** in pipeline logs to prevent accidental exposure.
- **Implement secret rotation** policies for all credentials used in deployments.
- **Never hardcode secrets** in YAML files or check them into source control.

### Safe task execution

Ensure that your pipeline executes only trusted code:

- **Pin task versions** to specific major versions (e.g., `AzureResourceManagerTemplateDeployment@3`) rather than using `latest`. This prevents unexpected behavior from task updates.
- **Validate template and parameter files** before deployment. Use the `Validate` deployment mode to test templates without creating resources.
- **Review ARM template sources** carefully, especially when using templates from external repositories. Ensure templates come from trusted sources.
- **Use artifact signing and verification** when pulling templates from external sources to ensure they haven't been tampered with.

## Get the code

Fork this repository on GitHub:

```
https://github.com/Azure/azure-quickstart-templates/tree/master/quickstarts/microsoft.web/webapp-linux-managed-mysql
```

## Review the template

# [JSON](#tab/json)

The template used in this quickstart is from [Azure Quickstart Templates](https://azure.microsoft.com/resources/templates/webapp-linux-managed-mysql/). 

<!-- :::code language="json" source="~/../quickstart-templates/101-webapp-linux-managed-mysql/azuredeploy.json"::: -->

The template defines several resources:

- [Microsoft.Web/serverfarms](/azure/templates/microsoft.web/serverfarms)
- [Microsoft.Web/sites](/azure/templates/microsoft.web/sites)
- [Microsoft.DBforMySQL/servers](/azure/templates/microsoft.dbformysql/servers)
- [Microsoft.DBforMySQL/servers/firewallrules](/azure/templates/microsoft.dbformysql/servers/firewallrules)
- [Microsoft.DBforMySQL/servers/databases](/azure/templates/microsoft.dbformysql/servers/databases)

# [Bicep](#tab/bicep)

The Bicep template used in this quickstart deploys the same resources as the JSON template. Bicep provides a more readable syntax for defining Azure resources.

---

## Create your pipeline and deploy your template

# [JSON](#tab/json)

1. Sign in to your Azure DevOps organization and navigate to your project. [Create a project](../../../../organizations/projects/create-project.md) if you do not already have one.

1. Go to **Pipelines**, and then select **Create Pipeline**.

1. Select **GitHub** as the location of your source code.

   > [!NOTE]
   > You may be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select `yourname/azure-quickstart-templates/`.

   > [!NOTE]
   > You may be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

1. When the Configure tab appears, select `Starter pipeline`.

1. Replace the content of your pipeline with this code:

   ```yaml
   trigger:
     - none

   pool:
     vmImage: 'ubuntu-latest'
   ```

1. Add the Copy Files task to the YAML file. You will use the `101-webapp-linux-managed-mysql` project.

   ```yaml
   trigger:
     - none

   pool:
     vmImage: 'ubuntu-latest'

   steps:
     - task: CopyFiles@2
       inputs:
         SourceFolder: 'quickstarts/microsoft.web/webapp-linux-managed-mysql/'
         Contents: '**'
         TargetFolder: '$(Build.ArtifactStagingDirectory)'
   ```

1. Add and configure the **Azure Resource Group Deployment** task with secure practices:

   ```yaml
   variables:
     - group: KeyVaultSecrets

   trigger:
     - none

   pool:
     vmImage: 'ubuntu-latest'

   steps:
     - task: CopyFiles@2
       inputs:
         SourceFolder: 'quickstarts/microsoft.web/webapp-linux-managed-mysql/'
         Contents: '**'
         TargetFolder: '$(Build.ArtifactStagingDirectory)'

     - task: AzureResourceManagerTemplateDeployment@3
       inputs:
         deploymentScope: 'Resource Group'
         azureResourceManagerConnection: '<your-resource-manager-connection>'
         subscriptionId: '<your-subscription-id>'
         action: 'Create Or Update Resource Group'
         resourceGroupName: 'ARMPipelinesLAMP-rg'
         location: '<your-closest-location>'
         templateLocation: 'Linked artifact'
         csmFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.json'
         csmParametersFile: '$(Build.ArtifactStagingDirectory)/azuredeploy.parameters.json'
         overrideParameters: '-siteName $(siteName) -administratorLogin $(administratorLogin) -administratorLoginPassword $(dbAdminPassword)'
         deploymentMode: 'Validation'
   ```

1. Set up Azure Key Vault for secure secret management (recommended). See [Use Azure Key Vault for secure credential management](#use-azure-key-vault-for-secure-credential-management-recommended) below for detailed instructions.

1. Click **Save and run** to deploy your template. The pipeline job will be launched and after a few minutes, depending on your agent, the job status should indicate `Success`.

# [Bicep](#tab/bicep)

1. Sign in to your Azure DevOps organization and navigate to your project. [Create a project](../../../../organizations/projects/create-project.md) if you do not already have one.

1. Go to **Pipelines**, and then select **Create Pipeline**.

1. Select **GitHub** as the location of your source code.

   > [!NOTE]
   > You may be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select `yourname/azure-quickstart-templates/`.

   > [!NOTE]
   > You may be redirected to GitHub to install the Azure Pipelines app. If so, select **Approve and install**.

1. When the Configure tab appears, select `Starter pipeline`.

1. Replace the content of your pipeline with this code:

   ```yaml
   trigger:
     - none

   pool:
     vmImage: 'ubuntu-latest'
   ```

1. At the top of your YAML file, map values for `location` and `resourceGroupName`. Your location should be the location of the resource group. Your resource group needs to already exist.

   ```yaml
   variables:
     - group: KeyVaultSecrets
     vmImageName: 'ubuntu-latest'
     resourceGroupName: '<resource-group-name>'
     location: '<your-closest-location>'
     templateFile: './main.bicep'
     sourceFolder: 'quickstarts/microsoft.web/webapp-linux-managed-mysql/'
   ```

1. If you do not already have an Azure Resource Manager service connection, [create a service connection](../../../library/service-endpoints.md#create-a-service-connection) using OIDC or Managed Identity. See [Security best practices](#security-best-practices) for detailed guidance.

1. Add the Azure CLI task to deploy with Bicep:

   ```yaml
   variables:
     - group: KeyVaultSecrets
     vmImageName: 'ubuntu-latest'
     resourceGroupName: '<resource-group-name>'
     location: '<your-closest-location>'
     templateFile: './main.bicep'
     sourceFolder: 'quickstarts/microsoft.web/webapp-linux-managed-mysql/'

   trigger:
     - none

   pool:
     vmImage: $(vmImageName)

   steps:
     - task: AzureCLI@2
       inputs:
         azureSubscription: '<service-connection-name>'
         scriptType: bash
         scriptLocation: inlineScript
         inlineScript: |
           az deployment group create --resource-group $(resourceGroupName) --template-file $(sourceFolder)$(templateFile) \
           --parameters administratorLogin=$(administratorLogin) administratorLoginPassword=$(dbAdminPassword)
   ```

1. Set up Azure Key Vault for secure secret management (recommended). See [Use Azure Key Vault for secure credential management](#use-azure-key-vault-for-secure-credential-management-recommended) below for detailed instructions.

---

## Use Azure Key Vault for secure credential management (recommended)

Instead of storing sensitive values as pipeline variables, use Azure Key Vault to manage secrets securely:

1. [Create an Azure Key Vault](/azure/key-vault/general/quick-create-portal) in your subscription.

1. [Add your secrets to Key Vault](/azure/key-vault/secrets/quick-create-portal) (for example, `dbAdminPassword`).

1. Link the Key Vault to your Azure DevOps project by creating a variable group:
   - Go to **Pipelines** > **Library** > **Variable groups**.
   - Select **+ Variable group**.
   - Name the group (for example, `KeyVaultSecrets`).
   - Toggle **Link secrets from an Azure key vault as variables**.
   - Select your Azure subscription and Key Vault.
   - Click **Add** to select the secrets you want to use.

This approach provides better security because:
- Secrets are stored centrally in Key Vault, not in pipelines
- Access is controlled by Azure RBAC
- Secrets can be rotated without updating pipelines
- Audit logs track secret access

## Review deployed resources

# [JSON](#tab/json)

1. Verify that the resources deployed. Go to the `ARMPipelinesLAMP-rg` resource group in the Azure portal and verify that you see App Service, App Service Plan, and Azure Database for MySQL server resources.

   :::image type="content" source="media/azure-resources-portal.png" alt-text="ARM template resources in the Azure portal":::

   You can also verify the resources using Azure CLI.

   ```azurecli-interactive
   az resource list --resource-group ARMPipelinesLAMP-rg --output table
   ```

1. Go to your new site. If you set `siteName` to `armpipelinetestsite`, the site is located at `https://armpipelinetestsite.azurewebsites.net/`.

# [Bicep](#tab/bicep)

1. Verify that the resources deployed. Go to your resource group in the Azure portal and verify that you see App Service, App Service Plan, and Azure Database for MySQL server resources.

   :::image type="content" source="media/azure-resources-portal.png" alt-text="ARM template resources in the Azure portal":::

   You can also verify the resources using Azure CLI.

   ```azurecli
   az resource list --resource-group <resource-group-name> --output table
   ```

1. Go to your new site. If you set `siteName` to `armpipelinetestsite`, the site is located at `https://armpipelinetestsite.azurewebsites.net/`.

---

## Clean up resources

# [JSON](#tab/json)

You can also use an ARM template to delete resources. Change the `action` value in your **Azure Resource Group Deployment** task to `DeleteRG`. You can also remove the inputs for `templateLocation`, `csmFile`, `csmParametersFile`, `overrideParameters`, and `deploymentMode`.

```yaml
variables:
  - group: KeyVaultSecrets

trigger:
  - none

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: CopyFiles@2
    inputs:
      SourceFolder: 'quickstarts/microsoft.web/webapp-linux-managed-mysql/'
      Contents: '**'
      TargetFolder: '$(Build.ArtifactStagingDirectory)'

  - task: AzureResourceManagerTemplateDeployment@3
    inputs:
      deploymentScope: 'Resource Group'
      azureResourceManagerConnection: '<your-resource-manager-connection>'
      subscriptionId: '<your-subscription-id>'
      action: 'DeleteRG'
      resourceGroupName: 'ARMPipelinesLAMP-rg'
      location: '<your-closest-location>'
```

# [Bicep](#tab/bicep)

If you no longer need your deployed resources, delete your resource group.

```azurecli
az group delete -n <resource-group-name>
```

---

## Next steps

> [!div class="nextstepaction"]
> [Create your first ARM template](/azure/azure-resource-manager/templates/template-tutorial-create-first-template)
