---
title: Publish a Maven artifact using Gradle
description: How to publish a Maven artifact to Azure Artifacts using Gradle 
ms.technology: devops-artifacts
ms.reviewer: dastahel
ms.topic: conceptual
ms.date: 11/16/2021
monikerRange: '>= tfs-2018'
---


# Publish Maven artifacts using Gradle

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017**

This topic covers creating and publishing a Maven artifact to an Azure Artifacts feed with Gradle.

## Prerequisites

- Install [Gradle build tool](https://gradle.org/install/).

- [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html) required for Gradle.

To make sure you have all the prerequisites set up, run the following command in an elevated command prompt to check which Java version is installed on your machine.

```Command
java -version
```

If the above command doesn't return a java version, make sure you go back and install the Java JDK or JRE first. 

To confirm the installation of Gradle, run the following command in an elevated command prompt:

```Command
gradle -v
```

## Set up authentication

::: moniker range=">= azure-devops-2019"

1. Select **User settings**, and then select **Personal access tokens**

    :::image type="content" source="media/create-pat.png" alt-text="Screenshot showing how to create a personal access token":::

1. Select **New Token**, and then fill out the required fields. Make sure you select the **Packaging** > **Read & write** scope. 

:::image type="content" source="media/create-packaging-pat.png" alt-text="Screenshot showing how to create a new personal access token.":::  

1. Select **Create** when you are done.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

1. Select your profile icon, and then select **Security**.

1. Select **New Token**.

1. Name your token and set its expiration date. 

1. Select the **Packaging (Read & write)** scope.

:::image type="content" source="media/select-scope.png" alt-text="Screenshot showing the available scopes for a pat.":::

::: moniker-end

1. Copy your token and save it in a secure location.

1. Create a new file in your `.gradle` folder and name it **gradle.properties**. The path to your gradle folder is usually in `%INSTALLPATH%/gradle/user/home/.gradle/`.

1. Open the **gradle.properties** file with a text editor and add the following snippet:

    ```
    vstsMavenAccessToken=<PASTE_YOUR_PERSONAL_ACCESS_TOKEN_HERE>
    ```

1. Save your file when you are done.

## Create a feed

[!INCLUDE [](../../artifacts/includes/create-feed.md)]

## Configure build.gradle 

1. Create a text file and name it **build.gradle** in the root of your cloned repo. 

1. Open it with a text editor and add the following snippet:

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
                url 'https://pkgs.dev.azure.com/{OrganizationName}/{ProjectName}/_packaging/{FeedName}/maven/v1' 
                credentials { 
                    username "{FeedName}" 
                    password System.getenv("SYSTEM_ACCESSTOKEN") != null ? System.getenv("SYSTEM_ACCESSTOKEN") : vstsMavenAccessToken 
                } 
            } 
        } 
    } 
     
    // Repositories *from* which Gradle can download dependencies; it's the same as above in this example
    repositories { 
        maven { 
            url 'https://pkgs.dev.azure.com/{OrganizationName}/{ProjectName}/_packaging/{FeedName}/maven/v1' 
            credentials { 
                username "{FeedName}" 
                password System.getenv("SYSTEM_ACCESSTOKEN") != null ? System.getenv("SYSTEM_ACCESSTOKEN") : vstsMavenAccessToken 
            } 
        } 
    } 
    ```
    
    In the above example, you are publishing and downloading dependent artifacts from the same organization. You can also configure publishing and downloading to use separate organizations. See [Use predefined variables](../../pipelines/build/variables.md#systemaccesstoken) to lean more about the `System.AccessToken` security token.

1. Replace the following fields with your own values:

    - `groupId`: A group ID you associate with your package. Give it a team or organization name so consumers can identify the origin easier.
    - `artifactId`: Your artifact ID number that will be used when publishing your package. Again, give it a meaningful name that specifies the package type and version for example.
    - `version`: Your package version. This number should be incremented for future iterations.
    - `artifact`: Your `.jar` file path. Example: *./target/myJavaClasses.jar*.
    - `feedName`: The name of your feed. If not specified, the default value will be `{OrganizationName}`.


## Publish your Maven package with Gradle

Run the following command in an elevated command prompt:

```CLI
gradle publish
```

Your new package will be named: `groupId:artifactId` and should show up in your Artifacts feed.
