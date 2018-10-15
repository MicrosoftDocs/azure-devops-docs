---
title: Publishing to NuGet feeds
titleSuffix: Azure Pipelines & TFS
description: Publishing NuGet packages to Azure Artifacts or other NuGet feeds
services: vsts
ms.assetid: 29101A33-7C17-437C-B61D-DF7AA4CB9EA2
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: amullans
ms.date: 06/12/2018
monikerRange: '>= tfs-2017'
---

# Publish to NuGet feeds

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can publish NuGet packages from your build to NuGet feeds. You can publish these packages to 

* Azure Artifacts or the TFS Package Management service
* Other NuGet services such as NuGet.org
* Your internal NuGet repository

Before you read this topic, you should understand the kind of build pipeline you're creating: [designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

## Create a NuGet package

There are a variety of ways to create NuGet packages during a build. If you're already using MSBuild or some other task to create your packages, skip this section to go ahead and [publish your packages](#publish-packages). Otherwise, add a **NuGet** task:

# [YAML](#tab/yaml)

::: moniker range="vsts"
To create a package, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: NuGetCommand@2
  inputs:
    command: pack
    packagesToPack: '**/*.csproj'
```

The NuGet task supports a number of options. Some of the key ones are described below. The rest are described in the [task documentation](../tasks/package/nuget.md).

- **packagesToPack:** The path to the files that describe the package you want to create. If you don't have these, see the [NuGet documentation](/nuget/create-packages/creating-a-package) to get started.
- **configuration:** The default is `$(BuildConfiguration)` unless you wish to always build either `Debug` or `Release` packages, or unless you have a custom build configuration.
- **packDestination:** The default is `$(Build.ArtifactStagingDirectory)`. If you set this, make a note of the location so you can use it in the [publish task](#publish-packages).

::: moniker-end

::: moniker range="< vsts"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

Add the **NuGet** task to your build in order to create a NuGet package. Make sure to add this task below the task that builds your application and above any tasks that require the packages you build.

The NuGet task supports a number of options. Some of the key ones are described below. The rest are described in the [task documentation](../tasks/package/nuget.md).

- **Command:** pack
- **Path to csproj or nuspec file(s) to pack:** The path to the files that describe the package you want to create. If you don't have these, see the [NuGet documentation](/nuget/create-packages/creating-a-package) to get started.
- **Configuration to package:** Leave this as $(BuildConfiguration) unless you wish to always build either Debug or Release packages, or unless you have a custom build configuration.
- **Package folder:** Leave this as $(Build.ArtifactStagingDirectory). If you change this, make a note of the location so you can use it in the [publish task](#publish-packages).
- **Pack options > Use Build number to version package:** See the 
[next section](#package-versioning)

![A screenshot of the NuGet task configured as outlined above](_img/nuget/create-packages-in-team-build.png)

---

<a name="package-versioning"></a>
## Package versioning

In NuGet, a particular package is identified by its name and version number. A recommended approach to versioning packages is to use semantic versioning. Semantic version numbers have 3 numeric components, `Major.Minor.Patch`. When you fix a bug, you increment the patch (`1.0.0` ? `1.0.1`). When you release a new backwards-compatible feature, you increment minor and reset patch to 0 (`1.4.17` ? `1.5.0`). When you make a backwards-incompatible change, you increment major and reset minor and patch to 0 (`2.6.5` ? `3.0.0`).

In addition to `Major.Minor.Patch`, semantic versioning provides for a prerelease label. Prerelease labels are a “-” followed by whatever letters and numbers you want. Version `1.0.0-alpha`, `1.0.0-beta`, and `1.0.0-foo12345` are all prerelease versions of `1.0.0`. Even better, semantic versioning specifies that when you sort by version number, those prerelease versions fit exactly where you’d expect: `0.99.999` < `1.0.0-alpha` < `1.0.0` < `1.0.1-beta`.

When you create a package in CI, you can use semantic versioning with prerelease labels. The **NuGet** task can be used for this purpose, and supports the following formats:

* Use the same versioning scheme for your builds and packages, provided that scheme has at least three parts separated by periods. The following build pipeline formats are examples of versioning schemes that are compatible with NuGet.
  * `$(Major).$(Minor).$(rev:.r)`, where `Major` and `Minor` are two variables defined in the build pipeline. This will automatically increment the build number and the package version with a new patch number keeping the major and minor versions constant, until you change them manually in the build pipeline.
  * `$(Major).$(Minor).$(Patch).$(date:yyyyMMdd)`, where `Major`, `Minor`, and `Patch` are variables defined in the build pipeline. This will create a new prerelease label for the build and package while keeping the major, minor, and patch versions constant.

* Use a version that is different from the build number. You can customize the major, minor, and patch versions for your packages in the NuGet task, and let the task generate a unique prerelease label based on date and time.

* Use a script in your build pipeline to generate the version.

#  [YAML](#tab/yaml)

::: moniker range="vsts"
This example shows how to use the date and time as the prerelease label.

```yaml
variables:
  Major: '1'
  Minor: '0'
  Patch: '0'

steps:
- task: NuGetCommand@2
  inputs:
    command: pack
    versioningScheme: byPrereleaseNumber
    majorVersion: '$(Major)'
    minorVersion: '$(Minor)'
    patchVersion: '$(Patch)'
```

For a list of other possible values for `versioningScheme`, see the [NuGet task](../tasks/package/nuget.md).

::: moniker-end

::: moniker range="< vsts"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

In the **NuGet** task, choose **Pack options** and select one of the values for **Automatic package versioning**.

---

While semantic versioning with prerelease labels is a good solution for packages produced in CI builds, including a prerelease label is not ideal when you want to release a package to your users. The challenge is that packages once produced are [immutable](/azure/devops/artifacts/feeds/immutability) and so cannot be updated or replaced. When you’re producing a package in build, you can’t know whether it will be the version that you aim to release to your users or just a step along the way towards that release. While none of the following solutions are ideal, you can use one of these depending on your preference:

* Once you validate a package and decide to release it, produce another package without the prerelease label and publish it. The drawback of this approach is that you have to validate the new package again, and it may uncover new issues.

* Publish only packages that you wish to release. In this case, you will not use a prerelease label for every build. Instead, you will reuse the same package version for all packages. Since you do not publish packages from every build, you do not cause a conflict.

<a name="publish-packages"></a>
## Publish your packages

In the previous section, you learned how to create a package with every build. When you are ready to share the changes to your package with your users, you can publish it.

#  [YAML](#tab/yaml)

::: moniker range="vsts"
[!INCLUDE [package management permissions](_shared/package-management-permissions-for-yaml-build.md)]

To publish to a external NuGet feed, you must first create a service connection to point to that feed. You can do this by going to **Project settings**, then choosing **Service connections**, and then creating a **New service connection**. Select the **NuGet** option for the service connection. Fill in feed URL and the API key or token to connect to the feed.

To publish a package to a NuGet feed, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: NuGetCommand@2
  inputs:
    command: push
    nuGetFeedType: external
    publishFeedCredentials: '<Name of the NuGet service connection>'
    versioningScheme: byEnvVar
    versionEnvVar: Version
```
::: moniker-end

::: moniker range="< vsts"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

To publish NuGet packages created by your build, add the **NuGet** task and configure these options:

- **Command:** push
- **Path to NuGet package(s) to publish:** Leave this set to `$(Build.ArtifactStagingDirectory)` unless you decided earlier to pack your packages in another location in the last task.
- **Target feed location:** You can publish to an Azure Artifacts or TFS Package Management feed in this organization or collection, to NuGet.org, or to an internal NuGet repository.
- **Target feed:** Select the feed you want to publish to.

![Publish packages from team build](_img/nuget/publish-packages-from-team-build.png)

[!INCLUDE [package management permissions](_shared/package-management-permissions-for-web-build.md)]

To publish to a external NuGet feed, you must first create a service connection to point to that feed. You can do this by going to **Project settings**, then choosing **Service connections**, and then creating a **New service connection**. Select the **NuGet** option for the service connection. Fill in feed URL and the API key or token to connect to the feed.

---

## Publish symbols for your packages

When you push packages to a Package Management feed, you can also [publish symbols](/azure/devops/pipelines/symbols/index).

## Q&A

### Where can I learn more about Azure Artifacts and the TFS Package Management service

[Package Management in Azure Artifacts and TFS](../../artifacts/index.md)
