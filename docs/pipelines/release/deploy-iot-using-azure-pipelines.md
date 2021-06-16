---
title: deploy to IoT edge devices 
description: Set up a release pipeline to IoT Hub with Azure Pipelines
ms.assetid: 78815F3C-4347-4C8B-AB4B-F36FC0D41531
ms.topic: quickstart
ms.author: atulmal
author: azooinmyluggage
ms.date: 04/25/2019
monikerRange: azure-devops
---

# Automatically deploy to IoT edge devices 

In this tutorial, we will learn how to build an Azure Internet of Things (IoT) solution, push the created module images to Azure Container Registry (ACR), create a deployment manifest, and then deploy the modules to targeted IoT edge devices.

## Prerequisites

- An Azure DevOps organization and a project. [Create a new organization](../../organizations/accounts/create-organization.md) and/or a [new project](../../organizations/projects/create-project.md), if you don't already have one.

- An Azure account. Sign up for a [free Azure account](https://azure.microsoft.com/free/), if you don't already have one.

- [Azure IoT tools](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-tools) for Visual Studio Code.

- [Docker CE](https://docs.docker.com/install/).

- An Azure Container Registry. Create an [Azure Container Registry](/azure/container-registry/container-registry-get-started-portal), if you don't already have one.

## Create an IoT Edge project

The following steps creates an IoT Edge module project based on .NET Core SDK by using Visual Studio Code and Azure IoT tools extension.

1. In the Visual Studio Code, select **View**, and then select  **Command Palette** to open the VS Code command palette.

    :::image type="content" source="./media/command-palette.png" alt-text="Access command palette":::

1. In the command palette, enter and run the **Azure: Sign in** command and follow the instructions to sign in to your Azure account.

1. In the command palette, enter and run the **Azure IoT Edge: New IoT Edge solution** command and follow the prompts to create your solution.

    |Field|Values|
    |--- |--- |
    | Select Folder | Choose the local path on your machine where you want to create the solution files |
    | Provide a solution name | Enter a descriptive name for your solution or accept the default EdgeSolution |
    | Select module template | Select **C# Module** |
    | Provide a module name | Provide a name for your module: E.g. **CSharpModule** |
    | Provide Docker image repository for the module | An image repository includes the name of your container registry and the name of your container image. Your container image is pre-populated from the name that you have provided in the last step. Replace the **localhost:5000** with the login server value from your Azure container registry. You can retrieve the login server from the Overview page of your container registry in Azure portal. |


Visual Studio code should load your IoT Edge solution workspace now. The solution workspace contains five top-level components:

- **modules** - contains the code for your module as well as the Dockerfiles to build your Docker image.

- **.env** - to store your container registry credentials

- **deployment.template.json** - a JSON file to build the deployment version of your modules

- **deployment.debug.template.json** - a JSON file to build the debug version of your modules

- **.vscode** and **.gitignore** - The workspace settings file and the gitignore to un-track files 

> [!NOTE]
> If you didn't specify a container registry when you created your solution and accepted the default localhost:5000 value, you won't have a .env file.

## Add registry credentials

The **.env** environment file stores the credentials for your container registry and shares them with the IoT Edge runtime. The runtime needs these credentials to pull your private images onto the IoT Edge device.

1. In the Visual Studio Code select the **.env** file to open it.

1. Update the fields with the user name and password values that you copied from your Azure container registry.

1. Save the file when you are done.

## Build your IoT Edge solution

Now that our IoT Edge solution is set up, let's build it now and generate our Docker image.

1. From the Visual Studio Code explorer, right-click on the **deployment.template.json** file and then select **Build IoT Edge solution**.

1. Upon successful build, you should see an image with the following format **registryname.azurecr.io/csharpmodule:0.0.1-amd64.** in your local Docker images.

## Push the code to Azure Repo

If your workspace isn't under Git source control, you can easily create a Git repository with the **Initialize Repository** command.

1. In the Visual Studio Code, select **View**, and then select  **Command Palette** to open the VS Code command palette.

1. Enter and run the **Git: Initialize Repository** command from the Command Palette. Running Initialize Repository will create the necessary Git repository metadata files and show your workspace files as un-tracked changes ready to be staged.

1. Select **View > Terminal** to open the terminal window.

1. To push, pull, or sync your code, you must first set up a Git origin. To do so, run the following commands and enter your organization name, project name, and repository name in the placeholders.

    ```Git
    git remote add origin https://dev.azure.com/<org-name>/<project-name>/_git/<repo-name>
    git push -u origin --all
    ```

You code should be published now to your repository.

## Create a pipeline

You can use Azure Pipelines to build your projects on Windows, Linux, or macOS without needing to set up any infrastructure of your own. The [Microsoft-hosted agents](../agents/hosted.md?tabs=yaml) in Azure Pipelines have several released versions of the .NET Core SDKs preinstalled.

1. From within your project, select **Pipelines** > **Pipelines**. Select **Create pipeline** to create a new one.

1. The default option for build pipelines involves using YAML to define the process. For this lab, select **use the classic editor**.

1. Select the **Source** and then select the **Team project**, **Repository**, and **Default branch**. Select **Continue** when you are done.

    :::image type="content" source="./media/select-source.png" alt-text="Select your repository":::

1. Select **Empty job**.

    :::image type="content" source="./media/empty-job.png" alt-text="Start with an empty job":::

1. From the **Agent job 1**, select the **ubuntu-20.04** Agent Specification from the drop down.

    :::image type="content" source="./media/agent-specification.png" alt-text="Change the agent specification in the agent job":::

7. Select **+** and search for **ARM template Deployment** task. Select **Add** and fill out the required fields as shown below. Select **Save & queue** when you are done. 

   <table><thead><tr><th>Field</th><th>Values</th></tr></thead>
   <tr><td>Azure subscription</td><td>(Required) Name of <a href="../library/connect-to-azure.md" data-raw-source="[Azure Resource Manager service connection](../library/connect-to-azure.md)">Azure Resource Manager service connection</a></td></tr>
   <tr><td>Action</td><td>(Required) Action to perform. Leave the default value as is</td></tr>
   <tr><td>Resource group</td><td>(Required) Provide the name of a resource group</td></tr>
   <tr><td>Location</td><td>(Required) Provide the location for deploying the resource group</td></tr>
   <tr><td>Template location</td><td>(Required) Set the template location to <b>URL of the file</b></td></tr>
   <tr><td>Template link</td><td>(Required) <a href="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-acr.json" data-raw-source="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-acr.json">https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-acr.json</a></td></tr>
   <tr><td>Override template parameters</td><td><b>-registryName YOUR_REGISTRY_NAME -registrySku Basic -registryLocation YOUR_REGISTRY_LOCATION</td></tr>
   </table>

    :::image type="content" source="./media/arm-template-deployment-task.png" alt-text="Configure the arm template deployment task":::

> [!TIP]
> You must use quotation marks when overriding the template parameters to avoid getting the "One of the deployment parameters has an empty key..." error. Example: *-registryName "iotDemoContainerRegistry" -registrySku "Standard" -registryLocation "West US"*

1. Select your pipeline, and then select **Edit** to edit your pipeline. Select **+** in the **Agent job 1**, and then search for the **Azure IoT Edge** task. Select **Add** to add the step to build the module images.  

1. Select **+** one more time, and search for the **Azure IoT Edge** task. Select **Add** and configure the task as shown below -

    <table><thead><tr><th>Field</th><th>Values</th></tr></thead>
    <tr><td>Action</td><td>Select an Azure IoT Edge action to <b>Push module images</b></td></tr>
    <tr><td>Container registry type</td><td>Select the Container registry type <b>Azure Container Registry</b></td></tr>
    <tr><td>Azure subscription</td><td>Select the Azure Resource Manager subscription for the deployment</td></tr>
    <tr><td>Azure Container Registry</td><td>Select an Azure Container Registry from the dropdown which was created in the step 5</td></tr>
    </table>

1. Select **+** and search for **Publish Build Artifacts** task. Select **Add** and then set the **Path to publish** to **$(Build.ArtifactStagingDirectory)/deployment.amd64.json**.

1. Select **Save & queue** when you are done.

## Create a release pipeline

Now that we built a Docker image and pushed it to Azure Container Registry. we must first create an IoT hub and an IoT Edge device in that hub. We will then deploy the sample module, and provision a virtual machine to run as our IoT Edge device.

1. [Create an IoT hub using the Azure portal](/azure/iot-hub/iot-hub-create-through-portal.md)

1. [Register an IoT Edge device in IoT Hub](/azure/iot-edge/how-to-register-device.md)

1. From within your project, navigate to the **Pipelines** > **Releases**.

1. Select **New pipeline** to create a new release pipeline. 

1. Select **Empty job** to start with an empty pipeline.

1. Select **Tasks** and then select **+** in the **Agent job**. Search for the **ARM template deployment** task. and select **Add**. Configure the task as shown below: 

    <table><thead><tr><th>Field</th><th>Values</th></tr></thead>
   <tr><td>Azure subscription</td><td>(Required) Name of <a href="../library/connect-to-azure.md" data-raw-source="[Azure Resource Manager service connection](../library/connect-to-azure.md)">Azure Resource Manager service connection</a></td></tr>
   <tr><td>Action</td><td>(Required) Action to perform. Leave the default value as is</td></tr>
   <tr><td>Resource group</td><td>(Required) Provide the name of a resource group</td></tr>
   <tr><td>Location</td><td>(Required) Provide the location for deploying the resource group</td></tr>
   <tr><td>Template location</td><td>(Required) Set the template location to <b>URL of the file</b></td></tr>
   <tr><td>Template link</td><td>(Required) <a href="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-iothub.json" data-raw-source="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-iothub.json">https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-iothub.json</a></td></tr>
   <tr><td>Override template parameters</td><td><b>-iotHubName IoTEdge -iotHubSku &quot;S1&quot;</td></tr>
   </table>

5. Select **+** and search for the **Azure CLI** task. Select **Add** and configure the task as shown below. 

   - **Azure subscription**: Select the Azure Resource Manager subscription for the deployment
   
   - **Script Type**: Set the value to PowerShell

   - **Script Location**: Set the value to **Inline script**. Paste the following script in the text box and replace the placeholders with your hubName amd deviceID. 
    
     ```azurecli
     (az extension add --name azure-cli-iot-ext && az iot hub device-identity show --device-id YOUR_DEVICE_ID --hub-name YOUR_HUB_NAME) || (az iot hub device-identity create --hub-name YOUR_HUB_NAME --device-id YOUR_DEVICE_ID --edge-enabled && TMP_OUTPUT="$(az iot hub device-identity show-connection-string --device-id YOUR_DEVICE_ID --hub-name YOUR_HUB_NAME)" && RE="\"cs\":\s?\"(.*)\"" && if [[ $TMP_OUTPUT =~ $RE ]]; then CS_OUTPUT=${BASH_REMATCH[1]}; fi && echo "##vso[task.setvariable variable=CS_OUTPUT]${CS_OUTPUT}")
     ```

     > [!NOTE]
     > Save the pipeline and queue the release. The above 2 steps will create an IoT Hub.

     ![Release Pipeline](media/Iot-devops-using-azure-pipelines/release-pipeline.png)

6. Edit the pipeline and select **+** and search for the **Azure IoT Edge** task. Select **add**. This step will Deploy the module images to IoT Edge devices. Configure the task as shown below.

    <table><thead><tr><th>Field</th><th>Values</th></tr></thead>
   <tr><td>Action</td><td>Select an Azure IoT Edge action to <b>Deploy to IoT Edge devices</b></td></tr>
   <tr><td>Deployment file</td><td>$(System.DefaultWorkingDirectory)/<em>*/</em>.json</b></td></tr>
   <tr><td>Azure subscription contains IoT Hub</td><td>Select an Azure subscription that contains IoT Hub</td></tr>
   <tr><td>Iot Hub name</td><td>Select the IoT Hub</td></tr>
   <tr><td>Choose single/multiple device</td><td>Select Single Device</td></tr>
   <tr><td>IoT Edge device ID</td><td>Input the IoT Edge device ID</td></tr>
   </table>

7. Select **+** and search for **Azure Resource Group Deployment** task. Select **add**. Configure the task as shown below.

    <table><thead><tr><th>Field</th><th>Values</th></tr></thead>
   <tr><td>Azure subscription</td><td>(Required) Name of <a href="../library/connect-to-azure.md" data-raw-source="[Azure Resource Manager service connection](../library/connect-to-azure.md)">Azure Resource Manager service connection</a></td></tr>
   <tr><td>Action</td><td>(Required) Action to perform. Leave the default value as is</td></tr>
   <tr><td>Resource group</td><td>(Required) Provide the name of a resource group</td></tr>
   <tr><td>Location</td><td>(Required) Provide the location for deploying the resource group</td></tr>
   <tr><td>Template location</td><td>(Required) Set the template location to <b>URL of the file</b></td></tr>
   <tr><td>Template link</td><td>(Required) <a href="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-linux-vm.json" data-raw-source="https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-linux-vm.json">https://raw.githubusercontent.com/Azure-Samples/devops-iot-scripts/12d60bd513ead7c94aa1669e505083beaef8a480/arm-linux-vm.json</a></td></tr>
   <tr><td>Override template parameters</td><td><b>-edgeDeviceConnectionString $(CS_OUTPUT) -virtualMachineName &quot;YOUR_VM_NAME&quot; -adminUsername &quot;devops&quot; -adminPassword &quot;$(vmPassword)&quot; -appInsightsLocation &quot;&quot; -virtualMachineSize &quot;Standard_A0&quot; -location &quot;YOUR_LOCATION&quot; </td></tr>
   </table>

8. Disable the first 2 tasks in the pipeline. Save and queue.

    ![Edit Pipeline](media/Iot-devops-using-azure-pipelines/edit-release-pipeline.png)

9. Once the release is complete, go to IoT hub in the Azure portal to view more information.