---
title: Publish a Maven artifact using Gradle
description: How to publish Maven artifacts using Gradle 
ms.technology: devops-artifacts
ms.topic: conceptual
ms.date: 05/08/2023
ms.author: rabououn
author: ramiMSFT
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish Maven artifacts using Gradle

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, you will learn how to connect to an Azure Artifacts feed and publish Maven artifacts using Gradle.

## Prerequisites

- An Azure DevOps organization. [Create an organization](../organizations/accounts/create-organization.md), if you don't have one already.

- An Azure Artifacts feed. [Create a feed](./concepts/feeds.md#create-public-feeds.) if you don't have one already.

- Download and install [Gradle](https://docs.gradle.org/current/userguide/installation.html).

- Install [Java SE](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

## Project setup

Before setting up your project, ensure that you have installed Gradle and added the Maven Settings plugin to your *build.gradle* file as follows:

```
plugins {
  id "net.linguica.maven-settings" version "0.5"
}
```

### Create a personal access token

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **User settings**, and then select **Personal access tokens**.

    :::image type="content" source="media/create-pat.png" alt-text="Screenshot showing how to create a personal access token":::

1. Select **New Token**, and then fill out the required fields. Make sure you select the **Packaging** > **Read & write** scope.

    :::image type="content" source="media/create-packaging-pat.png" alt-text="Screenshot showing how to create a new personal access token.":::  

1. Select **Create** when you are done. Copy your token and save it in a secure location.






1. Create a new file in your *.gradle* folder and name it **gradle.properties**. The path to your gradle folder is usually in `%INSTALLPATH%/gradle/user/home/.gradle/`.

6. Open the **gradle.properties** file with a text editor and add the following snippet:

    ```
    vstsMavenAccessToken=<PASTE_YOUR_PERSONAL_ACCESS_TOKEN_HERE>
    ```

7. Save your file when you are done.