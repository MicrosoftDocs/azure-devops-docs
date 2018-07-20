---
title: CI build for a Node.js app with Gulp
description: Learn how you can define a continuous integration (CI) build process for your Node.js app with Gulp in VSTS or Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: F0829366-2AC1-4344-9494-98CACEC38806
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 04/18/2018
monikerRange: '>= tfs-2017'
---

# Build your Node.js app with Gulp

**VSTS | TFS 2018 | TFS 2017.3**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

Follow these steps to set up a continuous integration (CI) process for a Node.js app using Visual Studio Team Services (VSTS) or Team Foundation Server (TFS).

As you walk through this quickstart, we'll ask you to choose:

* Which kind of Git service you're using: VSTS or TFS, or GitHub.

* How you want to define your build: in a web interface, or configured as code in YAML

* For continuous deployment, what is your target: Azure web app or IIS server in a Windows VM, a Linux VM, or a Docker container.

As you choose from these options in the sections below, this topic will adapt to your choices.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS organization, you can also use a TFS server instead of a VSTS organization. Make sure that you have [configured a build agent](../../agents/v2-windows.md) for your project, and that you have Node and Gulp installed on the agent machine.

## Get the sample code

The sample app we use here is a Node server that echoes "Hello world". Tests for the app are written using mocha framework. A gulp file is used to run the tests and to convert the results into junit format so that they can be published to VSTS or TFS.

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/nodejs-sample
```

Where do you want to keep your code? Whichever service you choose, our system can automatically clone and pull code from it every time you push a change.

# [VSTS or TFS Git repo](#tab/gitvsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

[!INCLUDE [include](../_shared/get-sample-code-other-repos-vsts.md)]

[//]: # (TODO: report and get fix for build warning "All tabs are hidden in the tab group." [!INCLUDE [include](../../_shared/web-or-yaml.md)

## Web or config as code

Do you want to define your build process in your web browser or configure it as code in YAML?

# [Web](#tab/web)

**VSTS | TFS**

Choose this option if you prefer a graphical interface in your web browser.

![PowerShell script task says "Hello World"](../../_shared/_img/powershell-script-hello-world.png)

# [YAML](#tab/yaml)

**VSTS**

Choose this option if you want the advantages of configuration as code. This means your pipeline is versioned with your code and follows the same branching structure as your code. 

```YAML
steps:
- script: echo hello world 
```

[Learn more about YAML builds](../../build/yaml.md).

---

## Create the CI process pipeline

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

Begin by creating your build pipeline.

# [VSTS or TFS repo](#tab/gitvsts/web)

1. Navigate to the **Files** tab of the **Code** hub, and then choose **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build and Release** hub and asked to **Select a template** for the new build pipeline.

1. In the right panel, search for `node`, select **NodeJS with Gulp**, and then click **Apply**.

 ![apply node.js gulp template](_img/apply-nodejs-gulp-template.png)

# [VSTS or TFS repo](#tab/gitvsts/yaml)

To create a pipeline that is configured as code, you'll modify a YAML file in the repo root that has a well-known name: **.vsts-ci.yml**. The first time you change this file, VSTS automatically uses it to create your build pipeline.

1. Navigate to the **Code** hub, choose the **Files** tab, and then choose the repository you created in the above steps.

1. Choose the **.vsts-ci.yml** file, and then choose **Edit**.

1. Replace the contents of the file with code from the next section.

# [GitHub repo](#tab/github/web)

In VSTS:

1. Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then choose **+ New**. You're asked to **Select a template** for the new build pipeline.

1. In the right panel, search for `node`, select **NodeJS with Gulp**, and then click **Apply**.

 ![apply node.js gulp template](_img/apply-nodejs-gulp-template.png)

# [GitHub repo](#tab/github/yaml)

To create a pipeline that is configured as code, you'll modify a YAML file in the repo root that has a well-known name: **.vsts-ci.yml**. You'll then create a build pipeline that points to the YAML file.

In GitHub:

1. Edit the **.vsts-ci.yml** file in the root of your repo, and replace the contents of the file with code from the next section.

---

<a name="deploy"></a>
## Choose your deployment target

While a CI build process is a powerful way to do day-to-day development, continuous deployment is how many teams accelerate how they deliver value to customers. After each successful CI build, you can automatically deploy your app. 

To get ready for continuous deployment, choose which kind of deployment target you want, and then adjust your CI process as needed.

# [Azure web app or IIS server](#tab/deploy-windows/web)

All the tasks you need were automatically added to the build pipeline by the template. These are the tasks that will automatically run every time you push code changes.

Select **Tasks**. Select the **Run gulp** task from the tasks. On the right side, you see the parameters for the task. Under the section JUnit Test Results, make sure the option to **Publish to TFS/VSTS** is selected.

Proceed to finish the CI process pipeline.

# [Azure web app or IIS server](#tab/deploy-windows/yaml)

```yaml
steps:

- task: Npm@1
  displayName: npm install

- task: Gulp@0
  inputs:
    publishJUnitResults: "true"
  displayName: Gulp

- task: ArchiveFiles@1
  inputs:
    rootFolder: "$(System.DefaultWorkingDirectory)"
    includeRootFolder: "false"
  displayName: Zip up the files

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: $(Build.ArtifactStagingDirectory)
    ArtifactName: "drop"
    ArtifactType: "Container"
  displayName: Publish the artifacts
```

Commit the above change to the master branch.

# [Linux VM](#tab/deploy-linux/web)

To prepare your CI build to deploy to a Linux VM:

1. Select **Tasks**.

1. Select the **Run gulp** task from the tasks. On the right side, you see the parameters for the task. Under the section JUnit Test Results, make sure the option to **Publish to TFS/VSTS** is selected.

Change your CI build to upload files in unzipped form:

1. Select the **Archive files** task, and then disable or remove it.

1. Select the **Publish build artifacts** task, and then change the **Path to publish** argument to `$(Build.SourcesDirectory)`.
   
> **Why do this?** 
By default, the build template creates a .ZIP file for deploying to an Azure Web App or a Windows VM.
This change causes the build to publish a set of uncompressed files and folders suitable for deployment to a Linux VM running the nginx web server.

# [Linux VM](#tab/deploy-linux/yaml)

```yaml
steps:

- task: Npm@1
  displayName: npm install

- task: Gulp@0
  inputs:
    publishJUnitResults: "true"
  displayName: Gulp

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: $(Build.SourcesDirectory)
    ArtifactName: "drop"
    ArtifactType: "Container"
  displayName: Publish the artifacts
```

Commit the above change to the master branch.

# [Container](#tab/deploy-container/web)

To deploy to a container service (such as Azure web apps for containers, or a Kubernetes cluster):

1. Select **Tasks**.

1. Select the **Run gulp** task from the tasks. On the right side, you see the parameters for the task. Under the section JUnit Test Results, make sure the option to **Publish to TFS/VSTS** is selected.

Disable the zipping and uploading of artifacts: 

1. Select the **Archive files** task, and then disable or remove it.

1. Select the **Publish build artifacts** task, and then disable or remove it.

> **Why do this?** 
You don't need artifacts to deploy to a container.

# [Container](#tab/deploy-container/yaml)

```yaml
steps:

- task: Npm@1
  displayName: npm install

- task: Gulp@0
  inputs:
    publishJUnitResults: "true"
  displayName: Gulp
```

Commit the above change to the master branch.

---

## Finish the CI process pipeline

You're nearly ready to go. Just a few more steps to complete your CI build process.

# [VSTS or TFS repo](#tab/gitvsts/web)

1. For the **Agent queue**:

 * **VSTS:** Select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build your app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../agents/v2-windows.md).

1. Select **Get sources** and then:

 Observe that the new build pipeline is automatically linked to your repository.

1. Select the **Triggers** tab in the build pipeline. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Choose **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, choose **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Choose the link to watch the new build as it happens.

# [VSTS or TFS repo](#tab/gitvsts/yaml)

1. Navigate to the **Build and Release** hub.

1. Observe that there's a new build pipeline named _{name-of-your-repo} YAML CI_. A build is queued; its status could be either not started or running. Choose the number of the build: _{year}{month}{day}.1_.

1. In the left column of the running build, select **Job**. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

# [GitHub repo](#tab/github/web)

1. For the **Agent queue**:

 * **VSTS:** Select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build your app.

 * **TFS:** Select a queue that includes a [Windows build agent](../../agents/v2-windows.md).

1. Select **Get sources** and then:

 Select your version control repository. You'll need to authorize access to your repo.

1. Select the **Triggers** tab in the build pipeline. Enable the **Continuous Integration** trigger. This will ensure that the build process is automatically triggered every time you commit a change to your repository.

1. Choose **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, choose **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Choose the link to watch the new build as it happens.

# [GitHub repo](#tab/github/yaml)

In VSTS:

1. Navigate to the **Builds** tab of the **Build and Release** hub, and then choose **+ New**. You're asked to **Select a template** for the new build pipeline.

1. Select **YAML**, and then select **Apply**.

1. Select **Get sources**, select **GitHub**, and then select your version control repository. You'll need to authorize access to your repo.

1. Select **Process**.

1. For the **Agent queue** select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build your app.

1. For the **Yaml path**, select the **.vsts-ci.yml** file in the root of your repo.

1. Select the **Triggers** tab, and then enable continuous integration (CI).

1. Save and queue the build, and then choose the number of the build: _{year}{month}{day}.1_ that has been queued.

1. In the left column of the running build, select **Job**. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

[//]: # (TODO: Add link to GitHub tutorial after advice is added there on authentication)

---

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

You've just put your own CI build process in place to automatically build and validate whatever code is checked in by your team. What do you want to do next?

### Deploy your app

# [Azure web app or IIS server](#tab/deploy-windows)

> [!IMPORTANT]
> Make sure you followed the **[deployment instructions above](#deploy)** with the **Azure web app or IIS server** tab selected.

See one of the following:

* [Deploy to Azure Web App](../cd/deploy-webdeploy-webapps.md)

* [Deploy to a Windows VM](../cd/deploy-webdeploy-iis-deploygroups.md)

# [Linux VM](#tab/deploy-linux)

> [!IMPORTANT]
> Make sure you followed the **[deployment instructions above](#deploy)** with the **Linux** tab selected.

See [Deploy to a Linux Virtual Machine](../cd/deploy-linuxvm-deploygroups.md).

# [Container](#tab/deploy-container)

> [!IMPORTANT]
> Make sure you followed the **[deployment instructions above](#deploy)** with the **Container** tab selected.

See [Build and push a Docker image](../../languages/docker.md).

---

### Extend to other Git workflows

Now that you have a CI build process for your master branch, you can extend the process to work with other branches in your repository, or to validate all pull requests. See:

* [CI builds for Git in VSTS](../../build/ci-build-git.md)

* [CI builds for GitHub](../../build/ci-build-github.md)
