---
title: Maven Authenticate task (for task runners)
ms.custom: seodec18
description: Provides credentials for Azure Artifacts feeds and external Maven repositories.
ms.topic: reference
ms.date: 04/21/2020
monikerRange: 'azure-devops'
---

# Package: Maven Authenticate

Provides credentials for Azure Artifacts feeds and external Maven repositories in the current user's settings.xml file.

## YAML snippet

[!INCLUDE [temp](../includes/yaml/MavenAuthenticateV0.md)]

## Arguments

| Argument | Description |
| ---------| ----------- |
| `artifactsFeeds`<br/>My feeds (select below) | (Optional) Comma-separated list of Azure Artifacts feed names to authenticate with Maven. If you only need authentication for external maven repositories, leave this field blank. |
| `mavenServiceConnections`<br/>Feeds from external organizations | (Optional) Comma-separated list of <a href="~/pipelines/library/service-endpoints.md#sep-maven" data-raw-source="[Maven service connection](~/pipelines/library/service-endpoints.md#sep-maven)">Maven service connection</a> names from external organizations to authenticate with Maven. If you only needs authentication for Azure Artifacts feeds, leave this field blank.|

## Examples

### Authenticate Maven feeds inside your organization

In this example, we authenticate two Azure Artifacts feeds within our organization. 

#### Task definition

```YAML
- task: MavenAuthenticate@0
  displayName: 'Maven Authenticate'
  inputs:
    artifactsFeeds: MyFeedInOrg1,MyFeedInOrg2
```

The MavenAuthenticate task updates the settings.xml file present in the agent user's .m2 directory located at `{user.home}/.m2/settings.xml` to add two entries inside the `<servers>` element.

#### settings.xml

```XML
<servers>
  <server>
    <id>MyFeedInOrg1</id>
    <username>AzureDevOps</username>
    <password>****</password>
  </server>
  <server>
    <id>MyFeedInOrg2</id>
    <username>AzureDevOps</username>
    <password>****</password>
  </server>
</servers>
```

You should set the repositories in your project's `pom.xml` to have the same `<id>` as the name specified in the task for Maven to be able to correctly authenticate the task.

#### pom.xml 

Project scoped feed
```XML
 <repository>
   <id>MyFeedInOrg1</id>
   <url>https://pkgs.dev.azure.com/OrganzationName/ProjectName/_packaging/MyProjectScopedFeed1/Maven/v1</url>
   <releases>
     <enabled>true</enabled>
   </releases>
   <snapshots>
     <enabled>true</enabled>
   </snapshots>
 </repository>
```

Organization scoped feed
```XML
 <repository>
   <id>MyFeedInOrg1</id>
   <url>https://pkgs.dev.azure.com/OrganzationName/_packaging/MyOrgScopedFeed1/Maven/v1</url>
   <releases>
     <enabled>true</enabled>
   </releases>
   <snapshots>
     <enabled>true</enabled>
   </snapshots>
 </repository>
```

The Artifacts feed URL may or may not contain the project. An URL for a project scoped feed must contain the project and a URL for a organization scoped feed must not contain the project. [Learn more](../../../artifacts/feeds/project-scoped-feeds.md).

### Authenticate Maven feeds outside your organization.

In this example, we authenticate two external Maven repositories. 

#### Task definition

```YAML
- task: MavenAuthenticate@0
  displayName: 'Maven Authenticate'
  inputs:
    MavenServiceConnections: central,MavenOrg
```

The MavenAuthenticate task updates the settings.xml file present in the agent users' .m2 directory located at `{user.home}/.m2/settings.xml` to add two entries inside the `<servers>` element.

#### settings.xml

```XML
<servers>
  <server>
    <id>central</id>
    <username>centralUsername</username>
    <password>****</password>
  </server>
  <server>
    <id>MavenOrg</id>
    <username>mavenOrgUsername</username>
    <password>****</password>
  </server>
</servers>
```

You should set the repositories in your project's `pom.xml` to have the same `<id>` as the name specified in the task for Maven to be able to correctly authenticate the task.

#### pom.xml

```XML
<repository>
  <id>central</id>
  <url>https://repo1.maven.org/maven2/</url>
  <releases>
    <enabled>true</enabled>
  </releases>
  <snapshots>
    <enabled>true</enabled>
  </snapshots>
</repository>
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

### Where is the `settings.xml` file which contains the authenticated repositories located?

The Maven Authenticate task searches for the settings.xml in the current user's home directory. For Linux and Mac, the path is `$HOME/.m2/settings.xml`, for Windows the path is `%USERPROFILE%\.m2\settings.xml`. If the settings.xml file doesn't exist a new one will be created at that path.

### We use the `mvn -s` switch to specify our own `settings.xml` file, how do we authenticate Azure Artifacts feeds there?

The Maven Authenticate task doesn't have access to the custom settings.xml file that's specified by using an `-s` switch. To add Azure Artifacts authentication to your custom settings.xml, add a server element inside your settings.xml file:

```XML
<server>
  <id>feedName</id> <!-- Set this to the id of the <repository> element inside your pom.xml file. -->
  <username>AzureDevOps</username>
  <password>${env.SYSTEM_ACCESSTOKEN}</password>
</server>
```

The access token variable can be set in your pipelines using these [instructions](../../build/variables.md#systemaccesstoken).

### My Pipeline needs to access a feed in a different project

If the pipeline is running in a different project than the project hosting the feed, you must set up the other project to grant read/write access to the build service. See [Package permissions in Azure Pipelines](../../../artifacts/feeds/feed-permissions.md#package-permissions-in-azure-pipelines) for more details.

<!-- ENDSECTION -->
