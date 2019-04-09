---
title: Deploy to VMware
description: Provision and manage virtual machines (VMs) in VMware vCenter Server
ms.assetid: 1A6903E4-B0B3-426E-9E07-67492ADB1F42
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Deploy to VMware vCenter Server

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

You can automatically provision virtual machines in a VMware environment and deploy to those virtual machines after every successful build.

## VMware connection

::: moniker range="azure-devops"

You need to first configure how Azure Pipelines connects to vCenter. You cannot use Microsoft-hosted agents to run VMware tasks since the vSphere SDK is not installed on these machines. You have to a set up a self-hosted agent that can communicate with the vCenter server.

::: moniker-end

::: moniker range="azure-devops-2019"

You need to first configure how Azure DevOps Server connects to vCenter. You have to a set up a self-hosted agent that can communicate with the vCenter server.

::: moniker-end

::: moniker range="< azure-devops-2019"

You need to first configure how TFS connects to vCenter. You have to a set up a self-hosted agent that can communicate with the vCenter server.

::: moniker-end

1. Install the VMware vSphere Management 
SDK to call VMware API functions that access vSphere
web services. To install and configure the SDK on 
the agent machine:

   * Download and install the latest 
     version of the Java Runtime Environment from 
     [this location](https://aka.ms/downloadjre).

   * Go to [this location](https://aka.ms/vspheresdk)
     and sign in with your existing credentials or register
     with the website. Then download the **vSphere 6.0 
     Management SDK**.

   * Create a directory for the vSphere Management SDK
     such as **C:\vSphereSDK**. Do not include spaces in 
     the directory names to avoid issues with some of the
     batch and script files included in the SDK.

   * Unpack the vSphere Management SDK into the 
     new folder you just created.

   * Add the full path and name of the precompiled 
     VMware Java SDK file **vim25.jar** to the machine's 
     CLASSPATH environment variable. If you used the path and name
     **C:\vSphereSDK** for the SDK files, as shown above, the full
     path will be:  
     `C:\vSphereSDK\SDK\vsphere-ws\java\JAXWS\lib\vim25.jar`<p />

1. Install the [VMware extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vmwareapp)
   from Visual Studio Marketplace into TFS or Azure Pipelines.

1. Follow these steps to create a vCenter Server service connection in your project:

   * Open your Azure Pipelines or TFS project in 
     your web browser. Choose the **Settings** icon in the menu bar and select **Services**.

   * In the **Services** tab, choose **New service connection**, and select **VMware vCenter Server**.

   * In the **Add new VMware vCenter Server Connection** 
     dialog, enter the values required to connect to the 
     vCenter Server:

     - **Connection Name**: Enter a user-friendly name 
       for the service connection such as **Fabrikam vCenter**.
     - **vCenter Server URL**: Enter the URL of the 
       vCenter server, in the form `https://machine.domain.com/`.
       Note that only **HTTPS** connections are supported.
     - **Username** and **Password**: Enter the credentials
       required to connect to the vCenter Server.
       Username formats such as **username**, **domain\\username**,
       **machine-name\\username**, and **.\\username** are supported.
       UPN formats such as **username@domain.com** and built-in system 
       accounts such as **NT Authority\\System** are not supported.<p/>

## Managing VM snapshots

Use the **VMware Resource Deployment** task from the VMware extension and configure the properties as follows to take snapshot of virtual machines, or to revert or delete them:
   
   - **VMware Service Connection**: Select the VMware vCenter Server connection you created earlier.
   
   - **Action**: Select one of the actions: **Take Snapshot of Virtual Machines**, **Revert Snapshot of Virtual Machines**, or **Delete Snapshot of Virtual Machines**.
   
   - **Virtual Machine Names**: Enter the names of one or more virtual machines. Separate multiple names with a comma; for example, `VM1,VM2,VM3`
   
   - **Datacenter**: Enter the name of the datacenter where the virtual machines will be created.
   
   - **Snapshot Name**: Enter the name of the snapshot. This snapshot must exist if you use the revert or delete action.
   
   - **Host Name**: Depending on the option you selected for the compute resource type, enter the name of the host, cluster, or resource pool.
   
   - **Datastore**: Enter the name of the datastore that will hold the virtual machines' configuration and disk files.
   
   - **Description**: Optional. Enter a description for the **Take Snapshot of Virtual Machines** action, such as `$(Build.DefinitionName).$(Build.BuildNumber)`. This can be used to track the execution of the build or release that created the snapshot.
   
   - **Skip Certificate Authority Check**: If the vCenter Server's certificate is self-signed, select this option to skip the validation of the certificate by a trusted certificate authority.<p />

   >To verify if a self-signed certificate is installed 
   on the vCenter Server, open the VMware vSphere Web 
   Client in your browser and check for a certificate
   error page. The vSphere Web Client URL will be 
   of the form `https://machine.domain/vsphere-client/`.
   Good practice guidance for vCenter Server certificates 
   can be found in the [VMware Knowledge Base](https://aka.ms/vcentercertificate)
   (article 2057223).

## Provisioning virtual machines

To configure the **VMware Resource Deployment** task to provision a new virtual machine from a template, use these settings:

   - **VMware Service Connection**: Select the VMware vCenter Server connection you created earlier.
   
   - **Action**: `Deploy Virtual Machines using Template`
   
   - **Template**: The name of the template that will be used to create the virtual machines. The template must exist in the location you enter for the **Datacenter** parameter.
   
   - **Virtual Machine Names**: Enter the names of one or more virtual machines. Separate multiple names with a comma; for example, `VM1,VM2,VM3`
   
   - **Datacenter**: Enter the name of the datacenter where the virtual machines will be created.
   
   - **Compute Resource Type**: Select the type of hosting for the virtual machines: `VMware ESXi Host`, `Cluster`, or `Resource Pool`
   
   - **Host Name**: Depending on the option you selected for the compute resource type, enter the name of the host, cluster, or resource pool.
   
   - **Datastore**: Enter the name of the datastore that will hold the virtual machines' configuration and disk files.
   
   - **Description**: Optional. Enter a description to identify the deployment.
   
   - **Skip Certificate Authority Check**: If the vCenter Server's certificate is self-signed, select this option to skip the validation of the certificate by a trusted certificate authority. See the note for the previous step to check for the presence of a self-signed certificate.<p />

## Deploying build to virtual machines

Once you have the virtual machines set up, deploying a build to those virtual machines is no different than deploying to any other machine. For instance, you can:

* Use the [PowerShell on Target Machines](../tasks/deploy/powershell-on-target-machines.md) task to run remote scripts on those machines using Windows Remote Management.
* Use [Deployment groups](../release/deployment-groups/index.md) to run scripts and other tasks on those machines using build and release agent.
