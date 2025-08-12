---
title: How to restore packages from upstream sources in your Azure Artifacts feed
description: Learn how to consume packages from public registries with upstream sources in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.date: 06/24/2025
monikerRange: '>= azure-devops-2020'
ms.custom: sfi-image-nochange
"recommendations": "true"
---

# Tutorial: How to restore packages from upstream sources

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Using upstream sources in Azure Artifacts enables you to manage all your application dependencies from a single feed. It simplifies consuming packages from public registries like *NuGet.org* or *npmjs.com*, while also providing protection against outages or compromised packages. You can also publish your own packages to the same feed and manage all your dependencies in one location.

This tutorial walks you through enabling upstream sources in your feed and consuming packages from public registries such as *NuGet.org* or *npmjs.com*.

## Prerequisites

| **Product**        | **Requirements**   |
|--------------------|--------------------|
| **Azure DevOps**   | - An Azure DevOps [organization](../../organizations/accounts/create-organization.md).<br>- An Azure DevOps [project](../../organizations/projects/create-project.md).<br> - Allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md) if your organization is using a firewall or a proxy server. |

## Create a feed and enable upstream sources

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

1. Provide a **Name** for your feed, choose its **Visibility** and **Scope**, and make sure you check the **Include packages from common public sources** checkbox to enable upstream sources.

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-with-upstream-source.png" alt-text="a Screenshot displaying how to create a new feed and enable upstream sources in Azure Artifacts.":::

> [!IMPORTANT]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > Select the ellipsis button on the right for the specified view > **Edit** .

## Authenticate with the feed

Now that you've created your feed, select the appropriate tab based on the technology you're using and follow the instructions to set up your configuration file and connect to your feed:

#### [npm](#tab/npm/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **npm** from the left navigation pane, and follow the provided instructions in the **Project setup** section to set up your config file. If you don’t already have a *.npmrc* file, create a new one in the root of your project (the same folder as your *package.json*). Open your new *.npmrc* file and paste in the provided snippet.

    :::image type="content" source="../media/connect-to-feed-npm-registry-azure-devops-newnav.png" alt-text="A screenshot displaying how to set up your npm project in Azure Artifacts.":::

#### [NuGet](#tab/nuget/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **NuGet.exe** from the left navigation pane, then copy the XML snippet provided in the **Project Setup** section.

1. Create a new *nuget.config* file in the root of your project, and paste in the XML snippet you copied in the previous step.

#### [Python](#tab/pip/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **pip** from the left navigation pane.

1. Create a [virtual environment](https://go.microsoft.com/fwlink/?linkid=2103878) if you haven't done so already.

1. Add a *pip.ini* (Windows) or *pip.conf* (Mac/Linux) file to your virtualenv and paste in the snippet provided in the **Project setup** section.

#### [Maven](#tab/maven/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **Maven** from the left navigation pane.

1. Add the snippet provided in the **Project setup** section to the `<repositories>` and `<distributionManagement>` sections in your *pom.xml*. Your file should look similar to the following:

    ```xml
    <repository>
      <id>[FEED-NAME]</id>
      <url>https://pkgs.dev.azure.com/[ORGANIZATION-NAME]/_packaging/[FEED-NAME]/maven/v1</url>
      <releases>
        <enabled>true</enabled>
      </releases>
      <snapshots>
        <enabled>true</enabled>
      </snapshots>
    </repository>
    ```

1. Paste the provided `<server>` snippet into your *settings.xml* file. You file should look similar to this:

    ```xml
    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                                  https://maven.apache.org/xsd/settings-1.0.0.xsd">
      <servers>
        <server>
          <id>[FEED-NAME]</id>
          <username>[ORGANIZATION-NAME]</username>
          <password>[PERSONAL_ACCESS_TOKEN]</password>
        </server>
      </servers>
    </settings>
    ```

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes and paste your personal access token into the `<password>` tag in your *settings.xml* file.

#### [Gradle](#tab/gradle/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **Gradle** from the left navigation pane.

1. Add the snippet provided in the **Project setup** section to the *repositories* and *publishing* sections in your *build.gradle* file. Your file should resemble the following:

    ```
    maven {
        url 'https://pkgs.dev.azure.com/[ORGANIZATION-NAME]/_packaging/[FEED-NAME]/maven/v1'
        name '[FEED-NAME]'
        authentication {
            basic(BasicAuthentication)
        }
    }
    ```

1. Paste the provided `<server>` snippet into your *settings.xml* file. Your file should resemble the following:

    ```xml
    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                                  https://maven.apache.org/xsd/settings-1.0.0.xsd">
      <servers>
        <server>
          <id>[FEED-NAME]</id>
          <username>[ORGANIZATION-NAME]</username>
          <password>[PERSONAL_ACCESS_TOKEN]</password>
        </server>
      </servers>
    </settings>
    ```

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes. Paste your personal access token into the `<password>` tag in your *settings.xml* file.

#### [Cargo](#tab/cargo/)

1. Sign in to your Azure DevOps organization, and navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu, and then select **Connect to feed**.

1. Select **Cargo** from the left navigation pane.

1. Add the snippet provided in the **Project setup** section to your *cargo/config.toml* file in your source repository. Your *config.toml* file should resemble the following:

      ```
        [registries]
        FEED_NAME = { index = "sparse+https://pkgs.dev.azure.com/ORGANIZATION_NAME/PROJECT_NAME/_packaging/FEED_NAME/Cargo/index/" }
        ```

1. Add the second snippet provided in the **Project setup** section to your *cargo/config.toml* file to replace the *crates.io* source with your feed. Your file should resemble the following:

    ```
    [source.crates-io]
    replace-with = "FEED_NAME"
    ```

1. [Configure a credential provider](../cargo/project-setup-cargo.md#configure-a-credential-provider)

1. [Log in to the registry](../cargo/project-setup-cargo.md#log-in-to-the-registry)

- - -

## Restore packages

Now that you've enabled upstream sources and authenticated with your feed, select the appropriate tab based on your package type, and follow the instructions to restore packages from public registries into your Azure Artifacts feed.

::: moniker range=">= azure-devops-2022"

# [npm](#tab/npmrestore)

1. Remove the *node_modules* folder from your project.

1. Open a command prompt window and run the following command to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    npm install --force
    ```

> [!NOTE]
> The `--force` flag ensures that packages are pulled from the remote source even if a local copy exists.

# [NuGet](#tab/nugetrestore)

1. Clear your local cache.

    ```Command
    nuget locals -clear all
    ```

1. Open a command prompt window and run the following command to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    nuget.exe restore
    ```

# [Python](#tab/python)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.


    ```Command
    pip install
    ```

# [Maven](#tab/mavenrestore)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.


    ```Command
    mvn install
    ```

# [Gradle](#tab/gradlerestore)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    gradle build
    ```

# [Cargo](#tab/cargorestore)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    cargo build
    ```

- - -

::: moniker-end

::: moniker range="azure-devops-2020"

# [npm](#tab/npmrestoreserver)

1. Remove the *node_modules* folder from your project.

1. Open a command prompt window and run the following command to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    npm install --force
    ```

> [!NOTE]
> The `--force` flag ensures that packages are pulled from the remote source even if a local copy exists.

# [NuGet](#tab/nugetrestoreserver)

1. Clear your local cache.

    ```Command
    nuget locals -clear all
    ```

1. Open a command prompt window and run the following command to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    nuget.exe restore
    ```

# [Python](#tab/pythonrestoreserver)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    pip install
    ```

# [Maven](#tab/mavenrestoreserver)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    mvn install
    ```

# [Gradle](#tab/gradlerestoreserver)

- Open a command prompt window and run the following command in your project directory to restore your packages. Once completed, your feed should have a saved copy of any packages installed from upstream.

    ```Command
    gradle build
    ```

- - -

::: moniker-end

## Related content

- [Manage permissions](../feeds/feed-permissions.md)

- [Publish & download pipeline artifacts](../../pipelines/artifacts/pipeline-artifacts.md)

- [Publish symbols with Azure Pipelines](../../pipelines/artifacts/symbols.md)
