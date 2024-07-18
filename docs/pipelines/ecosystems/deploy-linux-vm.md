---
title: Deploy to Linux VMs
description: Deploy a web application to a web server on a Linux VM with an environment.
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: freshness-fy22q2, linux-related-content
ms.date: 07/18/2024
monikerRange: 'azure-devops'
---

# Deploy to Linux VMs in an environment

[!INCLUDE [version-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

In this quickstart, you learn how to set up an Azure DevOps pipeline for deployment to multiple Linux [virtual machine (VM) resources](../process/environments-virtual-machines.md) in an [environment](../process/environments.md). You can use these instructions for any app that publishes a web deployment package.

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An Azure DevOps organization and project. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).

#### [JavaScript](#tab/javascript)

For JavaScript or Node.js apps, [at least two Linux VMs set up with Nginx on Azure](/azure/virtual-machines/linux/quick-create-cli).

#### [Java](#tab/java)

For Java Spring Boot and Spring Cloud based apps, [at least two Linux VMs created in Azure using the Java 13 on Ubuntu 20.04 template](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004), which provides a fully supported OpenJDK-based runtime.

---

## Fork the sample code

[!INCLUDE [include](includes/get-code-before-sample-repo-option-to-use-own-code.md)] 

#### [JavaScript](#tab/javascript)

```
https://github.com/MicrosoftDocs/pipelines-javascript
```

#### [Java](#tab/java)

```
https://github.com/spring-projects/spring-petclinic
```
> [!NOTE]
> Petclinic is a [Spring Boot](https://spring.io/guides/gs/spring-boot) application built using [Maven](https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/maven-plugin/reference/html/#build-image).

---

## Create an environment with Linux VMs

You can add VMs as resources within [environments](../process/environments.md) and target them for multi-VM deployments. The deployment history for the environment provides traceability from the VM to the commit.

### Add a VM resource

1. In your Azure DevOps project, go to **Pipelines** > **Environments** and then select **Create environment** or **New environment**.
1. On the first **New environment** screen, add a **Name** and an optional **Description**.
1. Under **Resource**, select **Virtual machines**, and then select **Next**.
1. On the next **New environment** screen, choose Linux under **Operating system**.
1. Copy the Linux registration script. The script is the same for all the Linux VMs added to the environment.

   :::image type="content" source="media/vm-creation.png" alt-text="Screenshot of VM creation.":::
   
   > [!NOTE]
   > The Personal Access Token (PAT) of the signed in user is pre-inserted in the script and expires after three hours.
   
1. Select **Close**, and note that the new environment is created.
1. Run the copied script on each target VM that you want to register with the environment.

   > [!NOTE]
   > If the VM already has another agent running on it, provide a unique name for **agent** to register with the environment.

Once the VM is registered, it appears as a resource under the **Resources** tab of the environment.

:::image type="content" source="media/vm-resourceview.png" alt-text="Screenshot of VM resource view.":::

 To copy the script again for creating more resources, for example if your PAT expires, select **Add resource** on the environment's page.

### Add and manage tags

Tags are a way to target a specific set of VMs in an environment for deployment. There's no limit to the number of tags that you can use. Tags are limited to 256 characters each.

You can add tags or remove tags for VMs in the interactive registration script or through the UI by selecting **More actions** :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: for a VM resource. For this quickstart, assign a different tag to each VM in your environment.

:::image type="content" source="media/vm-tags.png" alt-text="Screenshot of tags view.":::

## Define a CI build pipeline

You need a continuous integration (CI) build pipeline that publishes your web app, and a deployment script to run locally on the Linux server. Set up your CI build pipeline based on the runtime you want to use.

>[!IMPORTANT]
>During GitHub procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

1. In your Azure DevOps project, select **Pipelines** > **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**. Azure Pipelines generates a YAML file called *azure-pipelines.yml* for your pipeline.
1. Select the dropdown caret next to **Save and run**, select **Save**, and then select **Save** again. The file is saved to your forked GitHub repository.

### Edit the code

Select **Edit**, and replace the contents of the *azure-pipelines.yml* file with the following code. You add to this YAML in future steps.

#### [JavaScript](#tab/javascript)

The following code builds your Node.js project with npm.

```yaml
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
        - task: UseNode@1
          inputs:
            version: '16.x'
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

For more information, review the steps in [Build your Node.js app with gulp](javascript.md) for creating a build.

#### [Java](#tab/java)

The following code builds your Java project and runs tests with Apache Maven.

```yaml
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

---

## Run your pipeline

Select **Validate and save**, then select **Save**, select **Run**, and select **Run** again.

After your pipeline runs, verify that the job ran successfully and that you see a published artifact.

## Deploy to the Linux VMs

1. Edit your pipeline to add the following [deployment job](../process/deployment-jobs.md). Replace `<environment name>` with the name of the environment you created earlier. Select specific VMs from the environment to receive the deployment by specifying the `<VM tag>` that you defined for each VM.

    ```yaml
    jobs:  
    - deployment: VMDeploy
      displayName: Web deploy
      environment:
        name:  <environment name>
        resourceType: VirtualMachine
        tags: <VM tag> # Update value for VMs to deploy to
      strategy:
    ```
   
   For more information, see the complete [jobs.deployment definition](/azure/devops/pipelines/yaml-schema/jobs-deployment).

   For more information about the `environment` keyword and resources targeted by a deployment job, see the [jobs.deployment.environment definition](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment).

1. Specify either `runOnce` or `rolling` as a deployment `strategy`.

   - `runOnce` is the simplest deployment strategy. The `preDeploy` `deploy`, `routeTraffic`, and `postRouteTraffic` lifecycle hooks each execute once. Then either `on:` `success` or `on:` `failure` executes.

     The following code shows a deployment job for `runOnce`:
     
     ```yaml
     jobs:
     - deployment: VMDeploy
       displayName: Web deploy
       environment:
         name: <environment name>
         resourceType: VirtualMachine
         tags: <VM tag>
       strategy:
         runOnce:
           deploy:
             steps:
             - script: echo my first deployment
     ```

   - The following code shows a YAML snippet for the `rolling` deployment strategy, using a Java pipeline. You can update up to five targets in each iteration. The `maxParallel` parameter specifies the number of targets that can be deployed to in parallel.

     The `maxParallel` selection accounts for absolute number or percentage of targets that must remain available at any time, excluding the targets being deployed to, and determines success and failure conditions during deployment.

     ```yaml
     jobs: 
     - deployment: VMDeploy
       displayName: web
       environment:
         name: <environment name>
         resourceType: VirtualMachine
         tags: <VM tag>
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

     With each run of this job, deployment history is recorded against the environment you created and registered the VMs in.

## Access pipeline traceability in environment

The environment **Deployments** view provides complete traceability of commits and work items and a cross-pipeline deployment history for the environment.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot of deployments view.":::

## Related content
 
- [Jobs](../process/phases.md)
- [Tasks](../process/tasks.md)
- [Catalog of tasks](../tasks/index.md)
- [Variables](../process/variables.md)
- [Triggers](../build/triggers.md)
- [Troubleshooting](../troubleshooting/troubleshooting.md)
- [YAML schema reference](/azure/devops/pipelines/yaml-schema)

