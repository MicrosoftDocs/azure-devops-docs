---
title: Publish artifacts using Gradle
description: Learn how to connect to a feed and publish your packages with Gradle.
ms.service: azure-devops-artifacts
ms.topic: conceptual
ms.date: 10/16/2024
ms.author: rabououn
author: ramiMSFT
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Publish artifacts with Gradle

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Artifacts, you can efficiently manage your dependencies from a single feed, storing various types of packages in one place. Azure Artifacts enables developers to publish and consume packages from different sources, and sharing them according to the feed's visibility settings. In this article, you'll learn how to connect to an Azure Artifacts feed and publish your packages using Gradle.

## Prerequisites

- Create an Azure DevOps [organization](../../organizations/accounts/create-organization.md) and a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- [Create a feed](../get-started-maven.md#create-a-feed) if you don't have one already.

- Download and install [Gradle](https://docs.gradle.org/current/userguide/installation.html).

- Install the [Java Development Kit (JDK)](https://jdk.java.net/) version 8 or higher.

## Create a personal access token

To authenticate with your feed, you must first create a personal access token with packaging *Read & Write* scopes:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **User settings**, and then select **Personal access tokens**.

    :::image type="content" source="media/create-pat.png" alt-text="A screenshot showing how to locate the personal access token button.":::

1. Select **New Token** and fill out the required fields. Be sure to select the **Packaging** > **Read & write** scope.

1. Select **Create** when you're done. Copy your token and save it in a secure location, as you'll need it for the next step.

    :::image type="content" source="media/gradle-pat.png" alt-text="A screenshot demonstrating how to create a new personal access token with packaging read & write scopes.":::  

## Project setup

# [Gradle 8.2 and above](#tab/newer)

Before setting up your project, ensure Gradle is installed and that you've added the Maven Settings plugin to your *build.gradle* file as follows:

```groovy
plugins {
  id 'maven-publish'
}
```

#### Configure build.gradle

1. If a *build.gradle* file doesn't exist in the root of your project, create a new file and name it: *build.gradle*.

1. Add the following section to your *build.gradle* file within both the **repositories** and **publishing.repositories** containers: 

    ```groovy
    maven {
        url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
        name '<FEED_NAME>'
        credentials(PasswordCredentials)
        authentication {
            basic(BasicAuthentication)
        }
    }
    ```

Here's an example of what your *build.gradle* file should look like:

```groovy
repositories {
    mavenCentral()

    maven {
    url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
    name '<FEED_NAME>'
    credentials(PasswordCredentials)
    authentication {
        basic(BasicAuthentication)
        }
    }
}

publishing {
    publications {
        library(MavenPublication) {
            from components.java
        }
    }

    repositories {
        maven {
        url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
        name '<FEED_NAME>'
        credentials(PasswordCredentials)
        authentication {
            basic(BasicAuthentication)
            }
        }
    }
}
```

#### Configure gradle.properties

1. Open the *gradle.properties* file located in the *.gradle* directory of your home folder (~/.gradle/gradle.properties). If the file doesn't exist, create a new one.

1. Add the following snippet, replacing the placeholders with your feed name, organization name, and the personal access token you created earlier.

    ```
    # Substitute FEED_NAME with the same name specified as the 'name' of the maven repository in build.gradle.
    # The value of the username is arbitrary but should not be blank.
    [FEED_NAME]Username=[ORGANIZATION_NAME]
    [FEED_NAME]Password=[PERSONAL_ACCESS_TOKEN]
    ```

# [Older versions](#tab/older)

Before setting up your project, ensure Gradle is installed and that you've added the Maven Settings plugin to your *build.gradle* file as follows:

```groovy
plugins {
  id 'net.linguica.maven-settings' version '0.5'
  id 'maven-publish'
}
```

#### Configure build.gradle

1. If a *build.gradle* file doesn't exist in the root of your project, create a new file and name it: *build.gradle*.

1. Add the following section to your *build.gradle* file within both the **repositories** and **publishing.repositories** containers: 

    ```groovy
    maven {
        url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
        name '<FEED_NAME>'
        authentication {
            basic(BasicAuthentication)
        }
    }
    ```

Here's an example of what your *build.gradle* file should look like:

```groovy
publishing { 
    publications {
        library(MavenPublication) {
            from components.java
        }
    }

    // Repositories to publish artifacts 
    repositories { 
        maven {
            url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
            name '<FEED_NAME>'
            authentication {
                basic(BasicAuthentication)
            }
        }
    } 
} 
    
// Repositories to fetch dependencies
repositories { 
        maven {
            url 'https://pkgs.dev.azure.com/<ORGANIZATION_NAME>/<PROJECT_NAME>/_packaging/<FEED_NAME>/maven/v1'
            name '<FEED_NAME>'
            authentication {
                basic(BasicAuthentication)
            }
        }
} 
```

#### Configure settings.xml

1. Open the *settings.xml* file located in the *.m2* directory of your home folder (typically found at *~/.m2/settings.xml* on macOS and Linux, and at *Users\<YourUsername>\.m2\settings.xml* on Windows). If the file doesn't exist, you can create a new one.

1. Add the following snippet, replacing the placeholders with your feed name, organization name, and the personal access token you created earlier.

    ```xml
    <server>
        <id>[FEED_NAME]</id>
        <username>[ORGANIZATION_NAME]</username>
        <password>[PERSONAL_ACCESS_TOKEN]</password>
    </server>
    ```

---

## Publish your packages

1. Run the following command in your project directory to publish your package to your feed:

    ```command
    gradle publish
    ```

:::image type="content" source="media/publish-package-gradle.png" alt-text="A screenshot displaying a package successfully published to the feed.":::

## Related content

- [Use packages from Maven Central](upstream-sources.md)
- [Restore Maven packages](./install.md)
- [Use packages from Google Maven Repository](google-maven.md)
