---
title: Build a repository with YAML
description: Set up CI for a repository containing a YAML file
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 5A8F1A12-72BF-4985-9B27-65CBC08462F7
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 8/03/2018
monikerRange: '> tfs-2018'
---

# Build a repository with YAML

If you manage your code in GitHub or in Azure Repos Git, then you can use Azure Pipelines to easily build the repo by adding a YAML file to it. Azure Pipelines can be used to automate continuous integration (CI) for an application written in any programming language.

> [!NOTE]
> To use YAML you must have the **Build YAML pipelines** [preview feature](../project/navigation/preview-features.md) enabled on your organization.

## Prerequisites

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

## Get the sample code

Choose the sample application for the language of your choice from one of the following repositories.

| Programming language | Repository with a sample application |
|----------------------|----------------------------|
| .NET Core | `https://github.com/MicrosoftDocs/pipelines-dotnet-core` |
| Android | `https://github.com/adventworks/android-sample` |
| Go | `https://github.com/adventworks/go-sample` |
| Java | `https://github.com/adventworks/java-sample` |
| JavaScript | `https://github.com/adventworks/nodejs-sample` |

Get the code for the sample application into your own GitHub or Azure Repos repository.

# [Azure Repos Git repo](#tab/gitvsts)

[!INCLUDE [include](apps/_shared/get-sample-code-vsts.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](apps/_shared/get-sample-code-github.md)]

---

## Get your first build

# [Azure Repos Git repo](#tab/gitvsts)

1. In Azure Repos, navigate to the **Code** hub, choose the **Files** tab, and then choose the repository you created in the above steps.

1. Inspect the `azure-pipelines.yml` file at the root of your imported repository. The YAML file contains the instructions for the build pipeline. Here's an example snippet from a Gradle build pipeline. The actual content in your file depends on the sample application you chose.

  ```yaml
  pool: 'Hosted VS2017'

  steps:  
  - task: Gradle@2
    inputs:
      gradleWrapperFile: 'gradlew'
      testResultsFiles: '**/TEST-*.xml'
      tasks: 'build'
  ```

  The next time you push a change to this YAML file, Azure Pipelines automatically builds your code.

1. Choose **Edit** to make a change to the YAML file.

1. Add the following comment:

  ```
  # This repository is built using Azure Pipelines.
  ```

1. Commit the above change to the master branch.

1. Navigate to the **Pipelines** hub.

1. Observe that there's a new build pipeline named _{name-of-your-repo} YAML CI_. A build is queued; its status could be either not started or running. Choose the number of the build: _{year}{month}{day}.1_.

1. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

# [GitHub repo](#tab/github)

In Azure Pipelines:

1. Navigate to the **Builds** tab of the **Pipelines** hub, and then choose **+ New Build Pipeline**.

1. You're asked to **Select a repository** for the new build pipeline. Select **GitHub**, and then select your  repository. You'll need to authorize access to your repo via a GitHub service connection.

1. You are then asked to select a template for the pipeline. Select **YAML**, and then select **Apply**.

1. Select **Pipeline**.

1. For the **Agent pool** select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build your application.

1. For the **Yaml path**, select the **azure-pipelines.yml** file in the root of your repo.

In GitHub:

1. Inspect the `azure-pipelines.yml` file at the root of your forked repository. The YAML file contains the instructions for the build pipeline. Here is a snippet from the file. The contents in your file may be different depending on the sample application you chose.

  ```yaml
  pool: 'Hosted VS2017'

  steps:  
  - task: Gradle@2
    inputs:
      gradleWrapperFile: 'gradlew'
      testResultsFiles: '**/TEST-*.xml'
      tasks: 'build'
  ```

  The next time you change any file in this repository, Azure Pipelines will automatically build your code.

2. Go back to the list of files and select the **Readme.md** file, and then choose **Edit**.

3. Add the following comment:

  ```
  # This repository is built using Azure Pipelines.
  ```

1. Commit the above change to the master branch.

Back in Azure Pipelines:

1. Observe that a new build is queued; its status could be either not started or running. Choose the number of the build: _{year}{month}{day}.1_.

1. In the left column of the running build, select **Job**. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

[//]: # (TODO: Add link to GitHub tutorial after advice is added there on authentication)

---

## View the build summary

[!INCLUDE [include](apps/_shared/view-build-summary.md)]

## Next steps

You've just learned the basics of using YAML to create and run an Azure Pipelines build pipeline.
This pipeline automatically builds and validates whatever code is checked in by your team.
Now you're ready to configure your CI pipeline for the [programming language you're using](index.md).
