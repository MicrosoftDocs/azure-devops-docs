---
title: Deploy to Linux VMs
description: Use Azure Pipelines to deploy a Java or JavaScript web application to Linux VM web servers in an environment.
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: freshness-fy22q2, linux-related-content
ms.date: 09/15/2025
monikerRange: 'azure-devops'
#customer intent: As an Azure Pipelines user, I want to set up environments with Linux VMs so I can easily deploy my Java or JavaScript web apps with complete traceability.
---

# Deploy to Linux VMs in an environment

[!INCLUDE [version-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

In this quickstart, you learn how to set up an Azure DevOps pipeline for deployment to multiple Linux [virtual machine (VM) resources](../process/environments-virtual-machines.md) in an [environment](../process/environments.md). These instructions build and publish either a Java or JavaScript app. You can use these instructions for any app that publishes a web deployment package.

## Prerequisites

#### [JavaScript](#tab/javascript)

For JavaScript or Node.js apps:

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An Azure DevOps organization and project. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- [At least two Linux VMs set up with Nginx on Azure](/azure/virtual-machines/linux/quick-create-cli).
- Your own fork of the GitHub sample code repo: https://github.com/MicrosoftDocs/pipelines-javascript.

#### [Java](#tab/java)

For Java Spring Boot and Spring Cloud based apps:

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An Azure DevOps organization and project. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).
- [At least two Linux VMs created in Azure using the Java 13 on Ubuntu 20.04 template](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu13-ubuntu-2004), which provides a fully supported OpenJDK-based runtime.
- Your own fork of the GitHub sample code repo: https://github.com/spring-projects/spring-petclinic. If you already have an app in GitHub that you want to deploy, you can use that code instead.

  >[!NOTE]
  >Petclinic is a [Spring Boot](https://spring.io/guides/gs/spring-boot) application built using [Maven](https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/maven-plugin/reference/html/#build-image).

---

>[!IMPORTANT]
>During GitHub procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create an environment and add Linux VMs

You can [add VMs as resources within environments](../process/environments-virtual-machines.md) and target them for multi-VM deployments. The environment's deployment history then provides traceability from each machine to the continuous integration (CI) commit.

In your Azure Pipelines project, create an environment and add the two Linux VMs by following the procedure at [Create an environment and add a VM](../process/environments-virtual-machines.md?tabs=linux#create-an-environment-and-add-a-vm).

## Define and run a CI build pipeline

Create a CI build pipeline that publishes your web app.

1. In your Azure DevOps project, select **Pipelines** > **New pipeline** or **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**. Azure Pipelines generates a YAML file called *azure-pipelines.yml*.
1. Replace the entire contents of the starter YAML pipeline with the following code, based on your runtime.

### Edit the code

#### [JavaScript](#tab/javascript)

The following pipeline builds your Node.js project with npm.

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

For more information, review the steps for creating a build in [Build your Node.js app with gulp](javascript.md).

#### [Java](#tab/java)

The following pipeline builds your Java project and runs tests with Apache Maven.

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

For more information, review the steps for creating a build in [Build your Java app with Maven](java.md).

---

### Run your pipeline

Select **Validate and save**, and then select **Save**, select **Run**, and select **Run** again.

After your pipeline runs, look at the **Summary** page to verify that the job ran successfully and that you see a published artifact.

## Deploy to the Linux VMs

Add a [deployment job](../process/deployment-jobs.md) to your pipeline that runs on the Linux server.

1. To add the deployment script, select **Edit** at upper right on the **Summary** page, and add the following code to the end of  your pipeline. Replace `<environment name>` with the name of the environment you created earlier.

   Optionally, select specific VMs from the environment to receive the deployment by using the `tags` parameter and specifying the `<VM tag>` you defined for each VM.

    ```yaml
    jobs:  
    - deployment: VMDeploy
      displayName: Web deploy
      environment:
        name:  <environment name>
        resourceType: VirtualMachine
        tags: <VM tag> # Update value for VMs to deploy to
    ```
   
1. Add the deployment `strategy` by adding the following code to the job. You can specify either `runOnce` or `rolling` as a deployment strategy.

   - `runOnce` is the simplest deployment strategy, as shown in the following code. The `preDeploy`> `deploy` > `routeTraffic` > `postRouteTraffic` lifecycle hooks each execute once, and then either `on: success` or `on: failure` executes.


     
     ```yaml
       strategy:
         runOnce:
           deploy:
             steps:
             - script: echo my first deployment
     ```

   - A [rolling deployment](/azure/devops/pipelines/yaml-schema/jobs-deployment-strategy-rolling) updates the application on a fixed set of VMs in each iteration. You can update up to five targets in each iteration.\

     The `maxParallel` parameter specifies the absolute number or percentage of VMs that must remain available at any time, excluding the VMs currently being deployed to. The `maxParallel` selection accounts for and determines success and failure conditions during deployment.

     The following code shows a YAML deployment job for the `rolling` deployment strategy, using a Java pipeline.

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

     With each run of this job, deployment history records against the environment you created and registered the VMs in.

For more information about deployment jobs, see the complete [jobs.deployment definition](/azure/devops/pipelines/yaml-schema/jobs-deployment). For more information about the `environment` keyword and resources targeted by a deployment job, see the [jobs.deployment.environment definition](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment).

## Access pipeline traceability in environment

The environment **Deployments** view provides complete traceability of commits and work items and a cross-pipeline deployment history for the environment.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot of deployments view.":::

## Related content

- [Environments](../process/environments.md)
- [VM resources in environments](../process/environments-virtual-machines.md)
- [Deployment jobs](../process/deployment-jobs.md)

