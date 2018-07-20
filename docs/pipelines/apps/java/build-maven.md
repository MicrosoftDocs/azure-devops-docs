---
title: CI build for a Java app with Maven
description: Define a continuous integration (CI) build process for your Java app with Maven in VSTS or Team Foundation Server
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: C339FAF9-A960-4A3A-9A8A-ADCD39C2703D
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.reviewer: dastahel
ms.date: 04/18/2018
monikerRange: '>= tfs-2017'
---

# Build your Java app with Maven

**VSTS | TFS 2018 | TFS 2017.2**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) provide a highly customizable continuous integration (CI) process to automatically build your Java application whenever your team pushes or checks in code. In this quickstart you learn how to define your CI process.

## Prerequisites

[!INCLUDE [include](../../_shared/ci-cd-prerequisites-vsts.md)]

* While the simplest way to try this quickstart is to use a VSTS organization, you can also use a TFS server instead of a VSTS organization.

## Get sample app code

[!INCLUDE [include](../_shared/get-sample-code-intro.md)]

```
https://github.com/Adventworks/java-sample
```

# [VSTS or TFS repo](#tab/vsts)

[!INCLUDE [include](../_shared/get-sample-code-vsts-tfs-2017-update-2.md)]

# [GitHub repo](#tab/github)

[!INCLUDE [include](../_shared/get-sample-code-github.md)]

---

The sample app in this repository is a Java servlet using JavaServer Pages (JSP). Tests for the application are written using JUnit. A Maven POM file is used to build, test, and package the application into a web archive (.war) file.

## Set up continuous integration

[!INCLUDE [include](../../_shared/ci-quickstart-intro.md)]

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build pipeline.

 # [VSTS or TFS repo](#tab/vsts)

 Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

 ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

 You are taken to the **Build and Release** hub and asked to **Select a template** for the new build pipeline.

 # [GitHub repo](#tab/github)

 Navigate to the **Builds** tab of the **Build and Release** hub in VSTS or TFS, and then click **+ New**. You are asked to **Select a template** for the new build pipeline.

 ---

1. In the right panel, search for `java`, select **Maven**, and then click **Apply**.

 You now see all the tasks that were automatically added to the build pipeline by the template. These are the steps that will automatically run every time you push code changes.

1. For the **Agent queue**:

 * **VSTS:** Select _Hosted Linux_, _Hosted macOS_, or _Hosted VS2017_. This will use a Microsoft-hosted agent with the Java Development Kit (JDK) installed.

 * **TFS:** Select a queue that includes an agent with the Java Development Kit (JDK) and Maven installed.

1. Click **Get sources** and then:

 # [VSTS or TFS repo](#tab/vsts)

 Observe that the new build pipeline is automatically linked to your repository.

 # [GitHub repo](#tab/github)

 Select your version control repository. You'll need to authorize access to your repo.

 ---

1. Click the **Triggers** tab in the build pipeline. Enable the **Continuous integration** trigger. This will ensure that the build process is automatically triggered every time changes are pushed to your repository.

1. Click **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, click **Save & queue**.

1. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build process for your Git repo](#)

## View the build summary

[!INCLUDE [include](../_shared/view-build-summary.md)]

## Next steps

[!INCLUDE [include](../_shared/ci-web-app-next-steps.md)]
