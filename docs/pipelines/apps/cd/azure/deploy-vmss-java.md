---
title: Tutorial - Deploy to a Linux virtual machine scale set
description: Learn how to use the Azure CLI to create and deploy a Java application on Linux VMs using a virtual machine scale set 
ms.topic: quickstart
ms.author: jukullam
author: JuliaKM
ms.date: 08/11/2020
monikerRange: 'azure-devops'
---

# Tutorial: Deploy a Java app to a virtual machine scale set

A [virtual machine scale set](https://docs.microsoft.com/azure/virtual-machine-scale-sets/overview) lets you deploy and manage identical, autoscaling virtual machines. 

VMs are created as needed in a scale set. You define rules to control how and when VMs are added or removed from the scale set. These rules can be triggered based on metrics such as CPU load, memory usage, or network traffic.

In this tutorial, you build a Java app and deploy it to a virtual machine scale set. You learn how to:

> [!div class="checklist"]
> * Create a virtual machine scale set
> * Build a custom image with packer 
> * Deploy a custom image to a virtual machine scale set

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- A forked GitHub repo with the example java project. Fork the [pipelines-java repository](https://github.com/MicrosoftDocs/pipelines-java).
- Packer deployment file 

## Set up your Java pipeline

 1. Sign in to your Azure DevOps organization and navigate to your project.
 [!INCLUDE [include](../../../ecosystems/includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Maven**.

2. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

3. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Maven](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/maven.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

4. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

5. Update your pipeline to include the `CopyFiles@2` and `PublishBuildArtifacts@1` tasks. This will create an artifact that you can deploy to your virtual machine scale set.

```yaml
trigger:
- master

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: Maven@3
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/surefire-reports/TEST-*.xml'
    goals: 'package'

- task: CopyFiles@2
  displayName: Copy Files
  inputs:
    SourceFolder: $(system.defaultworkingdirectory)
    Contents: '**'
    TargetFolder: $(build.artifactstagingdirectory)   

- task: PublishBuildArtifacts@1
  displayName: Publish Artifact
  inputs:
    PathtoPublish: $(build.artifactstagingdirectory) 
```

## Create a custom image and upload it to Azure

You need a resource group and a storage account for your custom image. 

Create a resource group with [az group create](/cli/azure/group#az-group-create). The following example creates a resource group named *myVMSSResourceGroup* in the *eastus2* location:

```azurecli-interactive
az group create --name myVMSSResourceGroup --location eastus2
```

Next, create a new storage account. The following example creates a storage account named `VMSSStorageAccount`.

```azurecli-interactive
az storage account create \
  --name VMSSStorageAccount \
  --resource-group myVMSSResourceGroup \
  --location eastus2 \
  --sku Standard_LRS \
  --encryption blob
```

### Create a service principal

Create a service principal to generate values that you will use when you create an image. 

  ```azurecli-interactive
   az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/YOUR_SUBSCRIPTION_ID"
  ```
From the output, copy the `appId`, `password`, and `tenant`. 

### Create the custom image

To create a custom image, you can use the Build Machine Image task. This task builds a machine image using Packer. For that to work, you first need to add a Packer template to your repository. Add the template at the root level of your repository.

1. Copy `packer-template.json` file into your repository. 

```json
{
	"builders": [{
		"type": "azure-arm",
		"subscription_id": "{{ user `subscription_id`}}",
		"client_id": "{{user `client_id`}}",
		"client_secret": "{{user `client_secret`}}",
		"tenant_id": "{{user `tenant_id`}}",
		"managed_image_resource_group_name": "java-vmss",
		"managed_image_name": "{{ user `managed_image_name` }}",
		"os_type": "Linux",
		"image_publisher": "Canonical",
		"image_offer": "UbuntuServer",
		"image_sku": "16.04-LTS",
		"azure_tags": {
			"dept": "vmss",
			"task": "Image deployment"
		},
		"location": "East US",
		"vm_size": "Standard_B1ms"
	}],
	"provisioners": [{
		"execute_command": "chmod +x {{ .Path }}; {{ .Vars }} sudo -E sh '{{ .Path }}'",
		"inline": [



			"apt-get update",
			"curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash",
			"source ~/.profile",
			"nvm --version",
			"nvm install 10",


			"/usr/sbin/waagent -force -deprovision+user && export HISTSIZE=0 && sync"
		],
		"inline_shebang": "/bin/sh -x",
		"type": "shell"
	}]
}
```

2. Add the `PackerBuild@1` task at the bottom of your YAML file. You will use the `appId`, `password`, and `tenant` values from your service principal. Use the `appId` for the `client_id`, `password` for `client_secret` and  `tenant` for `tenant_id`. 

    * templateType: `custom`
    * customTemplateLocation: `'$(System.DefaultWorkingDirectory)/packer-template.json'`
    * customTemplateParameters: '{"subscription_id":"`yoursubscriptionid`","client_id":"`appId`","client_secret":"`password`","tenant_id":"`tenant`","managed_image_name":"vmss-image-$(Build.BuildId)"}'
    ConnectedServiceName: '`yourserviceprincipal`'
    location: '`eastus2`' # or your location
    storageAccountName: '`myVMSSResourceGroup`'
    azureResourceGroup: '`VMSSStorageAccount`'
    packagePath: '`$(build.artifactstagingdirectory)`'
    deployScriptPath: ''

3. Run the pipeline to generate your first image.
 
## Create a virtual machine scale set

1. Go to the Azure portal UI and find the custom image you created.   
    1. Open `myVMSSResourceGroup`.
    1. Select the scale set in your resource group.
    1. Copy the **Resource ID**.

2. Create a virtual machine scale set with [az virtual machine scale set create](/cli/azure/vmss#az-vmss-create). The following example creates a scale set named `vmssScaleSet` and generates SSH keys if they do not exist:

```azurecli-interactive
az vmss create \
   --resource-group myVMSSResourceGroup \
   --name vmssScaleSet \
   --image "RESOURCE_ID"
   --specialized
   --admin-username azureuser \
   --generate-ssh-keys
```

It takes a few minutes to create and configure all the scale set resources and VMs. There are background tasks that continue to run after the Azure CLI returns you to the prompt. It may be another couple of minutes before you can access the app.

### Allow web traffic
A load balancer was created automatically as part of the virtual machine scale set. The load balancer distributes traffic across a set of defined VMs using load balancer rules. 

To allow traffic to reach the web app, create a rule with [az network lb rule create](/cli/azure/network/lb/rule#az-network-lb-rule-create). The following example creates a rule named *myLoadBalancerRuleWeb*:

```azurecli-interactive
az network lb rule create \
  --resource-group myVMSSResourceGroup \
  --name myLoadBalancerRuleWeb \
  --lb-name myScaleSetLB \
  --backend-pool-name myScaleSetLBBEPool \
  --backend-port 80 \
  --frontend-ip-name loadBalancerFrontEnd \
  --frontend-port 80 \
  --protocol tcp
```

## Deploy updates to the virtual machine scale set 

Add a PowerShell task to your pipeline to deploy updates to the scale set. Add the task at the end of the pipeline. 

```yml
- task: AzurePowerShell@5
  inputs:
    azureSubscription: '`YOUR_SUBSCRIPTION_ID`'
    ScriptType: 'InlineScript'
    Inline: 'az vmss update --resource-group myVMSSResourceGroup --name vmssScaleSet --set virtualMachineProfile.storageProfile.imageReference.id=/subscriptions/YOUR_SUBSCRIPTION_ID/myVMSSResourceGroup/providers/Microsoft.Compute/images/vmss-image-$(Build.BuildId)'
    azurePowerShellVersion: 'LatestVersion'
```
## Clean up resources

Go to the Azure portal and delete your resource group, `myVMSSResourceGroup`.

## Next steps
> [!div class="nextstepaction"]
> [Learn more about virtual machine scale sets](https://docs.microsoft.com/azure/virtual-machine-scale-sets/overview)

