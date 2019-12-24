---
title: Deploy to a Linux VM
description: Deploy a web application to a web server on a Linux virtual machine using Environment support for VM resources in Azure Pipelines
ms.assetid: 9EBB0342-7FD2-473C-9809-9BCA2250CBC3
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ushan
author: N-usha
ms.date: 12/24/2019
monikerRange: 'azure-devops' 
---

# Deploy to a Linux Virtual Machine

Azure Pipelines provides a complete, fully featured set of CI/CD automation tools for deployments to Virtual machines, both on-prem or on any cloud.

Continuous integration (CI) and continuous deployment (CD) form a pipeline by which you can build, release, and deploy your code. This document contains the steps associated with setting up a CICD pipeline for doing multi-machine deployments.
We'll show you how to set up continuous deployment of your app to an web server running on Ubuntu using YAML based
Azure Pipelines. You can use the steps in this 
quickstart for any app as long as your continuous integration pipeline publishes a web deployment package.

## Get your sample code

#### [Java](#tab/java)

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)]

```
https://github.com/spring-projects/spring-petclinic
```
> [!NOTE]
> Petclinic is a [Spring Boot](https://spring.io/guides/gs/spring-boot) application built using [Maven](https://spring.io/guides/gs/maven/).

#### [JavaScript](#tab/java-script)

[!INCLUDE [include](_shared/get-code-before-sample-repo-option-to-use-own-code.md)] 

```
https://github.com/azure-devops/fabrikam-node
```
> [!NOTE]
> The app was built through [Yeoman](https://yeoman.io/learning/index.html). It uses Express, bower, and grunt. And it has some npm packages as dependencies.
> The sample also contains a script that sets up Nginx and deploys the app. It is executed on the virtual machines. Specifically, the script:
> 1. Installs Node, Nginx, and PM2.
> 2. Configures Nginx and PM2.
> 3. Starts the Node app.

* * * 

## Prerequisites for the Linux VM

Sample apps mentioned above have been tested on Ubuntu 16.04, and we recommend you use the same version of Linux VM for this quickstart.
Follow the additional steps described below based on the runtime stack used for the app.

#### [Java](#tab/java)

- For deploying Java Spring Boot and Spring Cloud based apps, create a Linux VM in Azure using [this](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu8-ubuntu-1804) template, which provides a fully supported OpenJDK-based runtime.
- For deploying Java servlets on Tomcat server, create a Linux VM with Java 8 using [this](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu8-ubuntu-1804) Azure template and [configure Tomcat 9.x as a service](https://tomcat.apache.org/tomcat-9.0-doc/setup.html).
- For deploying Java EE based app, use an Azure template to create a [Linux VM + Java + WebSphere 9.x](https://azuremarketplace.microsoft.com/marketplace/apps/midvision.websphere-application-server-nde-90) or a [Linux VM + Java + WebLogic 12.x](https://azuremarketplace.microsoft.com/marketplace/apps/Oracle.OracleWebLogicServer12cEnterprise) or a [Linux VM +Java](https://azuremarketplace.microsoft.com/marketplace/apps/azul.azul-zulu8-ubuntu-1804) + WildFly/JBoss 14 

#### [JavaScript](#tab/java-script)

To install a javascript app or a Node.js app, you'll need a Linux VM with Nginx web server to deploy the app.
If you don't already have a Linux VM with Nginx, create one now in Azure using the steps in
[this example](/azure/virtual-machines/linux/quick-create-cli).

* * * 

# Create an environment with virtual machines as resources

Virtual machines can be added as resources within [environments](../process/environments.md) and can be targeted for multi-machine deployments. 
Deployment history views within environment provide traceability from VM to the pipeline and then to the commit.

You can create an environment in the “**Environments**” hub within the “**Pipelines**” section.
1.	Sign into your Azure DevOps organization and navigate to your project.
2.	In your project, navigate to the Pipelines page. Then choose Environments and click on **Create Environment**. Specify a **Name** (required) for the environment and a **Description**.
3.	Choose “**Virtual Machines**” as a “**Resource**” to be added to the environment and click on “**Next**”
4.	Choose Operating System (Windows/Linux), and **copy PS registration script**. 
5.	Now run the copied script from an administrator PowerShell command prompt on each of the target VMs to be registered with this Environment.
    > [!NOTE]
    > - Personal Access Token of the logged in user is pre-inserted in the script which expires on the same day making the copied script unusable thereon.
    > - If your VM already has any agent running on it, provide a unique name for “agent” to register with environment.
6.	Once VM is registered, it will start appearing as an environment resource under “resources” tab of the environment.
> [!div class="mx-imgBorder"]
> ![VMcreation](_img/vm-creation.png)

7.	For adding more VMs, you can view and copy the script again by clicking on “Add resource” and choosing “Virtual Machines” as resource. This script would remain same for all the VMs to be added to this environment. 
8.	Each machine interacts with Azure Pipelines to coordinate deployment of your app.
> [!div class="mx-imgBorder"]
> ![VMresource_view](_img/vm-resourceview.png)

9. You can add tags to the VM as part of the interactive PS registration script (or) you can also add/remove the same from the resource view by clicking on the triple dots at the end of each VM resource in the resources view.
The tags you assign allow you to limit deployment to specific virtual machines when the environment is used in a Deployment job. Tags are each limited to 256 characters, but there is no limit to the number of tags you can use.
> [!div class="mx-imgBorder"]
> ![VMtags](_img/vm-tags.png)

* * * 

## Define your CI build pipeline

You'll need a continuous integration (CI) build pipeline that publishes your web application, as well as
a deployment script that can be run locally on the Ubuntu server. Set up a CI build pipeline based on the runtime you want to use. 

1. Sign in to your Azure DevOps organization and navigate to your project.

1. In your project, navigate to the **Pipelines** page. Then choose the action to create a new pipeline.

1. Walk through the steps of the wizard by first selecting **GitHub** as the location of your source code.

1. You might be redirected to GitHub to sign in. If so, enter your GitHub credentials.

1. When the list of repositories appears, select your desired sample app repository.

1. Azure Pipelines will analyze your repository and recommend a suitable pipeline template.

#### [Java](#tab/java)

Select the **Maven** template that builds your Java project and runs tests with Apache Maven.
For more guidance, follow the steps mentioned in [Build your Java app with Maven](java.md) for creating a build to deploy to Linux.

#### [JavaScript](#tab/java-script)

Select the **Node.js** template that builds a general Node.js project with npm.
Follow the steps mentioned in [Build your Node.js app with gulp](javascript.md) for creating a build to deploy to Linux.

 Select **Save and run**, then select **Commit directly to the master branch**, and then choose **Save and run** again.

1. A new run is started. Wait for the run to finish.

[!INCLUDE [include](../_shared/get-status-badge.md)]

[!INCLUDE [include](../_shared/create-first-pipeline-next-steps.md)]

* * * 

## Define CD steps to deploy to the Linux VM
1. Edit the above pipeline and include a [deployment job](../process/deployment-jobs.md) by referencing the [Environment and the VM resource] in a pipeline YAML as below:
```YAML
jobs:  
  - deployment: VMDeploy
    displayName: web
    environment:
      name:  <environment name>
      resourceType: VirtualMachine
      tags: web1
    strategy:
```
2. You can select specific sets of virtual machines from the environment to receive the deployment by specifying the **tags** that you have defined for each virtual machine in the environment.
[Here](https://docs.microsoft.com/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema#deployment-job) is the complete YAML schema for Deployment job.

3. Below is an example of the YAML snippet that you can copy paste to define a rolling strategy for Virtual machines updates upto 5 targets in each iteration. `maxParallel` will determine the number of targets that can be deployed to, in parallel. The selection accounts for absolute number or percentage of targets that must remain available at any time excluding the targets that are being deployed to. It is also used to determine the success and failure conditions during deployment.

```YAML
jobs: 
- deployment: VMDeploy
  displayName: web
  environment:
    name: smarthotel-dev
    resourceType: VirtualMachine
  strategy:
    rolling:
      maxParallel: 5  #for percentages, mention as x%
      preDeploy:
        steps:
        - download: current
          artifact: drop
        - script: echo initialize, cleanup, backup, install certs
      deploy:
        steps:
        - task: IISWebAppDeploymentOnMachineGroup@0
          displayName: 'Deploy application to Website'
          inputs:
            WebSiteName: 'Default Web Site'
            Package: '$(Pipeline.Workspace)/drop/**/*.zip'
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
