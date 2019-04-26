---
title: Use SonarQube with Azure DevOps Services
description: Learn how to use SonarQube with Azure DevOps Services for Java development
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.custom: java
ms.manager: jillfra
ms.author: dastahel
author: davidstaheli
ms.date: 01/22/2018
monikerRange: '>= tfs-2017'
---


# Use SonarQube with Azure DevOps or Team Foundation Server (TFS) for Java development

Configure an Azure DevOps Services or TFS Maven or Gradle build task to use SonarQube for code project and technical debt analysis.

## Prerequisites

 - You have a Team Foundation team project available. If you don't, check out our [Azure DevOps Projects for Java topic](/azure/devops-project/azure-devops-project-java).
 - You have an existing Maven or Gradle build task.
 - You have a [SonarQube server](https://docs.sonarqube.org/display/SONAR/Installing+the+Server) set up to use.

## About SonarQube

[SonarQube](http://www.sonarqube.org/) is a set of static analyzers that can be used to identify areas of improvement in your code. It allows you to analyze the technical debt in your project and keep track of it in the future. With Maven and Gradle build tasks, you can run SonarQube analysis with minimal setup in a new or existing Azure DevOps Services build task.

## Creating a SonarQube endpoint

To use your SonarQube server, you need to setup an endpoint connection under the **Services** tab in the **Control Panel** menu. For explicit instructions on how to configure your SonarQube endpoint, follow the instructions outlined in [the SonarQube Azure DevOps Services documentation](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Extension+for+vsts-TFS) for configuring the new build task.

## Enabling SonarQube analysis

After setting up a [Maven build task](/azure/devops/pipelines/tasks/build/maven) or a [Gradle build task](/azure/devops/pipelines/tasks/build/gradle) for your repository, you can enable SonarQube analysis by selecting the option under the **Code Analysis** option in the task. Both build tasks will require you to select a SonarQube endpoint which you should have already configured. Additional information such as project name and project key may be needed depending on the task.

> [!div class="mx-imgBorder"]
![Azure DevOps Services VSCode extension login indicator](_img/sonarqube-menu.png)

> [!NOTE]
> SonarQube support for Maven is currently available for Azure DevOps Services or TFS 2015 Update 1 or later.
>
> SonarQube support for Gradle is currently available for Azure DevOps Services and TFS 2017 or later.

## Frequently Asked Questions (FAQ)

**Q: What versions of TFS support SonarQube analysis in builds?**

**A:** At this moment, SonarQube analysis is available for both Maven and Gradle build tasks on Azure DevOps Services. Additionally, it is also present for the Maven build task in TFS 2015 Update 1 or later.








