---
title: Automating infrastructure deployments in the Cloud with Terraform and Azure Pipelines
description: DevOps CI CD - Use Terraform to manage infrastructure deployment from Azure Pipelines and TFS
ms.topic: tutorial
ms.date: 05/18/2020
monikerRange: '>= tfs-2018'
---

# Use Terraform to manage infrastructure deployment

[!INCLUDE [version-tfs-2018](../includes/version-tfs-2018.md)]

## tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]

Terraform is an open-source infrastructure as code (IaC) tool to manage cloud services. Terraform can manage existing and popular cloud service providers as well as custom in-house solutions. Using Terraform you can define and provision your infrastructure components in config files using an easy to learn declarative language: HashiCorp Configuration Language (HCL).

In this tutorial, you will learn about:

> [!div class="checklist"]
> * The structure of a Terraform file
> * Building an application using an Azure CI pipeline
> * Deploying resources using Terraform and Azure CD pipeline

## Prerequisites

1. A Microsoft Azure account.
1. An Azure DevOps account.
1. Set up the demo project using the [Azure DevOps Demo Generator](https://azuredevopsdemogenerator.azurewebsites.net/?TemplateId=77382&Name=Terraform).

<a name="examine-terraform-file"></a>

## Examine the Terraform config file

This tutorial uses the PartsUnlimited project, a sample eCommerce website developed using .NET Core. The Terraform config file defines the Azure resources required to deploy our web application.

1. Select **Repos** then select the **terraform** branch. 

    :::image type="content" source="media/automate-terraform/select-branch.png" alt-text="Selecting the terraform branch":::

1. Find and select the **webapp.tf** configuration file in your repo and review its content. In this example, we define the Azure resources that will be used to deploy our web application. Some variables will be populated during run time.

	```
	 terraform {
	  required_version = ">= 0.11" 
	 backend "azurerm" {
	  storage_account_name = "__terraformstorageaccount__"
	    container_name       = "terraform"
	    key                  = "terraform.tfstate"
		access_key  ="__storagekey__"
	  features{}
		}
		}
	  provider "azurerm" {
	    version = "=2.0.0"
	features {}
	}
	resource "azurerm_resource_group" "dev" {
	  name     = "PULTerraform"
	  location = "West Europe"
	}
	
	resource "azurerm_app_service_plan" "dev" {
	  name                = "__appserviceplan__"
	  location            = "${azurerm_resource_group.dev.location}"
	  resource_group_name = "${azurerm_resource_group.dev.name}"
	
	  sku {
	    tier = "Free"
	    size = "F1"
	  }
	}
	
	resource "azurerm_app_service" "dev" {
	  name                = "__appservicename__"
	  location            = "${azurerm_resource_group.dev.location}"
	  resource_group_name = "${azurerm_resource_group.dev.name}"
	  app_service_plan_id = "${azurerm_app_service_plan.dev.id}"
	
	}
	```

<a name="build-application"></a>

## Azure build pipeline

This DevOps project includes two separate pipelines to build and deploy our web application. The build pipeline produces the artifacts that will be deployed by the release pipeline in the next section.

### [Classic](#tab/classic/)

1. Navigate to **Pipelines** and select the **Terraform-CI** pipeline.

    :::image type="content" source="media/automate-terraform/select-ci-pipeline.png" alt-text="Select the build pipeline":::

1. Select **Edit** to review the tasks included in the pipeline. The .NET Core tasks help restore dependencies, build, test, and publish the build output as a zip file to be deployed to an app service.

   :::image type="content" source="media/automate-terraform/ci-pipeline.png" alt-text="Pipeline tasks":::

1. The **Copy files** task copies the Terraform folder to the Artifact staging directory.

   :::image type="content" source="media/automate-terraform/publish-terraform.png" alt-text="Copy Terraform folder":::

1. Select **Queue** then **Run** to queue and run your pipeline.

   :::image type="content" source="media/automate-terraform/track-build.png" alt-text="Queue and run pipeline":::

### [YAML](#tab/YAML/)

Use the [DotNetCoreCLI](../tasks/build/dotnet-core-cli.md) task to restore, build, test, and publish your packages, and the [CopyFiles](../tasks/utility/copy-files.md) and [PublishBuildArtifacts](../tasks/utility/publish-build-artifacts.md) tasks to copy and publish your artifacts.

```YAML
pool:
  vmImage: 'Ubuntu-16.04'

steps:
- task: DotNetCoreCLI@2
  displayName: Restore
  inputs:
    command: restore
    projects: '$(Parameters.RestoreBuildProjects)'

- task: DotNetCoreCLI@2
  displayName: Build
  inputs:
    projects: '$(Parameters.RestoreBuildProjects)'
    arguments: '--configuration $(BuildConfiguration)'

- task: DotNetCoreCLI@2
  displayName: Test
  inputs:
    command: test
    projects: '$(Parameters.TestProjects)'
    arguments: '--configuration $(BuildConfiguration)'

- task: DotNetCoreCLI@2
  displayName: Publish
  inputs:
    command: publish
    publishWebProjects: True
    arguments: '--configuration $(BuildConfiguration) --output $(build.artifactstagingdirectory)'
    zipAfterPublish: True

- task: CopyFiles@2
  displayName: 'Copy Terraform files to artifacts'
  inputs:
    SourceFolder: Terraform
    TargetFolder: '$(build.artifactstagingdirectory)/Terraform'

- task: PublishBuildArtifacts@1
  displayName: 'Publish Artifact'
  inputs:
    PathtoPublish: '$(build.artifactstagingdirectory)'

```

---

<a name="release-application"></a>

## Release pipeline

Now that we built our application, it's time to deploy it. However, no deployment infrastructure has been created yet. This is where Terraform comes in. By following the definition file reviewed earlier, Terraform determines what actions are necessary to achieve the state outlined in the config file.

### [Classic](#tab/classic/)

1. Navigate to **Releases** and select the **Terraform-CD** pipeline. Select **Edit** to review or edit the pipeline.

   :::image type="content" source="media/automate-terraform/select-cd-pipeline.png" alt-text="Select release pipeline":::

1. The release pipeline has been configured to consume the build artifact. Select the **Dev** stage to review or edit its tasks.

   :::image type="content" source="media/automate-terraform/cd-pipeline.png" alt-text="Artifacts and stages":::

1. There are eight tasks defined in the release stage. Most of them require some configuration to work with your Azure account. Select each task and enter your Azure subscription in the appropriate field.

   :::image type="content" source="media/automate-terraform/cd-pipeline-tasks.png" alt-text="Dev stage tasks":::

1. Select **Agent job** and set up the **Agent pool** and **Agent specification**.

   :::image type="content" source="media/automate-terraform/configure-cd-agent.png" alt-text="Set up agent pool and specification":::

1. Select the **Azure CLI** task and add your **Azure subscription**.

   :::image type="content" source="media/automate-terraform/configure-cd-azure-cli.png" alt-text="Set up the Azure CLI task":::
    
    This task executes a series of Azure CLI commands to set up some basic infrastructure required to use Terraform.

    ```Command
	# this will create Azure resource group
	az group create --location westus --name $(terraformstoragerg)
	
	az storage account create --name $(terraformstorageaccount) --resource-group $(terraformstoragerg) --location westus --sku Standard_LRS
	
	az storage container create --name terraform --account-name $(terraformstorageaccount)
	
	az storage account keys list -g $(terraformstoragerg) -n $(terraformstorageaccount)
    ```

    By default, Terraform stores state locally in **terraform.tfstate**. When working in a team environment, using a local file makes Terraform implementation more complicated. With remote state, Terraform writes the state data to a remote data store. In our example, the Azure CLI task creates an Azure storage account and a storage container to store the Terraform state. For more information on Terraform remote state, see [Remote State](https://www.terraform.io/docs/state/remote.html).

1. Select the **Azure PowerShell** task and set up the **Azure Resource Manager** and **Azure subscription** fields. 

    :::image type="content" source="media/automate-terraform/configure-cd-powershell.png" alt-text="Configure Azure PowerShell task":::
    
    This task uses a PowerShell script to retrieve the storage account key needed for the Terraform provisioning.

	```Command
	# Using this script we will fetch storage key which is required in terraform file to authenticate backend storage account
	
	$key=(Get-AzStorageAccountKey -ResourceGroupName $(terraformstoragerg) -AccountName $(terraformstorageaccount)).Value[0]
	
	Write-Host "##vso[task.setvariable variable=storagekey]$key"
	```

1. Select the **Replace tokens in terraform file** task. If you recall the  file reviewed earlier, there were several resources that were unknown at the time and marked with token placeholders, such as **__terraformstorageaccount__**. This task assigns values during run-time to some of the variables in the **webapp.tf** config file including those from the pipeline's **Variables** section.

   :::image type="content" source="media/automate-terraform/cd-variables.png" alt-text="Replace tokens task":::

1. The **Install Terraform** task installs and configures the specified version of Terraform on the agent for the remaining tasks.

    When running Terraform in automation, the focus is usually on the core plan/apply cycle. The next three tasks follow these stages.

   :::image type="content" source="media/automate-terraform/terraform-workflow.png" alt-text="Terraform workflow":::

1. The **Terraform init** task runs the **init** command to look through all of the *.tf files in the current working directory and automatically downloads any of the required providers. In this example, it will download Azure provider as it is going to deploy Azure resources.

    Set up the **Azure subscription**, **container**, and **Key** fields.

   :::image type="content" source="media/automate-terraform/configure-cd-terraform-init.png" alt-text="Set up Terraform init task":::

1. The **Terraform plan** task runs the **plan** command to create an execution plan by determining what actions are necessary to achieve the desired state specified in the configuration files. This is just a dry run and shows which actions will be performed.

    Enter your **Azure subscription** in the appropriate field.

   :::image type="content" source="media/automate-terraform/configure-cd-terraform-plan.png" alt-text="Set up Terraform plan task":::

1. The **Terraform apply** task runs the **apply** command to deploy the resources. By default, it will also prompt for confirmation before applying. Since this is an automated deployment, the **auto-approve** argument is included.

    Enter your **Azure subscription** in the appropriate field.

   :::image type="content" source="media/automate-terraform/configure-cd-terraform-apply.png" alt-text="Set up Terraform apply task":::

1. Select the **Azure App Service Deploy** task and enter your **Azure subscription**. By the time this task runs, Terraform has already ensured that the deployment environment has been configured to meet the app's requirements. It will use the $(appservicename) from the **Variables** section.

   :::image type="content" source="media/automate-terraform/configure-cd-app-service-deploy.png" alt-text="Set up the app service deployment task":::

1. Select **Save** then confirm.

1. Select **Create release** and specify the recent build's Artifact then select **Create**.

   :::image type="content" source="media/automate-terraform/cd-create-release.png" alt-text="Create a release":::

1. Select the new release to view the pipeline's execution.

   :::image type="content" source="media/automate-terraform/view-release.png" alt-text="View release pipeline execution":::

1. Once the release is completed, select the **Azure App Service Deploy** task.

   :::image type="content" source="media/automate-terraform/completed-pipeline.png" alt-text="Select the Azure App Service Deploy task":::

1. Copy the name of the app service from the task title.

   :::image type="content" source="media/automate-terraform/app-service-name.png" alt-text="Copy the name of the app service":::

1. Open a new browser tab and navigate to your deployed website. The domain format is **[app service name].azurewebsites.net**:
 
    ```URL
    https://pulterraformweb99ac17bf.azurewebsites.net.
    ```
   :::image type="content" source="media/automate-terraform/deployed-app.png" alt-text="Navigate to the deployed website":::

### [YAML](#tab/YAML/)

- Deploy Azure resources

    ```YAML
    variables:
      terraformstoragerg: 'terraformrg'
      terraformstorageaccount: 'terraformstorage8ff03276'
    
    steps:
    - task: AzureCLI@1
      displayName: 'Azure CLI to deploy required Azure resources'
      inputs:
        azureSubscription: '<yourAzureSubscription>'
        scriptLocation: inlineScript
        inlineScript: |
         # this will create Azure resource group
         az group create --location westus --name $(terraformstoragerg)
         
         az storage account create --name $(terraformstorageaccount) --resource-group $(terraformstoragerg) --location westus --sku Standard_LRS
         
         az storage container create --name terraform --account-name $(terraformstorageaccount)
         
         az storage account keys list -g $(terraformstoragerg) -n $(terraformstorageaccount)   
    ```

- Get storage key

    ```YAML
    variables:
      terraformstoragerg: 'terraformrg'
      terraformstorageaccount: 'terraformstorage8ff03276'
    
    steps:
    - task: AzurePowerShell@3
      displayName: 'Azure PowerShell script to get the storage key'
      inputs:
        azureSubscription: '<yourAzureSubscription>'
        ScriptType: InlineScript
        Inline: |
         # Using this script we will fetch storage key which is required in terraform file to authenticate backend storage account
         
         $key=(Get-AzureRmStorageAccountKey -ResourceGroupName $(terraformstoragerg) -AccountName $(terraformstorageaccount)).Value[0]
         
         Write-Host "##vso[task.setvariable variable=storagekey]$key"
        azurePowerShellVersion: LatestVersion
    ```

- Replace tokens in terraform file

    ```YAML
    steps:
    - task: qetza.replacetokens.replacetokens-task.replacetokens@3
      displayName: 'Replace tokens in terraform file'
      inputs:
        targetFiles: '**/*.tf'
        escapeType: none
        tokenPrefix: '__'
        tokenSuffix: '__'
    ``` 

- Install, init, plan, and apply auto approve

    ```YAML
    # Install
    steps:
    - task: ms-devlabs.custom-terraform-tasks.custom-terraform-installer-task.TerraformInstaller@0
      displayName: 'Install Terraform 0.12.3'
    
    # Init
    variables:
      terraformstoragerg: 'terraformrg'
      terraformstorageaccount: 'terraformstorage8ff03276'
    
    steps:
    - task: ms-devlabs.custom-terraform-tasks.custom-terraform-release-task.TerraformTaskV1@0
      displayName: 'Terraform : init'
      inputs:
        workingDirectory: '$(System.DefaultWorkingDirectory)/_Terraform-CI/drop/Terraform'
        backendServiceArm: '<yourAzureSubscription>'
        backendAzureRmResourceGroupName: '$(terraformstoragerg)'
        backendAzureRmStorageAccountName: '$(terraformstorageaccount) '
        backendAzureRmContainerName: terraform
        backendAzureRmKey: terraform.tfstate
    
    # Plan
    variables:
      terraformstoragerg: 'terraformrg'
      terraformstorageaccount: 'terraformstorage8ff03276'
      storagekey: 'PipelineWillGetThisValueRuntime'
    
    steps:
    - task: ms-devlabs.custom-terraform-tasks.custom-terraform-release-task.TerraformTaskV1@0
      displayName: 'Terraform : plan'
      inputs:
        command: plan
        workingDirectory: '$(System.DefaultWorkingDirectory)/_Terraform-CI/drop/Terraform'
        environmentServiceNameAzureRM: '<yourAzureSubscription>'
        backendAzureRmResourceGroupName: '$(terraformstoragerg)'
        backendAzureRmStorageAccountName: '$(terraformstorageaccount) '
        backendAzureRmContainerName: terraform
        backendAzureRmKey: '$(storagekey)'
    
    # apply auto approve
    variables:
      terraformstoragerg: 'terraformrg'
      terraformstorageaccount: 'terraformstorage8ff03276'
      storagekey: 'PipelineWillGetThisValueRuntime'
    
    steps:
    - task: ms-devlabs.custom-terraform-tasks.custom-terraform-release-task.TerraformTaskV1@0
      displayName: 'Terraform : apply -auto-approve'
      inputs:
        command: apply
        workingDirectory: '$(System.DefaultWorkingDirectory)/_Terraform-CI/drop/Terraform'
        commandOptions: '-auto-approve'
        environmentServiceNameAzureRM: '<yourAzureSubscription>'
        backendAzureRmResourceGroupName: '$(terraformstoragerg)'
        backendAzureRmStorageAccountName: '$(terraformstorageaccount) '
        backendAzureRmContainerName: terraform
        backendAzureRmKey: '$(storagekey)'
    ```

- Azure App Service deploy

    ```YAML
    variables:
    appservicename: 'pulterraformweb8ff03276'
    
    steps:
    - task: AzureRmWebAppDeployment@3
      displayName: 'Azure App Service Deploy: $(appservicename)'
      inputs:
        azureSubscription: '<yourAzureSubscription>'
        WebAppName: '$(appservicename)'
    ```
---

## Clean up resources

In this tutorial, we created a Azure DevOps project and few resources in Azure. If you're not going to continue to use these resources, you can follow these steps to delete them:

1. [Delete the Azure DevOps project](../../organizations/projects/delete-project.md) created by the Azure DevOps Demo Generator.

1. All Azure resources created during this tutorial were assigned to either the **PULTerraform** or **terraformrg** resource groups. Deleting those two groups will delete the resources they contain.

    ```Command
    az group delete --name PULTerraform
    az group delete --name terraformrg
	```

## Related articles

> [!div class="nextstepaction"]
> [Terraform with Azure](/azure/developer/terraform/overview)
> [Configure Terraform using Azure Cloud Shell](/azure/developer/terraform/get-started-cloud-shell)
> [Configure Terraform using Azure PowerShell](/azure/developer/terraform/get-started-powershell)
