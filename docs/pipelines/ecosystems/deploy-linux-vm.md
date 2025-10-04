---
title: Deploy to Linux VMs in an environment
description: Use Azure Pipelines to deploy a Java or JavaScript web application to Linux VM web servers in an environment.
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.topic: quickstart
ms.custom: freshness-fy22q2, linux-related-content
ms.date: 10/03/2025
monikerRange: 'azure-devops'
#customer intent: As an Azure Pipelines user, I want to set up environments with Linux VMs so I can easily deploy my Java or JavaScript web apps to prebuilt targets with complete traceability.
---

# Deploy to Linux VMs in an environment

[!INCLUDE [version-eq-azure-devops](../../includes/version-gt-eq-2020.md)]

You can add virtual machines as resources within [Azure Pipelines environments](../process/environments.md) and target them for deployments. For a continuous integration (CI) workflow, the environment's deployment history provides traceability for each VM back to the commit.

This article shows you how to set up an Azure DevOps pipeline for deployments to multiple Linux [virtual machine (VM) resources](../process/environments-virtual-machines.md) in an environment. These instructions build and deploy either a JavaScript or Java app, but you can adapt them for any app that publishes a web deployment package.

For more information about environments and resources targeted by a deployment job, see the [jobs.deployment.environment](/azure/devops/pipelines/yaml-schema/jobs-deployment-environment) schema definition. For more information about deployment jobs, see the [jobs.deployment](/azure/devops/pipelines/yaml-schema/jobs-deployment) definition.

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

In your Azure Pipelines project, create an environment and add your Linux VMs as environment resources. Follow the instructions at [Create an environment and add a VM](../process/environments-virtual-machines.md?tabs=linux#create-an-environment-and-add-a-vm).

Connect to each VM and run the copied agent registration script to register the VM in the environment. You can also assign tags to the individual VM as part of installing the Azure Pipelines agent.

## Create and run the build pipeline

Create a continuous integration (CI) and continuous deployment (CD) pipeline that builds and deploys your app whenever there's a commit to the `main` branch of your code repo.

### Create the YAML pipeline

1. In your Azure DevOps project, select **Pipelines** > **New pipeline** or **Create Pipeline**, and then select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select your forked sample repository.
1. On the **Configure your pipeline** screen, select **Starter pipeline**.
1. On the **Review your pipeline YAML** screen, replace the generated starter code with the following build code, depending on your runtime.

### Add the build job

The `Build` job runs tasks to build and test your project, and uploads the build output to a `drop` location. This job runs on build agents specified in the agent `pool`, not on your Linux environment resources.

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

### Run the pipeline

To save your *azure-pipelines.yml* file to your repo and kick off the CI/CD pipeline, select **Save and run**, and then select **Save and run** again.

When the pipeline finishes, view the job **Summary** page to verify that the build job ran successfully and that **1 published** artifact appears under **Related**.

## Add the deployment job

Add the `deployment` job to your pipeline. The [deployment job](../process/deployment-jobs.md) starts when the `Build` job completes successfully, and runs on the Linux resources you registered in the environment.

1. Select the **More actions** icon at upper right on the **Summary** page, select **Edit pipeline**, and add the following code to the end of your pipeline. Replace `<environment-name>` with the name of the environment you created.

   Optionally, you can select specific VMs from the environment to receive the deployment by using the `tags` parameter and specifying the `<VMtag>` you defined for the VM.

   ```yaml
   - deployment: VMDeploy
     displayName: Web deploy
     dependsOn: Build
     condition: succeeded()
     environment:
       name: <environment-name>
       resourceType: VirtualMachine
       tags: <VMtag> # VMs to deploy to
   ```

1. Add a `strategy` to the `deployment` job. The [runOnce deployment strategy](../process/deployment-jobs.md#runonce-deployment-strategy) is the simplest strategy. The `runOnce` strategy executes the `preDeploy`, `deploy`, `routeTraffic`, and `postRouteTraffic` lifecycle hooks one time, and then executes either `on: success` or `on: failure`.

   - 

     ```yaml
       strategy:
          runOnce:
            deploy:
               steps:
               - script: echo my first deployment
     ```

1. After you add the deployment job, select **Validate and save**, then select **Save**, select **Run**, and select **Run** again. With each run of this job, deployment history records against the environment.

   >[!NOTE]
   >The first time you run the pipeline that uses the environment, you must grant permission for all runs of the pipeline to access the agent pool and the environment. Select the **Waiting** symbol next to the job on the pipeline run **Summary** screen, and then select **Permit** to grant the necessary permissions.

### Rolling deployment strategy

You can use a `rolling` instead of `runOnce` deployment strategy. A [rolling deployment strategy](../process/deployment-jobs.md#rolling-deployment-strategy) updates the application on a fixed set of up to five target VMs in each iteration. In a `runOnce` deployment, all eligible VMs get the deployment at the same time, but a `rolling` deployment may run on multiple agents in parallel. VMs get the deployment one-by-one or in batches defined by the `maxParallel` setting. 

The `maxParallel` parameter controls how many VMs to deploy to in parallel by setting the number or percentage of VMs that must remain available, excluding the VMs that are being deployed to. This setting ensures that the app is running and is capable of handling requests on these VMs while the deployment occurs on the rest of the VMs, reducing overall downtime. This parameter also determines success and failure conditions during deployment. 

The rolling deployment strategy creates lifecycle hook jobs that run on each target VM to manage parallelism, health checks, and traffic routing. The `preDeploy`, `deploy`, `routeTraffic`, and `postRouteTraffic` execute once per batch size. Then, either `on: success` or `on: failure` executes.

In the `rolling` strategy, the `deploy`, `routeTraffic`, `postRouteTraffic`, and `on` steps run on the environment resource VMs, but the `preDeploy` steps run on the pipeline agent VMs. You can use the `preDeploy` step to prepare artifacts or do orchestration.

The `rolling` strategy is easier to implement for Java apps because they're self-contained. JVM is often preinstalled on VM agents, and you don't need to worry about app dependencies, permissions, or package management, but just run the JAR file with `java -jar`.

For Node.js, rolling deployment is possible, but requires preprovisioned VMs with all required apps, dependencies, and permissions set up. For example, Node.js apps require Node, possibly npm dependencies, and often a service manager like systemd or pm2 to be present on each VM. The pipeline script for deployment must be fully automated, noninteractive, and able to restart and manage the app's service.

The following code shows a complete Java pipeline that uses the `rolling` deployment strategy.

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
       dependsOn: Build
       condition: succeeded()
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
                 displayName: Start Java app, check health, and stop
                 inputs:
                   targetType: 'inline'
                   script: |
                     JAR=$(ls $(Pipeline.Workspace)/drop/target/*.jar | head -n 1)
                     java -jar "$JAR" --server.port=8081 &
                     PID=$!
                     # Health check loop
                     for i in {1..10}; do
                       if curl -sf http://localhost:8081/actuator/health; then
                         echo "App is up!"
                         break
                       else
                         echo "Waiting for app to be healthy... ($i/10)"
                         sleep 3
                       fi
                     done
                     # Stop the app manually
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

For more information about the rolling deployment strategy, see [jobs.deployment.strategy.rolling](/azure/devops/pipelines/yaml-schema/jobs-deployment-strategy-rolling) schema definition.

## Access pipeline traceability in environment

The environment **Deployments** tab provides complete traceability of commits and work items and a cross-pipeline deployment history for the environment.

:::image type="content" source="media/vm-deployments.png" alt-text="Screenshot of deployments view.":::

## Related content

- [Environments](../process/environments.md)
- [VM resources in environments](../process/environments-virtual-machines.md)
- [Deployment jobs](../process/deployment-jobs.md)

