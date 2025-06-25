---
title: How to restore packages from upstream sources in your Azure Artifacts feed
description: Learn how to consume packages from public registries with upstream sources in Azure Artifacts.
ms.service: azure-devops-artifacts
ms.date: 06/24/2025
monikerRange: '>= azure-devops-2020'
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

1. Provide a **Name** for your feed, choose its **Visibility** and **Scop**, and make sure you check the **Include packages from common public sources** checkbox to enable upstream sources.

1. Select **Create** when you're done.

    :::image type="content" source="../media/new-feed-with-upstream-source.png" alt-text="a Screenshot displaying how to create a new feed and enable upstream sources in Azure Artifacts.":::

> [!IMPORTANT]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > Select the ellipsis button on the right for the specified view > **Edit** .

## Authenticate with the feed

Now that you've created your feed, select the appropriata tab based on the technology you're using and follow the instructions to set up your configuration file and connect to your feed:

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

#### [Pip](#tab/pip/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, select your feed from the dropdown menu,and then select **Connect to feed**.

1. Select **pip** from the left navigation pane.

1. Create a [virtual environment](https://go.microsoft.com/fwlink/?linkid=2103878) if you haven't done so already.

1. Add a *pip.ini* (Windows) or *pip.conf* (Mac/Linux) file to your virtualenv and paste in the snippet provided in the **Project setup** secion.

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

Now that you enabled upstream sources and set up your configuration file, you can now run the package restore command to query the upstream source and retrieve the upstream packages.

To restore packages using Azure Pipelines instead, see [Restore Maven packages with Azure Pipelines (YAML/Classic)](../../pipelines/packages/maven-restore.md) for detailed steps. 

::: moniker range="azure-devops"

# [npm](#tab/npmrestore)

Remove the *node_modules* folder from your project and run the following command in an elevated command prompt window:

```Command
npm install --force
```

Your feed now should have a saved copy of any packages you installed from upstream.

> [!NOTE]
> The `--force` argument will force pull remotes even if a local copy exists. 

# [NuGet](#tab/nugetrestore)

1. Clear your local cache:

    ```Command
    nuget locals -clear all
    ```

1. Restore your NuGet packages:

    ```Command
    nuget.exe restore
    ```

Your feed now should have a saved copy of any packages you installed from upstream.

# [dotnet](#tab/dotnet)

Run the following command in your project directory:

```Command
dotnet restore --interactive
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Python](#tab/python)

Run the following command in your project directory:

```Command
pip install
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Maven](#tab/mavenrestore)

Run the following command in your project directory:

```Command
mvn install
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Gradle](#tab/gradlerestore)

Run the following command in your project directory:

```Command
gradle build
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Cargo](#tab/cargorestore)

Run the following command in your project directory:

```Command
cargo build
```

Your feed now should have a saved copy of any packages you installed from upstream.

- - -

::: moniker-end

::: moniker range=">= azure-devops-2020 < azure-devops"

# [npm](#tab/npmserver)

Remove the *node_modules* folder from your project and run the following command in an elevated command prompt window:

```Command
npm install --force
```

Your feed now should have a saved copy of any packages you installed from upstream.

> [!NOTE]
> The `--force` argument will force pull remotes even if a local copy exists. 

# [NuGet](#tab/nugeserver)

1. Clear your local cache:

    ```Command
    nuget locals -clear all
    ```

1. Restore your NuGet packages:

    ```Command
    nuget.exe restore
    ```

Your feed now should have a saved copy of any packages you installed from upstream.

# [dotnet](#tab/dotnetserver)

Run the following command in your project directory:

```Command
dotnet restore --interactive
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Python](#tab/pythonserver)

Run the following command in your project directory:

```Command
pip install
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Maven](#tab/mavenserver)

Run the following command in your project directory:

```Command
mvn install
```

Your feed now should have a saved copy of any packages you installed from upstream.

# [Gradle](#tab/gradleserver)

Run the following command in your project directory:

```Command
gradle build
```

Your feed now should have a saved copy of any packages you installed from upstream.

- - -

::: moniker-end

## Related articles

- [Set up upstream sources](../how-to/set-up-upstream-sources.md)
- [Universal Packages upstream sources](../universal-packages/universal-packages-upstream.md)
- [Feed permissions](../feeds/feed-permissions.md)
- [Publish packages to NuGet.org](../nuget/publish-to-nuget-org.md)