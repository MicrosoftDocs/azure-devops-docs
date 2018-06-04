---
title: Build a repo with YAML file
description: Set up CI for a repo containing a YAML file
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: 5A8F1A12-72BF-4985-9B27-65CBC08462F7
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 5/10/2018
monikerRange: 'vsts'
---

# Build a repo with YAML file

If you manage your code in GitHub or in Visual Studio Team Services (VSTS) Git, then you can use VSTS pipelines to easily build the repo by adding a YAML file to it. VSTS pipelines can be used to automate continuous integration (CI) for an application written in any programming language.

## Prerequisites

[!INCLUDE [include](_shared/ci-cd-prerequisites-vsts.md)]

## Get the sample code

Choose the sample application for the language of your choice from one of the following repositories.

| Programming language | Repository with sample application |
|----------------------|----------------------------|
| .NET Core | `https://github.com/adventworks/dotnetcore-sample` |
| Android | `https://github.com/adventworks/android-sample` |
| Go | `https://github.com/adventworks/go-sample` |
| Java | `https://github.com/adventworks/java-sample` |
| JavaScript | `https://github.com/adventworks/nodejs-sample` |
| PHP | `https://github.com/adventworks/php-sample` |
| Python | `https://github.com/adventworks/python-sample` |

Get the code for the sample application into your own GitHub or VSTS repository.

# [VSTS Git repo](#tab/gitvsts)

[!INCLUDE [include](apps/_shared/get-sample-code-vsts.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](apps/_shared/get-sample-code-github.md)]

---

## Get your first build

# [VSTS Git repo](#tab/gitvsts)

1. In VSTS, navigate to the **Code** hub, choose the **Files** tab, and then choose the repository you created in the above steps.

1. Inspect the `.vsts-ci.yml` file at the root of your imported repository. The YAML file contains the instructions for the build process. Here's an example snippet from a Gradle build definition. The actual content in your file depends on the sample application you chose.

  ```yaml
  queue: 'Hosted VS2017'

  steps:  
  - task: Gradle@2
    inputs:
      gradleWrapperFile: 'gradlew'
      testResultsFiles: '**/TEST-*.xml'
      tasks: 'build'
  ```
    
  The next time you change any file in this repository, VSTS automatically builds your code.

1. Go back to the list of files and select the **Readme.md** file, and then choose **Edit**.

1. Add the following comment:

  ```
  # This repository is built using VSTS.
  ```
  
1. Commit the above change to the master branch.

1. Navigate to the **Build and Release** hub.

1. Observe that there's a new build pipeline named _{name-of-your-repo} YAML CI_. A build is queued; its status could be either not started or running. Choose the number of the build: _{year}{month}{day}.1_.

1. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

# [GitHub repo](#tab/github)

In VSTS:

1. Navigate to the **Builds** tab of the **Build and Release** hub, and then choose **+ New Build Pipeline**.

1. You're asked to **Select a repository** for the new build pipeline. Select **GitHub**, and then select your  repository. You'll need to authorize access to your repo via a GitHub service endpoint.

1. You are then asked to select a template for the pipeline. Select **YAML**, and then select **Apply**.

1. Select **Process**.

1. For the **Agent queue** select _Hosted Linux_. This is how you can use our pool of agents that have the software you need to build your application.

1. For the **Yaml path**, select the **.vsts-ci.yml** file in the root of your repo.

In GitHub:

1. Inspect the `.vsts-ci.yml` file at the root of your forked repository. The YAML file contains the instructions for the build process. Here is a snippet from the file. The contents in your file may be different depending on the sample application you chose.

  ```yaml
  queue: 'Hosted VS2017'

  steps:  
  - task: Gradle@2
    inputs:
      gradleWrapperFile: 'gradlew'
      testResultsFiles: '**/TEST-*.xml'
      tasks: 'build'
  ```

  The next time you change any file in this repository, VSTS Pipelines will automatically build your code.

1. Go back to the list of files and select the **Readme.md** file, and then choose **Edit**.

1. Add the following comment:

  ```
  # This repository is built using VSTS.
  ```
  
1. Commit the above change to the master branch.

Back in VSTS:

1. Observe that a new build is queued; its status could be either not started or running. Choose the number of the build: _{year}{month}{day}.1_.

1. In the left column of the running build, select **Job**. After an agent is assigned to your job and the agent is initialized, then you'll see information about the build in the console.

[//]: # (TODO: Add link to GitHub tutorial after advice is added there on authentication)

---

## View the build summary

[!INCLUDE [include](apps/_shared/view-build-summary.md)]

## Next steps

You've just learned the basics of using YAML to create and run a VSTS build process.
This pipeline automatically builds and validates whatever code is checked in by your team. 
Now you're ready to configure your CI definition for the programming language you're using.

* [.NET Core](apps/aspnet/build-aspnet-core.md)
* [Android](languages/android.md)
* [Go](apps/go/go.md)
* [Java](apps/java/build-gradle.md)
* [JavaScript](apps/nodejs/build-gulp.md)