---
title: Deploy to Linux VMs in an environment
description: Use Azure Pipelines to deploy a Java or JavaScript web application to Linux VM web servers in an environment.
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: freshness-fy22q2, linux-related-content
ms.date: 09/19/2025
monikerRange: 'azure-devops'
#customer intent: As an Azure Pipelines user, I want to set up environments with Linux VMs so I can easily deploy my Java or JavaScript web apps to prebuilt targets with complete traceability.
---

# Deploy to Linux VMs in an environment

[!INCLUDE [version-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

In this quickstart, you learn how to set up an Azure DevOps pipeline for deployment to multiple Linux [virtual machine (VM) resources](../process/environments-virtual-machines.md) in an [environment](../process/environments.md). These instructions build and deploy either a JavaScript or Java app, but you can adapt them for any app that publishes a web deployment package.

## Prerequisites

- An Azure account with an active subscription. [Create an account for free](https://azure.microsoft.com/free/?WT.mc_id=A261C142F).
- An Azure DevOps organization and project. [Sign up for Azure Pipelines](../get-started/pipelines-sign-up.md).

#### [JavaScript](#tab/javascript)

Also, for JavaScript or Node.js apps:

- [At least two Linux VMs set up with Nginx on Azure](/azure/virtual-machines/linux/quick-create-cli).
- Your own fork of the GitHub sample code repo at [https://github.com/MicrosoftDocs/pipelines-javascript](https://github.com/MicrosoftDocs/pipelines-javascript). If you already have an app in GitHub that you want to deploy, you can use your code instead.

#### [Java](#tab/java)

Also, for Java Spring Boot and Spring Cloud based apps:

- At least two Linux VMs with the Java 17+ SDK installed. You can install the Java SDK by running the following commands on the VM:

  ```bash
  sudo apt update
  sudo apt install openjdk-17-jdk
  sudo update-alternatives --config java
  sudo update-alternatives --config javac
  java -version 
  ```

- Your own fork of the GitHub sample code repo at [https://github.com/spring-projects/spring-petclinic](https://github.com/spring-projects/spring-petclinic). If you already have an app in GitHub that you want to deploy, you can use your code instead.

  >[!NOTE]
  >`Petclinic` is a [Spring Boot](https://spring.io/guides/gs/spring-boot) application built using [Maven](https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/maven-plugin/reference/html/#build-image).

---

>[!IMPORTANT]
>For GitHub procedures, you need a [GitHub service connection](../library/service-endpoints.md#github-service-connection). You might also be prompted to sign in to GitHub, install the Azure Pipelines GitHub app, or authorize Azure Pipelines. To complete each process, follow the onscreen instructions. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

## Create an environment and add Linux VMs

You can [add VMs as resources within environments](../process/environments-virtual-machines.md) and target them for deployments. The environment's deployment history then provides traceability from each machine to the commit.

In your Azure Pipelines project, create an environment and add the VMs by following the procedure at [Create an environment and add a VM](../process/environments-virtual-machines.md?tabs=linux#create-an-environment-and-add-a-vm). Install the copied script on each VM you want to add to the environment.

## Define and run a CI build pipeline

Create a continuous integration (CI) build pipeline that publishes your web app.

1. In your Azure DevOps project, select **Pipelines** > **New pipeline** or **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.
1. On the **Review your pipeline YAML** screen, replace the generated starter *azure-pipelines.yml* with the following code, based on your runtime.

### Replace the code

#### [JavaScript](#tab/javascript)

The following pipeline builds your Node.js project with npm.

```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

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

Select **Save and run**, and then select **Save and run** again.

After your pipeline runs, view the build **Summary** page to verify that the job ran successfully and that you see **1 published** artifact under **Related**.

## Deploy to the Linux VMs

Add a `Deploy` stage to your pipeline that starts when the `Build` stage completes successfully. The [deployment job](../process/deployment-jobs.md) in this stage runs on the Linux servers.

1. To add the deployment stage and job, select the **More actions** icon at upper right on the **Summary** page, select **Edit pipeline**, and add the following code to the end of your pipeline. Replace `<environment name>` with the name of the environment you created.

   Optionally, you can select specific VMs from the environment to receive the deployment by using the `tags` parameter and specifying the `<VM tag>` you defined for the VM.

   ```yaml
  - deployment: VMDeploy
    displayName: Web deploy
    environment:
      name: <environment name>
      resourceType: VirtualMachine
      tags: <VM tag> # VMs to deploy to
   ```

1. Specify the deployment `strategy` by adding the following code to the `deployment` job. You can specify a `runOnce` or `rolling` deployment strategy.

   - `runOnce` is the simplest deployment strategy, as shown in the following code. The `preDeploy`> `deploy` > `routeTraffic` > `postRouteTraffic` lifecycle hooks each execute once, and then either `on: success` or `on: failure` executes.

     ```yaml
         strategy:
            runOnce:
              deploy:
                 steps:
                 - script: echo my first deployment
     ```

   - A [rolling deployment strategy](../process/deployment-jobs.md#rolling-deployment-strategy) updates the application on a fixed set of VMs in each iteration. You can update up to five targets in each iteration.

     The `maxParallel` parameter accounts for the number or percentage of VMs that must remain available at any time, excluding the VMs that are being deployed to, and also determines success and failure conditions during deployment.

     The following code shows the complete deployment stage and job for the Java pipeline, using the `rolling` deployment strategy.

     ```yaml
     trigger:
     - main
     
     pool:
       vmImage: ubuntu-latest
     
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
                     JAR=$(ls $(Pipeline.Workspace)/drop/target/*.jar | head -n 1)
                     java -jar "$JAR" --server.port=8081 &
                     PID=$!
                     sleep 15
                     kill $PID 2>/dev/null || echo "Process already exited"
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

1. After you add the deployment job, select **Validate and save**, then select **Save**, select **Run**, and select **Run** again. With each run of this job, deployment history records against the environment the VMs are registered in.

   >[!NOTE]
   >The first time you run the pipeline that uses the environment, you must grant permission for all runs of the pipeline to access the agent pool and the environment. Select the **Waiting** symbol next to the job on the pipeline run **Summary** screen, and then select **Permit** to grant the necessary permissions.

- For more information about the rolling deployment strategy, see the [jobs.deployment.strategy.rolling](/azure/devops/pipelines/yaml-schema/jobs-deployment-strategy-rolling) definition.
- For more information about deployment jobs, see the [jobs.deployment](/azure/devops/pipelines/yaml-schema/jobs-deployment) definition.
- For more information about the `environment` keyword and resources targeted by a deployment job, see the [jobs.deployment.environment](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment) definition.

## Access pipeline traceability in environment

The environment **Deployments** tab provides complete traceability of commits and work items and a cross-pipeline deployment history for the environment.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot of deployments view.":::

## Related content

- [Environments](../process/environments.md)
- [VM resources in environments](../process/environments-virtual-machines.md)
- [Deployment jobs](../process/deployment-jobs.md)

