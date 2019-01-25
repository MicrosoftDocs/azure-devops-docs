---
title: Build your GCC C/C++ app
ms.custom: seodec18
description: Learn how you can use continuous integration in Azure Pipelines or Team Foundation Server (TFS) to automatically build your GCC C/C++ app.
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 73a50551-0c2c-4d62-b582-6ba7ba51509e
ms.manager: jillfra
ms.author: dastahel
ms.date: 04/18/2018
ms.topic: quickstart
monikerRange: '>= tfs-2017'
---

# Build your GCC C/C++ app

**Azure Pipelines | TFS 2018 | TFS 2017.2**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

Azure Pipelines and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) pipeline to automatically build your C/C++ application whenever your team pushes or checks in code. In this quickstart you learn how to define your CI pipeline for a C/C++ application compiled with GCC/g++.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use an Azure DevOps organization, you can also use a TFS server instead of an Azure DevOps organization. Make sure that you have [configured a build agent](../../agents/agents.md) for your project, and that you have GCC installed on the agent machine.

## Get sample app code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/adventworks/cpp-gpp-sample
```

# [Azure Repos or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build pipeline.

 # [Azure Repos or TFS repo](#tab/vsts)

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to **Azure Pipelines** and asked to **Select a template** for the new build pipeline.

 # [GitHub repo](#tab/github)

 Navigate to the **Builds** tab in Azure Pipelines or TFS, and then click **+ New**. You are asked to **Select a template** for the new build pipeline.

 ---

1. In the right panel, select **Empty**, and then click **Apply**. This template allows starting from scratch and adding your own build tasks.

1. For the **Agent pool**:

 * **Azure Pipelines:** Select _Hosted Ubuntu 1604_ or _Hosted macOS_. This uses an Azure Pipelines pool of agents that have the software needed to build your app.

 * **TFS:** Select a pool that includes a [Linux or macOS build agent](../../agents/agents.md).

1. Click **Get sources** and then:

 # [Azure Repos or TFS repo](#tab/vsts)

 Observe that the new build pipeline is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 Select your version control repository. You'll need to authorize access to your repo.

1. Click the **+** icon on **Job 1** of the build and then:

::: moniker range=">= tfs-2018"

  ### Azure Pipelines and TFS 2018

  1. Search for the **Shell Script** task and click **Add** to add it to your build.

  1. Click the **Shell Script** task and set its field values as follows:

      Field   | Value
      ------- | -----
      Version | `3.*` or later
      Type    | `Inline`
      Script  | `make`

::: moniker-end

::: moniker range="tfs-2017"

  ### TFS 2017.2

  1. Search for the **Command Line** task and click **Add** to add it to your build.

  1. Click the **Command Line** task and set its field values as follows:

      Field        | Value
      ------------ | -----
      Display name | `Build C++ application`
      Tool         | `make`

::: moniker-end

  ### Finish

1. Click the **Triggers** tab and enable the **Continuous Integration** trigger. This will ensure that the build pipeline is automatically triggered every time you commit a change to your repository.

1. Click **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build pipeline for your Git repo](#)

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Publish your build output

Add the [Copy Files](../../tasks/utility/copy-files.md) and [Publish Build Artifacts](../../tasks/utility/publish-build-artifacts.md) tasks to your build to save its compiled output as a build artifact.

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps.md)]
