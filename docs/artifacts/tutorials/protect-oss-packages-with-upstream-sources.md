---
title: How to use upstream sources in your Azure Artifacts feed
description: Use upstream sources in Azure Artifacts to consume packages from public registries
ms.service: azure-devops-artifacts
ms.date: 06/03/2022
monikerRange: '>= azure-devops-2020'
"recommendations": "true"
---

# Tutorial: How to use upstream sources

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)]

Using upstream sources in your feed enables you to manage your application dependencies from a single feed. Using upstream sources makes it easy to consume packages from public registries while having protection against outages or compromised packages. You can also publish your own packages to the same feed and manage all your dependencies in one location.

This tutorial will walk you through how to enable upstream sources on your feed and consume packages from public registries such as NuGet.org or npmjs.com.

In this tutorial, you will:

>[!div class="checklist"]  
> * Create a new feed and enable upstream sources.
> * Set up your configuration file.
> * Run an initial package restore to populate your feed.
> * Check your feed to view the saved copy of the packages you consumed from the public registry.

## Create a feed and enable upstream sources

::: moniker range="<=azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Artifacts**, and then select **Create Feed** to create a new feed.

    :::image type="content" source="../media/new-feed-button-azure-devops-newnav.png" alt-text="Screenshot showing the create feed button.":::

1. Provide a name for your feed, and choose its visibility. Make sure you check the **Include packages from common public sources** checkbox to enable upstream sources, and then select **Create** when you're done.

    :::image type="content" source="../media/new-feed-dialog.png" alt-text="Screenshot showing the create a new feed window.":::

::: moniker-end

> [!NOTE]
> To add a feed from a different organization as an upstream source, the target feed owner must share the target view with **All feeds and people in organizations associated with my Microsoft Entra tenant** by navigating to **Feed Settings** > **Views** > Select the ellipsis button on the right for the specified view > **Edit** .

## Set up the configuration file

Now that we created our feed, we need to update the config file to point to our feed. To do this we must:

1. Get the source's URL
1. Update the configuration file

#### [npm](#tab/npm/)

::: moniker range="<=azure-devops"

1. Select **Artifacts**, and then select **Connect to feed**.

    :::image type="content" source="../media/connect-to-feed-azure-devops-newnav.png" alt-text="Screenshot showing how to connect to a feed.":::

1. On the left side of the page, select the **npm** tab.

1. Follow the instructions in the **Project setup** section to set up your config file.

    :::image type="content" source="../media/connect-to-feed-npm-registry-azure-devops-newnav.png" alt-text="Screenshot showing how to set up your project.":::

::: moniker-end

If you don't have a *.npmrc* file already, create a new one in the root of your project (in the same folder as your *package.json*). Open your new *.npmrc* file and paste the snippet you just copied in the previous step.

#### [NuGet](#tab/nuget/)

1. Select **Artifacts**, and then select your feed. 

1. Select **Connect to feed**, and then choose **NuGet.exe**.

    :::image type="content" source="../media/nuget-connect-to-feed.png" alt-text="Screenshot showing how to connect to NuGet feeds.":::

1. Copy the XML snippet in the **Project Setup** section.

1. Create a new file named *nuget.config* in the root of your project.

1. Paste the XML snippet in your config file.

#### [Pip](#tab/pip/)

1. Select **Artifacts**, and then select your feed from the dropdown list.

1. Select **Connect to feed**, and then select **pip** under the Python section.

    :::image type="content" source="../media/project-setup-pip.png" alt-text="A screenshot showing how to connect to a feed with pip projects.":::

1. Create a [virtual environment](https://go.microsoft.com/fwlink/?linkid=2103878) if you haven't done so already.

1. Add a pip.ini (Windows) or pip.conf (Mac/Linux) file to your virtualenv and paste the following snippet:

    ```command
    [global]
    index-url=https://pkgs.dev.azure.com/ORGANIZATION-NAME/_packaging/FEED-NAME/pypi/simple/
    ```

#### [Maven](#tab/maven/)

1. Select **Artifacts**, and then select your feed from the dropdown list.

1. Select **Connect to feed**, and then select **Maven**.

    :::image type="content" source="../media/project-setup-maven.png" alt-text="A screenshot showing how to connect to a feed with Maven projects.":::

1. Add the following snippet to the `<repositories>` and `<distributionManagement>` sections in your pom.xml:

    ```command
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

1. Add a `<server>` to your settings.xml file:

    ```command
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

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes and paste your personal access token into the `<password>` tag in your settings.xml file.

#### [Gradle](#tab/gradle/)

1. Select **Artifacts**, and then select your feed from the dropdown list.

1. Select **Connect to feed**, and then select **Gradle**.

    :::image type="content" source="../media/project-setup-gradle.png" alt-text="A screenshot showing how to connect to a feed with Gradle projects.":::

1. Add the following snippet to the *repositories* and *publishing* sections in your build.gradle file:

    ```command
    maven {
        url 'https://pkgs.dev.azure.com/[ORGANIZATION-NAME]/_packaging/[FEED-NAME]/maven/v1'
        name '[FEED-NAME]'
        authentication {
            basic(BasicAuthentication)
        }
    }
    ```

1. Add a `<server>` to your settings.xml file:

    ```command
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

1. Create a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md#create-a-pat) with **Packaging** > **Read & write** scopes. Paste your personal access token into the `<password>` tag in your settings.xml file.

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