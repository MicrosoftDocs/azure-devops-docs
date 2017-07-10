---
title: Build your Java app with Maven
description: Define a CI process that builds your Java project with Maven on Team Foundation Server and Visual Team Services.
ms.prod: vs-devops-alm
ms.technology: vs-devops-build
ms.topic: get-started-article
ms.assetid: C339FAF9-A960-4A3A-9A8A-ADCD39C2703D
ms.manager: douge
ms.author: alewis
ms.date: 08/04/2016
---

# Build your Java app with Maven

[!INCLUDE [temp](../_shared/version.md)]

After you've deployed an [agent](../concepts/agents/agents.md), you are ready to define a CI build that compiles your Java app with Maven whenever your team checks in code.


## Upload your code

If you haven't already, upload your code to [GIT](../../git/share-your-code-in-git-eclipse.md) or [TFVC](../../tfvc/share-your-code-in-tfvc-eclipse.md).

[!INCLUDE [temp](../apps/_shared/java-web-app-sample-link.md)]

## Create the definition

0. Create the build definition.

 ![Build tab](../_shared/_img/web-portal-build-tab.png)

 ![New Java build](_img/java-maven/new-java-build-from-definition-templates.png)

0. Specify the code you want to build and select the continuous integration (CI) trigger.

 ![CI trigger](../_shared/_img/create-new-build-definition-settings-repository-git-ci.png)

0. If your project builds with Maven, add the Maven build step. Otherwise add the build step your team uses.

 ![Add build step](_img/java-maven/add-build-step.png)

 ![Add Maven build step](_img/java-maven/add-build-step-maven.png)

0. Provide the path to your Maven POM file.

 ![Maven build step](_img/java-maven/maven-build-step.png)

0. Select the continuous integration (CI) trigger and specify the code you want to build.

 ![CI trigger](../_shared/_img/build-trigger-ci-master-batch.png)

0. Save the definition.

 ![Save button](../_shared/_img/build-definition-save-button.png)

 ![Save the build](../_shared/_img/BldSave.png)

0. Queue your new definition to make sure it works.

 ![Queue the build](_img/java-maven/queue-build-dialog-box-with-hosted.png)

 ![Completed build](_img/java-maven/eclipse-build-completed.png)

Your team now has a CI build to validate every change checked into your codebase!

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../apps/_shared/java-web-app-sample-qa.md)]


### Can I deploy my app to Azure?

[Deploy Java to Azure](../apps/java/maven-to-azure.md)


[!INCLUDE [temp](../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../_shared/qa-agents.md)]

[!INCLUDE [temp](../_shared/qa-versions.md)]

<!-- ENDSECTION -->
