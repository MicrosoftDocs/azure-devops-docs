---
title: Deploy a Linux VM to an environment
description: Deploy a web application to a web server on a Linux VM with an environment.
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: seodec18, freshness-fy22q2
ms.date: 01/24/2023
monikerRange: 'azure-devops' 
---

# Deploy to a Linux Virtual Machine

[!INCLUDE [version-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

Learn how to set up an Azure DevOps pipeline for multi-virtual machine deployments that uses an [environment](../process/environments.md) and [virtual machine resources](../process/environments-virtual-machines.md). 

Use the instructions in this article for any app that publishes a web deployment package.

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An active Azure DevOps organization. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- A Linux virtual machine (VM) hosted in Azure. 
    - To install a JavaScript or Node.js app, set up a Linux VM with Nginx in Azure, see [Create a Linux VM with Azure CLI](/azure/virtual-machines/linux/quick-create-cli).
    - To deploy a Java Spring Boot and Spring Cloud based apps, create a Linux VM in Azure using [Java 13 on Ubuntu 20.04](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004) template, which provides a fully supported OpenJDK-based runtime.


## Get your sample code

#### [JavaScript](#tab/javascript)

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)] 

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

#### [Java](#tab/java)

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-projects/spring-petclinic
```
> [!NOTE]
> Petclinic is a [Spring Boot](https://spring.io/guides/gs/spring-boot) application built using [Maven](https://spring.io/guides/gs/maven/).


* * * 

## Create an environment with virtual machines

You can add virtual machines as resources within [environments](../process/environments.md) and target them for multi-VM deployments. The deployment history view provides traceability from the VM to the commit.

1. Sign into your Azure DevOps organization and navigate to your project.
2. Go to the Pipelines page and select **Environments** > **Create Environment**. 
3. Specify a **Name** (required) for the environment and a **Description**.
4. Choose **Virtual Machines** as a **Resource** to be added to the environment, and then select **Next**.
5. Choose Linux for the **Operating System** and copy the registration script. 
6. Run the registration script on each of the target VMs registered with the environment.
   
   > [!NOTE]
   > - The Personal Access Token (PAT) of the signed in user gets pre-inserted in the script and expires after three hours.
   > - If your VM already has any agent running on it, provide a unique name to register with the environment.
7.	Once VM is registered, it will start appearing as an environment resource under **Resources**.

    :::image type="content" source="media/vm-creation.png" alt-text="Screenshot of VM creation.":::

8.	To add more VMs, copy the script again. Select **Add resource** and choose **Virtual Machines**. This script is the same for all the VMs you want to add to the same environment. 
   
    Each machine interacts with Azure Pipelines to coordinate deployment of your app.

    :::image type="content" source="media/vm-resourceview.png" alt-text="Screenshot of VM resource view.":::

9. You can add or remove tags for the VM. Select on the dots at the end of each VM resource in **Resources**.
   
   Tags limit deployment to specific VMs when the environment's used in a deployment job. Each tag is limited to 256 characters. There's no limit to the number of tags you can create.
   
   :::image type="content" source="media/vm-tags.png" alt-text="Screenshot of tags view.":::

* * *

## Define your CI build pipeline

You need a CI build pipeline that publishes your web app. You also need a deployment script that can be run locally on the Ubuntu server. Set up a CI build pipeline based on the runtime you want to use. 

1. Sign in to your Azure DevOps organization and go to your project.

2. In your project, go to the **Pipelines** page, and then choose the action to create a new pipeline.

3. Select **GitHub** as the location of your source code.

   You may be redirected to GitHub to sign in. If so, enter your GitHub credentials.

4. When the list of repositories appears, select the sample app repository that you want.

5. Azure Pipelines analyzes your repository and recommends a suitable pipeline template.

    #### [Java](#tab/java)
    
    Select the **starter** template and copy this YAML snippet to build your Java project and run tests with Apache Maven. You'll add to this YAML in future steps. :
    
    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    stages:
    - stage: Build
      displayName: Build stage
      jobs:  
      - job: Build
        displayName: Build Maven Project
        steps:
        - task: Maven@4
          displayName: 'Maven Package'
          inputs:
            mavenPomFile: 'pom.xml'
        - task: CopyFiles@2
          displayName: 'Copy Files to artifact staging directory'
          inputs:
            SourceFolder: '$(System.DefaultWorkingDirectory)'
            Contents: '**/target/*.?(war|jar)'
            TargetFolder: $(Build.ArtifactStagingDirectory)
        - upload: $(Build.ArtifactStagingDirectory)
          artifact: drop
    ```
    
    For more information, review the steps in [Build your Java app with Maven](java.md) for creating a build.
    
    #### [JavaScript](#tab/javascript)
    
    Select the **starter** template and copy this YAML snippet to build a general Node.js project with npm. You'll add to this YAML in future steps.
    
    ```YAML
    trigger:
    - main
    
    pool:
      vmImage: ubuntu-latest
    
    stages:
    - stage: Build
      displayName: Build stage
      jobs:  
      - job: Build
        displayName: Build
        steps:
        - task: NodeTool@0
          inputs:
            versionSpec: '16.x'
          displayName: 'Install Node.js'
        - script: |
            npm install
            npm run build --if-present
            npm run test --if-present
          displayName: 'npm install, build and test'
        - task: ArchiveFiles@2
          displayName: 'Archive files'
          inputs:
            rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
            includeRootFolder: false
            archiveType: zip
            archiveFile: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
            replaceExistingArchive: true
        - upload: $(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip
          artifact: drop
    ```
    For more guidance, review the steps mentioned in [Build your Node.js app with gulp](javascript.md) for creating a build.
    
    - Select **Save and run** > **Commit directly to the main branch** > **Save and run**.
    
      A new run starts. Wait for the run to complete.
    
    * * * 

## Define CD steps to deploy to the Linux VM

1. Edit your pipeline and add a [deployment job](../process/deployment-jobs.md) by referencing the environment and the VM resources you created earlier. Update `tags` to refer to tags for your virtual machine. 

    ```YAML
    jobs:  
    - deployment: VMDeploy
      displayName: Web deploy
      environment:
        name:  <environment name>
        resourceType: VirtualMachine
        tags: web1 # Update or remove value to match your tag
      strategy:
    ```
  To learn more about the `environment` keyword and resources targeted by a deployment job, [see the YAML schema](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment). 

2. Select specific sets of VMs from the environment to receive the deployment by specifying the **tags** that you've defined for each VM in the environment.

   For more information, see the [complete YAML schema for deployment job](/azure/devops/pipelines/yaml-schema/jobs-deployment).

3. Specify either `runOnce` or `rolling` as a deployment strategy. 

   `runOnce` is the simplest deployment strategy. All the life-cycle hooks, namely `preDeploy` `deploy`, `routeTraffic`, and `postRouteTraffic`, get executed once. Then, either `on:` `success` or `on:` `failure` gets executed.

   See the following example of a deployment job for `runOnce`:
   ```YAML
   jobs:
   - deployment: VMDeploy
     displayName: Web deploy
     environment:
       name: <environment name>
       resourceType: VirtualMachine
     strategy:
       runOnce:
         deploy:
           steps:
           - script: echo my first deployment
   ```

4. See the following example of a YAML snippet for the rolling strategy with a Java pipeline. You can update up to five targets gets in each iteration. `maxParallel` determines the number of targets that can be deployed to, in parallel. The selection accounts for absolute number or percentage of targets that must remain available at any time, excluding the targets being deployed to. It's also used to determine the success and failure conditions during deployment.

    ```YAML
    jobs: 
    - deployment: VMDeploy
      displayName: web
      environment:
        name: <environment name>
        resourceType: VirtualMachine
      strategy:
          rolling:
            maxParallel: 2  #for percentages, mention as x%
            preDeploy:
              steps:
              - download: current
                artifact: drop
              - script: echo initialize, cleanup, backup, install certs
            deploy:
              steps:
              - task: Bash@3
                inputs:
                  targetType: 'inline'
                  script: |
                    # Modify deployment script based on the app type
                    echo "Starting deployment script run"
                    sudo java -jar '$(Pipeline.Workspace)/drop/**/target/*.jar'
            routeTraffic:
              steps:
              - script: echo routing traffic
            postRouteTraffic:
              steps:
              - script: echo health check post-route traffic
            on:
              failure:
                steps:
                - script: echo Restore from backup! This is on failure
              success:
                steps:
                - script: echo Notify! This is on success
    ```
    With each run of this job, deployment history gets recorded against the `<environment name>` environment that you've created and registered the VMs.

## Pipeline traceability views in environment

The **Deployments** view provides complete traceability of commits and work items, and a cross-pipeline deployment history per environment.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot of deployments view.":::


## Next steps

> [!div class="nextstepaction"]
> [Learn more about Jobs](../process/phases.md)

## Related articles
 
- [Tasks](../process/tasks.md)
- [Catalog of Tasks](../tasks/index.md)
- [Variables](../process/variables.md)
- [Triggers](../build/triggers.md)
- [Troubleshooting](../troubleshooting/troubleshooting.md).
- [YAML schema reference](/azure/devops/pipelines/yaml-schema).
