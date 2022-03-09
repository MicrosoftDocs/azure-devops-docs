---
title: Publish a Maven artifact using Gradle
description: How to publish a Maven artifact to Azure Artifacts using Gradle 
ms.technology: devops-artifacts
ms.reviewer: dastahel
ms.topic: conceptual
ms.date: 11/16/2021
monikerRange: '>= tfs-2017'
"recommendations": "true"
---

# Publish Maven artifacts using Gradle

[!INCLUDE [version-gt-eq-2017](../../includes/version-gt-eq-2017.md)]

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

2. Select **New Token**, and then fill out the required fields. Make sure you select the **Packaging** > **Read & write** scope.

    :::image type="content" source="media/create-packaging-pat.png" alt-text="Screenshot showing how to create a new personal access token.":::  

3. Select **Create** when you are done.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

1. Select your profile icon, and then select **Security**.

2. Select **New Token**, and then name your token and set its expiration date.

3. Select the **Packaging (Read & write)** scope.

    :::image type="content" source="media/select-scope.png" alt-text="Screenshot showing the available scopes for a pat.":::

::: moniker-end

4. Copy your token and save it in a secure location.

5. Create a new file in your `.gradle` folder and name it **gradle.properties**. The path to your gradle folder is usually in `%INSTALLPATH%/gradle/user/home/.gradle/`.

6. Open the **gradle.properties** file with a text editor and add the following snippet:

    ```
    vstsMavenAccessToken=<PASTE_YOUR_PERSONAL_ACCESS_TOKEN_HERE>
    ```

7. Save your file when you are done.

## Configure build.gradle

1. Create a new file in the root of your project and name it *build.gradle*.

1. Open the new file with a text editor, and paste in the following sample code. Replace the placeholders with the appropriate values.

    ```groovy
    apply plugin: 'java' 
    apply plugin: 'maven-publish' 
     
    publishing { 
        publications { 
            myPublication(MavenPublication) { 
                groupId '<GROUP_ID>' 
                artifactId '<ARTIFACT_ID>' 
                version '<VERSION_NUMBER>'             // Your package version
                artifact '<PATH_TO_YOUR_JAR_FILE>'    //Example: *./target/myJavaClasses.jar*
            } 
        } 
    
        // Repositories *to* which Gradle can publish artifacts 
        repositories { 
            maven { 
                url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1' 
                credentials { 
                    username "<FEED_NAME>" 
                    password System.getenv("SYSTEM_ACCESSTOKEN") != null ? System.getenv("SYSTEM_ACCESSTOKEN") : vstsMavenAccessToken 
                } 
            } 
        } 
    } 
     
    // Repositories *from* which Gradle can download dependencies
    repositories { 
        maven { 
            url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1' 
            credentials { 
                username "<FEED_NAME>" 
                password System.getenv("SYSTEM_ACCESSTOKEN") != null ? System.getenv("SYSTEM_ACCESSTOKEN") : vstsMavenAccessToken 
            } 
        } 
    } 
    ```

In the above example, we are publishing and downloading artifacts from the same organization. You can also configure publishing and downloading to use separate organizations. See [Predefined variables](../../pipelines/build/variables.md#systemaccesstoken) to lean more about pipeline variables and the *System.AccessToken* security token.

## Publish Maven packages with Gradle

Run the following command in an elevated command prompt to publish your package to your feed. Your new package will be named: *groupId:artifactId*.

```Command
gradle publish
```

## Related articles

- [Publish and download pipeline Artifacts](../../pipelines/artifacts/pipeline-artifacts.md)
- [Releases in Azure Pipelines](../../pipelines/release/releases.md)
- [Release artifacts and artifact sources](../../pipelines/release/artifacts.md)
