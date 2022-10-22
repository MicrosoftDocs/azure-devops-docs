---
title: Build your GCC C/C++ app
ms.custom: seodec18
description: Learn how you can use continuous integration in Azure Pipelines to automatically build your GCC C/C++ app.
ms.assetid: 73a50551-0c2c-4d62-b582-6ba7ba51509e
ms.date: 04/04/2022
ms.topic: quickstart
monikerRange: '<= azure-devops'
---

# Build your GCC C/C++ app

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]


::: moniker range="tfs-2018"
[!INCLUDE [temp](../../includes/concept-rename-note.md)]
::: moniker-end

Azure Pipelines provides a highly customizable continuous integration (CI) pipeline to automatically build your C/C++ application whenever your team pushes or checks in code. In this quickstart you learn how to define your CI pipeline for a C/C++ application compiled with GCC/g++.

## Prerequisites

* You need an Azure DevOps organization. If you don't have one, you can [create one for free](https://go.microsoft.com/fwlink/?LinkId=307137). If your team already has one, then make sure you're an administrator of the Azure DevOps project that you want to use.  (An Azure DevOps organization is different from your GitHub organization. Give them the same name if you want alignment between them.)

* While the simplest way to try this quickstart is to use an Azure DevOps organization, you can also use a TFS server instead of an Azure DevOps organization. Make sure that you have [configured a build agent](../../agents/agents.md) for your project, and that you have GCC installed on the agent machine.

## Get sample app code

[!INCLUDE [include](../includes/get-sample-code-intro.md)]

```
https://github.com/adventworks/cpp-gpp-sample
```

# [Azure Repos](#tab/vsts)

[!INCLUDE [include](../includes/get-sample-code-repos-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../includes/get-sample-code-github.md)]

---

## Set up continuous integration

[!INCLUDE [include](../../includes/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build pipeline.

   # [Azure Repos or TFS repo](#tab/vsts)

   Under the **Build and Release** menu, select **Builds** then **New** to create a new build definition.

   :::image type="content" source="../media/set-up-first-build.png" alt-text="Create a new build definition for a repository":::

   Select a source and chose your team project, repository, and default branch then select **Continue**.
    
   **Select a template** or start with an **Empty process** to create your build pipeline.

   # [GitHub repo](#tab/github)

   Navigate to the **Builds** tab in Azure Pipelines or TFS, and then click **+ New**. You are asked to **Select a template** for the new build pipeline.

   ---

2. In the right panel, select **Empty**, and then click **Apply**. This template allows starting from scratch and adding your own build tasks.

3. For the **Agent pool**:

   * **Azure Pipelines:** Select _Hosted Ubuntu 1604_ or _Hosted macOS_. This uses an Azure Pipelines pool of agents that have the software needed to build your app.

   * **TFS:** Select a pool that includes a [Linux or macOS build agent](../../agents/agents.md).

4. Click **Get sources** and then:

   # [Azure Repos or TFS repo](#tab/vsts)

   Observe that the new build pipeline is automatically linked to your repository.

   # [GitHub repo](#tab/github)

   Select your version control repository. You'll need to authorize access to your repo.

5. Click the **+** icon on **Job 1** of the build and then:

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

  ### Finish

1. Click the **Triggers** tab and enable the **Continuous Integration** trigger. This will ensure that the build pipeline is automatically triggered every time you commit a change to your repository.

1. Click **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build pipeline for your Git repo](#)

## View the build summary

[!INCLUDE [include](../includes/view-build-summary.md)]

## Publish your build output

Add the [Copy Files](../../tasks/utility/copy-files.md) and [Publish Build Artifacts](../../tasks/utility/publish-build-artifacts.md) tasks to your build to save its compiled output as a build artifact.

## Next steps

[!INCLUDE [include](../includes/ci-web-app-next-steps.md)]
