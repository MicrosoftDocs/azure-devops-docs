---
title: Publish a Maven artifact using Gradle and Azure DevOps Services
description: Publish a Maven artifact using Gradle in an Azure DevOps Services build
ms.prod: devops
ms.technology: devops-artifacts
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.reviewer: dastahel
ms.topic: conceptual
ms.date: 01/31/2018
monikerRange: '>= tfs-2018'
---


# Publish a Maven artifact using Gradle

**Azure DevOps Services** | **TFS 2018**

This topic covers creating and publishing a Maven artifact with Gradle using Azure DevOps Services.

## Prerequisites

Before you start, [install the Gradle build tool](https://gradle.org/install/). Note that Gradle itself requires a prior installation of the Java JDK or JRE (version 7 or later). You can [get the Java JDK here](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

From a command prompt, verify that you have the Java JDK or JRE version 7 or later:

```cli
java -version
```

And then install Gradle. Once it completes, confirm the installation from a command prompt:

```cli
gradle -v
```

You're ready to start! This tutorial will guide you through the process of publishing a Maven artifact using Gradle.

> [!NOTE]
> This topic assumes you have cloned your Git repo to your local machine. If you aren't sure how to clone your repo, read [Clone a repo](/azure/devops/repos/git/clone).

## Set up authentication

First, you need a **gradle.properties** file that contains an Azure DevOps Services credential token.

::: moniker range=">= azure-devops-2019"

Navigate to `https://dev.azure.com/{yourOrganization}/_usersSettings/tokens`, where `{yourOrganization}` is the name of your organization.

Click **+ New Token**.

Give your token a name, duration, and select the **Packaging (read and write)** scope. 

> You may have to choose "Show all scopes" at the bottom to see the Packaging area.

![Create packaging personal access token](../_shared/_img/create-packaging-pat.png)

Click **Create**.

::: moniker-end

::: moniker range="<= tfs-2018"

Navigate to `https://dev.azure.com/{yourOrganization}/_usersSettings/tokens`, where `{yourOrganization}` is the name of your organization.

Click **Add**.

![Add a personal access token](_img/add-pat.png)

Give your new token a name and a duration. 

Select the **Packaging (read and write)** scope.

![Select a token scope](_img/select-scope.png)

::: moniker-end

The token will be a long alphanumeric string, like "lzitaoxppojf6smpl2cxdoxybepfxfetjvtkmcpw3o6u2smgebfa". Copy this string and treat it securely.

Now, go to the `.gradle` folder under the Gradle installation root directory. Typically, this is `%INSTALLPATH%/gradle/user/home/.gradle/`. In that folder, create a file named **gradle.properties**. 

Open the **gradle.properties** file with a UTF-8-capable text editor and add the following:
```ini
vstsMavenAccessToken=YOUR_TOKEN_HERE
```

Where *YOUR_TOKEN_HERE* is the token string you created previously. Save the file when you're done.

## Configure build.gradle 

Create a file called **build.gradle** in the root of your cloned (local) repo. Open it with a UTF-8-capable text editor and add the following code:

```groovy
apply plugin: 'java' 
apply plugin: 'maven-publish' 
 
publishing { 
    publications { 
        myPublication(MavenPublication) { 
            groupId '{your-group-ID-here}' 
            artifactId '{your-artifact-id-here}' 
            version '{your-version-number-here}' 
            artifact '{path-to-your-JAR-file-here}' 
        } 
    } 

    // Repositories *to* which Gradle can publish artifacts 
    repositories { 
        maven { 
            url 'https://pkgs.dev.azure.com/{yourOrganizationName}/_packaging/{yourProjectName}' 
            credentials { 
                username "Azure DevOps Services" 
                //The Azure DevOps Services build system will use the "SYSTEM_ACCESSTOKEN" to authenticate to Azure DevOps Services feeds 
                password System.getenv("Azure DevOps Services_ENV_ACCESS_TOKEN") != null ? System.getenv("Azure DevOps Services_ENV_ACCESS_TOKEN") : vstsMavenAccessToken 
            } 
        } 
    } 
} 
 
// Repositories *from* which Gradle can download dependencies; it's the same as above in this example
repositories { 
    maven { 
        url 'https://pkgs.dev.azure.com/{yourOrganizationName}/_packaging/{yourProjectName}' 
        credentials { 
            username "Azure DevOps Services" 
            //The Azure DevOps Services build system will use the "SYSTEM_ACCESSTOKEN" to authenticate to Azure DevOps Services feeds 
            password System.getenv("Azure DevOps Services_ENV_ACCESS_TOKEN") != null ? System.getenv("Azure DevOps Services_ENV_ACCESS_TOKEN") : vstsMavenAccessToken 
        } 
    } 
} 
```
In the above example, you are publishing artifacts and downloading dependent artifacts from the same organization. You can configure
publishing and downloading to use separate organizations, if you prefer.

Replace the following fields with your own values:

- `groupId`: A group ID you associate with your artifact. Give it a team or organization name so consumers can identify the origin easier.
- `artifactId`: An artifact ID used when publishing your artifact. Again, give it a meaningful name that aptly describes the intent of the APIs in the artifact.
- `version`: The version of the artifact you're publishing. Update this when you've made changes.
- `artifact`: The path from the root of the repo to the JAR file that is the artifact to publish. For example, *./target/myJavaClasses.jar*.


## Publish your Gradle artifact

From a command prompt, run:

```cli
gradle publish
```

Your new artifact name is `groupId:artifactId`.
