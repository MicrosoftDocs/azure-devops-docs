---
title: Deploy web apps to an NGINX web server on a Linux VM (Classic)
description: How to use classic pipelines to deploy a web application to an NGINX web server on a Linux virtual machine
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 06/13/2022
monikerRange: '<= azure-devops'
---

# Deploy a web app to an NGINX web server running on a Linux Virtual Machine (Classic)

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
> If you want to deploy your application to a Linux virtual machine using YAML pipelines, see [Deploy to a Linux virtual machine](../../ecosystems/deploy-linux-vm.md).

Learn how to use Classic Azure Pipelines to build and deploy your web app to an NGINX web server running on a Linux virtual machine.

## Prerequisites

- An Azure DevOps Organization. [Create one for free](../../../organizations/accounts/create-organization.md).
- An Azure account with an active subscription. [Create an Azure account](https://azure.microsoft.com/free/?WT.mc_id=A261C142F) for free if you don't have one already.
- A GitHub account. [Create one for free](https://github.com).

## Linux VM Prerequisites

#### [JavaScript](#tab/javascript)

- If you don't have a Linux VM with an Nginx web server, follow the steps in this [Quickstart](/azure/virtual-machines/linux/quick-create-cli) to create one in Azure.

#### [Java](#tab/java)

- Use Ubuntu 16.04 or higher.
- For Java Spring Boot and Spring Cloud apps, create a Linux VM in Azure using this [template](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004), which provides a fully supported OpenJDK-based runtime.
- For Java servlets on Tomcat server, create a Linux VM using this [template](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004) and then [set up Tomcat](https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-8-on-ubuntu-16-04#step-5-create-a-systemd-service-file) 9.x as a service.
- For Java EE apps, use one of the following templates to create a [Linux VM, Java and WebSphere 9.x](https://azuremarketplace.microsoft.com/marketplace/apps/midvision.websphere-application-server-nde-90), a [Linux VM, Java and WebLogic](https://azuremarketplace.microsoft.com/marketplace/apps/oracle.20191009-arm-oraclelinux-wls-admin), or a [Linux VM and Java 13.x](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004) and WildFly/JBoss 14.

- - -

## Get the code

If you don't have a repository, use the following sample project follow along with this tutorial:

#### [JavaScript](#tab/javascript)

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

#### [Java](#tab/java)

```
https://github.com/MicrosoftDocs/pipelines-java
```

- - -

## Build your app

#### [JavaScript](#tab/javascript)

- [Build JavaScript apps](../../ecosystems/javascript.md)

#### [Java](#tab/java)

- [Build Java apps](../../ecosystems/java.md)

- - -

## Set up a deployment group

Deployment groups make it easier to organize the servers you want to use to host your app. A deployment group is a collection of machines with an Azure Pipelines agent on each of them. Each machine interacts with Azure Pipelines to coordinate deployment of your app.

1. Open an SSH session to your Linux VM. You can do this using the Cloud Shell button in the upper-right of the [Azure portal](https://portal.azure.com/).

    :::image type="content" source="../media/cloud-shell-menu-image.png" alt-text="A screenshot showing the azure cloud shell button":::

1. Run the following command to initiate the session. Replace the placeholder with the IP address of your VM:

    ```command
    ssh <publicIpAddress>
    ```

1. Run the following command to install the required dependencies to set up the build and release agent on a Linux virtual machine. See [Self-hosted Linux agents](../../agents/linux-agent.md) for more details.

    ```command
    sudo apt-get install -y libunwind8 libcurl3
    ```

1. in Azure DevOps web portal, select **Pipelines**, and then select **Deployment groups**.

1. Select **Add a deployment group** (or **New** if you have existing deployment groups).

1. Enter a name for the group such as **myNginx** and then select **Create**.

1. Select **Linux** for the **Type of target to register** and make sure that **Use a personal access token in the script for authentication** is checked. Select **Copy script to the clipboard**. This script will install and configure an agent on your VM.

1. Back in the SSH session in Azure portal, paste and run the script.

1. When you're prompted to configure tags for the agent, press _Enter_ to skip.

1. Wait for the script to finish and display the message *Started Azure Pipelines Agent*. Type *"q"* to exit the file editor and return to the shell prompt.

1. Back in Azure DevOps portal, on the **Deployment groups** page, open the **myNginx** deployment group. Select the **Targets** tab, and verify that your VM is listed.

## Create a release pipeline

1. Select **Pipelines** > **Releases**, and then select **New pipeline**.

1. Select **Empty job**.

1. Select **Add an artifact** to link your build artifact. Select **Build**, and then select your **Project** and **Source** from the dropdown menu. Select **Add** when you are done.

1. Select the **Continuous deployment** icon, and the click the toggle button to enable the continuous deployment trigger. Add the *main* branch as a **Build branch filter**.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/confirm-or-set-cd-trigger.png" alt-text="A screenshot showing how to set up the continuous deployment trigger":::

1. Select **Tasks**, and then select the **Agent job** and remove it.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/remove-agent-phase-image.png" alt-text="A screenshot showing how to remove the agent job":::

1. Select the ellipsis icon, and then select **Add a deployment group job**. The tasks you will add to this job will run on each server in your deployment group.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/add-deployment-group-phase.png" alt-text="A screenshot showing how to add a deployment group job":::

1. Select the deployment group you created earlier from the **Deployment group** dropdown menu.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/select-deployment-group.png" alt-text="A screenshot showing how to select your deployment group.":::

1. Select **+** to add a new task. Search for **Bash** and then select **Add** to add it to your pipeline.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/add-shellscript-task.png" alt-text="A screenshot showing how to add the bash task.":::

1. Select the browse button to add the path of your *deploy.sh* script file. See a sample nodeJS deployment script [here](https://github.com/azure-devops/fabrikam-node/blob/master/deployscript.sh).

    :::image type="content" source="media/deploy-linuxvm-deploygroups/configure-shellscript-task.png" alt-text="A screenshot showing how to add the script path.":::

1. Select **Save** when you are done.

    :::image type="content" source="media/deploy-linuxvm-deploygroups/save-definition-image.png" alt-text="A screenshot showing how to save a release pipeline.":::

## Deploy your app

1. Select **Releases**, and then select **Create a release**.

1. Make sure that the artifact version you want to use is selected and then select **Create**.

1. Select the release link in the information bar message. For example: "Release **Release-1** has been queued".

1. Select the status link in **Stages** to see the deployment logs.

1. After the release is complete, navigate to your app and verify its contents.

## Related articles

- [Extend your deployments to IIS Deployment Groups](howto-webdeploy-iis-deploygroups.md)
- [Deploy to IIS servers with Azure Pipelines and WinRM](deploy-webdeploy-iis-winrm.md)
- [Deploy to a Windows Virtual Machine](deploy-webdeploy-iis-deploygroups.md)
- [Create and remove deployment groups dynamically](howto-webdeploy-iis-deploygroups.md#depgroup)
