---
title: Connect to an Azure Artifacts feed - Gradle
description: Learn how to set up your project and connect to an Azure Artifacts feed with Gradle.
ms.service: azure-devops-artifacts
ms.topic: how-to
ms.author: rabououn
author: ramiMSFT
ms.date: 05/08/2025
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Connect to an Azure Artifacts feed - Gradle

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Azure Artifacts enables developers to manage project dependencies from a single feed while controlling who can view, publish, or install packages. This article walks you through setting up your project and connecting to an Azure Artifacts feed using Gradle.

## Prerequisites

| **Product**        | **Requirements**                       |
|--------------------|----------------------------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - An Azure Artifacts [feed](../get-started-nuget.md#create-a-feed).<br> - Download and install [Gradle](https://docs.gradle.org/current/userguide/installation.html). |

## Project setup

# [Gradle 8.2 and above](#tab/newerversions)

1. Make sure you've installed Gradle, then add the *Maven Settings plugin* to your *build.gradle* file:

    ```groovy
    plugins {
      id 'maven-publish'
    }
    ```

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **Gradle** from the left navigation pane.

1. If you don't have a *build.gradle* file in the root of your project, create one and name it: *build.gradle*.

1. Add the snippet from the **Project setup** section to your *build.gradle* file under both the **repositories** and **publishing.repositories** blocks. Your file should look similar to the following:

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

1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes, Copy it to your clipboard; you’ll use it in the next step.

1. Open the *gradle.properties* file in the *.gradle* directory of your home folder (~/.gradle/gradle.properties).  If it doesn’t exist, create a new file, then add the snippet from the **Project setup** section replacing the placeholder with the personal access token you just created:

    ```
    ## Substitute FEED_NAME with the same name used in your build.gradle
    ## The username value can be any non-blank string
    [FEED_NAME]Username=[ORGANIZATION_NAME]
    [FEED_NAME]Password=[PERSONAL_ACCESS_TOKEN]
    ```

# [Older versions](#tab/olderversions)

1. Make sure you've installed Gradle, then add the *Maven Settings plugin* to your *build.gradle* file:

    ```groovy
    plugins {
      id 'net.linguica.maven-settings' version '0.5'
      id 'maven-publish'
    }
    ```

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **Gradle** from the left navigation pane.

1. If you don't have a *build.gradle* file in the root of your project, create one and name it: *build.gradle*.

1. Add the snippet from the **Project setup** section to your *build.gradle* file under both the **repositories** and **publishing.repositories** blocks. Your file should look similar to the following:

    ```groovy
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
                authentication {
                    basic(BasicAuthentication)
                }
            }
        } 
    } 
        
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

1. Generate a [Personal Access Token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes, Copy it to your clipboard; you’ll use it in the next step.

1. Open the *settings.xml* file in the *.m2* directory of your home folder (*~/.m2/settings.xml* - MacOS/Linux, *Users\<YourUsername>\.m2\settings.xml* - Windows). If it doesn’t exist, create a new file, then add the following snippet, replacing the placeholders with your feed name, organization name, and the personal access token you created earlier.

    ```xml
    <server>
        <id>[FEED_NAME]</id>
        <username>[ORGANIZATION_NAME]</username>
        <password>[PERSONAL_ACCESS_TOKEN]</password>
    </server>
    ```

---

## Related content

- [Publish artifacts with Gradle](publish-with-gradle.md)

- [Restore Maven packages](install.md)

- [Use packages from Maven Central](upstream-sources.md)
