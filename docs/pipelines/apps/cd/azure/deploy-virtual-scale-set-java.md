---
title: Tutorial - Deploy to a Linux virtual machine scale set
description: Learn how to use the Azure CLI to create and deploy a Java application on Linux VMs using a virtual machine scale set 
ms.topic: tutorial
ms.author: jukullam
author: JuliaKM
ms.date: 11/23/2020
monikerRange: 'azure-devops'
---

# Tutorial: Deploy a Java app to a virtual machine scale set

A [virtual machine scale set](/azure/virtual-machine-scale-sets/overview) lets you deploy and manage identical, autoscaling virtual machines. 

VMs are created as needed in a scale set. You define rules to control how and when VMs are added or removed from the scale set. These rules can be triggered based on metrics such as CPU load, memory usage, or network traffic.

In this tutorial, you build a Java app and deploy it to a virtual machine scale set. You learn how to:

> [!div class="checklist"]
> * Create a virtual machine scale set
> * Build a machine image
> * Deploy a custom image to a virtual machine scale set

## Prerequisites

Before you begin, you need:
- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../../../get-started/pipelines-sign-up.md).
- The [Azure VM Image Builder DevOps task](https://marketplace.visualstudio.com/items?itemName=AzureImageBuilder.devOps-task-for-azure-image-builder) installed for your DevOps organization. 
- A forked GitHub repo with the example project. Fork the [pipelines-vmss repository](https://github.com/microsoftdocs/pipelines-vmss).

## Set up your Java pipeline

[!INCLUDE [include](../../../ecosystems/includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Maven**.

###  Customize the pipeline

1. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](../../../ecosystems/media/save-and-run-button-new-yaml-pipeline.png)

2. You are prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Maven](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/maven.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

3. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

### Add the Copy Files and Publish Build Artifact tasks

1. Update your pipeline to include the `CopyFiles@2` task. This will create an artifact that you can deploy to your virtual machine scale set.

    ```yaml
      trigger: none

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
      displayName: 'Copy File to: $(TargetFolder)'
      inputs:
        SourceFolder: '$(Build.SourcesDirectory)'
        Contents: |
          **/*.sh 
          **/*.war
          **/*jar-with-dependencies.jar
        TargetFolder: '$(System.DefaultWorkingDirectory)/pipeline-artifacts/'
        flattenFolders: true  
     ```

## Create a custom image and upload it to Azure

You'll need a resource group, storage account, and shared image gallery for your custom image. 

1. Create a resource group with [az group create](/cli/azure/group#az_group_create). This example creates a resource group named *myVMSSResourceGroup* in the *eastus2* location:

    ```azurecli-interactive
    az group create --name myVMSSResourceGroup --location eastus2
    ```

2. Create a new storage account. This example creates a storage account, `vmssstorageaccount`.

    ```azurecli-interactive
    az storage account create \
      --name vmssstorageaccount \
      --resource-group myVMSSResourceGroup \
      --location eastus2 \
      --sku Standard_LRS 
    ```

3. Create a [shared image gallery](/azure/virtual-machines/shared-image-galleries). 

    ```azurecli-interactive
    az sig create --resource-group myVMSSResourceGroup --gallery-name myVMSSGallery
    ```

4. Create a new image gallery in the `myVMSSGallery` resource. See [Create an Azure Shared Image Gallery using the portal](/azure/virtual-machines/linux/shared-images-portal) to learn more about working with image galleries. 

    ```azurecli-interactive
    az sig create --resource-group myVMSSResourceGroup --gallery-name myVMSSGallery
    ```

5. Create an image definition. Copy the `id` of the new image that looks like `/subscriptions/<SUBSCRIPTION ID>/resourceGroups/<RESOURCE GROUP>/providers/Microsoft.Compute/galleries/myVMSSGallery/images/MyImage`. 

    ```azurecli-interactive
    az sig image-definition create -g myVMSSResourceGroup --gallery-name myVMSSGallery --gallery-image-definition MyImage --publisher GreatPublisher --offer GreatOffer --sku GreatSku --os-type linux
    ```


### Create a managed identity

1. Create a [managed identity](/azure/active-directory/managed-identities-azure-resources/overview) in your resources group. 

    ```azurecli-interactive
    az identity create -g myVMSSResourceGroup -n myVMSSIdentity
    ```
2. From the output, copy the `id`.  The `id` will look like `/subscriptions/<SUBSCRIPTION ID>/resourcegroups/<RESOURCE GROUP>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<USER ASSIGNED IDENTITY NAME>`. 

3. Open your image gallery in the gallery and assign `myVMSSIdentity` the Contributor role. Follow [these steps to add a role assignment](/azure/role-based-access-control/role-assignments-portal).  

### Create the custom image

To create a custom image, you can use the [Azure VM Image Builder DevOps Task](https://marketplace.visualstudio.com/items?itemName=AzureImageBuilder.devOps-task-for-azure-image-builder). 

1. Add the `AzureImageBuilderTask@1` task to your YAML file. Replace the values for `<SUBSCRIPTION ID>`, `<RESOURCE GROUP>`, `<USER ASSIGNED IDENTITY NAME>` with your own. Make sure to verify that the `galleryImageId`, `managedIdentity` and `storageAccountName` values are accurate. 

    ```yaml
    - task: AzureImageBuilderTask@1
      displayName: 'Azure VM Image Builder Task'
      inputs:
        managedIdentity: '/subscriptions/<SUBSCRIPTION ID>/resourcegroups/<RESOURCE GROUP>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<USER ASSIGNED IDENTITY NAME>'
        imageSource: 'marketplace'
        packagePath: '$(System.DefaultWorkingDirectory)/pipeline-artifacts'
        inlineScript: |
          sudo mkdir /lib/buildArtifacts
          sudo cp  "/tmp/pipeline-artifacts.tar.gz" /lib/buildArtifacts/.
          cd /lib/buildArtifacts/.
          sudo tar -zxvf pipeline-artifacts.tar.gz
          sudo sh install.sh
        storageAccountName: 'vmssstorageaccount2'
        distributeType: 'sig'
        galleryImageId: '/subscriptions/<SUBSCRIPTION ID>/resourceGroups/<RESOURCE GROUP>/providers/Microsoft.Compute/galleries/myVMSSGallery/images/MyImage/versions/0.0.$(Build.BuildId)'
        replicationRegions: 'eastus2'
        ibSubscription: '<SUBSCRIPTION ID>'
        ibAzureResourceGroup: 'myVMSSResourceGroup'
        ibLocation: 'eastus2'
    ```

2. Run the pipeline to generate your first image. You may need to [authorize resources](../../../process/resources.md#authorize-a-yaml-pipeline) during the pipeline run.
 
3. Go to the your new image in the Azure portal and open **Overview**. Select **Create VMSS** to create a new virtual machine scale set from the new image. Set **Virtual machine scale set name** to `vmssScaleSet`. See [Create a virtual machine scale set in the Azure portal](/azure/virtual-machine-scale-sets/quick-create-portal) to learn more about creating virtual machine scale sets in the Azure portal. 


## Deploy updates to the virtual machine scale set 

Add an Azure CLI task to your pipeline to deploy updates to the scale set. Add the task at the end of the pipeline. Replace `<SUBSCRIPTION ID>` with your subscription ID.

  ```yml
  - task: AzureCLI@2
    inputs:
      azureSubscription: '`YOUR_SUBSCRIPTION_ID`' #Authorize and in the task editor
      ScriptType: 'pscore'
      scriptLocation: 'inlineScript'
      Inline: 'az vmss update --resource-group myVMSSResourceGroup --name vmssScaleSet --set virtualMachineProfile.storageProfile.imageReference.id=/subscriptions/<SUBSCRIPTION ID>/resourceGroups/myVMSSResourceGroup/providers/Microsoft.Compute/galleries/myVMSSGallery/images/MyImage/versions/0.0.$(Build.BuildId)'
  ```
## Clean up resources

Go to the Azure portal and delete your resource group, `myVMSSResourceGroup`.

## Next steps
> [!div class="nextstepaction"]
> [Learn more about virtual machine scale sets](/azure/virtual-machine-scale-sets/overview)
