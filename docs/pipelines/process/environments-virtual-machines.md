---
title: Environment - Virtual machine resource
description: Virtual machine resource support within Environment
ms.topic: conceptual
ms.assetid: b318851c-4240-4dc2-8688-e70aba1cec55
ms.manager: ushan
ms.date: 03/18/2021
monikerRange: '>= azure-devops-2020'
---

# Environment - virtual machine resource
[!INCLUDE [include](../includes/version-server-2020-rtm.md)]

You can use virtual machine resources to orchestrate deployments across multiple machines and perform rolling updates with YAML pipelines. You can also install agents on your own target servers directly and and drive rolling deployment to those servers. 

Virtual machine resources are connected to [environments](environments.md). Once you define an environment, you can add virtual machines to it that you can target in multi-VM deployments. The deployment history view within an environment provide traceability from the virtual machine to your pipeline and individual commits.

## Create a virtual machine resource

> [!NOTE]
> You can use this same process to set up physical machines with a registration script. 

The first step in adding a virtual machine resources is to define an environment. You can define environments in **Environments** under **Pipelines**. 

### Define an environment
1. Select **Create environment** or **New environment** (if this is not your first environment).
1. Add a **Name** (required) for the environment and a **Description**.
    :::image type="content" source="media/create-environment.png" alt-text="Add an environment.":::

### Add a resource
1. Select your environment and choose **Add resource**.
1. Select **Virtual machines** for your  **Resource** type. Then select **Next**.
1. Choose Windows or Linux for the **Operating System**.  
1.  Copy the registration script. Your script will be a [PowerShell script](/azure/powershell/scripting/) if you've selected Windows and a Linux script if you've selected Linux.
1.  Run the copied script on each of the target VMs that you want to register with this environment.
    * If you're installing on Windows, you'll need to run the script an PowerShell administrator.
    * If you're installing on Linux, you'll need to have permission to download and run executable scripts. 

   > [!NOTE]
   > - The Personal Access Token (PAT) of the logged in user is included in the script.  The PAT expires on the day you generate the script.
   > - If your VM already has any other agent running on it, provide a unique name for **agent** to register with the environment.

1.    Once your VM is registered, it will start appearing as an environment resource under the **Resources** tab of the environment.

   > [!div class="mx-imgBorder"]
   > ![VMcreation](media/vm-creation.png)

1.    To add more VMs, copy the script again by clicking **Add resource** and selecting **Virtual machines**. The Windows and Linux scripts are the same for all the VMs added to the environment. 

1.    When the VM script is successfully installed, your VM will appear in the list of resources associated with your environment. 

   > [!div class="mx-imgBorder"]
   > ![VMresource_view](media/vm-resourceview.png)

  
## Use virtual machine in pipelines

Create a new pipeline by referencing the environment and VM resources in a pipeline YAML. The environment will be created if it does not already exist. By default, the pipeline job will run for all of the virtual machines defined for an environment. 
```YAML
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
    name: ContosoDeploy # the name of your environment
    resourceType: VirtualMachine
  strategy:
   runOnce:
     deploy:   
      steps:
        - script: echo "Hello world"
```

You can select specific sets of virtual machines from the environment to receive the deployment by setting tags for a virtual machine resource. For example, if you only want to deploy to resources with the `windows` tag, add the `tags` parameter to your pipeline.

```yaml
trigger: 
- main

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
    name: ContosoDeploy
    resourceType: VirtualMachine
    tags: windows # only deploy to virtual machines with this tag
  strategy:
   runOnce:
     deploy:   
      steps:
        - script: echo "Hello world"
```

To learn more about deployment jobs, see the [YAML schema](../yaml-schema.md?tabs=schema#deployment-job). 

## Adding and managing tags

The tags allow you to limit deployment to specific virtual machines when the environment is used in a deployment job. You can add tags to the VM as part of the interactive registration script or through the UI. 
 Add or remove tags from the resource view by selecting **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: for a Virtual machine resource.


 Tags are each limited to 256 characters. There is no limit to the number of tags you can use. 

> [!div class="mx-imgBorder"]
> ![VMtags](media/vm-tags.png)

When you select multiple tags, virtual machines that include all the tags will be used in your pipeline.  For example, this pipeline targets virtual machines with both the `windows` and `prod` tags. If a virtual machine only has one of these tags, it will not be targeted.

```yaml
trigger: 
- master

pool: 
   vmImage: ubuntu-latest

jobs:
- deployment: VMDeploy
  displayName: Deploy to VM
  environment: 
    name: ContosoDeploy
    resourceType: VirtualMachine
    tags: windows,prod # only deploy to virtual machines with both windows and prod tags
  strategy:
   runOnce:
     deploy:   
      steps:
        - script: echo "Hello world"
```

## Apply deployment strategy 

You can apply a deployment strategy to define how your application is rolled out. The `runOnce` strategy and the `rolling` strategy for VMs are both supported.
[Here](./deployment-jobs.md#deployment-strategies) is the reference documentation for deployment strategies and the details about various life-cycle hooks.

## Deployment history views

The **Deployments** tab provides complete traceability of commits and work items, and a cross-pipeline deployment history per environment and resource.
> [!div class="mx-imgBorder"]
> ![VMDeployments_view](media/vm-deployments.png)
  
> [!div class="mx-imgBorder"]
> ![VMjobs_view](media/vm-jobsview.png)
  
## Remove a VM from an Environment
To remove virtual machines that were previously added to a Windows environment, run this command from an administrator PowerShell command prompt on each machine. You'll need to run the command in the same folder path where the script to register to the environment has been previously run:

```
./config.cmd remove
```

To remove a virtual machine from a Linux environment, run this command on each machine.

```
./config.sh remove
```

## Known limitations
When you retry a stage, it will rerun the deployment on all VMs and not just failed targets. 

## Next steps
Learn more about [deployment jobs](deployment-jobs.md) and [environments](environments.md).

To learn what else you can do in YAML pipelines, see the [YAML schema reference](../yaml-schema.md).
